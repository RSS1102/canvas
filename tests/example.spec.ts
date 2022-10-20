import { test, expect } from "@playwright/test";

test("risingstars", async ({ page }) => {
  await page.goto("/#/risingstars");
  await page.waitForTimeout(5000);
});
test("rotatestart", async ({ page }) => {
  await page.goto("/#/rotatestart");
  await page.waitForTimeout(5000);
});
