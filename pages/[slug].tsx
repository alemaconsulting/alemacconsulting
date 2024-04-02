import MainLayout from '@/layouts/mainLayout';
import { getAllPostsData } from '@/shared/helpers/getAllPostsData';
import { getAllPostSlugs } from '@/shared/helpers/getAllPostsSlugs';
import MdToHtml from '@/shared/helpers/mdToHtml';
import { postData, resultObj } from '@/shared/types';

type PropsType = postData & { allPostsData: resultObj[] };

const ContentPage = ({ postMetadata, content, allPostsData }: PropsType) => {
  const linksData = allPostsData.map((post) => ({
    slug: post.slug,
    title: post.title,
  }));
  const pageContent = content && postMetadata ? content : '<div>No such page...</div>';
  return (
    <MainLayout linksData={linksData}>
      <>
        <div>
          <MdToHtml mdSource={pageContent} />
        </div>
      </>
    </MainLayout>
  );
};

export async function getStaticPaths() {
  const postSlugs = await getAllPostSlugs();
  const paths = postSlugs.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  try {
    const allPostsData: resultObj[] = await getAllPostsData();
    const post = allPostsData.find((post) => post.slug === params.slug);
    if (post) {
      const { content, ...postMetadata } = post;
      return { props: { content, postMetadata, allPostsData } };
    } else {
      return { props: { content: undefined, postMetadata: undefined, allPostsData } };
    }
  } catch (error) {
    return { notFound: true };
  }
}

export default ContentPage;
