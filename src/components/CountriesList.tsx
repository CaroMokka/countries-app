import type { CountriesListProps } from "../types";
import CountryCard from "./CountryCard";

function CountriesList({
  countries,
  onCountryClick,
  className,
}: CountriesListProps) {
  if (countries.length === 0) {
    return <p>No se encontraron países.</p>;
  }
  console.log("jojooo", countries);
  return (
    <>
      <div className={`row ${className ?? ""}`}>
        {countries.map((country) => (
          <div key={country.code} className="col-12 col-md-6 col-lg-4 mb-4">
            <CountryCard
              country={country}
              onClick={
                onCountryClick ? () => onCountryClick(country.code) : undefined
              }
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default CountriesList;
