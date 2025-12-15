# 🚀 Production Deployment Rehberi

## 📋 Ön Hazırlık Kontrol Listesi

### ✅ Kod Kontrolü
- [ ] Tüm linter hataları düzeltildi
- [ ] TypeScript hataları yok
- [ ] Build başarılı (`pnpm build`)
- [ ] Tüm sayfalar test edildi
- [ ] Mobil responsive kontrol edildi
- [ ] Tarayıcı uyumluluğu test edildi

### ✅ Konfigürasyon
- [ ] Environment variables ayarlandı
- [ ] API endpoint'leri production'a çevrildi
- [ ] Favicon ve meta tag'ler güncellendi
- [ ] Google Analytics/Tag Manager eklendi (varsa)
- [ ] SSL sertifikası hazır

### ✅ Güvenlik
- [ ] Hassas bilgiler `.env` dosyasında
- [ ] `.env` dosyası `.gitignore`'da
- [ ] CORS ayarları yapıldı (gerekirse)
- [ ] Rate limiting eklendi (gerekirse)

---

## 🎯 Production Deployment Adımları

### Seçenek 1: Vercel Deployment (Önerilen - En Kolay)

#### 1. GitHub'a Yükle
```bash
# Git repository oluştur (henüz yoksa)
git init
git add .
git commit -m "Production ready"

# GitHub'a push et
git remote add origin <your-github-repo-url>
git push -u origin main
```

