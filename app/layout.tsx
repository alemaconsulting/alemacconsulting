import { ReactNode } from 'react';

import type { Metadata } from 'next';

import { defaultMetaObj } from '@/shared/constants';

import '../styles/globals.css';

export const metadata: Metadata = {
  ...defaultMetaObj,
  icons: {
    icon: '/assets/icons/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
