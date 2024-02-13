'use client';

import { FC, ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

export type SubmitButtonProps = {
  children: ReactNode;
  className?: string;
  label?: string;
};

export const SubmitButton: FC<SubmitButtonProps> = ({
  children,
  className,
  label,
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={className}
      aria-label={label}
      disabled={pending}
    >
      {children}
    </button>
  );
};
