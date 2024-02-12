'use client';

import { FC, ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  label?: string;
  onClick?: () => void | Promise<void>;
};

export const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled,
  label,
  onClick,
}) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <button
      className={className}
      aria-label={label}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
