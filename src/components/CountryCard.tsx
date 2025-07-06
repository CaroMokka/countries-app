export interface CountryCardProps {
  code: string;
  name: string;
  currency: string;
  continent: string;
  language: string;
  capital: string;
  className?: string;
  onClick?: () => void;
}

function CountryCard({
  code,
  name,
  currency,
  continent,
  language,
  capital,
  className,
  onClick,
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
          {name} ({code})
        </h5>
        <p className="card-text mb-1">
          <strong>Capital:</strong> {capital}
        </p>
        <p className="card-text mb-1">
          <strong>Continente:</strong> {continent}
        </p>
        <p className="card-text mb-1">
          <strong>Idioma:</strong> {language}
        </p>
        <p className="card-text mb-0">
          <strong>Moneda:</strong> {currency}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
