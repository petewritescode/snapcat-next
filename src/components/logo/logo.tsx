import { FC } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCat } from '@fortawesome/free-solid-svg-icons';
import styles from './logo.module.scss';
import Link from 'next/link';

export const Logo: FC = () => (
  <Link href="/" className={styles.logo}>
    <div className={styles.icon}>
      TODO ICON
      {/* <FontAwesomeIcon icon={faCat} /> */}
    </div>

    <div className={styles.copy}>Snapcat</div>
  </Link>
);
