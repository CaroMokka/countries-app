import type { Country } from "./Country.types";

export interface CountriesListProps {
  countries: Country[];
  onCountryClick?: (code: string) => void;
  className?: string;
}
