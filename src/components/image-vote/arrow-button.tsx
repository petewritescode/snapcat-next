import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import styles from './arrow-button.module.scss';
import { SubmitButton } from '../submit-button/submit-button';
import clsx from 'clsx';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { VoteDirection } from '@/types/vote-direction';

export type ArrowButtonProps = {
  icon: IconProp;
  direction: VoteDirection;
  isActive: boolean;
  onClick: () => Promise<void>;
};

export const ArrowButton: FC<ArrowButtonProps> = ({
  icon,
  direction,
  isActive,
  onClick,
}) => {
  const className = clsx(styles.button, isActive && styles.active);
  const actionCopy = isActive ? 'Remove' : 'Add';
  const directionCopy = direction === 'up' ? 'up' : 'down';
  const label = `${actionCopy} ${directionCopy} vote`;

  return (
    <SubmitButton className={className} label={label} onSubmit={onClick}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
    </SubmitButton>
  );
};
