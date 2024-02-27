import Head from 'next/head';

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
      <div className="bg-gradBacking bg-verticalBgGrad flex h-[100dvh] w-full justify-center">
        <div className="b-2-[grey] bg-gradBacking bg-horizontalBgGrad flex flex-col rounded-2xl 2xl:container">
          <header className="flex-grow-0">Hello its header!</header>
          <main className="flex-grow-1 h-full">{children}</main>
          <footer className="flex-grow-0">Hello its footer</footer>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
