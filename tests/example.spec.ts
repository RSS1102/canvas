import { test, expect } from "@playwright/test";

test("rising-stars", async ({ page }) => {
  await page.goto("/#/risingstars");
  await page.waitForTimeout(5000);
});
test("rotate-start", async ({ page }) => {
  await page.goto("/#/rotatestart");
  await page.waitForTimeout(5000);
});
test("tao", async ({ page }) => {
  await page.goto("/#/tao");
  await page.waitForTimeout(5000);
});
