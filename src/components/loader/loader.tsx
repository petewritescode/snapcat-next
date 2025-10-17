import { FC } from 'react';
import styles from './loader.module.css';

export const Loader: FC = () => (
  <div className={styles.loader} role="progressbar" aria-label="Loading" />
);
