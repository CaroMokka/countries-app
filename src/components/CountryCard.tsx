import type { CountryCardProps } from "../types";
import { Link } from "react-router-dom";

function CountryCard({
  country,
  className,
  onClick,
  showDetailButton = true,
}: CountryCardProps) {
  return (
    <div
      className={`country-card card mb-3 ${className ?? ""}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      <div className="card-body">
        <h5 className="card-title mb-2">
          {country.name} ({country.code})
        </h5>
        <p className="card-text mb-1">
          <strong>Capital:</strong> {country.capital}
        </p>
        <p className="card-text mb-1">
          <strong>Continente:</strong> {country.continent.name}
        </p>
        <p className="card-text mb-1">
          <strong>Idioma:</strong>{" "}
          {country.languages && country.languages.length > 0
            ? country.languages[0].name
            : "No disponible"}
        </p>
        <p className="card-text mb-0">
          <strong>Moneda:</strong> {country.currency}
        </p>
        <p className="card-text mb-0">
          <strong>Bandera:</strong> {country.emoji}
        </p>
        {showDetailButton ? (
          <Link
            to={`/country/${country.code}`}
            className="btn btn-sm btn-warning my-3"
          >
            Ver detalle
          </Link>
        ) : (
          <Link to={"/"} className="btn btn-sm btn-secondary my-3">
            Volver
          </Link>
        )}
      </div>
    </div>
  );
}

export default CountryCard;
