import '@/styles/base.scss';
import styles from './layout.module.scss';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { FC, ReactNode } from 'react';
import { AppLayout } from '@/components/app-layout/app-layout';

export type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Snapcat',
};

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const classNames = clsx(styles.html, dmSans.variable);

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en" className={classNames}>
    <body>
      <AppLayout>{children}</AppLayout>
    </body>
  </html>
);

export default RootLayout;
