import searchIcon from '../../assets/search-icon.svg';
import './Search.scss';

function Search() {
  return (
    <div className='search'>
      <input
        className='search-input'
        type="text"
        placeholder="Placeholder"
      />
      <img
        src={searchIcon}
        alt="Search Icon"
        className="search-icon"
      />
    </div>
  );
}

export default Search;