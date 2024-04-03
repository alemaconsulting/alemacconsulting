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
      <HomepageLayout />
    </MainLayout>
  );
};

export default Index;
