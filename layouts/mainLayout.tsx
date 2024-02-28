import Head from 'next/head';

import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';

type PropsType = {
  children: React.ReactElement;
};

const MainLayout = ({ children }: PropsType) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/icons/favicon.ico" />
        <title>Alema consulting</title>
      </Head>
      <div className="flex h-[100dvh] w-full justify-center overflow-hidden bg-gradBacking bg-verticalBgGrad">
        <div className="b-2-[grey] relative flex w-full flex-col p-2 2xl:container">
          <Header />
          <main className="flex-grow-1 h-full">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
