import Frontpage from '@/components/frontpage';
import MainLayout from '@/layouts/main-layout';
import { getAllPostsData } from '@/shared/helpers/getAllPostsData';
import { resultObj } from '@/shared/types';

async function getAllPosts() {
  const allPostsData: resultObj[] = await getAllPostsData();
  return allPostsData
    .sort((a, b) => a.weight - b.weight)
    .map((post) => ({
      key: post.slug,
      slug: post.slug,
      title: post.title,
    }));
}
const Index = async () => {
  const linksData = await getAllPosts();
  return (
    <MainLayout linksData={linksData}>
      <Frontpage />
    </MainLayout>
  );
};

export default Index;
