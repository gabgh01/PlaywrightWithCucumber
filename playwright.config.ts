import { defineConfig, devices } from "@playwright/test";
import { defineBddConfig, cucumberReporter } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "features/**/*.feature",
  steps: "src/steps/**/*.ts",
});

export default defineConfig({
  testDir,
  reporter: [
    cucumberReporter("html", { outputFile: "cucumber-report/report.html" }),
    ['html', { open: 'never' }]
  ],
  use:{
    trace:"on",
    baseURL:'https://estadium.enerbit.qa/',
    headless:true,

  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
