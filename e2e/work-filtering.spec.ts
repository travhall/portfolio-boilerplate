import { test, expect } from "@playwright/test";

test.describe("Work Page Filtering", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/work");
  });

  test("should display all projects by default", async ({ page }) => {
    const projectCount = await page.locator('[role="link"]').count();
    expect(projectCount).toBeGreaterThan(0);
  });

  test("should filter projects by category", async ({ page }) => {
    // Click on a category filter
    const categoryButton = page
      .getByRole("button", { name: /design systems/i })
      .first();

    if ((await categoryButton.count()) > 0) {
      await categoryButton.click();

      // Verify the filter is applied
      await expect(
        page.getByText(/showing \d+ project/i)
      ).toBeVisible();
    }
  });

  test("should sort projects", async ({ page }) => {
    // Open sort dropdown
    await page.getByRole("combobox").click();

    // Select a sort option
    await page.getByRole("option", { name: /title \(a-z\)/i }).click();

    // Verify sorting is applied (check that projects are displayed)
    await expect(
      page.getByText(/showing \d+ project/i)
    ).toBeVisible();
  });

  test("should navigate to case study", async ({ page }) => {
    // Click on the first project card
    const firstProject = page.locator('[href^="/work/"]').first();
    await firstProject.click();

    // Verify navigation to case study page
    await expect(page).toHaveURL(/\/work\/.+/);
  });
});
