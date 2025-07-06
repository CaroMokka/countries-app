interface CurrencyFilterProps {
  value: string;
  onChange: (value: string) => void;
}
function CurrencyFilter({ value, onChange }: CurrencyFilterProps) {
  return (
    <div className="mb-2">
      <label htmlFor="currencyFilter" className="form-label">
        Filtrar por moneda
      </label>
      <select
        id="currencyFilter"
        className="form-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Todas</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CLP">CLP</option>
        <option value="ARS">ARS</option>
        <option value="GBP">GBP</option>
        {/* Agrega las monedas que necesites */}
      </select>
    </div>
  );
}

export default CurrencyFilter;
