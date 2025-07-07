import { useState, useEffect, createContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../graphql/queries/GetCountries";
import type { Country } from "../types";

interface CountryContextProps {
  countries: Country[] | null;
  loading: boolean;
  error: Error | null;
}

const CountryContext = createContext<CountryContextProps>({
  countries: [],
  loading: false,
  error: null,
});
console.log("conutry Context", CountryContext);

export const CountryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    if (data?.countries) {
      setCountries(data.countries);
    }
  }, [data]);

  if (loading) {
    return <div>Loading countries...</div>;
  }

  console.log("Data", data);

  return (
    <CountryContext.Provider
      value={{
        countries: countries,
        loading,
        error: error as Error | null,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
