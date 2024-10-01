

import { expect } from "@playwright/test";
import { LoginPage } from "../../pages/login-page/login.page";
import { Given, Then, When } from "../fixtures";

let login:LoginPage;



Given('I was opened estium enerbit web', async ({page}) => {
  await page.goto('/');
  login = new LoginPage(page);
});

// 2. Missing step definition for "features/login_web_app/login.feature:4:9"
When('ingress login credential with username {string} and password {string}', async ({page}, username: string, password: string) => {
  await login.login(username,password);
});

// 3. Missing step definition for "features/login_web_app/login.feature:5:9"
Then('should see error message {string}', async ({page}, message: string) => {
  await expect(page.getByText(message,{exact:true})).toBeVisible({timeout:15000});
});