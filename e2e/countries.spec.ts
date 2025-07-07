import { test, expect } from "@playwright/test";

test.describe("Countries App E2E", () => {
  test("should load countries, filter, and navigate to detail", async ({
    page,
  }) => {
    // Abre pagina
    await page.goto("http://localhost:5173/");
    await expect(page.getByText(/China\s*\(/)).toBeVisible();
    await page.getByPlaceholder("Buscar país...").fill("China");
    await expect(page.getByText(/China\s*\(/)).toBeVisible();
    const chinaCard = page.locator(".country-card", { hasText: "China" });
    const detailLink = chinaCard.getByRole("link", { name: /Ver detalle/i });
    await expect(detailLink).toBeVisible();
    await detailLink.click();
    //Navegacion
    await expect(page).toHaveURL(/\/country\/CN/);
    await expect(page.getByText(/Beijing/)).toBeVisible();
    await expect(page.getByText(/Asia/)).toBeVisible();
    await expect(page.getByText(/Chinese/)).toBeVisible();
    await expect(page.getByText(/CNY/)).toBeVisible();
  });
});
