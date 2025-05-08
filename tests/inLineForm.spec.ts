import { test, expect } from '@playwright/test';

test('klicka fram o fyll i info INLINE form', async ({ page }) => {
    await page.goto('http://localhost:4200/pages/iot-dashboard');
    page.getByRole('link', { name: 'PW-test' });
    await page.getByRole('link', { name: 'Forms' }).click();
    await page.getByRole('link', { name: 'Form Layouts' }).click();
    await page.fill('[placeholder="Jane Doe"]', 'Stefan Andersson');
    await page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByPlaceholder('Email').click();
    await page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByRole('button').click();
  
});

test('Sidan /pages/forms/datepicker laddas korrekt', async ({ page }) => {
  const response = await page.goto('http://localhost:4200/pages/forms/datepicker');
  expect(response?.status()).toBe(200);
});
