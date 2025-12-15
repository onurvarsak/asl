# Docker Deployment Talimatları

## 🐳 Docker ile Deploy

### Ön Gereksinimler

- Docker yüklü olmalı
- Docker Compose yüklü olmalı (opsiyonel)

### Yöntem 1: Docker Compose (Önerilen)

```bash
# Image'ı build et ve çalıştır
docker-compose up -d

# Logları görüntüle
docker-compose logs -f

# Durdur
docker-compose down
```

### Yöntem 2: Manuel Docker

```bash
# 1. Image oluştur
docker build -t als-aknur-website .

# 2. Container çalıştır
docker run -d \
  -p 3000:3000 \
  --name als-website \
  --restart unless-stopped \
  als-aknur-website

# 3. Logları kontrol et
docker logs -f als-website

# 4. Durdur ve kaldır
docker stop als-website
docker rm als-website
```

### Sunucuya Yükle

```bash
# 1. Image'ı export et
docker save als-aknur-website > als-website.tar

# 2. Sunucuya kopyala (SCP ile)
scp als-website.tar user@server:/path/to/destination/

# 3. Sunucuda import et
docker load < als-website.tar

# 4. Çalıştır
docker run -d -p 3000:3000 --name als-website als-aknur-website
```

### Port Değiştirme

```bash
# 80 portunda çalıştırmak için (root gerekli)
docker run -d -p 80:3000 --name als-website als-aknur-website

# Farklı port için
docker run -d -p 8080:3000 --name als-website als-aknur-website
```

### Production Tips

1. **Nginx Reverse Proxy ile kullanın** (SSL için)
2. **Volume mount** ederek log dosyalarını saklayın
3. **Environment variables** ile konfigürasyon yapın
4. **Docker network** ile database'e bağlayın (gerekirse)

### Nginx Reverse Proxy Örneği

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Troubleshooting

```bash
# Container içine gir
docker exec -it als-website sh

# Build cache'i temizle
docker builder prune

# Yeniden build et (cache yok)
docker build --no-cache -t als-aknur-website .
```

## 📊 Kontrol Komutları

```bash
# Container durumunu kontrol et
docker ps

# Resource kullanımı
docker stats als-website

# Container bilgisi
docker inspect als-website
```

## 🔄 Güncelleme

```bash
# 1. Yeni kodu al (git pull vb.)
# 2. Yeniden build et
docker-compose build

# 3. Container'ı restart et
docker-compose up -d
```
