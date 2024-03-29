import { FC, ReactNode } from 'react';
import styles from './grid-item.module.scss';

export type GridItemProps = {
  children: ReactNode;
};

export const GridItem: FC<GridItemProps> = ({ children }) => (
  <li className={styles.gridItem}>{children}</li>
);
