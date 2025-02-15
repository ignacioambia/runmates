import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect((await page.locator('app-home div').innerText()).trim()).toContain('Runmates app working!');
});
