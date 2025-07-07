import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../graphql/queries/GetCountries";
import { countriesMock } from "../mocks/countriesMock";
import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters/Filters";
import CountriesList from "../components/CountriesList";

function CountriesPage() {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  const [continent, setContinent] = useState<string>("");
  const [currency, setCurrency] = useState<string>("");
  console.log("Data Países", data);

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
            countries={countriesMock}
            onCountryClick={(code) => navigate(`/countries/${code}`)}
          />
        </div>
      </div>
    </div>
  );
}

export default CountriesPage;
