import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './message.module.css';

export type MessageProps = {
  children: ReactNode;
  error?: boolean;
};

export const Message: FC<MessageProps> = ({ children, error = false }) => {
  const className = clsx(styles.message, error && styles.error);

  return <div className={className}>{children}</div>;
};
