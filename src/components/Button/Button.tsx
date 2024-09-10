// src/components/ButtonComponent/ButtonComponent.tsx
import React, { FunctionComponent } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  iconSrc?: string;
  title: string;
  onClick?: () => void;
  className?: string;
}

const ButtonComponent: FunctionComponent<ButtonProps> = ({ iconSrc, title, onClick, className }) => {
  return (
    <div className={`${styles.button} ${className || ''}`} onClick={onClick}>
      {iconSrc && <img className={styles.icon} alt={`${title} icon`} src={iconSrc} />}
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default ButtonComponent;
