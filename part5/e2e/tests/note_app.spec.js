const { test, expect, describe, beforeEach } = require('@playwright/test');

describe('Note app', () => {
  beforeEach(async ({ page, request }) => {
    await request.post('http://localhost:3000/api/testing/reset');
    await request.post('http://localhost:3000/api/users', {
      data: {
        name: 'Kai',
        username: 'kai',
        password: 'super',
      },
    });

    await page.goto('http://localhost:5173');
  });

  test('front page can be opened', async ({ page }) => {
    const locator = await page.getByText('Notes');
    await expect(locator).toBeVisible();
    await expect(
      page.getByText(
        'Note app, Department of Computer Science, University of Helsinki 2024'
      )
    ).toBeVisible();
  });

  test('user can log in', async ({ page }) => {
    await page.getByRole('button', { name: 'login' }).click();
    await page.getByTestId('username').fill('kai');
    await page.getByTestId('password').fill('super');
    await page.getByRole('button', { name: 'login' }).click();

    await expect(page.getByText('Kai logged-in')).toBeVisible();
  });

  describe('when logged in', () => {
    beforeEach(async ({ page }) => {
      await page.getByRole('button', { name: 'login' }).click();
      await page.getByTestId('username').fill('kai');
      await page.getByTestId('password').fill('super');
      await page.getByRole('button', { name: 'login' }).click();
    });

    test('a new note can be created', async ({ page }) => {
      await page.getByRole('button', { name: 'new note' }).click();
      await page.getByRole('textbox').fill('a note created by playwright');
      await page.getByRole('button', { name: 'save' }).click();
      await expect(
        page.getByText('a note created by playwright')
      ).toBeVisible();
    });
  });
});
