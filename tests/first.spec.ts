import { test, expect, Page } from "@playwright/test";
import App from "./pom.spec";

test("Enter name", async ({ page, browserName, context }) => {
  const newApp = new App(page);
  await newApp.openPage("https://testautomationpractice.blogspot.com/");
  await page.locator("#name").fill("jonas sharma");
  await page.waitForTimeout(1000);
});

test("Enter email", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#email").fill("jonas@gmail.com");
  await page.waitForTimeout(1000);
});
