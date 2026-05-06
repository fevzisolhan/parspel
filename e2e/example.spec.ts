import { test, expect } from '@playwright/test';

const seededDb = {
  products: [
    {
      id: 'urun-1',
      name: 'Deneme Sobası',
      category: 'soba',
      cost: 1200,
      price: 1800,
      stock: 8,
      minStock: 2,
      createdAt: '2026-05-06T09:00:00.000Z',
      updatedAt: '2026-05-06T09:00:00.000Z',
    },
  ],
  cari: [
    {
      id: 'cari-1',
      name: 'Test Müşterisi',
      type: 'musteri',
      balance: 0,
      phone: '05550000000',
      createdAt: '2026-05-06T09:00:00.000Z',
      updatedAt: '2026-05-06T09:00:00.000Z',
    },
  ],
  sales: [],
  kasa: [],
  stockMovements: [],
};

async function seedAuthenticatedApp(page: Parameters<typeof test>[0]['page']) {
  await page.addInitScript((db) => {
    window.localStorage.setItem('sobaYonetim_setupDone', '1');
    window.localStorage.setItem('sobaYonetim_setupApplied', '1');
    window.localStorage.setItem('sobaYonetim', JSON.stringify(db));
    window.sessionStorage.setItem('sobaUser_session', JSON.stringify({
      userId: 'admin-1',
      username: 'admin',
      role: 'admin',
      ts: Date.now(),
    }));
  }, seededDb);
}

test('anasayfa yükleniyor', async ({ page }) => {
  await seedAuthenticatedApp(page);
  await page.goto('/');
  await expect(page).toHaveTitle(/Parspel/i);
  await expect(page.getByText('Hızlı Erişim')).toBeVisible();
});

test('favori modül pinlenebiliyor', async ({ page }) => {
  await seedAuthenticatedApp(page);
  await page.goto('/');

  await page.getByLabel('Analiz grubunu genislet').click();
  await page.getByLabel('Raporlar favorilere ekle').click();

  await expect(page.getByRole('region', { name: 'Hızlı erişim' }).getByLabel('Raporlar hızlı erişim')).toBeVisible();
});

test('satış akışı yeni kayıt oluşturuyor', async ({ page }) => {
  await seedAuthenticatedApp(page);
  await page.goto('/');

  await page.getByText('Satış', { exact: true }).first().click();
  await page.getByRole('button', { name: '+ Yeni Satış' }).click();

  await page.locator('select').first().selectOption('urun-1');
  await page.getByRole('button', { name: '-- Müşteri Seç (zorunlu) --' }).click();
  await page.getByRole('button', { name: 'Test Müşterisi 05550000000' }).click();
  await page.getByRole('button', { name: /Satışı Kaydet/i }).click();

  await expect(page.getByText('Deneme Sobası')).toBeVisible();
  await expect(page.getByText('Test Müşterisi')).toBeVisible();
  await expect(page.getByText('✓ Tamamlandı')).toBeVisible();
});
