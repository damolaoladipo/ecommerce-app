// src/components/Logo/Logo.tsx
import React, { FunctionComponent } from 'react';
import styles from './Logo.module.css';

const Logo: FunctionComponent = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.chipIcon} alt="Chip" src="../Assets/images/Chip.svg" />
      <div className={styles.whatAMarket}>What a Market!</div>
    </div>
  );
};

export default Logo;git sts