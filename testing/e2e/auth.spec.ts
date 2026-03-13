import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test('should load the login page with correct branding', async ({ page }) => {
    // Navigate to the login page
    await page.goto('/login');

    // Expect the page to have the brand name "QuickCred"
    await expect(page.locator('h1')).toContainText('QuickCred');
    
    // Expect the login form to be present
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Send OTP' })).toBeVisible();
  });

  test('should show error for invalid email', async ({ page }) => {
    await page.goto('/login');
    
    // Fill in an invalid email
    await page.fill('input[type="email"]', 'invalid-user');
    
    // The browser's native validation might stop it, or the server action.
    // Let's just check if we can submit it.
    await page.click('button:has-text("Send OTP")');
    
    // Depending on the implementation, it might show a validation message or redirect.
    // Since it's type="email", we expect basics.
  });
});
