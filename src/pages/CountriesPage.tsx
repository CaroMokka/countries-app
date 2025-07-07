import { useState, useMemo } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useCountryContext } from "../context/useCountryContext";
import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters/Filters";
import CountriesList from "../components/CountriesList";
import ClearFilters from "../components/ClearFilters";

function CountriesPage() {
  const { countries, loading, error } = useCountryContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [continent, setContinent] = useState<string>("");
  const [currency, setCurrency] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const normalizedSearch = debouncedSearchTerm.trim().toLowerCase();

  const filteredCountries = useMemo(() => {
    return countries?.filter((country) => {
      const matchName =
        normalizedSearch === "" ||
        country.name.toLowerCase().includes(normalizedSearch);

      const matchContinent =
        !continent || country.continent?.name === continent;

      const matchCurrency = !currency || country.currency === currency;

      return matchName && matchContinent && matchCurrency;
    });
  }, [countries, normalizedSearch, continent, currency]);

  if (loading) return <p>Cargando países...</p>;
  if (error) return <p>Error: {error.message}</p>;

  function navigate(path: string) {
    console.log(`Navigating to ${path}`);
  }
  const handleClearFilters = () => {
    setSearchTerm("");
    setContinent("");
    setCurrency("");
  };
  return (
    <div className="container">
      <div className="row d-flex flex-wrap align-items-center ">
        <div className="col-12 col-sm-8 col-md-9 col-lg-10">
          <PageTitle title={"Lista de Países"} subtitle={"Filtros"} />
        </div>
        <div className="col-12 col-sm-4 col-md-3 col-lg-2 my-2">
          <ClearFilters
            onClear={handleClearFilters}
            className="btn btn-ms ms-2"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 lg-3">
          <SearchBar
            placeholder="Buscar país..."
            value={searchTerm}
            onChange={setSearchTerm}
            className="form-control mb-3"
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
            countries={filteredCountries!}
            onCountryClick={(code) => navigate(`/countries/${code}`)}
          />
        </div>
      </div>
    </div>
  );
}

export default CountriesPage;
