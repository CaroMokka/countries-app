import type { CountryProps } from "../types/Country.types";

function CountryCard({ country }: { country: CountryProps }) {
  return (
    <div
      className={`country-card card mb-3 ${country.className ?? ""}`}
      onClick={country.onClick}
      role={country.onClick ? "button" : undefined}
      style={{ cursor: country.onClick ? "pointer" : "default" }}
    >
      <div className="card-body">
        <h5 className="card-title mb-2">
          {country.name} ({country.code})
        </h5>
        <p className="card-text mb-1">
          <strong>Capital:</strong> {country.capital}
        </p>
        <p className="card-text mb-1">
          <strong>Continente:</strong> {country.continent}
        </p>
        <p className="card-text mb-1">
          <strong>Idioma:</strong> {country.language}
        </p>
        <p className="card-text mb-0">
          <strong>Moneda:</strong> {country.currency}
        </p>
        <p className="card-text mb-0">
          <strong>Bandera:</strong> {country.emoji}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
