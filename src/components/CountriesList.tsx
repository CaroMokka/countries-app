import type { CountryCardProps } from "./CountryCard";
import CountryCard from "./CountryCard";

interface CountriesListProps {
  countries: CountryCardProps[];
  onCountryClick?: (code: string) => void; // opcional: navegación o acción
  className?: string; // por si quieres personalizar la grilla
}

function CountriesList({
  countries,
  onCountryClick,
  className,
}: CountriesListProps) {
  if (countries.length === 0) {
    return <p>No se encontraron países.</p>;
  }

  return (
    <>
      <div className={`row ${className ?? ""}`}>
        {countries.map((country) => (
          <div key={country.code} className="col-12 col-md-6 col-lg-4 mb-4">
            <CountryCard
              {...country}
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
