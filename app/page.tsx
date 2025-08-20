import Frontpage from "@/app/components/frontpage";
import MainLayout from "@/app/components/layouts";
import { getAllPostsData } from "@/app/shared/helpers/getAllPostsData";
import { resultObject } from "@/app/shared/types";

async function getAllPosts() {
  const allPostsData: resultObject[] = await getAllPostsData();
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
