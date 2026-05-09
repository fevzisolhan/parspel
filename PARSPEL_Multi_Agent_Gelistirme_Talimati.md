# PARSPEL Multi-Agent Geliştirme Talimatı

> **Proje:** PARSPEL — Soba Yönetim Sistemi  
> **Geliştirici:** Fevzi Solhan (fevzisolhan)  
> **Repo:** https://github.com/fevzisolhan/parspel  
> **Tarih:** 2026-05-09  
> **Versiyon:** 1.0  

---

## 1. Giriş

Bu doküman, PARSPEL projesinin **multi-agent mimarisi** ile yeniden yapılandırılması için 9 farklı paydaş görüşünün pekliştirilmesi sonucu oluşturulmuştur. Her görüş, projenin farklı bir boyutunu temsil eder ve nihai karar bu görüşlerin kesişiminden çıkar.

---

## 2. Doküman Yapısı

```
Bölüm 3: 9 Paydaş Görüşü (Her biri detaylı analiz)
Bölüm 4: Pekliştirme Matrisi (Görüşlerin kesişimi)
Bölüm 5: Uygulanabilir Sonuç (Kazanan Fikir)
Bölüm 6: Uygulama Adımları (AI Agent'a talimat)
Bölüm 7: Teknik Spesifikasyon
Bölüm 8: Test Stratejisi
Bölüm 9: Riskler ve Önlemler
```

---

## 3. Dokuz Paydaş Görüşü

### Görüş 1: Kullanıcı (Soba Satıcısı / Dükkan Sahibi)

**Profil:** 50 yaşında, ortaokul mezunu, bilgisayarı yavaş, interneti kesik kesik, telefonu Android.

**İhtiyaçlar:**
- Program açılırken bekleme istemiyor (3 saniyeden az)
- İnternet olmadan çalışmalı (köyde, pazarda)
- Ekran karışık olmamalı, büyük butonlar
- Fatura yazdırabilmeli (termal yazıcı)
- Gece çalışıyor → karanlık mod şart
- Telefonda da kullanabilmeli

**Değerlendirme:** `MUST HAVE` — Kullanıcı olmadan sistem anlamsız.

---

### Görüş 2: İşletme Muhasebecisi

**Profil:** Mali müşavir, vergi mevzuatına hakim, e-Defter kullanıyor.

**İhtiyaçlar:**
- e-Fatura, e-Arşiv, e-Defter entegrasyonu
- Aylık beyanname verilerini otomatik çıkarmalı
- Bilanço, gelir tablosu, nakit akışı raporları
- Çoklu para birimi (dolar/euro alımı var)
- Personel maaşları ve SGK bildirimi
- Yıllık kapanış ve yeni yıla aktarım

**Değerlendirme:** `MUST HAVE` — Yasal zorunluluk.

---

### Görüş 3: CSS Uzmanı / UI Grafik Tasarımcı

**Profil:** Modern web tasarımı uzmanı, kullanıcı deneyimi odaklı.

**İhtiyaçlar:**
- Design system oluşturulmalı (renk, tipografi, boşluk)
- Marka renkleri: Sıcak turuncu + kömür siyahı (soba teması)
- Rakamlar monospace fontla yazılmalı (hizalama)
- Touch-friendly: Minimum 44px buton
- Yumuşak animasyonlar ve mikro-etkileşimler
- Responsive: Mobilde de kullanılabilir

**Değerlendirme:** `SHOULD HAVE` — Kullanıcı memnuniyeti için kritik.

---

### Görüş 4: Yazılımcı (Full-Stack Developer)

**Profil:** Modern web teknolojileri uzmanı, ölçeklenebilirlik odaklı.

**İhtiyaçlar:**
- localStorage → IndexedDB geçişi (5-10 MB sınırı)
- State yönetimi: Zustand veya Redux Toolkit
- API katmanı (BFF pattern)
- Offline sync conflict resolution
- PWA güncelleme stratejisi (Service Worker)
- Error boundary (bir hata tüm uygulamayı çökertmemeli)
- Plugin mimarisi (yeni modül eklemek kolay)

**Değerlendirme:** `MUST HAVE` — Teknik borç oluşturmamak için.

---

