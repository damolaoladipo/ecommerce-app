// src/components/SearchBar/SearchBar.tsx
import React, { FunctionComponent } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  searchValue: string;
  onChange?: (value: string) => void;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({ searchValue, onChange }) => {
  return (
    <div className={styles.textInput}>
      <img className={styles.searchIcon} alt="Search" src="Search.svg" />
      <input
        type="text"
        className={styles.value}
        value={searchValue}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder="Search products..."
      />
    </div>
  );
};

export default SearchBar;
