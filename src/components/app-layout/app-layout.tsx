import { FC, ReactNode } from 'react';
import { Container } from '../container/container';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

export type AppLayoutProps = {
  children: ReactNode;
};

export const AppLayout: FC<AppLayoutProps> = ({ children }) => (
  <>
    <Header />
    <Container>{children}</Container>
    <Footer />
  </>
);