### Görüş 5: Kod Uzmanı (Senior Architect)

**Profil:** Kod kalitesi, güvenlik, production-readiness uzmanı.

**İhtiyaçlar:**
- Test coverage: Unit + Integration + E2E
- TypeScript strict mode
- CI/CD pipeline (GitHub Actions)
- ESLint, Prettier, Husky pre-commit hooks
- Security audit (npm audit)
- Performance: React.memo, bundle analysis
- Accessibility: ARIA, ekran okuyucu, klavye navigasyonu
- Monitoring, logging, alerting

**Değerlendirme:** `MUST HAVE` — Production'a çıkmak için.

---

### Görüş 6: Yenilikçi Teknoloji Takipçisi

**Profil:** Her yeni teknolojiyi deneyen, AI/ML meraklısı.

**İhtiyaçlar:**
- AI destekli stok tahmini (geçmiş satışlardan)
- Doğal dil işleme: "Bu ay ne kadar sattım?" sorusuna cevap
- OCR: Fatura fotoğrafından otomatik veri girişi
- Sesli komut: "Soba Model X'ten 2 tane sat"
- Blockchain: Değiştirilemez audit log
- WebGPU: Hızlı rapor hesaplama
- Edge AI: Cihazda çalışan model (internet yokken)

**Değerlendirme:** `NICE TO HAVE` — Gelecekte değerli, şimdi değil.

---

### Görüş 7: Olumsuz / Negatif Riskleri Hesaplayan

**Profil:** Her şeyin kötü gidebileceğini düşünen, güvenlik paranoyası.

**Riskler:**
- **Veri kaybı:** localStorage bozulursa? → Otomatik yedekleme
- **Firebase kapanırsa?** → Çoklu bulut desteği (AWS, Supabase)
- **Şifre çalınırsa?** → 2FA, şifre politikası (min 8 karakter)
- **Çalışan hile yaparsa?** → Audit log, yetki seviyeleri
- **Vergi denetimi gelirse?** → Tüm kayıtlar immutable
- **İnternet kesilirse sync?** → Conflict resolution, son yazan kazanmaz
- **Kötü niyetli çalışan?** → Agent izolasyonu, yetki matrisi

**Değerlendirme:** `MUST HAVE` — Risk yönetimi olmadan işletme kapanır.

---

### Görüş 8: Fazla Para Harcamayı Sevmeyen (Cimri)

**Profil:** Her kuruşun hesabını bilen, ücretsiz çözümler arayan.

**Kısıtlar:**
- Firebase ücretsiz katmanı: 50K okuma/gün, 20K yazma/gün
- GitHub Pages ücretsiz hosting
- IndexedDB (tarayıcıda, ücretsiz)
- Supabase ücretsiz katman (Firebase alternatifi)
- Cloudflare Workers (ücretsiz 100K/gün)
- Ollama (yerel AI, ücretsiz)
- Open source kütüphaneler

**Kırmızı Çizgi:** Aylık 50 TL'yi geçmemeli.

**Değerlendirme:** `MUST HAVE` — Küçük işletme için maliyet hayati.

---

### Görüş 9: Üşengeç / Rahatına Düşkün

**Profil:** Yazmayı, tekrarlayan işleri sevmeyen, otomasyon isteyen.

**İstekler:**
- Barkod okutunca ürün otomatik gelsin
- Sesli komutla satış yapabilsin
- Otomatik yedekleme (elle butona basma)
- Akıllı hatırlatma: "Stok azaldı, sipariş ver"
- Tek tıkla rapor oluşturma
- Otomatik fatura oluşturma (satıştan sonra)
- Şablonlar: Tekrarlayan müşteriler için hazır profil
- Sesli uyarı: "Vadesi geçen tahsilat var"

**Değerlendirme:** `SHOULD HAVE` — Verimlilik için kritik.

---

## 4. Pekliştirme Matrisi

### 4.1 Görüş Kesişim Haritası

