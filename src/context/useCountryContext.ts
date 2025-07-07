import { useContext } from "react";
import CountryContext from "./CountryContext";

const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (!context) {
    throw new Error(
      "useCountryContext debe usarse dentro de un CountryProvider"
    );
  }
  return context;
};
export default useCountryContext;
