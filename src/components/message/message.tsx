import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './message.module.scss';

export type MessageProps = {
  children: ReactNode;
  isError?: boolean;
};

export const Message: FC<MessageProps> = ({ children, isError = false }) => {
  const className = clsx(styles.message, isError && styles.error);

  return <div className={className}>{children}</div>;
};
