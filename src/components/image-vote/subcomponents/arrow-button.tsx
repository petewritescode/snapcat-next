import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import styles from './arrow-button.module.scss';
import { SubmitButton } from '../../submit-button/submit-button';
import clsx from 'clsx';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { VoteDirection } from '@/types/vote-direction';

export type ArrowButtonProps = {
  icon: IconProp;
  direction: VoteDirection;
  active: boolean;
  onClick: () => Promise<void>;
};

export const ArrowButton: FC<ArrowButtonProps> = ({
  icon,
  direction,
  active,
  onClick,
}) => {
  const className = clsx(styles.button, active && styles.active);
  const actionCopy = active ? 'Remove' : 'Add';
  const directionCopy = direction === 'up' ? 'up' : 'down';
  const label = `${actionCopy} ${directionCopy} vote`;

  return (
    <SubmitButton className={className} label={label} onSubmit={onClick}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
    </SubmitButton>
  );
};
