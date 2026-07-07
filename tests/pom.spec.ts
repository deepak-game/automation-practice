import { Page } from "@playwright/test";

class App {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openPage(url: string) {
    await this.page.goto(url);
  }
}

export default App;
