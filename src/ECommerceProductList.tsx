// src/ECommerceProductList.tsx
import React, { FunctionComponent } from 'react';
import styles from './ECommerceProductList.module.css';
import Header from './components/Header/Header';
import FoundResults from './components/FoundResults/FoundResults';
import Filters from './components/Filters/Filters';
import SortDropdown from './components/SortDropdown/SortDropdown';
import ProductList from './components/ProductList/ProductList';

const ECommerceProductList: FunctionComponent = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      imageSrc: 'image8.png',
      name: 'DJI Phantom 2 Vision+',
      ratingCount: 243,
      price: 599,
      rating: 5,
      iconButtonSrcs: ['Icon button.svg', 'Icon button.svg'],
    },
    {
      id: 2,
      imageSrc: 'image9.png',
      name: 'DJI Phantom 4 Multispectral',
      ratingCount: 98,
      price: 1449,
      rating: 5,
      iconButtonSrcs: ['Icon button.svg', 'Icon button.svg'],
    },
    {
      id: 3,
      imageSrc: 'image10.png',
      name: 'DJI Phantom 4 PRO',
      ratingCount: 1002,
      price: 739,
      rating: 5,
      iconButtonSrcs: ['Icon button.svg', 'Icon button.svg'],
    },
    {
      id: 4,
      imageSrc: 'image11.png',
      name: '4 Series — Intelligent Flight Battery (5…) ',
      ratingCount: 243,
      price: 186,
      rating: 5,
      iconButtonSrcs: ['Icon button.svg', 'Icon button.svg'],
    },
    {
      id: 5,
      imageSrc: 'image12.png',
      name: 'DJI Phantom 3 — Intelligent Flight Bat…',
      ratingCount: 98,
      price: 98,
      rating: 5,
      iconButtonSrcs: ['Icon button.svg', 'Icon button.svg'],
    },
    {
      id: 6,
      imageSrc: 'image13.png',
      name: 'DJI Phantom 4 PRO',
      ratingCount: 1002,
      price: 739,
      rating: 5,
      iconButtonSrcs: ['Icon button.svg', 'Icon button.svg'],
    },
  ];

  // Handle sort change
  const handleSortChange = (selected: string) => {
    console.log(`Sort by: ${selected}`);
    // Implement sorting logic here
  };

  return (
    <div className={styles.eCommerceProductList}>
      <Header />
      <ProductList products={products} />
      <img className={styles.viewIcon} alt="View" src="View.svg" />
      <Filters />
      <SortDropdown
        options={['Featured', 'Price: Low to High', 'Price: High to Low']}
        selected="Featured"
        onChange={handleSortChange}
      />
      <img className={styles.chatCrisp} alt="Chat Crisp" src="Chat – Crisp.svg" />
      <FoundResults count={376} query="dji phantom" />
    </div>
  );
};

export default ECommerceProductList;
