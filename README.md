# Deprem Tespiti Projesi

Bu proje, belirli bir bölgede meydana gelen depremleri tespit etmek ve bildirimlerde bulunarak bu depremleri haber yapmak amacıyla geliştirilmiştir. Proje, depremlerin veritabanına kaydedilmesini ve çeşitli rotalar üzerinden erişilebilmesini sağlar.

## Proje Yapısı

<ul>
  <li><strong>node_modules</strong>: Proje bağımlılıklarının bulunduğu dizin.</li>
  <li><strong>prisma</strong>: Veritabanı yapılandırma dosyalarının bulunduğu dizin.</li>
  <li><strong>routes</strong>: API rotalarının tanımlandığı dizin.</li>
  <li><strong>.env</strong>: Çevresel değişkenlerin tanımlandığı dosya.</li>
  <li><strong>cron.js</strong>: Zamanlanmış görevlerin yönetildiği dosya.</li>
  <li><strong>dbEkle.js</strong>: Veritabanına deprem verilerinin eklenmesini sağlayan dosya.</li>
  <li><strong>deprem.js</strong>: Deprem verilerinin işlendiği ve yönetildiği dosya.</li>
  <li><strong>index.js</strong>: Uygulamanın ana giriş noktası.</li>
  <li><strong>package-lock.json</strong> ve <strong>package.json</strong>: Proje bağımlılıklarının ve betiklerinin tanımlandığı dosyalar.</li>
</ul>

## Kurulum

1. **Bağımlılıkları Yükleyin**

   Proje bağımlılıklarını yüklemek için aşağıdaki komutu çalıştırın:

   ```bash
   npm install

2. **env Dosyasını Oluşturun**

   Kök dizinde yeni bir .env dosyası oluşturun ve aşağıdaki gibi çevresel değişkenleri ekleyin:

   ```env
   DATABASE_URL=your_database_url
   API_KEY=your_api_key```

3. **Uygulamayı Başlatın**

   Uygulamayı başlatmak için aşağıdaki komutu çalıştırın:

   ```bash
   npm start

## API Rotaları

   GET /deprem

   Bu rota, veritabanında kayıtlı olan tüm depremleri döner.

   Örnek İstek:

  ```bash
  curl -X GET http://localhost:3000/deprem
  ```

Yanıt:

    ```json
    [
     {
       "id": 1,
       "tarih": "2024-01-01",
       "saat": "12:34:56",
       "enlem": "38.123",
       "boylam": "27.123",
       "derinlik": "10 km",
       "şiddet": "4.5"
      },
  
    ]


POST /deprem

Bu rota, yeni bir deprem verisini veritabanına ekler. İstek gövdesi aşağıdaki formatta olmalıdır:

İstek Gövdesi:

    ```json
     {
    "tarih": "2024-01-01",
    "saat": "12:34:56",
    "enlem": "38.123",
    "boylam": "27.123",
    "derinlik": "10 km",
    "şiddet": "4.5"
    }
   

Örnek İstek:

    ```bash
    curl -X POST http://localhost:3000/deprem -H "Content-Type: application/json" -d 
    '{
    "tarih": "2024-01-01",
    "saat": "12:34:56",
    "enlem": "38.123",
    "boylam": "27.123",
    "derinlik": "10 km",
    "şiddet": "4.5"
    }'

Yanıt:

"Bugün, 1 Ocak 2024 tarihinde saat 12:34:56'da, 38.123 enlem ve 27.123 boylam koordinatlarında, 10 km derinlikte ve 4.5 büyüklüğünde bir deprem meydana geldi. Depremin etkileri ve detaylarıyla ilgili daha fazla bilgiye henüz ulaşılmadı. Kamuoyuna duyurulur."
