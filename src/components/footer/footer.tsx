import { FC } from 'react';
import styles from './footer.module.scss';
import { Container } from '../container/container';
import { getUserId } from '@/utils/get-user-id';

export const Footer: FC = () => {
  const userId = getUserId();

  return (
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
};
