import clsx from 'clsx';
import { FC, ReactNode } from 'react';
import styles from './container.module.css';

export type ContainerProps = {
  children: ReactNode;
  shallow?: boolean;
};

export const Container: FC<ContainerProps> = ({
  children,
  shallow = false,
}) => {
  const className = clsx(styles.container, shallow && styles.shallow);

  return <div className={className}>{children}</div>;
};
