import { useContext } from "react";
import CountryContext from "./CountryContext";

export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error(
      "useCountryContext debe usarse dentro de un CountryProvider"
    );
  }

  return context;
};
