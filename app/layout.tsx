import type { Metadata } from 'next';

import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Alema consulting',
  description: 'Alema Consulting Unternehmensberatung in Berlin.',
  icons: {
    icon: '/assets/icons/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
