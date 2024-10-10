import React from "react";
import searchIcon from "../../assets/search-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";
import "./Search.scss";

interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

function Search({ value, onChange, onClear }: SearchProps): JSX.Element {
  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Placeholder"
        value={value}
        onChange={onChange}
      />
      <img src={searchIcon} alt="Search Icon" className="search-icon" />
      {value && (
        <div className="delete-icon-container" onClick={onClear}>
          <img src={deleteIcon} alt="Delete Icon" className="delete-icon" />
        </div>
      )}
    </div>
  );
}

export default Search;
