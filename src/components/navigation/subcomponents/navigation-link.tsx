'use client';

import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import clsx from 'clsx';
import styles from './navigation-link.module.scss';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export type NavigationLinkProps = {
  href: string;
  icon: IconDefinition;
  label: string;
};

export const NavigationLink: FC<NavigationLinkProps> = ({
  href,
  icon,
  label,
}) => {
  const segment = useSelectedLayoutSegment() ?? '';
  const isActive = segment === href.substring(1);
  const className = clsx(styles.link, isActive && styles.active);

  return (
    <Link href={href} className={className}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      {label}
    </Link>
  );
};
