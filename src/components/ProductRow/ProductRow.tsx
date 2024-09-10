// src/components/ProductRow/ProductRow.tsx
import React, { FunctionComponent } from 'react';
import styles from './ProductRow.module.css';
import ProductCard from '../ProductCard/ProductCard';

interface Product {
  id: number;
  imageSrc: string;
  name: string;
  ratingCount: number;
  price: number;
  rating: number;
  iconButtonSrcs?: string[];
}

interface ProductRowProps {
  products: Product[];
}

const ProductRow: FunctionComponent<ProductRowProps> = ({ products }) => {
  return (
    <div className={styles.row}>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductRow;
