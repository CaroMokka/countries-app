import type { Country } from "./Country.types";

export interface CountriesListProps {
  countries: Country[]; // ✅ Solo datos puros
  onCountryClick?: (code: string) => void;
  className?: string;
}
