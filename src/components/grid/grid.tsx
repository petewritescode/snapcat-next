import { FC, ReactNode } from 'react';
import styles from './grid.module.scss';

export type GridProps = {
  children: ReactNode;
};

export const Grid: FC<GridProps> = ({ children }) => (
  <ul className={styles.grid}>{children}</ul>
);
