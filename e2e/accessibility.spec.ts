import { test, expect } from "@playwright/test";

test.describe("Accessibility", () => {
  test("home page should be keyboard navigable", async ({ page }) => {
    await page.goto("/");

    // Tab through interactive elements
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");

    // Verify focus is visible
    const focusedElement = await page.locator(":focus");
    await expect(focusedElement).toBeVisible();
  });

  test("work page filters should be keyboard accessible", async ({ page }) => {
    await page.goto("/work");

    // Tab to filter buttons
    await page.keyboard.press("Tab");
    const firstFilter = page.locator(":focus");
    await expect(firstFilter).toBeVisible();

    // Press Enter to activate
    await page.keyboard.press("Enter");
  });

  test("should have proper heading hierarchy", async ({ page }) => {
    await page.goto("/");

    // Check for h1
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();

    // Verify heading levels
    const headings = await page.locator("h1, h2, h3, h4, h5, h6").all();
    expect(headings.length).toBeGreaterThan(0);
  });

  test("images should have alt text", async ({ page }) => {
    await page.goto("/");

    // Get all images
    const images = await page.locator("img").all();

    for (const img of images) {
      const alt = await img.getAttribute("alt");
      expect(alt).toBeTruthy();
    }
  });

  test("links should have accessible names", async ({ page }) => {
    await page.goto("/");

    const links = await page.locator("a").all();

    for (const link of links) {
      const text = await link.textContent();
      const ariaLabel = await link.getAttribute("aria-label");
      expect(text || ariaLabel).toBeTruthy();
    }
  });
});