```
                        Kullanıcı  Muhasebe  Tasarımcı  Yazılımcı  Kod Uzmanı  Yenilikçi  Riskçi  Cimri  Üşengeç
                        ─────────  ────────  ─────────  ─────────  ──────────  ─────────  ──────  ─────  ───────
Offline-first           ✅         ✅         ✅         ✅         ✅          ✅         ✅      ✅     ✅
Karanlık mod            ✅         -          ✅         -          -           -          -       -      ✅
e-Fatura                -          ✅         -          -          -           -          ✅      -      -
IndexedDB               ✅         -          -          ✅         ✅          -          ✅      ✅     -
Test coverage           -          -          -          ✅         ✅          -          ✅      -      -
AI tahmin               -          -          -          -          -           ✅         -       -      ✅
Çoklu bulut             -          -          -          ✅         -           -          ✅      ✅     -
Otomasyon               -          -          -          -          -           ✅         -       -      ✅
Agent mimarisi          -          -          -          ✅         ✅          -          ✅      -      -
Maliyet < 50TL          -          -          -          -          -           -          -       ✅     -
```

### 4.2 Kesişimdeki Kazananlar

| Özellik | Destekleyen Görüş Sayısı | Öncelik |
|---------|-------------------------|---------|
| **Offline-first** | 9/9 | P0 (Kritik) |
| **IndexedDB geçişi** | 6/9 | P0 |
| **Agent mimarisi** | 4/9 | P1 |
| **e-Fatura** | 3/9 | P1 |
| **Test coverage** | 4/9 | P1 |
| **Çoklu bulut** | 3/9 | P2 |
| **AI tahmin** | 2/9 | P3 |
| **Otomasyon** | 2/9 | P2 |
| **Karanlık mod** | 3/9 | P2 |

---

## 5. Uygulanabilir Sonuç: Kazanan Fikir

> **"PARSPEL 2.0 — Offline-First Hybrid Cloud Multi-Agent Sistemi"**

### 5.1 Temel Strateji

```
┌─────────────────────────────────────────────────────────────┐
│                    PARSPEL 2.0 MİMARİSİ                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐      │
│   │  Kullanıcı  │    │  Muhasebe   │    │   Üşengeç   │      │
│   │  Görüşü     │    │  Görüşü     │    │   Görüşü    │      │
│   │  (P0)       │    │  (P1)       │    │   (P2)      │      │
│   └──────┬──────┘    └──────┬──────┘    └──────┬──────┘      │
│          │                  │                  │             │
│          └──────────────────┼──────────────────┘             │
│                             ▼                                │
│   ┌─────────────────────────────────────────────────────┐   │
│   │           OFFLINE-FIRST + INDEXEDDB                  │   │
│   │      (Kullanıcı: hızlı, Cimri: ücretsiz)           │   │
│   └────────────────────────┬──────────────────────────┘   │
│                              │                               │
│          ┌───────────────────┼───────────────────┐          │
│          ▼                   ▼                   ▼          │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐   │
│   │  AGENT      │    │  e-Fatura   │    │  Otomasyon  │   │
│   │  MİMARİSİ   │    │  Entegrasyon│    │  (AI destekli)│  │
│   │  (Kod       │    │  (Muhasebe) │    │  (Üşengeç)  │   │
│   │  Uzmanı)    │    │             │    │             │   │
│   └─────────────┘    └─────────────┘    └─────────────┘   │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐   │
│   │           ÇOKLU BULUT + TEST + GÜVENLİK             │   │
│   │      (Riskçi + Kod Uzmanı + Yazılımcı)             │   │
│   └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 5.2 Kazanan Fikir Detayı

| Bileşen | Karar | Neden |
|---------|-------|-------|
| **Depolama** | IndexedDB (birincil) + Firebase (opsiyonel sync) | Kullanıcı + Cimri + Yazılımcı |
| **Mimari** | Multi-Agent (6 agent) | Kod Uzmanı + Riskçi + Yazılımcı |
| **Fatura** | e-Fatura entegrasyonu (GİB API) | Muhasebeci + Riskçi |
| **AI** | Ollama ile yerel stok tahmini | Yenilikçi + Üşengeç + Cimri |
| **UI** | Dark mode + responsive + touch-friendly | Kullanıcı + Tasarımcı + Üşengeç |
| **Maliyet** | Aylık < 50 TL | Cimri (herkes destekler) |

---

## 6. Uygulama Adımları (AI Agent Talimatı)

### Adım 1: Temel Altyapı (Hafta 1-2)

```bash
# 1.1 Mevcut projeyi klonla
git clone https://github.com/fevzisolhan/parspel.git
cd parspel

