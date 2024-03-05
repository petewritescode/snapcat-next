import { FC } from 'react';
import styles from './navigation.module.scss';
import { faHome, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { NavigationLink } from './navigation-link';
import { routes } from '@/constants/routes';

export const Navigation: FC = () => (
  <nav>
    <ul className={styles.list}>
      <li className={styles.item}>
        <NavigationLink href={routes.home} icon={faHome} label="Home" />
      </li>

      <li className={styles.item}>
        <NavigationLink href={routes.upload} icon={faPlusCircle} label="Add" />
      </li>
    </ul>
  </nav>
);
