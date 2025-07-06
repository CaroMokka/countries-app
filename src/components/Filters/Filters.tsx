import ContinentFilter from "./ContinentFilter";
import CurrencyFilter from "./CurrencyFilter";

interface FiltersProps {
  continent: string;
  onChangeContinent: (value: string) => void;
  currency: string;
  onChangeCurrency: (value: string) => void;
}

function Filters({
  continent,
  onChangeContinent,
  currency,
  onChangeCurrency,
}: FiltersProps) {
  return (
    <div className="filters">
      <ContinentFilter value={continent} onChange={onChangeContinent} />
      <CurrencyFilter value={currency} onChange={onChangeCurrency} />
    </div>
  );
}

export default Filters;
