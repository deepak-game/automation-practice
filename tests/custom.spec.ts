import { test as base, Page } from "@playwright/test";

//defining type for custom fixture
interface MyCustom {
  gotoApp: Page;
}

const test = base.extend<MyCustom>({
  gotoApp: async ({ page }, use) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await use(page);
    console.log("cleanup callled!");
  },
});

export { test };
