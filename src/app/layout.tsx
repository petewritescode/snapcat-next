import '@/styles/base.scss';
import type { Metadata } from 'next';
import { FC, ReactNode } from 'react';

export type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Snapcat',
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
