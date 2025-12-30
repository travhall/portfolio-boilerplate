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

  test("skip link should be focusable and move focus to main", async ({
    page,
  }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skipLink = page.getByRole("link", { name: "Skip to main content" });
    await expect(skipLink).toBeVisible();
    await skipLink.press("Enter");
    await expect(page.locator("main#main-content")).toBeFocused();
  });

  test("mobile menu traps focus and closes with Escape", async ({ page }) => {
    await page.setViewportSize({ width: 480, height: 900 });
    await page.goto("/");
    const menuToggle = page.getByRole("button", { name: "Toggle menu" });
    await menuToggle.click();
    const mobileMenu = page.locator("#mobile-menu");
    await expect(mobileMenu).toBeVisible();
    const firstLink = mobileMenu.locator("a").first();
    await expect(firstLink).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(menuToggle).toBeFocused();
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
