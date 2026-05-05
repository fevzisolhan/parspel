import { test, expect } from '@playwright/test';

test('anasayfa yükleniyor', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Parspel/i);
});

test('uygulama açılıyor', async ({ page }) => {
  await page.goto('/');
  // Sayfanın yüklendiğini doğrula
  await expect(page.locator('body')).toBeVisible();
});
