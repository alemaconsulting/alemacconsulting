import type { AppProps } from 'next/app';

import MainLayout from '@/layouts/mainLayout';
import '../styles/globals.css';

type test = { searchParams: Record<string, string> | null | undefined };
type PageProps = AppProps & test;

const MyApp = ({ Component, pageProps, searchParams }: PageProps) => {
  return (
    <MainLayout searchParams={searchParams}>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default MyApp;
