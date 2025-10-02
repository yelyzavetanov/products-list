import { expect, test } from '@playwright/test'

// Order component
test.describe('OrderBlockComponent', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en')
  })

  test('should render select options from API', async ({ page }) => {
    const select = page.locator('[data-testid="order-select"]')
    await expect(select).toBeVisible()

    await select.click()

    const optionDirect = page.locator('[data-testid="order-option-direct"]')
    const optionReverse = page.locator('[data-testid="order-option-reverse"]')
    await expect(optionDirect).toBeVisible()
    await expect(optionReverse).toBeVisible()
  })

  test('should select Direct and submit', async ({ page }) => {
    const select = page.locator('[data-testid="order-select"]')
    await select.click()

    await page.locator('[data-testid="order-option-direct"]').click()

    await page.locator('[data-testid="submit-order"]').click()
  })

  test('should reset order selection', async ({ page }) => {
    const resetBtn = page.locator('[data-testid="reset-order"]')
    await resetBtn.click()

    const select = page.locator('[data-testid="order-select"]')
    await expect(select).toHaveText('Direct')
  })
})
