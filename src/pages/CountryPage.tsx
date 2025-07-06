import { useParams } from "react-router-dom";
import { countriesMock } from "../mocks/countriesMock";
import PageTitle from "../components/PageTitle";
import CountryCard from "../components/CountryCard";

function CountryPage() {
  const { id } = useParams<{ id: string }>();
  const country = countriesMock.find(
    (item) => item.code.toLowerCase() === id?.toLowerCase()
  );
  console.log(country);

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
