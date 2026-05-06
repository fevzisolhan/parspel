# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: inventory.spec.ts >> tedarikci siparis olusturma akisi calisiyor
- Location: e2e\inventory.spec.ts:33:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: /Tedarikçi/i })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: /Tedarikçi/i })

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
              - button "Özet favorilere ekli, kaldır" [ref=e43] [cursor=pointer]: ★
            - generic [ref=e44]:
              - button "📦 Ürünler" [ref=e45] [cursor=pointer]:
                - generic [ref=e46]: 📦
                - generic [ref=e47]: Ürünler
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
          - heading "📊 Özet" [level=1] [ref=e125]:
            - generic [ref=e126]: 📊
            - text: Özet
          - generic [ref=e128]:
            - generic: 🔍
            - textbox "Ürün, müşteri, modül ara..." [ref=e129]
          - generic [ref=e130]:
            - generic [ref=e131]:
              - button "⌘1" [ref=e132] [cursor=pointer]
              - button "⌘2" [ref=e133] [cursor=pointer]
              - button "⌘3" [ref=e134] [cursor=pointer]
              - button "⌘4" [ref=e135] [cursor=pointer]
            - button "🔔" [ref=e137] [cursor=pointer]
            - generic [ref=e140]: Firebase
            - button "💾 Yedek" [ref=e141] [cursor=pointer]
            - generic [ref=e142]: 06 May 2026
            - button "👤 admin" [ref=e144] [cursor=pointer]
        - main [ref=e145]:
          - generic [ref=e146]:
            - generic [ref=e147]:
              - button "‹"
              - button "›" [ref=e148] [cursor=pointer]
              - generic [ref=e149]:
                - generic [ref=e151] [cursor=pointer]:
                  - generic: 💰
                  - generic [ref=e153]: 💰
                  - generic [ref=e154]: ₺0,00
                  - generic [ref=e155]: ▲ 0.0% dün
                  - generic [ref=e156]: Bugün Ciro
                  - generic [ref=e157]: 0 satış
                  - generic [ref=e158]: →
                - generic [ref=e160]:
                  - generic: 📈
                  - generic [ref=e162]: 📈
                  - generic [ref=e163]: ₺0,00
                  - generic [ref=e164]: Bugün Kâr
                  - generic [ref=e165]: 0% marj
                - generic [ref=e167]:
                  - generic: 📅
                  - generic [ref=e169]: 📅
                  - generic [ref=e170]: ₺0,00
                  - generic [ref=e171]: Bu Ay Ciro
                  - generic [ref=e172]: "Kâr: ₺0,00"
                - generic [ref=e174] [cursor=pointer]:
                  - generic: 📦
                  - generic [ref=e176]: 📦
                  - generic [ref=e177]: ₺13.200,00
                  - generic [ref=e178]: Stok Değeri
                  - generic [ref=e179]: 2 ürün
                  - generic [ref=e180]: →
                - generic [ref=e182] [cursor=pointer]:
                  - generic: 💵
                  - generic [ref=e184]: 💵
                  - generic [ref=e185]: ₺0,00
                  - generic [ref=e186]: Nakit Kasa
                  - generic [ref=e187]: →
                - generic [ref=e189] [cursor=pointer]:
                  - generic: 🏦
                  - generic [ref=e191]: 🏦
                  - generic [ref=e192]: ₺0,00
                  - generic [ref=e193]: Banka
                  - generic [ref=e194]: →
                - generic [ref=e196] [cursor=pointer]:
                  - generic: 📋
                  - generic [ref=e198]: 📋
                  - generic [ref=e199]: ₺0,00
                  - generic [ref=e200]: Alacak
                  - generic [ref=e201]: →
                - generic [ref=e203] [cursor=pointer]:
                  - generic: ⚠️
                  - generic [ref=e205]: ⚠️
                  - generic [ref=e206]: "0"
                  - generic [ref=e207]: Stok Uyarısı
                  - generic [ref=e208]: 0 bitti · 0 az
                  - generic [ref=e209]: →
            - generic [ref=e210]:
              - generic [ref=e211]:
                - generic [ref=e212]: VERSİYON
                - generic [ref=e213]: v0
              - generic [ref=e214]:
                - generic [ref=e215]: DEPOLAMA
                - generic [ref=e216]: 0.00 MB
                - generic [ref=e218]: "%0"
              - button "💾 Yedek Yönetimi" [ref=e219] [cursor=pointer]
            - generic [ref=e220]:
              - generic [ref=e221]:
                - generic [ref=e222]: ⚖️
                - generic [ref=e223]: Gün Sonu Dengesi
                - generic [ref=e224]: Kasa + Banka + Alacak − Borç = Net Sermaye
              - generic [ref=e225]:
                - generic [ref=e226]:
                  - generic [ref=e227]: Nakit Kasa
                  - generic [ref=e228]: ₺0,00
                - generic [ref=e229]: +
                - generic [ref=e230]:
                  - generic [ref=e231]: Banka
                  - generic [ref=e232]: ₺0,00
                - generic [ref=e233]: +
                - generic [ref=e234]:
                  - generic [ref=e235]: Müşteri Alacağı
                  - generic [ref=e236]: ₺0,00
                - generic [ref=e237]: −
                - generic [ref=e238]:
                  - generic [ref=e239]: Tedarikçi Borcu
                  - generic [ref=e240]: ₺0,00
                - generic [ref=e241]: =
                - generic [ref=e242]:
                  - generic [ref=e243]: Net Sermaye
                  - generic [ref=e244]: ₺0,00
            - generic [ref=e245]:
              - generic [ref=e246]:
                - generic [ref=e248]:
                  - generic [ref=e249]:
                    - generic [ref=e250]:
                      - heading "Son 7 Günlük Performans" [level=3] [ref=e251]
                      - paragraph [ref=e252]: Ciro ve kâr trendi
                    - generic [ref=e253]:
                      - generic [ref=e256]: Ciro
                      - generic [ref=e259]: Kâr
                  - img [ref=e262]:
                    - generic [ref=e264]:
                      - generic [ref=e266]: 30/04
                      - generic [ref=e268]: 01/05
                      - generic [ref=e270]: 02/05
                      - generic [ref=e272]: 03/05
                      - generic [ref=e274]: 04/05
                      - generic [ref=e276]: 05/05
                      - generic [ref=e278]: 06/05
                    - generic [ref=e280]:
                      - generic [ref=e282]: "0"
                      - generic [ref=e284]: "1"
                      - generic [ref=e286]: "2"
                      - generic [ref=e288]: "3"
                      - generic [ref=e290]: "4"
                - generic [ref=e292]:
                  - generic [ref=e293]:
                    - generic [ref=e294]:
                      - heading "🛒 Son Satışlar" [level=3] [ref=e295]
                      - paragraph [ref=e296]: 0 toplam kayıt
                    - button "Tümü →" [ref=e297] [cursor=pointer]
                  - generic [ref=e298]:
                    - generic [ref=e299]: 🛒
                    - paragraph [ref=e300]: Henüz satış yok
                - generic [ref=e302]:
                  - generic [ref=e303]:
                    - generic [ref=e304]: 💡
                    - heading "Akıllı Öneriler" [level=3] [ref=e305]
                  - generic [ref=e308]:
                    - generic [ref=e309]: 💡
                    - generic [ref=e310]: Bugün henüz satış yapılmadı. Hızlı satış için + butonunu kullanın.
                    - button "Satışlara Git →" [ref=e311] [cursor=pointer]
                - generic [ref=e313]:
                  - generic [ref=e314]: "📊 Excel İndir:"
                  - button "Tüm Rapor" [ref=e315] [cursor=pointer]
                  - button "Satışlar" [ref=e316] [cursor=pointer]
                  - button "Stok" [ref=e317] [cursor=pointer]
                  - button "Kasa" [ref=e318] [cursor=pointer]
              - generic [ref=e319]:
                - generic [ref=e320]:
                  - generic [ref=e321]:
                    - generic [ref=e322]: ☀️
                    - generic [ref=e323]: Parlaklık
                    - generic [ref=e324]: 100%
                  - slider [ref=e325] [cursor=pointer]: "100"
                  - generic [ref=e326]:
                    - generic [ref=e327]: 🌙 Karanlık
                    - generic [ref=e328]: ☀️ Parlak
                - generic [ref=e329]:
                  - generic [ref=e330]:
                    - generic [ref=e331]: 🧩
                    - generic [ref=e332]: Widget Yönetimi
                  - generic [ref=e333]:
                    - generic [ref=e334]:
                      - generic [ref=e335]: 📈
                      - generic [ref=e336]: Performans Grafiği
                      - generic [ref=e337]:
                        - button "▲" [disabled] [ref=e338]
                        - button "▼" [ref=e339] [cursor=pointer]
                      - button "−" [ref=e340] [cursor=pointer]
                    - generic [ref=e341]:
                      - generic [ref=e342]: 📊
                      - generic [ref=e343]: Hızlı Özet
                      - button "+" [ref=e344] [cursor=pointer]
                    - generic [ref=e345]:
                      - generic [ref=e346]: 🛒
                      - generic [ref=e347]: Son Satışlar
                      - generic [ref=e348]:
                        - button "▲" [ref=e349] [cursor=pointer]
                        - button "▼" [ref=e350] [cursor=pointer]
                      - button "−" [ref=e351] [cursor=pointer]
                    - generic [ref=e352]:
                      - generic [ref=e353]: 💡
                      - generic [ref=e354]: Akıllı Öneriler
                      - generic [ref=e355]:
                        - button "▲" [ref=e356] [cursor=pointer]
                        - button "▼" [ref=e357] [cursor=pointer]
                      - button "−" [ref=e358] [cursor=pointer]
                    - generic [ref=e359]:
                      - generic [ref=e360]: ⚠️
                      - generic [ref=e361]: Stok Uyarıları
                      - button "+" [ref=e362] [cursor=pointer]
                    - generic [ref=e363]:
                      - generic [ref=e364]: 📋
                      - generic [ref=e365]: Son Aktiviteler
                      - button "+" [ref=e366] [cursor=pointer]
                    - generic [ref=e367]:
                      - generic [ref=e368]: 📊
                      - generic [ref=e369]: Excel İndir
                      - generic [ref=e370]:
                        - button "▲" [ref=e371] [cursor=pointer]
                        - button "▼" [disabled] [ref=e372]
                      - button "−" [ref=e373] [cursor=pointer]
                    - generic [ref=e374]:
                      - generic [ref=e375]: 🍩
                      - generic [ref=e376]: Kategori Dağılımı
                      - button "+" [ref=e377] [cursor=pointer]
                    - generic [ref=e378]:
                      - generic [ref=e379]: 🏦
                      - generic [ref=e380]: Gün Sonu Kasa Sayımı
                      - button "+" [ref=e381] [cursor=pointer]
                    - generic [ref=e382]:
                      - generic [ref=e383]: 💾
                      - generic [ref=e384]: Yedek Hatırlatma
                      - button "+" [ref=e385] [cursor=pointer]
                - generic [ref=e386]:
                  - generic [ref=e387]:
                    - generic [ref=e388]: ⚡
                    - generic [ref=e389]: Hızlı İşlemler
                  - generic [ref=e390]:
                    - button "🛒 Yeni Satış →" [ref=e391] [cursor=pointer]:
                      - generic [ref=e392]: 🛒
                      - text: Yeni Satış
                      - generic [ref=e393]: →
                    - button "📦 Ürün Ekle →" [ref=e394] [cursor=pointer]:
                      - generic [ref=e395]: 📦
                      - text: Ürün Ekle
                      - generic [ref=e396]: →
                    - button "🧾 Fatura Oluştur →" [ref=e397] [cursor=pointer]:
                      - generic [ref=e398]: 🧾
                      - text: Fatura Oluştur
                      - generic [ref=e399]: →
                    - button "💰 Kasa İşlemi →" [ref=e400] [cursor=pointer]:
                      - generic [ref=e401]: 💰
                      - text: Kasa İşlemi
                      - generic [ref=e402]: →
                    - button "📈 Raporlar →" [ref=e403] [cursor=pointer]:
                      - generic [ref=e404]: 📈
                      - text: Raporlar
                      - generic [ref=e405]: →
      - button "🤖" [ref=e406]
      - button "+" [ref=e408]
      - button "🐛" [ref=e409]
    - region "Notifications alt+T"
  - generic [ref=e410]: "0"
