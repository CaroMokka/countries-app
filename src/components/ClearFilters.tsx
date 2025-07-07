interface ClearFiltersProps {
  onClear: () => void;
  className?: string;
}

function ClearFilters({ onClear, className }: ClearFiltersProps) {
  return (
    <button
      type="button"
      className={`btn btn-outline-secondary ${className ?? ""}`}
      onClick={onClear}
    >
      Limpiar filtros
    </button>
  );
}

export default ClearFilters;
