interface ContinentFilterProps {
  value: string;
  onChange: (value: string) => void;
}
function ContinentFilter({ value, onChange }: ContinentFilterProps) {
  return (
    <div className="mb-2">
      <label htmlFor="continentFilter" className="form-label">
        Filtrar por continente
      </label>
      <select
        id="continentFilter"
        className="form-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Todos</option>
        <option value="South America">South America</option>
        <option value="North America">North America</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Oceania">Oceania</option>
        <option value="Antarctica">Antarctica</option>
      </select>
    </div>
  );
}

export default ContinentFilter;
