import { useState } from "react";
import { useCountryContext } from "../context/useCountryContext";
import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters/Filters";
import CountriesList from "../components/CountriesList";

function CountriesPage() {
  const { countries, loading, error } = useCountryContext();
  const [continent, setContinent] = useState<string>("");
  const [currency, setCurrency] = useState<string>("");

  console.log("Data Países", countries);

  if (loading) return <p>Cargando países...</p>;
  if (error) return <p>Error: {error.message}</p>;

  function navigate(path: string) {
    console.log(`Navigating to ${path}`);
  }
  return (
    <div className="container">
      <div className="row">
        <PageTitle title={"Lista de Países"} />
      </div>
      <div className="row">
        <div className="col-12 col-md-6 lg-3">
          <SearchBar
            value={""}
            onChange={() => {
              console.log("SearchBar");
            }}
          />
        </div>
        <div className="col-12 col-md-6 lg-3">
          <Filters
            continent={continent}
            onChangeContinent={setContinent}
            currency={currency}
            onChangeCurrency={setCurrency}
          />
        </div>
        <div className="col-12">
          <CountriesList
            countries={countries!}
            onCountryClick={(code) => navigate(`/countries/${code}`)}
          />
        </div>
      </div>
    </div>
  );
}

export default CountriesPage;
