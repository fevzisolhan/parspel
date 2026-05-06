# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: finance.spec.ts >> cari duplicate ad kaydi engelleniyor
- Location: e2e\finance.spec.ts:18:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('table').getByText('Ayni Cari')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('table').getByText('Ayni Cari')

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
              - button "Ürünler favorilere ekli, kaldır" [ref=e47] [cursor=pointer]: ★
            - generic [ref=e48]:
              - button "🛒 Satış" [ref=e49] [cursor=pointer]:
                - generic [ref=e50]: 🛒
                - generic [ref=e51]: Satış
              - button "Satış favorilere ekli, kaldır" [ref=e52] [cursor=pointer]: ★
            - generic [ref=e53]:
              - button "🧾 Fatura" [ref=e54] [cursor=pointer]:
                - generic [ref=e55]: 🧾
                - generic [ref=e56]: Fatura
              - button "Fatura favorilere ekle" [ref=e57] [cursor=pointer]: ☆
          - button "Tedarik grubunu genislet" [ref=e59] [cursor=pointer]:
            - generic [ref=e60]: ▶
            - generic [ref=e61]: Tedarik
            - generic [ref=e63]: "3"
          - generic [ref=e64]:
            - button "Finans grubunu daralt" [expanded] [ref=e65] [cursor=pointer]:
              - generic [ref=e66]: ▶
              - generic [ref=e67]: Finans
              - generic [ref=e69]: "4"
            - generic [ref=e70]:
              - button "👤 Cari" [ref=e71] [cursor=pointer]:
                - generic [ref=e72]: 👤
                - generic [ref=e73]: Cari
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
          - heading "👤 Cari" [level=1] [ref=e125]:
            - generic [ref=e126]: 👤
            - text: Cari
          - generic [ref=e128]:
            - generic: 🔍
            - textbox "Ürün, müşteri, modül ara..." [ref=e129]: Ayni Cari
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
              - generic [ref=e149]:
                - generic [ref=e150]: "1"
                - generic [ref=e151]: Toplam Cari
              - generic [ref=e152]:
                - generic [ref=e153]: ₺0,00
                - generic [ref=e154]: Alacak
                - generic [ref=e155]: Müşterilerden
              - generic [ref=e156]:
                - generic [ref=e157]: ₺0,00
                - generic [ref=e158]: Borç
                - generic [ref=e159]: Tedarikçilere
            - generic [ref=e160]:
              - button "+ Yeni Cari" [ref=e161] [cursor=pointer]
              - button "📊 Excel İndir" [ref=e162] [cursor=pointer]
              - button "📥 Ekstre" [ref=e163] [cursor=pointer]
              - textbox "🔍 Ara..." [ref=e164]
              - button "Tümü" [ref=e165] [cursor=pointer]
              - button "👤 Müşteri" [ref=e166] [cursor=pointer]
              - button "🏭 Tedarikçi" [ref=e167] [cursor=pointer]
              - button "Borçlular" [ref=e168] [cursor=pointer]
              - combobox [ref=e169] [cursor=pointer]:
                - option "A–Z" [selected]
                - option "Bakiye ↓"
                - option "En Eski Borç"
            - table [ref=e171]:
              - rowgroup [ref=e172]:
                - row "Ad Tür Telefon Bakiye Borç Süresi Son İşlem" [ref=e173]:
                  - columnheader "Ad" [ref=e174]
                  - columnheader "Tür" [ref=e175]
                  - columnheader "Telefon" [ref=e176]
                  - columnheader "Bakiye" [ref=e177]
                  - columnheader "Borç Süresi" [ref=e178]
                  - columnheader "Son İşlem" [ref=e179]
                  - columnheader [ref=e180]
              - rowgroup [ref=e181]:
                - row "Test Musterisi 👤 Müşteri 05550000000 ₺0,00 — - ✏️ 🗑️" [ref=e182] [cursor=pointer]:
                  - cell "Test Musterisi" [ref=e183]
                  - cell "👤 Müşteri" [ref=e184]
                  - cell "05550000000" [ref=e185]
                  - cell "₺0,00" [ref=e186]
                  - cell "—" [ref=e187]
                  - cell "-" [ref=e188]
                  - cell "✏️ 🗑️" [ref=e189]:
                    - generic [ref=e190]:
                      - button "✏️" [ref=e191]
                      - button "🗑️" [ref=e192]
            - generic [ref=e194]:
              - generic [ref=e195]:
                - heading "➕ Yeni Cari" [level=3] [ref=e196]
                - button "×" [ref=e197] [cursor=pointer]
              - generic [ref=e198]:
                - generic [ref=e199]:
                  - generic [ref=e200]:
                    - generic [ref=e201]: Ad *
                    - textbox [ref=e202]
                  - generic [ref=e203]:
                    - generic [ref=e204]: Tür
                    - combobox [ref=e205]:
                      - option "👤 Müşteri" [selected]
                      - option "🏭 Tedarikçi"
                  - generic [ref=e206]:
                    - generic [ref=e207]: Telefon
                    - textbox [ref=e208]
                  - generic [ref=e209]:
                    - generic [ref=e210]: Vergi No
                    - textbox [ref=e211]
                  - generic [ref=e212]:
                    - generic [ref=e213]: E-posta
                    - textbox [ref=e214]
                  - generic [ref=e215]:
                    - generic [ref=e216]: Adres
                    - textbox [ref=e217]
                  - generic [ref=e218]:
                    - generic [ref=e219]: Not / Açıklama
                    - textbox "Müşteri hakkında notlar..." [ref=e220]
                - generic [ref=e221]:
                  - button "💾 Kaydet" [active] [ref=e222] [cursor=pointer]
                  - button "İptal" [ref=e223] [cursor=pointer]
      - button "🤖" [ref=e224]
      - button "+" [ref=e226]
      - button "⚠️" [ref=e227]
    - region "Notifications alt+T"
  - generic [ref=e228]: "0"
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
  9  | test('cari ekleme akisi calisiyor', async ({ page }) => {
  10 |   await openModule(page, 'Cari');
  11 |   await page.getByRole('button', { name: '+ Yeni Cari' }).click();
  12 |   await page.locator('input').first().fill('Yeni Cari Test');
  13 |   await page.getByRole('button', { name: '💾 Kaydet' }).click();
  14 | 
  15 |   await expect(page.getByRole('table').getByText('Yeni Cari Test')).toBeVisible();
  16 | });
  17 | 
  18 | test('cari duplicate ad kaydi engelleniyor', async ({ page }) => {
  19 |   await openModule(page, 'Cari');
  20 |   await page.getByRole('button', { name: '+ Yeni Cari' }).click();
  21 |   await page.locator('input').first().fill('Ayni Cari');
  22 |   await page.getByRole('button', { name: '💾 Kaydet' }).click();
> 23 |   await expect(page.getByRole('table').getByText('Ayni Cari')).toBeVisible();
     |                                                                ^ Error: expect(locator).toBeVisible() failed
  24 | 
  25 |   await page.getByRole('button', { name: '+ Yeni Cari' }).click();
  26 |   await page.locator('input').first().fill('Ayni Cari');
  27 |   await page.getByRole('button', { name: '💾 Kaydet' }).click();
  28 | 
  29 |   await expect(page.getByText(/adında cari zaten var/i)).toBeVisible();
  30 | });
  31 | 
  32 | test('kasa gelir kaydi olusturuluyor', async ({ page }) => {
  33 |   await openModule(page, 'Kasa');
  34 |   await page.getByRole('button', { name: '+ Gelir' }).click();
  35 |   await page.locator('input[type="number"]').first().fill('1500');
  36 |   await page.getByPlaceholder('Açıklama...').fill('E2E Gelir Kaydi');
  37 |   await page.getByRole('button', { name: '💾 Kaydet' }).click();
  38 | 
  39 |   await expect(page.getByRole('table').getByText('E2E Gelir Kaydi')).toBeVisible();
  40 | });
  41 | 
  42 | test('kasa gider kaydi olusturuluyor', async ({ page }) => {
  43 |   await openModule(page, 'Kasa');
  44 |   await page.getByRole('button', { name: '- Gider' }).click();
  45 |   await page.locator('input[type="number"]').first().fill('200');
  46 |   await page.getByPlaceholder('Açıklama...').fill('E2E Gider Kaydi');
  47 |   await page.getByRole('button', { name: '💾 Kaydet' }).click();
  48 | 
  49 |   await expect(page.getByRole('table').getByText('E2E Gider Kaydi')).toBeVisible();
  50 | });
  51 | 
```