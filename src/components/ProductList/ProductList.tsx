// src/components/ProductList/ProductList.tsx
import React, { FunctionComponent } from 'react';
import styles from './ProductList.module.css';
import ProductRow from '../ProductRow/ProductRow';

interface Product {
  id: number;
  imageSrc: string;
  name: string;
  ratingCount: number;
  price: number;
  rating: number;
  iconButtonSrcs?: string[];
}

interface ProductListProps {
  products: Product[];
  productsPerRow?: number;
}

const ProductList: FunctionComponent<ProductListProps> = ({ products, productsPerRow = 3 }) => {
  const rows: Product[][] = [];
  for (let i = 0; i < products.length; i += productsPerRow) {
    rows.push(products.slice(i, i + productsPerRow));
  }

  return (
    <div className={styles.productList}>
      {rows.map((rowProducts, index) => (
        <ProductRow key={index} products={rowProducts} />
      ))}
    </div>
  );
};

export default ProductList;
