import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <form id="search-bar">
      <div className="search">
        <input
          type="text"
          name="search"
          className="round"
          placeholder="What are you looking for?"
        />
        <input type="submit" className="corner" value="Search" />
      </div>
    </form>
  );
};

export default SearchBar;
