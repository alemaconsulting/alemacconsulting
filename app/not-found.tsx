import MainLayout from '@/app/components/layouts/main-layout';
import { getAllPostsData } from '@/app/shared/helpers/getAllPostsData';
import { resultObj } from '@/app/shared/types';

export async function getAllPosts() {
  const allPostsData: resultObj[] = await getAllPostsData();
  return allPostsData.map((post) => ({
    slug: post.slug,
    title: post.title,
  }));
}

const Index = async () => {
  const linksData = await getAllPosts();
  return (
    <MainLayout linksData={linksData}>
      <section className="bg-horizontal-gradient contentSectionWrapper flex items-center text-center text-2xl">
        <p>Leider gibt es keine solche Seite :(</p>
        <p>
          Versuchen Sie, zur vorhandenen Seite zu navigieren. Sie werden alle im Navigationsblock
          auf der linken Seite aufgelistet, oder Wenn Sie ein Mobiltelefon/Tablet verwenden - im
          Menü, das Sie durch Tippen auf Burger öffnen können Symbol in der rechten oberen Ecke.
        </p>
      </section>
    </MainLayout>
  );
};

export default Index;
