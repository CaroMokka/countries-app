import type { Country } from "./Country.types";

export interface CountryCardProps {
  country: Country;
  onClick?: () => void;
  className?: string;
  showDetailButton?: boolean;
}