# 1.2 IndexedDB kütüphanesini ekle
npm install dexie

# 1.3 Test altyapısını genişlet
npm install -D @testing-library/react @testing-library/jest-dom
npm install -D @playwright/test

# 1.4 State yönetimi
npm install zustand

# 1.5 Event bus (agent iletişimi)
npm install mitt
```

### Adım 2: Agent Mimarisi Kurulumu (Hafta 3-4)

```typescript
// src/agents/index.ts
export { StokAgent } from './StokAgent';
export { KasaAgent } from './KasaAgent';
export { SatisAgent } from './SatisAgent';
export { CariAgent } from './CariAgent';
export { FaturaAgent } from './FaturaAgent';
export { RaporAgent } from './RaporAgent';

// src/agents/BaseAgent.ts
export abstract class BaseAgent {
  abstract readonly id: string;
  abstract readonly yetkiler: string[];

  protected eventBus = mitt();

  yetkiKontrolu(izin: string): boolean {
    return this.yetkiler.includes(izin);
  }

  abstract async islemYap(talep: unknown): Promise<unknown>;
}
```

### Adım 3: IndexedDB Geçişi (Hafta 5-6)

```typescript
// src/db/indexeddb.ts
import Dexie, { Table } from 'dexie';

export class ParspelDB extends Dexie {
  urunler!: Table<Urun>;
  satislar!: Table<Satis>;
  stokHareketleri!: Table<StokHareketi>;
  kasaHareketleri!: Table<KasaHareketi>;
  cariler!: Table<Cari>;
  faturalar!: Table<Fatura>;
  auditLog!: Table<AuditKaydi>;

  constructor() {
    super('ParspelDB');
    this.version(1).stores({
      urunler: '++id, ad, kategori, stok',
      satislar: '++id, tarih, tutar, odemeTipi, *urunler',
      stokHareketleri: '++id, urunId, tip, tarih',
      kasaHareketleri: '++id, kasaTipi, tur, tarih',
      cariler: '++id, ad, telefon, bakiye',
      faturalar: '++id, satisId, faturaNo, tarih',
      auditLog: '++id, agent, islem, timestamp'
    });
  }
}

export const db = new ParspelDB();
```

### Adım 4: Agent İmplementasyonu (Hafta 7-10)

Her agent için:
1. Interface tanımı
2. Validasyon kuralları
3. İş mantığı
4. Event yayınlama
5. Audit log kaydı

### Adım 5: e-Fatura Entegrasyonu (Hafta 11-12)

```typescript
// src/integrations/efatura.ts
export class EFaturaService {
  private apiUrl = 'https://efatura.gov.tr/earsivservices/soap';

  async faturaOlustur(fatura: FaturaBilgisi): Promise<EFaturaSonuc> {
    // GİB API entegrasyonu
    // XML imzalama
    // Gönderim ve kontrol
  }
}
```

### Adım 6: Test ve Deploy (Hafta 13-14)

```bash
# Unit testler
npm run test:run

# E2E testler
npm run test:e2e

# Build
npm run build

