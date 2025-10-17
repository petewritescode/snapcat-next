'use client';

import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import clsx from 'clsx';
import styles from './navigation-link.module.css';
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
  const active = segment === href.substring(1);
  const className = clsx(styles.link, active && styles.active);

  return (
    <Link href={href} className={className}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={icon} />
      </div>
      {label}
    </Link>
  );
};
