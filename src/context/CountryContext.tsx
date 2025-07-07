import { createContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../graphql/queries/GetCountries";
import type { Country } from "../types";

interface CountryContextProps {
  countries: Country[] | null;
  loading: boolean;
  error: Error | null;
}

const CountryContext = createContext<CountryContextProps>({
  countries: null,
  loading: false,
  error: null,
});

export const CountryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  return (
    <CountryContext.Provider
      value={{
        countries: data?.countries ?? null,
        loading,
        error: error as Error | null,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
