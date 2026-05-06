# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: inventory.spec.ts >> urun ekleme akisi calisiyor
- Location: e2e\inventory.spec.ts:9:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('E2E Urun')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('E2E Urun')

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
              - button "Ürünler favorilere ekli, kaldır" [ref=e48] [cursor=pointer]: ★
            - generic [ref=e49]:
              - button "🛒 Satış" [ref=e50] [cursor=pointer]:
                - generic [ref=e51]: 🛒
                - generic [ref=e52]: Satış
              - button "Satış favorilere ekli, kaldır" [ref=e53] [cursor=pointer]: ★
            - generic [ref=e54]:
              - button "🧾 Fatura" [ref=e55] [cursor=pointer]:
                - generic [ref=e56]: 🧾
                - generic [ref=e57]: Fatura
              - button "Fatura favorilere ekle" [ref=e58] [cursor=pointer]: ☆
          - button "Tedarik grubunu genislet" [ref=e60] [cursor=pointer]:
            - generic [ref=e61]: ▶
            - generic [ref=e62]: Tedarik
            - generic [ref=e64]: "3"
          - generic [ref=e65]:
            - button "Finans grubunu daralt" [expanded] [ref=e66] [cursor=pointer]:
              - generic [ref=e67]: ▶
              - generic [ref=e68]: Finans
              - generic [ref=e70]: "4"
            - generic [ref=e71]:
              - button "👤 Cari" [ref=e72] [cursor=pointer]:
                - generic [ref=e73]: 👤
                - generic [ref=e74]: Cari
              - button "Cari favorilere ekli, kaldır" [ref=e75] [cursor=pointer]: ★
            - generic [ref=e76]:
              - button "💰 Kasa" [ref=e77] [cursor=pointer]:
                - generic [ref=e78]: 💰
                - generic [ref=e79]: Kasa
              - button "Kasa favorilere ekli, kaldır" [ref=e80] [cursor=pointer]: ★
            - generic [ref=e81]:
              - button "📊 Bütçe" [ref=e82] [cursor=pointer]:
                - generic [ref=e83]: 📊
                - generic [ref=e84]: Bütçe
              - button "Bütçe favorilere ekle" [ref=e85] [cursor=pointer]: ☆
            - generic [ref=e86]:
              - button "🏦 Banka" [ref=e87] [cursor=pointer]:
                - generic [ref=e88]: 🏦
                - generic [ref=e89]: Banka
              - button "Banka favorilere ekle" [ref=e90] [cursor=pointer]: ☆
          - button "Analiz grubunu genislet" [ref=e92] [cursor=pointer]:
            - generic [ref=e93]: ▶
            - generic [ref=e94]: Analiz
            - generic [ref=e96]: "5"
          - button "Sistem grubunu genislet" [ref=e98] [cursor=pointer]:
            - generic [ref=e99]: ▶
            - generic [ref=e100]: Sistem
            - generic [ref=e102]: "6"
        - generic [ref=e103] [cursor=pointer]:
          - generic [ref=e104]:
            - generic [ref=e105]: 💰
            - generic [ref=e106]: Toplam Kasa
          - generic [ref=e108]: ₺0,00
          - generic [ref=e109]:
            - generic [ref=e110]:
              - generic [ref=e111]: Nakit
              - generic [ref=e112]: ₺0,00
            - generic [ref=e114]:
              - generic [ref=e115]: Banka
              - generic [ref=e116]: ₺0,00
        - generic [ref=e117]:
          - generic [ref=e120]: Çevrimiçi
          - generic [ref=e121]: 🔒 Firebase & localStorage · Güvenli
      - generic [ref=e122]:
        - banner [ref=e123]:
          - heading "📦 Ürünler" [level=1] [ref=e125]:
            - generic [ref=e126]: 📦
            - text: Ürünler
          - generic [ref=e128]:
            - generic: 🔍
            - textbox "Ürün, müşteri, modül ara..." [ref=e129]: E2E Urun
            - button "×" [ref=e130] [cursor=pointer]
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
              - button "+ Yeni Ürün" [ref=e149] [cursor=pointer]
              - button "📊 Excel" [ref=e150] [cursor=pointer]
              - textbox "🔍 Ürün ara..." [ref=e151]
            - generic [ref=e152]:
              - button "Tümü" [ref=e153] [cursor=pointer]
              - button "🔥 Soba" [ref=e154] [cursor=pointer]
              - button "🔧 Aksesuar" [ref=e155] [cursor=pointer]
              - button "⚙️ Yedek Parca" [ref=e156] [cursor=pointer]
              - button "🔩 Boru" [ref=e157] [cursor=pointer]
              - button "🪵 Pelet" [ref=e158] [cursor=pointer]
              - button "🔴 Biten" [ref=e159] [cursor=pointer]
              - button "⚠️ Az" [ref=e160] [cursor=pointer]
            - generic [ref=e161]:
              - generic [ref=e162]:
                - generic [ref=e163]: "2"
                - generic [ref=e164]: Toplam Ürün
              - generic [ref=e165]:
                - generic [ref=e166]: ₺13.200,00
                - generic [ref=e167]: Stok Değeri
              - generic [ref=e168]:
                - generic [ref=e169]: "0"
                - generic [ref=e170]: Biten Stok
              - generic [ref=e171]:
                - generic [ref=e172]: "0"
                - generic [ref=e173]: Az Stok
            - generic [ref=e174]:
              - generic [ref=e175]:
                - generic [ref=e176]: 🔥
                - heading "Deneme Sobasi" [level=4] [ref=e177]
                - paragraph [ref=e178]: Soba
                - generic [ref=e179]:
                  - generic [ref=e180]: ₺1.800,00
                  - generic [ref=e181]: "%50 markup"
                - generic [ref=e182]: ✓ 8 adet
                - generic [ref=e183]:
                  - button "✏️ Düzenle" [ref=e184] [cursor=pointer]
                  - button "🗑️" [ref=e185] [cursor=pointer]
              - generic [ref=e186]:
                - generic [ref=e187]: 🔩
                - heading "Boru Seti" [level=4] [ref=e188]
                - paragraph [ref=e189]: Boru
                - generic [ref=e190]:
                  - generic [ref=e191]: ₺500,00
                  - generic [ref=e192]: "%67 markup"
                - generic [ref=e193]: ✓ 12 adet
                - generic [ref=e194]:
                  - button "✏️ Düzenle" [ref=e195] [cursor=pointer]
                  - button "🗑️" [ref=e196] [cursor=pointer]
            - generic [ref=e198]:
              - generic [ref=e199]:
                - heading "➕ Yeni Ürün" [level=3] [ref=e200]
                - button "×" [ref=e201] [cursor=pointer]
              - generic [ref=e202]:
                - generic [ref=e203]:
                  - generic [ref=e204]:
                    - generic [ref=e205]: Ürün Adı *
                    - textbox "Ürün adı" [ref=e206]
                  - generic [ref=e207]:
                    - generic [ref=e208]: Kategori
                    - combobox [ref=e209]:
                      - option "🔥 Soba" [selected]
                      - option "🔧 Aksesuar"
                      - option "⚙️ Yedek Parca"
                      - option "🔩 Boru"
                      - option "🪵 Pelet"
                  - generic [ref=e210]:
                    - generic [ref=e211]: Tedarikçi (opsiyonel)
                    - combobox [ref=e212]:
                      - option "— Seçilmedi —" [selected]
                      - option "Test Tedarikci"
                  - generic [ref=e213]:
                    - generic [ref=e214]: Marka
                    - textbox "Marka" [ref=e215]
                  - generic [ref=e216]:
                    - generic [ref=e217]: Alış Fiyatı
                    - generic [ref=e218]:
                      - spinbutton [ref=e219]: "0"
                      - combobox [ref=e220]:
                        - option "₺" [selected]
                        - option "$"
                        - option "€"
                  - generic [ref=e221]:
                    - generic [ref=e222]: Satış Fiyatı (₺)
                    - spinbutton [ref=e223]: "0"
                  - generic [ref=e224]:
                    - generic [ref=e225]: Stok
                    - spinbutton [ref=e226]: "0"
                  - generic [ref=e227]:
                    - generic [ref=e228]: Min. Stok
                    - spinbutton [ref=e229]: "5"
                  - generic [ref=e230]:
                    - generic [ref=e231]: Barkod
                    - textbox "Barkod" [ref=e232]
                  - generic [ref=e233]:
                    - generic [ref=e234]: Açıklama
                    - textbox [ref=e235]
                - generic [ref=e236]:
                  - button "💾 Kaydet" [active] [ref=e237] [cursor=pointer]
                  - button "İptal" [ref=e238] [cursor=pointer]
      - button "🤖" [ref=e239]
      - button "+" [ref=e241]
      - button "💡" [ref=e242]
    - region "Notifications alt+T"
  - generic [ref=e243]: "0"
