// src/components/Filters/Filters.tsx
import React, { FunctionComponent, useState } from 'react';
import styles from './Filters.module.css';
import Checkbox from '../Checkbox/Checkbox';

const Filters: FunctionComponent = () => {
  const [filters, setFilters] = useState<Record<string, boolean>>({
    'App-Controlled': false,
    '4K UHD 2160p': false,
    'Beginner': false,
    'DJI': false,
    'FHD 1080p': false,
    'Intermediate': false,
    'Holy Stone': false,
    'HD 720p': false,
    'Expert': false,
    'Potensic': false,
    'Ruko': false,
    'aovo': false,
    'OXOXO': false,
    'DEERC': false,
    'Obstacle Avoidance': false,
    'Video Downlink Capable': false,
    'Wi-Fi': false,
  });

  const toggleFilter = (label: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [label]: !prevFilters[label],
    }));
  };

  return (
    <div className={styles.filters}>
      <div className={styles.priceRange}>
        <div className={styles.textInput}>
          <input type="number" className={styles.value1} placeholder="Min" />
        </div>
        <div className={styles.textInput}>
          <input type="number" className={styles.value1} placeholder="Max" />
        </div>
      </div>
      <div className={styles.checkboxGroup}>
        {Object.keys(filters).map((label, index) => (
          <Checkbox
            key={index}
            label={label}
            checked={filters[label]}
            onChange={() => toggleFilter(label)}
          />
        ))}
      </div>
      <div className={styles.labels}>
        <div className={styles.quadcopterFeatures}>Quadcopter Features</div>
        <div className={styles.videoCaptureResolution}>Video Capture Resolution</div>
        <div className={styles.operatorSkillLevel}>Operator Skill Level</div>
        <div className={styles.brand}>Brand</div>
        <div className={styles.price}>Price, $</div>
      </div>
    </div>
  );
};

export default Filters;
