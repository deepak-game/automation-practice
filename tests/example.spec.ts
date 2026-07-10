import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
});

test("validating POST request", async ({ request }) => {
  const response = await request.post("https://dummyjson.com/auth/login", {
    headers: {
      Accept: "application/json",
    },
    data: {
      username: "emilys",
      password: "emilyspass",
    },
  });

  const res = await response.json();
  const token = res.accessToken;

  expect(response.ok()).toBe(true);
  expect(response.status()).toBe(200);

  const userRes = await request.get("https://dummyjson.com/auth/me", {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await userRes.json();
  console.log(data);
});
