import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;
  private readonly username: Locator;
  private readonly password: Locator;
  private readonly submitButton: Locator;
 // private readonly errorMessage:Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('input[name="email"]');
    this.password = page.locator('input[name="password"]');
    this.submitButton = page.getByRole("button", { name: "Iniciar sesión" });
    //this.errorMessage = page.getByText('')
  }

  public async login(username: string, password: string): Promise<void> {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submitButton.click();
  }
}
