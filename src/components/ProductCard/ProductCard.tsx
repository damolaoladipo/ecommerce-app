// src/components/ProductCard/ProductCard.tsx
import React, { FunctionComponent } from 'react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  imageSrc: string;
  name: string;
  ratingCount: number;
  price: number;
  rating: number; // Number of stars (e.g., 5)
  iconButtonSrcs?: string[]; // Array of icon button image sources
}

const ProductCard: FunctionComponent<ProductCardProps> = ({
  imageSrc,
  name,
  ratingCount,
  price,
  rating,
  iconButtonSrcs = [],
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} alt={name} src={imageSrc} />
      <div className={styles.productName}>{name}</div>
      <div className={styles.ratingCount}>{ratingCount}</div>
      <div className={styles.price}>${price}</div>
      <div className={styles.rating}>
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            className={styles.star}
            alt="Star"
            src="Rating element.svg"
          />
        ))}
      </div>
      <div className={styles.actionButtons}>
        {iconButtonSrcs.map((src, index) => (
          <img
            key={index}
            className={styles.iconButton}
            alt="Action Button"
            src={src}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
