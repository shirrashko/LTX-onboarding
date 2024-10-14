import "./FilterButtons.scss";
import { FilterType, filters } from "../../types/filter.ts";
import clsx from "clsx";

interface FilterButtonsProps {
  activeFilter?: FilterType;
  onFilterClick: (filter: FilterType) => void;
}

export const FilterButtons = ({
  activeFilter,
  onFilterClick,
}: FilterButtonsProps) => {
  return (
    <div className="results-filters">
      <span>Filter by:</span>
      {filters.map((filter) => (
        <button
          key={filter}
          className={clsx("filter-button", { active: activeFilter === filter })}
          onClick={() => onFilterClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