```

# Test source

```ts
  55  |   stockMovements: [],
  56  |   bankTransactions: [],
  57  |   matchRules: [],
  58  |   monitorRules: [],
  59  |   monitorLog: [],
  60  |   peletSuppliers: [],
  61  |   peletOrders: [],
  62  |   boruSuppliers: [],
  63  |   boruOrders: [],
  64  |   invoices: [],
  65  |   budgets: [],
  66  |   returns: [],
  67  |   _activityLog: [],
  68  |   company: { id: 'company-1', createdAt: '2026-05-06T09:00:00.000Z' },
  69  |   settings: {},
  70  |   pelletSettings: { gramaj: 14, kgFiyat: 6.5, cuvalKg: 15, critDays: 3 },
  71  |   ortakEmanetler: [],
  72  |   installments: [],
  73  |   partners: [],
  74  |   productCategories: [
  75  |     { id: 'soba', name: 'Soba', icon: '🔥', createdAt: '2026-05-06T09:00:00.000Z' },
  76  |     { id: 'aksesuar', name: 'Aksesuar', icon: '🔧', createdAt: '2026-05-06T09:00:00.000Z' },
  77  |     { id: 'yedek', name: 'Yedek Parca', icon: '⚙️', createdAt: '2026-05-06T09:00:00.000Z' },
  78  |     { id: 'boru', name: 'Boru', icon: '🔩', createdAt: '2026-05-06T09:00:00.000Z' },
  79  |     { id: 'pelet', name: 'Pelet', icon: '🪵', createdAt: '2026-05-06T09:00:00.000Z' },
  80  |   ],
  81  |   notes: [],
  82  |   _auditLog: [],
  83  |   kasalar: [
  84  |     { id: 'nakit', name: 'Nakit', icon: '💵' },
  85  |     { id: 'banka', name: 'Banka', icon: '🏦' },
  86  |     { id: 'pos_ziraat', name: 'POS Ziraat', icon: '🏧' },
  87  |     { id: 'pos_is', name: 'POS Is', icon: '🏧' },
  88  |     { id: 'pos_yk', name: 'POS YapiKredi', icon: '🏧' },
  89  |   ],
  90  | };
  91  | 
  92  | function cloneSeed() {
  93  |   return JSON.parse(JSON.stringify(baseSeedDb));
  94  | }
  95  | 
  96  | export async function seedAuthenticatedApp(page: Page, mutate?: (db: any) => void) {
  97  |   const db = cloneSeed();
  98  |   if (mutate) mutate(db);
  99  | 
  100 |   await page.addInitScript((seedDb) => {
  101 |     window.localStorage.setItem('sobaYonetim_setupDone', '1');
  102 |     window.localStorage.setItem('sobaYonetim_setupApplied', '1');
  103 |     window.localStorage.setItem('sobaYonetim', JSON.stringify(seedDb));
  104 |     window.sessionStorage.setItem('sobaUser_session', JSON.stringify({
  105 |       userId: 'admin-1',
  106 |       username: 'admin',
  107 |       role: 'admin',
  108 |       ts: Date.now(),
  109 |     }));
  110 |   }, db);
  111 | }
  112 | 
  113 | export async function gotoApp(page: Page) {
  114 |   await page.goto('/');
  115 |   await expect(page).toHaveTitle(/Parspel/i);
  116 | }
  117 | 
  118 | function escapeRegExp(value: string) {
  119 |   return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  120 | }
  121 | 
  122 | const MODULE_GROUP: Record<string, string> = {
  123 |   'Tedarikçi': 'Tedarik',
  124 |   'Boruted': 'Tedarik',
  125 |   'Cari': 'Finans',
  126 |   'Kasa': 'Finans',
  127 |   'Bütçe': 'Finans',
  128 |   'Banka': 'Finans',
  129 |   'Raporlar': 'Analiz',
  130 |   'Ayarlar': 'Sistem',
  131 | };
  132 | 
  133 | async function ensureGroupOpen(page: Page, moduleLabel: string) {
  134 |   const group = MODULE_GROUP[moduleLabel];
  135 |   if (!group) return;
  136 |   const toggle = page.getByRole('button', { name: new RegExp(`${escapeRegExp(group)}\\s+grubunu`, 'i') }).first();
  137 |   if (await toggle.count()) {
  138 |     const name = ((await toggle.textContent()) || '').toLowerCase();
  139 |     if (name.includes('genislet')) {
  140 |       await toggle.click();
  141 |     }
  142 |   }
  143 | }
  144 | 
  145 | export async function openModule(page: Page, label: string) {
  146 |   await ensureGroupOpen(page, label);
  147 | 
  148 |   const buttonByName = page.getByRole('button', { name: new RegExp(`(^|\\s)${escapeRegExp(label)}(\\s|$)`, 'i') }).first();
  149 |   if (await buttonByName.count()) {
  150 |     await buttonByName.click();
  151 |   } else {
  152 |     await page.getByText(label, { exact: false }).first().click();
  153 |   }
  154 | 
> 155 |   await expect(page.getByRole('heading', { name: new RegExp(label, 'i') })).toBeVisible();
      |                                                                             ^ Error: expect(locator).toBeVisible() failed
  156 | }
  157 | 
  158 | export async function readDb(page: Page) {
  159 |   return await page.evaluate(() => {
  160 |     const raw = window.localStorage.getItem('sobaYonetim');
  161 |     return raw ? JSON.parse(raw) : null;
  162 |   });
  163 | }
  164 | 
```