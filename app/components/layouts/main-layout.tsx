import { ReactElement, Suspense } from 'react';

import { twMerge } from 'tailwind-merge';

import Footer from '@/app/components/footer/footer';
import Header from '@/app/components/header/header';
import ModalNav from '@/app/components/modal-nav/modal-nav';
import Navigation from '@/app/components/nav/navigation';

type PropsType = {
  children: ReactElement;
  linksData: { slug: string; title: string }[];
};

const MainLayout = ({ children, linksData }: PropsType) => {
  return (
    <>
      <div
        className={twMerge(
          'bg-surface-light bg-vertical-gradient',
          'flex min-h-[100dvh] w-full justify-center overflow-hidden'
        )}
      >
        <div
          className={twMerge('relative flex w-full flex-col', 'p-2 md:p-5 lg:p-10 2xl:container')}
        >
          <Suspense>
            <ModalNav linksData={linksData} />
          </Suspense>
          <Header />
          <main className="mt-4 flex h-full flex-grow-1 gap-[60px] lg:py-8">
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
