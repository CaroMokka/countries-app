import type { Country } from "../types";

export const countriesMock: Country[] = [
  {
    code: "US",
    name: "United States",
    currency: "USD",
    continent: { name: "North America" },
    capital: "Washington, D.C.",
    emoji: "🇺🇸",
    languages: [{ name: "English" }],
  },
  {
    code: "FR",
    name: "France",
    currency: "EUR",
    continent: { name: "Europe" },
    capital: "Paris",
    emoji: "🇫🇷",
    languages: [{ name: "French" }],
  },
  {
    code: "JP",
    name: "Japan",
    currency: "JPY",
    continent: { name: "Asia" },
    capital: "Tokyo",
    emoji: "🇯🇵",
    languages: [{ name: "Japanese" }],
  },
];
