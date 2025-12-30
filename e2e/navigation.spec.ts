import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should navigate to home page", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Alex Rivera/);
    await expect(
      page.getByRole("heading", { name: /Alex Rivera/i })
    ).toBeVisible();
  });

  test("should navigate to work page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /view my work/i }).click();
    await expect(page).toHaveURL("/work");
    await expect(
      page.getByRole("heading", { name: /selected work/i })
    ).toBeVisible();
  });

  test("should navigate to about page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /about me/i }).click();
    await expect(page).toHaveURL("/about");
    await expect(
      page.getByRole("heading", { name: /about me/i })
    ).toBeVisible();
  });

  test("should navigate to contact page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: /get in touch/i }).first().click();
    await expect(page).toHaveURL("/contact");
  });
});
