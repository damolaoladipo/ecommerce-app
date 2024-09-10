// src/components/FoundResults/FoundResults.tsx
import React, { FunctionComponent } from 'react';
import styles from './FoundResults.module.css';

interface FoundResultsProps {
  count: number;
  query: string;
}

const FoundResults: FunctionComponent<FoundResultsProps> = ({ count, query }) => {
  return (
    <div className={styles.foundResultsContainer}>
      <span>{`Found ${count} results for `}</span>
      <span className={styles.djiPhantom}>{query}</span>
    </div>
  );
};

export default FoundResults;
