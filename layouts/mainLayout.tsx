import Head from 'next/head';

import { useSearchParams } from 'next/navigation';

import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import ModalNav from '@/components/modalNav/modalNav';
import Navigation from '@/components/nav/navigation';

type PropsType = {
  children: React.ReactElement;
  linksData: { slug: string; title: string }[];
};

const MainLayout = ({ children, linksData }: PropsType) => {
  const isModalShown = useSearchParams().get('modal') && window.innerWidth < 1024;
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/assets/icons/favicon.ico" />
        <title>Alema consulting</title>
      </Head>
      <div className="flex min-h-[100dvh] w-full justify-center overflow-hidden bg-gradBacking bg-verticalBgGrad">
        <div className="b-2-[grey] relative flex w-full flex-col p-2 2xl:container md:p-5 lg:p-10">
          {isModalShown ? <ModalNav linksData={linksData} /> : null}
          <Header />
          <main className="flex-grow-1 mt-4 flex h-full gap-[60px] lg:py-8">
            <Navigation linksData={linksData} />
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
