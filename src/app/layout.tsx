import '@fortawesome/fontawesome-svg-core/styles.css';
import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core';
import { AppLayout } from '@/components/app-layout/app-layout';
import '@/styles/base.scss';
import styles from './layout.module.scss';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { FC, ReactNode } from 'react';

fontAwesomeConfig.autoAddCss = false;

export type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: {
    default: 'Snapcat',
    template: 'Snapcat | %s',
  },
};

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });
const className = clsx(styles.html, dmSans.variable);

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en" className={className}>
    <body>
      <AppLayout>{children}</AppLayout>
    </body>
  </html>
);

export default RootLayout;
