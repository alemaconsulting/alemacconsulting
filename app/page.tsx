import HomepageLayout from '@/layouts/homepageLayout';
import MainLayout from '@/layouts/mainLayout';
import { getAllPostsData } from '@/shared/helpers/getAllPostsData';
import { resultObj } from '@/shared/types';

async function getAllPosts() {
  const allPostsData: resultObj[] = await getAllPostsData();
  return allPostsData
    .sort((a, b) => a.weight - b.weight)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
    }));
}
const Index = async () => {
  const linksData = await getAllPosts();
  return (
    <MainLayout linksData={linksData}>
      <HomepageLayout />
    </MainLayout>
  );
};

export default Index;
