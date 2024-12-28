import { Metadata } from 'next';

import MainLayout from '@/layouts/mainLayout';
import { defaultMetaObj } from '@/shared/constants';
import { getAllPostsData } from '@/shared/helpers/getAllPostsData';
import { getAllPostSlugs } from '@/shared/helpers/getAllPostsSlugs';
import MdToHtml from '@/shared/helpers/mdToHtml';
import { resultObj } from '@/shared/types';

type LinksData = { slug: string; title: string }[];

export async function generateStaticParams() {
  return await getAllPostSlugs();
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const allPostsData = await getAllPostsData();
  const post = allPostsData.find((post) => post.slug === slug);

  if (!post) {
    return defaultMetaObj;
  }

  return {
    title: post.title,
    description: post.description,
  };
}

async function getPostsData(slug: string) {
  try {
    const allPostsData: resultObj[] = await getAllPostsData();
    const linksData = allPostsData
      .sort((a, b) => a.weight - b.weight)
      .map((post) => ({
        slug: post.slug,
        title: post.title,
      }));
    const post = allPostsData.find((post) => post.slug === slug);

    if (!post) {
      throw new Error('No post!');
    }

    const { content, ...postMetadata } = post;
    return { content, postMetadata, linksData };
  } catch (error) {
    return { notFound: true };
  }
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { content, postMetadata, linksData } = await getPostsData(slug);
  const pageContent = content && postMetadata ? content : '<div>No such page...</div>';

  return (
    <MainLayout linksData={linksData as LinksData}>
      <article className="contentSectionWrapper">
        <MdToHtml mdSource={pageContent} />
      </article>
    </MainLayout>
  );
}
