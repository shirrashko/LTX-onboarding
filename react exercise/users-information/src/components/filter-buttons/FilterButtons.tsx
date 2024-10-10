import "./FilterButtons.scss";
import { FilterType } from "../../pages/userDetails/UserDetails.tsx";

interface FilterButtonsProps {
  activeFilter: FilterType | null;
  onFilterClick: (filter: FilterType) => void;
}

export const FilterButtons = ({
  activeFilter,
  onFilterClick,
}: FilterButtonsProps) => {
  return (
    <div className="results-filters">
      <span>Filter by:</span>
      <button
        className={`cities-filter-button ${
          activeFilter === FilterType.Cities ? "active" : ""
        }`}
        onClick={() => onFilterClick(FilterType.Cities)}
      >
        Cities
      </button>
      <button
        className={`age-filter-button ${
          activeFilter === FilterType.Age ? "active" : ""
        }`}
        onClick={() => onFilterClick(FilterType.Age)}
      >
        Age
      </button>
    </div>
  );
};
