import { FC, ReactNode } from 'react';
import { Container } from '../container/container';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { getUserId } from '@/utils/get-user-id';

export type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout: FC<AppLayoutProps> = async ({ children }) => {
  const userId = await getUserId();

  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer userId={userId} />
    </>
  );
};
