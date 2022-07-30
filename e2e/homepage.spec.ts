import { test, expect } from "@playwright/test";

test("hamepage has title Lens ink", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page).toHaveTitle(/Lens ink/);
});
