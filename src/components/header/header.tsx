import { FC } from 'react';
import styles from './header.module.scss';
import { Container } from '../container/container';
import { Logo } from '../logo/logo';
import { Navigation } from '../navigation/navigation';

export const Header: FC = () => (
  <header className={styles.header}>
    <Container shallow>
      <div className={styles.wrapper}>
        <div>
          <Logo />
        </div>

        <div>
          <Navigation />
        </div>
      </div>
    </Container>
  </header>
);
