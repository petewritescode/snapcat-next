'use client';

import { FC, ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

export type SubmitButtonProps = {
  children: ReactNode;
  className?: string;
  label?: string;
  onSubmit?: () => Promise<void>;
};

export const SubmitButton: FC<SubmitButtonProps> = ({
  children,
  className,
  label,
  onSubmit,
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={className}
      aria-label={label}
      disabled={pending}
      formAction={onSubmit}
    >
      {children}
    </button>
  );
};
