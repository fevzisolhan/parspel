# PARSPEL — Soba Yönetim Sistemi v2.9.0

Soba satışı, stok, kasa ve cari takibini tek ekranda yöneten, offline-first çalışan bir işletme yönetim uygulaması.

---

## Uygulama Haritası

```
PARSPEL v3.0.0
│
├── 📊 ANA
│   ├── Dashboard          — Günlük özet: ciro, kâr, stok değeri, kasa bakiyesi
│   ├── Ürünler            — Ürün CRUD, kategori, maliyet/satış fiyatı, min stok
│   ├── Satış              — Nakit/kart/havale/cari ödeme, iskonto, kısmi tahsilat
│   └── Fatura             — Satış & alış faturaları, taksit planı
│
├── 🏭 TEDARİK
│   ├── Tedarikçi          — Tedarikçi CRUD, sipariş takibi, stok otomatik güncelleme
│   ├── Pelet              — Pelet tedarik takibi
│   └── Boru Tedarik       — Boru tedarik takibi
│
├── 💰 FİNANS
│   ├── Cari               — Müşteri & tedarikçi bakiyesi, alacak yaşlandırma, tahsilat
│   ├── Kasa               — Çoklu kasa (Nakit/Banka/POS), gelir/gider, soft-delete
│   ├── Bütçe              — Bütçe planlama ve takip
│   └── Banka              — Banka hesap hareketleri
│
├── 📈 ANALİZ
│   ├── Raporlar           — Satış, kâr, stok, cari raporları
│   ├── Çizelge            — Takvim bazlı görünüm
│   ├── Stok               — Stok hareketleri, giriş/çıkış/düzeltme geçmişi
│   ├── İzleme             — Anlık uyarılar, kritik stok/kasa bildirimleri
│   └── Kontrol Halkası    — Rule engine ihlalleri, audit log, sistem sağlığı
│
├── 🤖 AI
│   ├── AI Asistan (Sayfa) — Claude + Gemini API, streaming yanıt, sesli giriş/okuma
│   │                        10 hazır prompt, offline kural tabanlı mod
│   └── Quantum Link (FAB) — Her sayfadan erişilebilir floating panel,
│                            hızlı kasa/stok/satış/alacak sorguları, sesli komut
│
└── ⚙️ SİSTEM
    ├── Entegrasyonlar     — Firebase Firestore sync, API bağlantıları
    ├── Veri Birleştir     — Excel import/merge
    ├── Not Defteri        — Serbest notlar
    ├── Ortaklar           — İş ortağı yönetimi
    └── Ayarlar            — UI tercihleri, yedek/geri yükleme, kullanıcı yönetimi
```

---

## Özellikler

- **Satış Yönetimi** — Nakit / kart / havale / cari ödeme, kısmi tahsilat, iskonto, iade ve iptal
- **Stok Takibi** — Giriş / çıkış / düzeltme, hareket geçmişi, sipariş entegrasyonu
- **Kasa** — Çoklu kasa (Nakit, Banka, POS), gelir/gider, soft-delete geri alımı
- **Cari Hesaplar** — Müşteri ve tedarikçi bakiyesi, alacak yaşlandırma, tahsilat
- **Tedarikçi & Sipariş** — Sipariş takibi, stok otomatik güncelleme
- **Fatura** — Satış ve alış faturaları, taksit planı
- **Raporlar & Dashboard** — Günlük ciro, kâr, stok değeri
- **AI Asistan** — Claude Haiku + Gemini 2.0 Flash, streaming, sesli giriş/okuma, offline mod
- **Quantum Link** — Floating AI panel, her sayfadan erişilebilir, sesli komut
- **Offline-First** — localStorage birincil depolama, Firebase Firestore opsiyonel bulut sync
- **PWA + Android** — Capacitor 8 ile Android APK desteği
- **Rule Engine** — Her işlemde otomatik kural kontrolü (negatif stok, negatif kasa, sıfır tutar, mükerrer işlem)
- **Audit Log** — Tüm işlemlerin denetim kaydı

---

## Teknoloji

