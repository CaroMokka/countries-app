import type { Country } from "../types/Country.types";
import { useCountryContext } from "../context/useCountryContext";

export const useCountryByCode = (code: string): Country | null => {
  const { countries } = useCountryContext();

  if (!countries || !code) return null;
  const country =
    countries.find((item) => item.code.toLowerCase() === code.toLowerCase()) ??
    null;
  return country;
};
