// src/components/Header/Header.tsx
import React, { FunctionComponent } from 'react';
import styles from './Header.module.css';
import ButtonComponent from '../Button/Button';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../Logo/Logo';

const Header: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <SearchBar searchValue="DJI phantom" />
      <div className={styles.buttons}>
        <ButtonComponent iconSrc="Shopping cart.svg" title="Cart" />
        <ButtonComponent iconSrc="Heart.svg" title="Favorites" />
        <ButtonComponent iconSrc="Cube.svg" title="Orders" />
        <ButtonComponent iconSrc="Location marker.svg" title="California" />
      </div>
      <div className={styles.categories}>
        <ButtonComponent title="Best Sellers" />
        <ButtonComponent title="New Releases" />
        <ButtonComponent title="Books" />
        <ButtonComponent title="Computers" />
        <ButtonComponent title="Fashion" />
        <ButtonComponent title="Health" />
        <ButtonComponent title="Pharmacy" />
        <ButtonComponent title="Toys & Games" />
      </div>
      <div className={styles.additionalButtons}>
        <ButtonComponent title="Become a seller" />
        <ButtonComponent title="Sign In" />
        <ButtonComponent iconSrc="Menu hamburger.svg" title="Categories" />
      </div>
      <div className={styles.counter}>
        <div className={styles.number}>3</div>
      </div>
      <Logo />
      <div className={styles.divider} />
    </div>
  );
};

export default Header;