| Katman | Teknoloji |
|---|---|
| Frontend | React 19 + TypeScript |
| Build | Vite 7 |
| UI | Tailwind CSS 4 + Radix UI (shadcn/ui) + Framer Motion |
| Mobil | Capacitor 8 (Android) |
| AI | Claude Haiku-3.5 + Gemini 2.0 Flash |
| Test | Vitest + fast-check (property-based testing) + Playwright (e2e) |
| Depolama | localStorage + Firebase Firestore (opsiyonel) |

---

## Kurulum

```bash
npm install
npm run dev
```

## Komutlar

```bash
npm run dev              # Geliştirme sunucusu (port 3000)
npm run build            # Production build
npm run test             # Testleri izle (watch mode)
npm run test:run         # Testleri tek seferlik çalıştır
npm run test:report      # HTML test raporu üret
npm run typecheck        # TypeScript tip kontrolü
npm run cap:android      # Android build + Android Studio aç
npm run cap:run:android  # Android cihazda çalıştır
```

## Test

```bash
# Tüm testleri çalıştır
npm run test:run

# Belirli test dosyası
npx vitest run src/lib/kapsamli-senaryo.test.ts

# E2E testler
npm run test:e2e
```

## Firebase Sync (Opsiyonel)

Uygulama içi **Entegrasyonlar** sayfasından Firebase proje bilgilerini girerek bulut sync aktif edilebilir. Aktif edilmezse uygulama tamamen offline çalışır.

## AI Asistan Kurulumu

1. **Entegrasyonlar** sayfasından Firebase bağlantısını kur
2. **AI Asistan** sayfasındaki ⚙️ ikonuna tıkla
3. Claude API key (Anthropic) ve/veya Gemini API key (Google) gir
4. Anahtarlar Firebase'de şifreli saklanır — tüm cihazlarda geçerlidir

Alternatif: `.env` dosyasına `VITE_CLAUDE_API_KEY` veya `VITE_GEMINI_API_KEY` ekle.

---

## Android İzinleri

| İzin | Amaç |
|---|---|
| `INTERNET` | Firebase sync, AI API çağrıları |
| `ACCESS_NETWORK_STATE` | Çevrimiçi/çevrimdışı durum tespiti |
| `POST_NOTIFICATIONS` | Stok uyarıları, kritik bildirimler (Android 13+) |
| `RECORD_AUDIO` | AI sesli asistan (Quantum Link + AI Asistan) |
| `READ/WRITE_EXTERNAL_STORAGE` | Excel export, yedek dosyaları (Android ≤12) |
| `CAMERA` | Barkod/QR okuma (ileride) |
| `RECEIVE_BOOT_COMPLETED` | Zamanlanmış bildirimler |

---

## Sürüm Geçmişi

### v2.9.0 — 2026-05-04
- **Quantum Link** — Her sayfadan erişilebilir floating AI panel (BrainCircuit ikonu)
  - Türkçe sesli komut desteği (mikrofon)
  - Kasa / stok / satış / alacak hızlı sorguları
  - Sesli yanıt (TTS)
  - Framer Motion animasyonlu panel
- **`useDB` Analytics** — `useMemo` ile optimize edilmiş anlık iş analitiği
  - revenue, profit, margin, growth, kasaBalance, stockValue, topProducts vb.
- **Android izinleri genişletildi** — POST_NOTIFICATIONS, RECORD_AUDIO, CAMERA, depolama
- **Push Notifications izni** — `requestPushPermission()` eklendi
- **Quantum Link → AI Asistan** yönlendirme entegrasyonu

### v2.0.0
- AI Asistan sayfası — Claude Haiku + Gemini 2.0 Flash streaming
- Sesli giriş/okuma (`useSpeech` hook)
- Firebase'de şifreli API key saklama
- Rate limit koruması, offline kural tabanlı mod
- 10 hazır analiz promptu
- Kontrol Halkası sayfası
- Bütçe modülü
- Çizelge (takvim görünümü)
- Playwright e2e test altyapısı
- Vitest + fast-check property-based testler

### v1.0.0
- Temel satış, stok, kasa, cari yönetimi
- Rule Engine (negatif stok, negatif kasa, sıfır tutar, mükerrer işlem)
- Audit Log
- Firebase Firestore sync
- PWA + Capacitor Android
- Dashboard, Raporlar

---

## Lisans

Özel kullanım.
