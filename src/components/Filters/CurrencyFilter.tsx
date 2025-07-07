interface CurrencyFilterProps {
  value: string;
  onChange: (value: string) => void;
}
function CurrencyFilter({ value, onChange }: CurrencyFilterProps) {
  return (
    <div className="form-control search-bar mb-2">
      <label htmlFor="currency">Moneda</label>
      <input
        list="currencies"
        id="currency"
        name="currency"
        className="form-control"
        placeholder="Busca una moneda..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <datalist id="currencies">
        <option value="USD" />
        <option value="EUR" />
        <option value="GBP" />
        <option value="JPY" />
        <option value="BRL" />
        <option value="MXN" />
        <option value="CNY" />
        {/* ⚡ O generar dinámicamente todas tus monedas únicas */}
      </datalist>
    </div>
  );
}

export default CurrencyFilter;
