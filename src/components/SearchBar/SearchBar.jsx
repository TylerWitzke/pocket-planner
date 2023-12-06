import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ placeholder, onSearch, onChange }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onChange(e.target.value, 'search')
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit" className={styles.searchButton}>
        🔍
      </button>
    </form>
  );
};

export default SearchBar;
