// src/components/Checkbox/Checkbox.tsx
import React, { FunctionComponent } from 'react';
import styles from './Checkbox.module.css';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div className={styles.checkbox}>
      <div className={styles.box} onClick={onChange}>
        {checked && <div className={styles.checkbox1} />}
      </div>
      <div className={styles.title}>{label}</div>
    </div>
  );
};

export default Checkbox;
