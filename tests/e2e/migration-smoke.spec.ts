import { test, expect } from '@playwright/test';

const paletteAiOrigin = process.env.PALETTE_AI_ORIGIN || 'http://127.0.0.1:3000';
const adminUser = process.env.ADMIN_USERNAME || 'studio-admin';
const adminPass = process.env.ADMIN_PASSWORD || 'studio-pass';

test('palette_ai chat entrypoint is reachable', async ({ page }) => {
  await page.goto(`${paletteAiOrigin}/main`);
  await expect(page.getByText('こんにちは！Palette AIです。', { exact: false })).toBeVisible();
});

test('pal_studio admin requires login, then allows access', async ({ page }) => {
  await page.goto('/admin');
  await expect(page).toHaveURL(/\/login/);
  await expect(page.getByText('管理者ログイン')).toBeVisible();

  await page.getByPlaceholder('admin id').fill(adminUser);
  await page.getByPlaceholder('password').fill(adminPass);
  await page.getByRole('button', { name: 'ログイン' }).click();

  await expect(page).toHaveURL(/\/admin/);
  await expect(page.getByText('Palette Lab')).toBeVisible();
});

test('customer save/get/public page flow works in pal_studio', async ({ request, page }) => {
  const customerId = `e2e-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const html = `<!doctype html><html lang="ja"><head><meta charset="utf-8"><title>E2E Test</title></head><body><h1>Smoke Test Page</h1></body></html>`;

  const saveRes = await request.post('/api/save-customer', {
    data: {
      id: customerId,
      customer_id: customerId,
      name: 'E2E Customer',
      status: 'reviewing',
      answers: [{ q: 'Q1', a: 'A1' }],
      description: 'e2e',
      htmlCode: html,
    },
  });
  expect(saveRes.ok()).toBeTruthy();

  const listRes = await request.get('/api/get-customers');
  expect(listRes.ok()).toBeTruthy();
  const customers = await listRes.json();
  expect(Array.isArray(customers)).toBeTruthy();
  expect(customers.some((item: any) => item?.id === customerId || item?.customer_id === customerId)).toBeTruthy();

  await page.goto(`/${encodeURIComponent(customerId)}/pages`);
  await expect(page.getByText('Smoke Test Page')).toBeVisible();

  const deleteRes = await request.post('/api/delete-customer', {
    data: { id: customerId },
  });
  expect(deleteRes.ok()).toBeTruthy();
});
