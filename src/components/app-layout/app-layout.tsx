import { FC, ReactNode } from 'react';
import styles from './app-layout.module.scss';
import { Container } from '../container/container';
import { Logo } from '../logo/logo';
import { Navigation } from '../navigation/navigation';
import { cookies } from 'next/headers';
import { cookieNames } from '@/constants/cookie-names';

export type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  const userId = cookies().get(cookieNames.userId)?.value ?? 'N/A';

  return (
    <>
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

      <Container>{children}</Container>

      <footer className={styles.footer}>
        <Container>
          User ID: {userId} — Built by{' '}
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
};
