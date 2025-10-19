import { FC, ReactNode } from 'react';

export type GridItemProps = {
  children: ReactNode;
};

export const GridItem: FC<GridItemProps> = ({ children }) => (
  <li>{children}</li>
);
