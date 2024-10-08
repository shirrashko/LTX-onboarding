import React, { useState } from "react";
import searchIcon from "../../assets/search-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";
import "./Search.scss";

function Search() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="Placeholder"
        value={inputValue}
        onChange={handleInputChange}
      />
      <img src={searchIcon} alt="Search Icon" className="search-icon" />
      {inputValue && (
        <div className="delete-icon-container" onClick={clearInput}>
          <img src={deleteIcon} alt="Delete Icon" className="delete-icon" />
        </div>
      )}
    </div>
  );
}

export default Search;
