import type { Country } from "../types";

export function filterCountries(
  countries: Country[],
  searchTerm: string,
  continent: string,
  currency: string
): Country[] {
  const normalizedSearch = searchTerm.trim().toLowerCase();

  return countries.filter((country) => {
    const matchName =
      normalizedSearch === "" ||
      country.name.toLowerCase().includes(normalizedSearch);

    const matchContinent = !continent || country.continent?.name === continent;

    const matchCurrency = !currency || country.currency === currency;

    return matchName && matchContinent && matchCurrency;
  });
}
