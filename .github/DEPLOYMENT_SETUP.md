# 🚀 GitHub Deployment Kurulum Rehberi

Bu dosya GitHub Actions ile otomatik deployment'ı nasıl kuracağınızı anlatır.

## 📋 İçindekiler

1. [Vercel ile Deployment](#vercel-deployment)
2. [Docker Registry ile Deployment](#docker-registry-deployment)
3. [Self-Hosted Deployment](#self-hosted-deployment)

---

## 1️⃣ Vercel ile Deployment (Önerilen)

### Adım 1: Vercel Hesabı Oluştur
1. [vercel.com](https://vercel.com) adresine git
2. GitHub hesabınla giriş yap

### Adım 2: Vercel Token Al
1. [Vercel Dashboard](https://vercel.com/account/tokens) → Account Settings → Tokens
2. "Create Token" butonuna tıkla
3. Token adı ver (örn: "GitHub Actions")
4. Token'ı kopyala ve güvenli bir yerde sakla

### Adım 3: Vercel Project Oluştur
```bash
# Terminal'de
cd /Users/onurvarsak/Projects/next/ilkkan/my-app
npx vercel login
npx vercel link
```

Komut çalıştığında:
- "Set up and deploy" → Yes
- "Which scope" → Hesabınızı seçin
- "Link to existing project" → No
- "What's your project's name" → als-aknur
- "In which directory is your code located" → ./

### Adım 4: Project ID ve Org ID Al
```bash
cat .vercel/project.json
```

Çıktıdan `projectId` ve `orgId` değerlerini kopyala.

### Adım 5: GitHub Secrets Ekle

GitHub repository'de:
1. Settings → Secrets and variables → Actions
2. "New repository secret" butonuna tıkla
3. Aşağıdaki secret'ları ekle:

```
VERCEL_TOKEN=<vercel_token>
VERCEL_ORG_ID=<org_id>
VERCEL_PROJECT_ID=<project_id>
```

### ✅ Tamamlandı!

Artık her `git push` yaptığınızda:
- ✅ Otomatik test çalışır
- ✅ Build alınır
- ✅ Vercel'e deploy edilir
- ✅ Production URL'i alırsınız

---

## 2️⃣ Docker Registry ile Deployment

### Adım 1: Docker Hub Hesabı
1. [hub.docker.com](https://hub.docker.com) adresine git
2. Hesap oluştur

### Adım 2: Access Token Oluştur
1. Account Settings → Security → Access Tokens
2. "New Access Token" butonuna tıkla
3. Token adı ver ve kopyala

### Adım 3: GitHub Secrets Ekle

```
DOCKER_USERNAME=<docker_hub_username>
DOCKER_PASSWORD=<docker_hub_access_token>
```

### Adım 4: Workflow Aktif Et

`.github/workflows/deploy.yml` dosyası otomatik olarak:
- Docker image build eder
- Docker Hub'a push eder
- Tag'ler: `latest` ve commit SHA

### Adım 5: Sunucuda Çalıştır

```bash
# Sunucuda
docker login
docker pull <username>/als-aknur:latest
docker run -d -p 3000:3000 --name als-website <username>/als-aknur:latest
```

---

## 3️⃣ Self-Hosted Deployment (Advanced)

### GitHub Self-Hosted Runner

#### Adım 1: Runner Kur

GitHub Repository → Settings → Actions → Runners → "New self-hosted runner"

Sunucuda:
```bash
# Runner indir ve kur
mkdir actions-runner && cd actions-runner
curl -o actions-runner-linux-x64-2.311.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.311.0/actions-runner-linux-x64-2.311.0.tar.gz
tar xzf ./actions-runner-linux-x64-2.311.0.tar.gz

# Konfigüre et
./config.sh --url https://github.com/onurvarsak/asl --token <RUNNER_TOKEN>

# Service olarak çalıştır
sudo ./svc.sh install
sudo ./svc.sh start
```

#### Adım 2: Custom Workflow Oluştur

`.github/workflows/self-hosted-deploy.yml`:

```yaml
name: Self-Hosted Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: self-hosted
    steps:
      - uses: actions/checkout@v4
      
      - name: Stop old container
        run: docker-compose down
        continue-on-error: true
      
      - name: Build and start
        run: docker-compose up -d --build
      
      - name: Check health
        run: |
          sleep 10
          curl -f http://localhost:3000 || exit 1
```

---

## 🔒 Güvenlik

### Environment Variables

Hassas bilgiler için GitHub Secrets kullanın:

```yaml
# Workflow'da kullanım
env:
  DATABASE_URL: ${{ secrets.DATABASE_URL }}
  API_KEY: ${{ secrets.API_KEY }}
```

### Branch Protection

1. Settings → Branches → Add rule
2. Branch name pattern: `main`
3. Aktif et:
   - ☑ Require status checks to pass
   - ☑ Require branches to be up to date
   - ☑ Require review from Code Owners

---

## 📊 Workflow Status Badge

README.md'ye ekle:

```markdown
[![Deploy to Production](https://github.com/onurvarsak/asl/actions/workflows/deploy.yml/badge.svg)](https://github.com/onurvarsak/asl/actions/workflows/deploy.yml)
```

---

## 🔄 Workflow'ları Test Et

```bash
# Local'de test et (act tool ile)
brew install act
act push

# veya Sadece workflow syntax'ı kontrol et
actionlint .github/workflows/*.yml
```

---

## 🆘 Sorun Giderme

### Workflow Çalışmıyor

1. Actions tab'ini kontrol et
2. Log'ları incele
3. Secrets'ların doğru girildiğini kontrol et

### Build Hatası

```bash
# Local'de test et
pnpm build

# Docker build test et
docker build -t test .
```

### Vercel Deploy Hatası

```bash
# Token'ı kontrol et
vercel whoami --token=$VERCEL_TOKEN

# Project'i kontrol et
vercel ls --token=$VERCEL_TOKEN
```

---

## 📚 Kaynaklar

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Vercel CLI Docs](https://vercel.com/docs/cli)
- [Docker Hub](https://hub.docker.com)

---

## ✅ Kontrol Listesi

Deployment kurulumu tamamlandı mı?

- [ ] GitHub repository oluşturuldu
- [ ] Workflow dosyaları eklendi
- [ ] GitHub Secrets ayarlandı
- [ ] İlk deployment başarılı
- [ ] Production URL çalışıyor
- [ ] SSL sertifikası aktif
- [ ] Custom domain bağlandı (opsiyonel)
- [ ] Monitoring kuruldu (opsiyonel)

**Başarılı deployment'lar! 🎉**

