import { test, expect, Page } from "@playwright/test";
import App from "./pom";

test("Enter name", async ({ page, browserName, context }) => {
  const newApp = new App(page);
  await newApp.openPage("https://testautomationpractice.blogspot.com/");
  await page.locator("#name").fill("jonas sharma");
  await page.waitForTimeout(1000);
});

test("Enter email", async ({ page }) => {
  test.fail();
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#email").fill("jonas@gmail.com");
  await page.waitForTimeout(1000);
});

// export class LoginPage {
//   readonly page: Page;
//   readonly usernameInput = () => this.page.getByLabel("Username");
//   readonly loginButton = () =>
//     this.page.getByRole("button", { name: "Log in" });

//   constructor(page: Page) {
//     this.page = page;
//   }

//   async login(user: string, pass: string) {
//     await this.usernameInput().fill(user);
//     await this.loginButton().click();
//   }
// }
