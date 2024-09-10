// src/components/SortDropdown/SortDropdown.tsx
import React, { FunctionComponent } from 'react';
import styles from './SortDropdown.module.css';

interface SortDropdownProps {
  options: string[];
  selected: string;
  onChange: (selected: string) => void;
}

const SortDropdown: FunctionComponent<SortDropdownProps> = ({ options, selected, onChange }) => {
  return (
    <div className={styles.dropdownPacked}>
      <div className={styles.titleValue}>
        <div className={styles.buttonTitle1}>Sort by</div>
        <div className={styles.value3}>
          <select
            className={styles.sortSelect}
            value={selected}
            onChange={(e) => onChange(e.target.value)}
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <img className={styles.chevronIcon} alt="Chevron" src="Chevron.svg" />
        </div>
      </div>
    </div>
  );
};

export default SortDropdown;
