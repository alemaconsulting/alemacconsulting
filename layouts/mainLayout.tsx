import Head from 'next/head';

import { useSearchParams } from 'next/navigation';

import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import ModalNav from '@/components/modalNav/modalNav';

type PropsType = {
  children: React.ReactElement;
  searchParams: Record<string, string> | null | undefined;
};

const MainLayout = ({ children }: PropsType) => {
  const isModalShown = useSearchParams().get('modal') && window.innerWidth < 1024;
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/icons/favicon.ico" />
        <title>Alema consulting</title>
      </Head>
      <div className="flex h-[100dvh] w-full justify-center overflow-hidden bg-gradBacking bg-verticalBgGrad">
        <div className="b-2-[grey] relative flex w-full flex-col p-2 2xl:container md:p-5 lg:p-10">
          {isModalShown ? <ModalNav /> : null}
          <Header />
          <main className="flex-grow-1 h-full">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
