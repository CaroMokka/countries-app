import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import CountryCard from "../components/CountryCard";

function CountryPage() {
  const { countryCode } = useParams<{ countryCode: string }>();
  console.log("Country Code", countryCode);

  const countryMock = {
    code: "AG",
    name: "Antigua and Barbuda",
    currency: "XCD",
    continent: {
      name: "North America",
    },
    capital: "Saint John's",
    languages: [
      {
        name: "English",
      },
    ],
    emoji: "🇦🇬",
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
