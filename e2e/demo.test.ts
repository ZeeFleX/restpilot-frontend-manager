import { expect, test } from '@playwright/test';

test('Counter should start at 0', async ({ page }) => {
	await page.goto('/signin');
	await expect(page.locator('p')).toContainText('0');
});

test('Button Sign in is present', async ({ page }) => {
	await page.goto('/signin');
	await expect(page.locator('button')).toContainText('Войти');
});

test('Click on button Sign in increments counter', async ({ page }) => {
	await page.goto('/signin');

	let counter = + await page.locator('p').innerText();
	const button = await page.locator('button');
	await expect(counter === 0).toBeTruthy();

	await button.click();
	counter = + await page.locator('p').innerText();
	await expect(counter === 1).toBeTruthy();

	await button.click();
	counter = + await page.locator('p').innerText();
	await expect(counter === 2).toBeTruthy();
});
