import { test, expect, chromium } from '@playwright/test';

test('Prueba en la pagina GitHub', async ({ }) => {

    // Add Video Slow Motion 
    const browserChrome = await chromium.launch({
        slowMo: 1000,
        headless: false
    })
    const context = await browserChrome.newContext({
        recordVideo: {
            dir: 'video/',
            size: { width: 800, height: 600 }
        }
    });

    const page = await context.newPage();

    // Go to https://github.com/smavo
    await page.goto('https://github.com/smavo');

    // Click [aria-label="Contribution activity in 2021"]
    await page.locator('[aria-label="Contribution activity in 2021"]').click();
    await expect(page).toHaveURL('https://github.com/smavo?tab=overview&from=2021-12-01&to=2021-12-31');

    // Click [aria-label="Contribution activity in 2022"]
    await page.locator('[aria-label="Contribution activity in 2022"]').click();
    await expect(page).toHaveURL('https://github.com/smavo?tab=overview&from=2022-09-01&to=2022-09-09');

    // Click text=Repositories 247 >> nth=0
    await page.locator('text=Repositories 247').first().click();
    await expect(page).toHaveURL('https://github.com/smavo?tab=repositories');

    // Click text=Overview >> nth=0
    await page.locator('text=Overview').first().click();
    await expect(page).toHaveURL('https://github.com/smavo');

});