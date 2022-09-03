const { test, expect } = require('@playwright/test');

test('Test en Saucedemo', async ({ page }) => {
    
    // Go to https://www.saucedemo.com/
    await page.goto('https://www.saucedemo.com/');

    // Click [data-test="username"]
    await page.locator('[data-test="username"]').click();

    // Fill [data-test="username"]
    await page.locator('[data-test="username"]').fill('standard_user');

    // Click [data-test="password"]
    await page.locator('[data-test="password"]').click();

    // Fill [data-test="password"]
    await page.locator('[data-test="password"]').fill('secret_sauce');

    // Click [data-test="login-button"]
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // Click text=Open Menu
    await page.locator('text=Open Menu').click();

    // Click text=Close Menu
    await page.locator('text=Close Menu').click();

});