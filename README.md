# Qarğa Dili Generator 🐦‍⬛

"Qarğa Dili" (Qarğa Dili) generator, ənənəvi Azərbaycan dil oyunu olan Qarğa Dilini normal mətndən avtomatik olaraq yaradan veb tətbiqdir.

## Qarğa Dili nədir?

Qarğa Dili, normal danışıq dilində hər sait hərfdən (a, e, i, o, u, ə) sonra "ba" və ya fərqli bölgələrdə "g", "ga" kimi hecalar əlavə olunmaqla yaradılan əyləncəli bir dil oyunudur.
Qarğa dili kodlaşdırılmış və ya şifrəli danışıq üsuludur. Bu dilin əsas məqsədi sözləri elə dəyişməkdir ki, yalnız onu bilən şəxslər anlaya bilsin.

Məsələn:

- "Salam" → "Sabalabam"
- "Necəsən?" → "Nebəcəbəsəban?"
- "Mən məktəbə gedirəm." → "Məbən məbəktəbəbə gebedirəbəm."

## Özəlliklər

- Normal mətni Qarğa Dilinə çevirmə
- Fərqli bölgə variantlarını dəstəkləmə (ba, ga və ya xüsusi əlavələr)
- Mobil uyğun dizayn
- Nəticəni mübadilə buferinə kopyalama

## Ekran görüntüləri

![Home Page](screenshots/screenshot.jpeg)

## Texnologiyalar

- Next.js 15
- React 19
- Tailwind CSS 4
- TypeScript

## Necə İstifadə Olunur

1. Bir mətn daxil edin
2. Variantınızı seçin (ba, ga və ya xüsusi)
3. "Çevir" düyməsinə klikləyin
4. Nəticəni görüntüləyin və istəsəniz kopyalayın

## Quraşdırma və İşə Salma

```bash
# Layihəni klonlayın
git clone https://github.com/imrashidov/qarga-dili-generator.git
cd qarga-dili-generator

# Asılılıqları yükləyin
npm install

# İnkişaf serverini başladın
npm run dev
```

Brauzerinizdə [http://localhost:3000](http://localhost:3000) ünvanını açaraq tətbiqi görüntüləyə bilərsiniz.

## Struktur
```bash
├── .gitignore
├── README.md
├── app
    ├── components
    │   └── BuyMeACoffee.tsx
    ├── globals.css
    ├── layout.tsx
    ├── manifest.json
    ├── offline.tsx
    └── page.tsx
├── eslint.config.mjs
├── next-sitemap.config.js
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
    ├── apple-touch-icon.png
    ├── fallback-70E608-7jGm1o7CiHtX2H.js
    ├── favicon-96x96.png
    ├── favicon.ico
    ├── favicon.svg
    ├── images
    │   ├── bug.svg
    │   └── og-image.png
    ├── manifest.json
    ├── robots.txt
    ├── site.webmanifest
    ├── sitemap-0.xml
    ├── sitemap.xml
    ├── sw.js
    ├── web-app-manifest-192x192.png
    ├── web-app-manifest-512x512.png
    └── workbox-f52fd911.js
├── screenshots
    └── screenshot.jpeg
├── tailwind.config.ts
└── tsconfig.json
```

## Lisenziya

MIT
