import MainLayout from '@/layouts/mainLayout';
import { getAllPostsData } from '@/shared/helpers/getAllPostsData';
import { getAllPostSlugs } from '@/shared/helpers/getAllPostsSlugs';
import MdToHtml from '@/shared/helpers/mdToHtml';
import { resultObj } from '@/shared/types';

type LinksData = { slug: string; title: string }[];

export async function generateStaticParams() {
  const allPosts = await getAllPostSlugs();
  return allPosts;
}

export const dynamicParams = false;

async function getPostsData(slug: string) {
  try {
    const allPostsData: resultObj[] = await getAllPostsData();
    const linksData = allPostsData.map((post) => ({
      slug: post.slug,
      title: post.title,
    }));
    const post = allPostsData.find((post) => post.slug === slug);
    if (post) {
      const { content, ...postMetadata } = post;
      return { content, postMetadata, linksData };
    } else {
      throw new Error('No post!');
      // return { content: undefined, postMetadata: undefined, linksData };
    }
  } catch (error) {
    return { notFound: true };
  }
}

const ContentPage = async ({ params }: { params: { slug: string } }) => {
  const { content, postMetadata, linksData } = await getPostsData(params.slug);
  const pageContent = content && postMetadata ? content : '<div>No such page...</div>';
  return (
    <MainLayout linksData={linksData as LinksData}>
      <MdToHtml mdSource={pageContent} />
    </MainLayout>
  );
};

export default ContentPage;
