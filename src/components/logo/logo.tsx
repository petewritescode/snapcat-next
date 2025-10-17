import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';
import styles from './logo.module.css';
import Link from 'next/link';
import { routes } from '@/constants/routes';

export const Logo: FC = () => (
  <Link href={routes.home} className={styles.logo} aria-label="Snapcat home">
    <div className={styles.icon}>
      <FontAwesomeIcon icon={faCat} />
    </div>

    <div className={styles.copy}>Snapcat</div>
  </Link>
);
