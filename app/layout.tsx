import { Nunito } from 'next/font/google';
import { ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

import { defaultMetaObj } from '@/app/shared/constants';

import type { Metadata, Viewport } from 'next';

import '@/app/styles/globals.css';

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  subsets: ['latin', 'cyrillic'],
});
export const metadata: Metadata = {
  ...defaultMetaObj,
  icons: {
    icon: '/assets/icons/favicon.ico',
  },
};
// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body className={twMerge(nunito.className)}>{children}</body>
    </html>
  );
}
