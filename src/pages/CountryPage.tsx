import { useParams } from "react-router-dom";
import { useCountryByCode } from "../hooks/useCountryByCode";
import PageTitle from "../components/PageTitle";
import CountryCard from "../components/CountryCard";

function CountryPage() {
  const { code } = useParams<{ code: string }>();
  const country = useCountryByCode(code!);

  if (!country) {
    return (
      <div className="container">
        <PageTitle title="País no encontrado" />
        <p>No se encontró el país solicitado.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <PageTitle title={`Detalle de ${country.name}`} />
      </div>
      <div className="row">
        <CountryCard country={country} showDetailButton={false} />
      </div>
    </div>
  );
}

export default CountryPage;
