// import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import CountryCard from "../components/CountryCard";

function CountryPage() {
  //   const { countryCode } = useParams<{ countryCode: string }>();

  const countryMock = {
    code: "AR",
    name: "Argentina",
    currency: "Peso Argentino",
    continent: "América del Sur",
    language: "Español",
    capital: "Buenos Aires",
    emoji: "🇦🇷",
  };
  return (
    <div className="container">
      <div className="row">
        <PageTitle title={`Detalle de ${countryMock.name}`} />
      </div>
      <div className="row">
        <CountryCard country={countryMock} />
      </div>
    </div>
  );
}

export default CountryPage;
