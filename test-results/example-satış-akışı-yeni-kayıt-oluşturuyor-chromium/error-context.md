# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> satış akışı yeni kayıt oluşturuyor
- Location: e2e\example.spec.ts:64:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('✓ Tamamlandı')
Expected: visible
Error: strict mode violation: getByText('✓ Tamamlandı') resolved to 2 elements:
    1) <button>✓ Tamamlandı</button> aka getByRole('button', { name: '✓ Tamamlandı' })
    2) <span>✓ Tamamlandı</span> aka getByRole('table').getByText('✓ Tamamlandı')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('✓ Tamamlandı')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - complementary [ref=e4]:
        - generic [ref=e6]:
          - generic [ref=e7]: 🔥
          - generic [ref=e8]:
            - generic [ref=e9]: Soba Yönetim
            - generic [ref=e10]: Sistemi · v2.0
        - navigation [ref=e11]:
          - region "Hızlı erişim" [ref=e12]:
            - generic [ref=e13]:
              - generic [ref=e14]: Hızlı Erişim
              - generic [ref=e15]: Favori modüller
            - generic [ref=e16]:
              - button "Özet hızlı erişim" [ref=e17] [cursor=pointer]:
                - generic [ref=e18]: 📊
                - generic [ref=e19]: Özet
              - button "Satış hızlı erişim" [ref=e20] [cursor=pointer]:
                - generic [ref=e21]: 🛒
                - generic [ref=e22]: Satış
              - button "Ürünler hızlı erişim" [ref=e23] [cursor=pointer]:
                - generic [ref=e24]: 📦
                - generic [ref=e25]: Ürünler
              - button "Kasa hızlı erişim" [ref=e26] [cursor=pointer]:
                - generic [ref=e27]: 💰
                - generic [ref=e28]: Kasa
              - button "Cari hızlı erişim" [ref=e29] [cursor=pointer]:
                - generic [ref=e30]: 👤
                - generic [ref=e31]: Cari
          - generic [ref=e32]:
            - button "Ana grubunu daralt" [expanded] [ref=e33] [cursor=pointer]:
              - generic [ref=e34]: ▶
              - generic [ref=e35]: Ana
              - generic [ref=e37]: "4"
            - generic [ref=e38]:
              - button "📊 Özet" [ref=e39] [cursor=pointer]:
                - generic [ref=e40]: 📊
                - generic [ref=e41]: Özet
              - button "Özet favorilere ekli, kaldır" [ref=e42] [cursor=pointer]: ★
            - generic [ref=e43]:
              - button "📦 Ürünler" [ref=e44] [cursor=pointer]:
                - generic [ref=e45]: 📦
                - generic [ref=e46]: Ürünler
              - button "Ürünler favorilere ekli, kaldır" [ref=e47] [cursor=pointer]: ★
            - generic [ref=e48]:
              - button "🛒 Satış 1" [ref=e49] [cursor=pointer]:
                - generic [ref=e50]: 🛒
                - generic [ref=e51]: Satış
                - generic [ref=e52]: "1"
              - button "Satış favorilere ekli, kaldır" [ref=e54] [cursor=pointer]: ★
            - generic [ref=e55]:
              - button "🧾 Fatura" [ref=e56] [cursor=pointer]:
                - generic [ref=e57]: 🧾
                - generic [ref=e58]: Fatura
              - button "Fatura favorilere ekle" [ref=e59] [cursor=pointer]: ☆
          - button "Tedarik grubunu genislet" [ref=e61] [cursor=pointer]:
            - generic [ref=e62]: ▶
            - generic [ref=e63]: Tedarik
            - generic [ref=e65]: "3"
          - generic [ref=e66]:
            - button "Finans grubunu daralt" [expanded] [ref=e67] [cursor=pointer]:
              - generic [ref=e68]: ▶
              - generic [ref=e69]: Finans
              - generic [ref=e71]: "4"
            - generic [ref=e72]:
              - button "👤 Cari" [ref=e73] [cursor=pointer]:
                - generic [ref=e74]: 👤
                - generic [ref=e75]: Cari
              - button "Cari favorilere ekli, kaldır" [ref=e76] [cursor=pointer]: ★
            - generic [ref=e77]:
              - button "💰 Kasa" [ref=e78] [cursor=pointer]:
                - generic [ref=e79]: 💰
                - generic [ref=e80]: Kasa
              - button "Kasa favorilere ekli, kaldır" [ref=e81] [cursor=pointer]: ★
            - generic [ref=e82]:
              - button "📊 Bütçe" [ref=e83] [cursor=pointer]:
                - generic [ref=e84]: 📊
                - generic [ref=e85]: Bütçe
              - button "Bütçe favorilere ekle" [ref=e86] [cursor=pointer]: ☆
            - generic [ref=e87]:
              - button "🏦 Banka" [ref=e88] [cursor=pointer]:
                - generic [ref=e89]: 🏦
                - generic [ref=e90]: Banka
              - button "Banka favorilere ekle" [ref=e91] [cursor=pointer]: ☆
          - button "Analiz grubunu genislet" [ref=e93] [cursor=pointer]:
            - generic [ref=e94]: ▶
            - generic [ref=e95]: Analiz
            - generic [ref=e97]: "5"
          - button "Sistem grubunu genislet" [ref=e99] [cursor=pointer]:
            - generic [ref=e100]: ▶
            - generic [ref=e101]: Sistem
            - generic [ref=e103]: "6"
        - generic [ref=e104] [cursor=pointer]:
          - generic [ref=e105]:
            - generic [ref=e106]: 💰
            - generic [ref=e107]: Toplam Kasa
          - generic [ref=e109]: ₺1.800,00
          - generic [ref=e110]:
            - generic [ref=e111]:
              - generic [ref=e112]: Nakit
              - generic [ref=e113]: ₺1.800,00
            - generic [ref=e115]:
              - generic [ref=e116]: Banka
              - generic [ref=e117]: ₺0,00
        - generic [ref=e118]:
          - generic [ref=e121]: Çevrimiçi
          - generic [ref=e122]: 🔒 Firebase & localStorage · Güvenli
      - generic [ref=e123]:
        - banner [ref=e124]:
          - heading "🛒 Satış" [level=1] [ref=e126]:
            - generic [ref=e127]: 🛒
            - text: Satış
          - generic [ref=e129]:
            - generic: 🔍
            - textbox "Ürün, müşteri, modül ara..." [ref=e130]
          - generic [ref=e131]:
            - generic [ref=e132]:
              - button "⌘1" [ref=e133] [cursor=pointer]
              - button "⌘2" [ref=e134] [cursor=pointer]
              - button "⌘3" [ref=e135] [cursor=pointer]
              - button "⌘4" [ref=e136] [cursor=pointer]
            - button "🔔" [ref=e138] [cursor=pointer]
            - generic [ref=e141]: Firebase
            - button "💾 Yedek" [ref=e142] [cursor=pointer]
            - generic [ref=e143]: 06 May 2026
            - button "👤 admin" [ref=e145] [cursor=pointer]
        - main [ref=e146]:
          - generic [ref=e147]:
            - generic [ref=e148]:
              - generic [ref=e149]:
                - generic [ref=e150]: "1"
                - generic [ref=e151]: Bugün Satış
                - generic [ref=e152]: ₺1.800,00
              - generic [ref=e153]:
                - generic [ref=e154]: ₺1.800,00
                - generic [ref=e155]: Bugün Ciro
              - generic [ref=e156]:
                - generic [ref=e157]: ₺600,00
                - generic [ref=e158]: Bugün Kâr
            - generic [ref=e159]:
              - button "+ Yeni Satış" [ref=e160] [cursor=pointer]
              - button "📊 Excel İndir" [ref=e161] [cursor=pointer]
              - textbox "🔍 Ürün ara..." [ref=e162]
              - textbox [ref=e163]
              - textbox [ref=e164]
              - generic [ref=e165]:
                - button "Tümü" [ref=e166] [cursor=pointer]
                - button "✓ Tamamlandı" [ref=e167] [cursor=pointer]
                - button "↩ İade" [ref=e168] [cursor=pointer]
                - button "✕ İptal" [ref=e169] [cursor=pointer]
            - table [ref=e171]:
              - rowgroup [ref=e172]:
                - row "Tarih Ürün Müşteri Miktar Tutar Kâr Ödeme Durum" [ref=e173]:
                  - columnheader "Tarih" [ref=e174]
                  - columnheader "Ürün" [ref=e175]
                  - columnheader "Müşteri" [ref=e176]
                  - columnheader "Miktar" [ref=e177]
                  - columnheader "Tutar" [ref=e178]
                  - columnheader "Kâr" [ref=e179]
                  - columnheader "Ödeme" [ref=e180]
                  - columnheader "Durum" [ref=e181]
                  - columnheader [ref=e182]
              - rowgroup [ref=e183]:
                - row "06.05.2026 03:45 Deneme Sobası Test Müşterisi 1 ₺1.800,00 ₺600,00 Nakit ✓ Tamamlandı ↩ İade ✕ İptal" [ref=e184]:
                  - cell "06.05.2026 03:45" [ref=e185]
                  - cell "Deneme Sobası" [ref=e186]
                  - cell "Test Müşterisi" [ref=e187]
                  - cell "1" [ref=e188]
                  - cell "₺1.800,00" [ref=e189]
                  - cell "₺600,00" [ref=e190]
                  - cell "Nakit" [ref=e191]
                  - cell "✓ Tamamlandı" [ref=e192]
                  - cell "↩ İade ✕ İptal" [ref=e193]:
                    - generic [ref=e194]:
                      - button "↩ İade" [ref=e195] [cursor=pointer]
                      - button "✕ İptal" [ref=e196] [cursor=pointer]
      - button "🤖" [ref=e197]
      - button "+" [ref=e199]
      - button "🐛" [ref=e200]
    - region "Notifications alt+T":
      - list:
        - listitem [ref=e201]:
          - img [ref=e203]
          - generic [ref=e206]: Satış kaydedildi! ₺1.800,00
  - generic [ref=e207]: "0"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const seededDb = {
  4  |   products: [
  5  |     {
  6  |       id: 'urun-1',
  7  |       name: 'Deneme Sobası',
  8  |       category: 'soba',
  9  |       cost: 1200,
  10 |       price: 1800,
  11 |       stock: 8,
  12 |       minStock: 2,
  13 |       createdAt: '2026-05-06T09:00:00.000Z',
  14 |       updatedAt: '2026-05-06T09:00:00.000Z',
  15 |     },
  16 |   ],
  17 |   cari: [
  18 |     {
  19 |       id: 'cari-1',
  20 |       name: 'Test Müşterisi',
  21 |       type: 'musteri',
  22 |       balance: 0,
  23 |       phone: '05550000000',
  24 |       createdAt: '2026-05-06T09:00:00.000Z',
  25 |       updatedAt: '2026-05-06T09:00:00.000Z',
  26 |     },
  27 |   ],
  28 |   sales: [],
  29 |   kasa: [],
  30 |   stockMovements: [],
  31 | };
  32 | 
  33 | async function seedAuthenticatedApp(page: Parameters<typeof test>[0]['page']) {
  34 |   await page.addInitScript((db) => {
  35 |     window.localStorage.setItem('sobaYonetim_setupDone', '1');
  36 |     window.localStorage.setItem('sobaYonetim_setupApplied', '1');
  37 |     window.localStorage.setItem('sobaYonetim', JSON.stringify(db));
  38 |     window.sessionStorage.setItem('sobaUser_session', JSON.stringify({
  39 |       userId: 'admin-1',
  40 |       username: 'admin',
  41 |       role: 'admin',
  42 |       ts: Date.now(),
  43 |     }));
  44 |   }, seededDb);
  45 | }
  46 | 
  47 | test('anasayfa yükleniyor', async ({ page }) => {
  48 |   await seedAuthenticatedApp(page);
  49 |   await page.goto('/');
  50 |   await expect(page).toHaveTitle(/Parspel/i);
  51 |   await expect(page.getByText('Hızlı Erişim')).toBeVisible();
  52 | });
  53 | 
  54 | test('favori modül pinlenebiliyor', async ({ page }) => {
  55 |   await seedAuthenticatedApp(page);
  56 |   await page.goto('/');
  57 | 
  58 |   await page.getByLabel('Analiz grubunu genislet').click();
  59 |   await page.getByLabel('Raporlar favorilere ekle').click();
  60 | 
  61 |   await expect(page.getByRole('region', { name: 'Hızlı erişim' }).getByLabel('Raporlar hızlı erişim')).toBeVisible();
  62 | });
  63 | 
  64 | test('satış akışı yeni kayıt oluşturuyor', async ({ page }) => {
  65 |   await seedAuthenticatedApp(page);
  66 |   await page.goto('/');
  67 | 
  68 |   await page.getByText('Satış', { exact: true }).first().click();
  69 |   await page.getByRole('button', { name: '+ Yeni Satış' }).click();
  70 | 
  71 |   await page.locator('select').first().selectOption('urun-1');
  72 |   await page.getByRole('button', { name: '-- Müşteri Seç (zorunlu) --' }).click();
  73 |   await page.getByRole('button', { name: 'Test Müşterisi 05550000000' }).click();
  74 |   await page.getByRole('button', { name: /Satışı Kaydet/i }).click();
  75 | 
  76 |   await expect(page.getByText('Deneme Sobası')).toBeVisible();
  77 |   await expect(page.getByText('Test Müşterisi')).toBeVisible();
> 78 |   await expect(page.getByText('✓ Tamamlandı')).toBeVisible();
     |                                                ^ Error: expect(locator).toBeVisible() failed
  79 | });
  80 | 
```