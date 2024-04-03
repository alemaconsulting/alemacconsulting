import HomepageLayout from '@/layouts/homepageLayout';
import MainLayout from '@/layouts/mainLayout';
import { getAllPostsData } from '@/shared/helpers/getAllPostsData';
import { resultObj } from '@/shared/types';

export async function getStaticProps() {
  const allPostsData: resultObj[] = await getAllPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

type PropsType = {
  allPostsData: resultObj[];
};

const Index = ({ allPostsData }: PropsType) => {
  const linksData = allPostsData.map((post) => ({
    slug: post.slug,
    title: post.title,
  }));
  return (
    <MainLayout linksData={linksData}>
      <section className="contentSectionWrapper flex items-center text-center text-2xl">
        Leider gibt es keine solche Seite :(
        <br />
        <br />
        Versuchen Sie, zur vorhandenen Seite zu navigieren. Sie werden alle im Navigationsblock auf
        der linken Seite aufgelistet, oder Wenn Sie ein Mobiltelefon/Tablet verwenden - im Menü, das
        Sie durch Tippen auf Burger öffnen können Symbol in der rechten oberen Ecke.
      </section>
    </MainLayout>
  );
};

export default Index;