#### 2. Vercel'e Deploy
1. [vercel.com](https://vercel.com) adresine git
2. "Import Project" butonuna tıkla
3. GitHub repository'nizi seçin
4. Ayarlar:
   ```
   Framework Preset: Next.js
   Build Command: pnpm build
   Output Directory: .next
   Install Command: pnpm install
   ```
5. "Deploy" butonuna tıkla

#### 3. Domain Bağla
1. Vercel dashboard → Settings → Domains
2. Custom domain ekle (örn: `als-aknur.de`)
3. DNS kayıtlarını güncelle:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

**✅ Avantajları:**
- Otomatik SSL sertifikası
- Otomatik deployment (her git push'ta)
- CDN entegrasyonu
- Sınırsız bandwidth
- Ücretsiz plan mevcut

---

### Seçenek 2: Docker + VPS/Server Deployment

#### 1. Sunucu Hazırlığı

```bash
# Sunucuya SSH ile bağlan
ssh user@your-server-ip

# Gerekli paketleri yükle
sudo apt update
sudo apt upgrade -y
sudo apt install docker.io docker-compose nginx certbot python3-certbot-nginx -y

# Docker'ı başlat
sudo systemctl start docker
sudo systemctl enable docker
```

#### 2. Projeyi Sunucuya Kopyala

```bash
# Yerel bilgisayardan
scp -r /Users/onurvarsak/Projects/next/ilkkan/my-app user@your-server-ip:/home/user/

# veya Git ile
ssh user@your-server-ip
git clone <your-repo-url>
cd my-app
```

#### 3. Docker Image Oluştur ve Çalıştır

```bash
# Sunucuda
cd /home/user/my-app

# Docker image oluştur
docker-compose build

# Container'ı başlat
docker-compose up -d

# Logları kontrol et
docker-compose logs -f
```

#### 4. Nginx Reverse Proxy Ayarla

```bash
# Nginx konfigürasyon dosyası oluştur
sudo nano /etc/nginx/sites-available/als-aknur
```

Aşağıdaki içeriği yapıştır:

```nginx
server {
    listen 80;
    server_name als-aknur.de www.als-aknur.de;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Static files cache
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 365d;
        add_header Cache-Control "public, immutable";
    }
}
```

Nginx'i aktifleştir:

```bash
# Symbolic link oluştur
sudo ln -s /etc/nginx/sites-available/als-aknur /etc/nginx/sites-enabled/

# Test et
sudo nginx -t

# Restart et
sudo systemctl restart nginx
```

#### 5. SSL Sertifikası Ekle (HTTPS)

```bash
# Let's Encrypt ile ücretsiz SSL
sudo certbot --nginx -d als-aknur.de -d www.als-aknur.de

# Otomatik yenileme için cron job ekle
sudo systemctl enable certbot.timer
```

#### 6. Firewall Ayarları

```bash
# UFW ile güvenlik duvarı ayarla
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable
```

---

### Seçenek 3: Docker Registry + Production Server

#### 1. Docker Image'ı Build Et ve Push Et

```bash
# Yerel bilgisayarda
cd /Users/onurvarsak/Projects/next/ilkkan/my-app

# Image oluştur
docker build -t als-aknur-website:latest .

# Docker Hub'a push et (opsiyonel)
docker login
docker tag als-aknur-website:latest yourusername/als-aknur:latest
docker push yourusername/als-aknur:latest

# veya Image'ı tar olarak kaydet
docker save als-aknur-website:latest > als-aknur-latest.tar
```

#### 2. Sunucuda Pull/Load Et

```bash
# Docker Hub'dan çek
ssh user@server
docker pull yourusername/als-aknur:latest

# veya Tar dosyasından yükle
scp als-aknur-latest.tar user@server:/tmp/
ssh user@server
docker load < /tmp/als-aknur-latest.tar
```

#### 3. Production'da Çalıştır

```bash
# Basit çalıştırma
docker run -d \
  --name als-website \
  --restart unless-stopped \
  -p 3000:3000 \
  als-aknur-website:latest

# veya Docker Compose ile
docker-compose up -d
```

---

## 🔄 Güncelleme ve Bakım

### Kod Güncellemesi

```bash
# 1. Sunucuya bağlan
ssh user@server
cd /home/user/my-app

# 2. Yeni kodu çek
git pull origin main

# 3. Yeniden build et
docker-compose build

# 4. Restart et (zero-downtime değil)
docker-compose down
docker-compose up -d

# veya (zero-downtime için)
docker-compose up -d --build --force-recreate
```

### Log Kontrolleri

```bash
# Docker logs
docker-compose logs -f --tail=100

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# System logs
journalctl -u docker -f
```

### Backup

```bash
# Docker volumes backup
docker run --rm \
  --volumes-from als-website \
  -v $(pwd):/backup \
  alpine tar czf /backup/website-backup-$(date +%Y%m%d).tar.gz /app

# Nginx config backup
sudo tar czf nginx-backup-$(date +%Y%m%d).tar.gz /etc/nginx/
```

---

## 📊 Monitoring ve Performance

### 1. Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com) (Ücretsiz)
- [Pingdom](https://pingdom.com)
- [StatusCake](https://statuscake.com)

### 2. Analytics
```html
<!-- Google Analytics ekle -->
<!-- app/layout.tsx içine -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

### 3. Error Tracking
- [Sentry](https://sentry.io)
- [LogRocket](https://logrocket.com)

### 4. Performance Monitoring
```bash
# Lighthouse test
npx lighthouse https://als-aknur.de --view

# PageSpeed Insights
# https://pagespeed.web.dev/
```

---

## 🔧 Troubleshooting

### Docker Container Çalışmıyor

```bash
# Container durumunu kontrol et
docker ps -a

# Logları incele
docker logs als-website

# Container'a gir
docker exec -it als-website sh

# Yeniden başlat
docker-compose restart
```

### Nginx Hataları

```bash
# Konfigürasyonu test et
sudo nginx -t

# Restart
sudo systemctl restart nginx

# Status kontrol
sudo systemctl status nginx
```

### SSL Sertifika Yenileme

```bash
# Manuel yenile
sudo certbot renew

# Test et
sudo certbot renew --dry-run
```

### Port Kullanımda Hatası

```bash
# Port'u kim kullanıyor?
sudo lsof -i :3000
sudo netstat -tulpn | grep 3000

# Process'i durdur
sudo kill -9 <PID>
```

---

## 📱 Post-Deployment Kontrol Listesi

- [ ] Site erişilebilir durumda (HTTP)
- [ ] HTTPS çalışıyor ve sertifika geçerli
- [ ] Tüm sayfalar yükleniyor
- [ ] Responsive tasarım çalışıyor
- [ ] Form gönderimler çalışıyor
- [ ] Resimler yükleniyor
- [ ] Console'da hata yok
- [ ] Google Analytics çalışıyor (varsa)
- [ ] SEO meta tag'ler doğru
- [ ] Favicon görünüyor
- [ ] 404 sayfası çalışıyor
- [ ] Performance (Lighthouse) skoru > 90

---

## 🆘 Destek ve Kaynaklar

### Dokümantasyon
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Docker Documentation](https://docs.docker.com/)
- [Nginx Documentation](https://nginx.org/en/docs/)

### Community
- [Next.js Discord](https://discord.com/invite/nextjs)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

## 📞 İletişim

Sorun yaşarsanız:
1. `docker-compose logs -f` ile logları kontrol edin
2. `/var/log/nginx/error.log` dosyasını inceleyin
3. GitHub Issues'da sorun bildirin

**Başarılı deployment'lar! 🚀**

