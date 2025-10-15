import { FC } from 'react';
import styles from './footer.module.scss';
import { Container } from '../container/container';

export type FooterProps = {
  userId: string;
};

export const Footer: FC<FooterProps> = ({ userId }) => (
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
);