```

# Test source

```ts
  1  | import { expect, test } from '@playwright/test';
  2  | import { gotoApp, openModule, seedAuthenticatedApp } from './helpers/app';
  3  | 
  4  | test.beforeEach(async ({ page }) => {
  5  |   await seedAuthenticatedApp(page);
  6  |   await gotoApp(page);
  7  | });
  8  | 
  9  | test('urun ekleme akisi calisiyor', async ({ page }) => {
  10 |   await openModule(page, 'Ürünler');
  11 |   await page.getByRole('button', { name: '+ Yeni Ürün' }).click();
  12 |   await page.locator('input').first().fill('E2E Urun');
  13 |   await page.getByRole('button', { name: '💾 Kaydet' }).click();
  14 | 
> 15 |   await expect(page.getByText('E2E Urun')).toBeVisible();
     |                                            ^ Error: expect(locator).toBeVisible() failed
  16 | });
  17 | 
  18 | test('urunlerde az stok filtresi aciliyor', async ({ page }) => {
  19 |   await openModule(page, 'Ürünler');
  20 |   await page.getByRole('button', { name: /⚠️ Az/i }).click();
  21 |   await expect(page.getByRole('button', { name: /⚠️ Az/i })).toBeVisible();
  22 | });
  23 | 
  24 | test('tedarikci ekleme akisi calisiyor', async ({ page }) => {
  25 |   await openModule(page, 'Tedarikçi');
  26 |   await page.getByRole('button', { name: '+ Yeni Tedarikçi' }).click();
  27 |   await page.locator('input').first().fill('E2E Tedarikci');
  28 |   await page.getByRole('button', { name: '💾 Kaydet' }).click();
  29 | 
  30 |   await expect(page.getByText('E2E Tedarikci')).toBeVisible();
  31 | });
  32 | 
  33 | test('tedarikci siparis olusturma akisi calisiyor', async ({ page }) => {
  34 |   await openModule(page, 'Tedarikçi');
  35 |   await page.getByRole('button', { name: '+ Sipariş Ver' }).click();
  36 | 
  37 |   await page.locator('select').filter({ hasText: '-- Tedarikçi Seç --' }).first().selectOption({ label: 'Test Tedarikci' });
  38 |   await page.locator('select').filter({ hasText: '-- Ürün Seç --' }).first().selectOption({ label: 'Deneme Sobasi' });
  39 |   await page.getByRole('button', { name: '📦 Sipariş Ver' }).last().click();
  40 | 
  41 |   await expect(page.getByRole('table').getByText('Test Tedarikci')).toBeVisible();
  42 |   await expect(page.getByRole('table').getByText('Deneme Sobasi')).toBeVisible();
  43 | });
  44 | 
```