# Deploy GitHub Pages
npm run deploy
```

---

## 7. Teknik Spesifikasyon

### 7.1 Teknoloji Yığını (Güncellenmiş)

| Katman | Teknoloji | Versiyon | Neden |
|--------|-----------|----------|-------|
| Frontend | React | 19 | Mevcut |
| Dil | TypeScript | 5.x | Strict mode |
| Build | Vite | 7 | Mevcut |
| Stil | Tailwind CSS | 4 | Mevcut |
| UI | shadcn/ui | - | Mevcut |
| State | Zustand | 4 | Yeni (basit, hafif) |
| Depolama | IndexedDB (Dexie.js) | 4 | Yeni (büyük veri) |
| Sync | Firebase Firestore | - | Opsiyonel |
| Event Bus | mitt | 3 | Yeni (agent iletişimi) |
| Test | Vitest + Playwright | - | Genişletilmiş |
| Mobile | Capacitor | 8 | Mevcut |
| AI | Ollama | - | Yerel, ücretsiz |

### 7.2 Agent Yetki Matrisi

| Agent | Stok | Kasa | Cari | Satış | Fatura | Rapor |
|-------|:----:|:----:|:----:|:-----:|:------:|:-----:|
| StokAgent | RW | - | - | - | - | R |
| KasaAgent | - | RW | - | - | - | R |
| CariAgent | - | - | RW | - | - | R |
| SatisAgent | - | - | - | RW | - | R |
| FaturaAgent | - | - | - | - | RW | R |
| RaporAgent | R | R | R | R | R | R |

R = Read, W = Write, - = Yetkisiz

### 7.3 Veri Akış Diyagramı

```
Kullanıcı ──► SatisAgent ──┬──► StokAgent (stok düş)
                            ├──► KasaAgent (kasa artır)
                            ├──► CariAgent (borç ekle - cari ise)
                            └──► FaturaAgent (fatura oluştur)
                                    │
                                    ▼
                            RaporAgent (cache güncelle)
```

---

## 8. Test Stratejisi

### 8.1 Test Piramidi

```
        ▲
       /│\     E2E (Playwright)          ~ %5
      / │ \        Satış akışı, offline sync
     /  │      /───────\   Integration              ~ %15
   /    │    \      Agent iletişimi, DB sync
  /     │      /──────┼──────\  Unit (Vitest + fast-check) ~ %80
/       │       \   Kurallar, hesaplamalar
/────────┴────────```

### 8.2 Kritik Test Senaryoları

| Sıra | Senaryo | Agent(lar) | Risk Seviyesi |
|------|---------|------------|---------------|
| 1 | Negatif stok engelleme | StokAgent | 🔴 Kritik |
| 2 | Offline sync + conflict | Tümü | 🔴 Kritik |
| 3 | Soft-delete geri alma | KasaAgent | 🔴 Kritik |
| 4 | Çoklu kasa bütünlüğü | KasaAgent | 🟡 Yüksek |
| 5 | Cari satış müşteri zorunluluğu | SatisAgent | 🟡 Yüksek |
| 6 | Yetki ihlali engelleme | Tümü | 🔴 Kritik |
| 7 | Transaction rollback | SatisAgent | 🔴 Kritik |
| 8 | e-Fatura XML validasyonu | FaturaAgent | 🟡 Yüksek |

---

## 9. Riskler ve Önlemler

| Risk | Olasılık | Etki | Önlem | Sorumlu Agent |
|------|----------|------|-------|---------------|
| Veri kaybı | Orta | Yüksek | Otomatik yedekleme (günlük) | RaporAgent |
| Firebase kesinti | Düşük | Orta | Çoklu bulut (Supabase yedek) | SatisAgent |
| Şifre çalınması | Düşük | Yüksek | 2FA, şifre politikası | KasaAgent |
| Çalışan hilesi | Orta | Yüksek | Audit log, yetki seviyeleri | Tümü |
| Vergi denetimi | Düşük | Yüksek | Immutable kayıtlar, e-Fatura | FaturaAgent |
| Offline sync çakışması | Yüksek | Orta | Conflict resolution (timestamp) | SatisAgent |
| Maliyet aşımı | Düşük | Orta | Usage monitoring, alert | RaporAgent |
| Performans düşüşü | Orta | Orta | IndexedDB, lazy loading, memoization | RaporAgent |

---

## 10. Sonuç

Bu doküman, 9 farklı paydaş görüşünün pekliştirilmesiyle oluşturulmuştur. **Kazanan fikir:**

> **"Offline-first IndexedDB tabanlı, multi-agent mimarili, e-Fatura entegreli, maliyeti aylık 50 TL altında tutan, otomasyon destekli bir sistem."**

Her agent sadece kendi yetki alanında çalışır, hata yapma riski minimize edilir, kullanıcı memnuniyeti artar, muhasebe uyumluluğu sağlanır ve gelecekte AI modülleri kolayca eklenebilir.

---

**Hazırlayan:** AI Assistant (Kimi)  
**Tarih:** 2026-05-09  
**Versiyon:** 1.0  
**Sonraki Adım:** Bu dokümanı takip ederek geliştirme sürecini başlat.
