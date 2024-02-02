import { FC, ReactNode } from 'react';
import styles from './app-layout.module.scss';
import { Container } from '../container/container';
import { Logo } from '../logo/logo';

export type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout: FC<AppLayoutProps> = ({ children }) => (
  <>
    <header className={styles.header}>
      <Container shallow>
        <div className={styles.wrapper}>
          <div className={styles.logoWrapper}>
            <Logo />
          </div>

          <div>{/* <Navigation /> */}</div>
        </div>
      </Container>
    </header>

    <Container>{children}</Container>

    <footer className={styles.footer}>
      <Container>
        Built by{' '}
        <a
          href="https://github.com/petewritescode"
          target="_blank"
          rel="noreferrer"
        >
          Pete Williams
        </a>
      </Container>
    </footer>
  </>
);
