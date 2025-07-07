import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  reporter: [["html", { open: "never" }]], // Opcional: reporte HTML
  use: {
    baseURL: "http://localhost:5173",
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
});
