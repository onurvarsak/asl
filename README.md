# 🚚 ALS AKNUR GmbH - Website

Professionelle Logistikdienstleistungen mit modernster Flotte und erfahrenem Team.

## 🚀 Hızlı Başlangıç

### Geliştirme Ortamı

```bash
# Dependencies yükle
pnpm install

# Development server başlat
pnpm dev

# Tarayıcıda aç: http://localhost:3000
```

### Production Build

```bash
# Build oluştur
pnpm build

# Production server çalıştır
pnpm start
```

## 📦 Teknolojiler

- **Framework:** Next.js 16.0.10 (App Router)
- **UI:** React 19, Tailwind CSS
- **Font:** Poppins (Google Fonts)
- **Package Manager:** pnpm
- **Node.js:** 20.19.0+

## 📁 Proje Yapısı

```
my-app/
├── app/                      # Next.js App Router
│   ├── components/           # React componentleri
│   ├── karriere/            # Kariyer sayfası
│   ├── kontakt/             # İletişim sayfası
│   ├── standorte/           # Lokasyonlar sayfası
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Ana sayfa
├── public/
│   └── images/              # Resim dosyaları
├── Dockerfile               # Docker image tanımı
├── docker-compose.yml       # Docker Compose config
├── DEPLOYMENT.md            # Docker deployment rehberi
└── PRODUCTION.md            # Production deployment rehberi
```

## 🐳 Docker ile Çalıştırma

```bash
# Build ve run
docker-compose up -d

# Logları görüntüle
docker-compose logs -f

# Durdur
docker-compose down
```

Detaylı bilgi: [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🌐 Production Deployment

Üç farklı deployment seçeneği:

### 1. Vercel (Önerilen)
- Otomatik deployment
- Ücretsiz SSL
- CDN entegrasyonu

### 2. Docker + VPS
- Tam kontrol
- Custom server
- Nginx + SSL

### 3. Docker Registry
- Container-based
- Scalable
- Cloud-ready

**Detaylı adımlar:** [PRODUCTION.md](./PRODUCTION.md)

## 📄 Sayfalar

- **/** - Ana sayfa (Start)
- **/karriere** - Kariyer ve iş ilanları
- **/kontakt** - İletişim formu ve bilgiler
- **/standorte** - Lokasyon bilgileri

## 🛠️ Komutlar

```bash
# Development
pnpm dev          # Development server (http://localhost:3000)
pnpm build        # Production build
pnpm start        # Production server
pnpm lint         # Linter çalıştır

# Docker
docker-compose up -d              # Container başlat
docker-compose logs -f            # Logları izle
docker-compose down               # Container durdur
docker-compose build --no-cache   # Yeniden build et
```

## 🎨 Özellikler

✅ Responsive tasarım (Mobile-first)
✅ SEO optimize
✅ Fast page loading
✅ Accessibility (a11y)
✅ Modern UI/UX
✅ Production-ready
✅ Docker support
✅ TypeScript

## 📊 Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s

## 🔒 Güvenlik

- HTTPS (Production)
- Security headers
- Non-root Docker user
- Environment variables

## 📞 İletişim

**ALS AKNUR GmbH**
- Website: [als-aknur.de](https://als-aknur.de)
- Email: info@als-aknur.de

## 📝 License

© 2025 ALS AKNUR GmbH. All rights reserved.
