import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import styles from './arrow-button.module.scss';
import { SubmitButton } from '../submit-button/submit-button';
import clsx from 'clsx';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type ArrowButtonProps = {
  icon: IconProp;
  label: string;
  isActive: boolean;
  onClick: () => Promise<void>;
};

export const ArrowButton: FC<ArrowButtonProps> = ({
  icon,
  label,
  isActive,
  onClick,
}) => {
  const className = clsx(styles.button, isActive && styles.active);

  return (
    <SubmitButton className={className} label={label} onSubmit={onClick}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
    </SubmitButton>
  );
};
