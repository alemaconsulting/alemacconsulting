import { Metadata } from 'next';

import MainLayout from '@/app/components/layouts';
import { getAllPostsData, getAllPostSlugs } from '@/app/shared/helpers';
import MdToHtml from '@/app/shared/helpers/mdToHtml';
import { resultObj } from '@/app/shared/types';

import { generatePostMetadata } from './metadata';
type LinksData = { slug: string; title: string }[];

export async function generateStaticParams() {
  return await getAllPostSlugs();
}

export const dynamicParams = false;

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { content, postMetadata, linksData } = await getPostsData(slug);
  const pageContent = content && postMetadata ? content : '<div>No such page...</div>';

  return (
    <MainLayout linksData={linksData as LinksData}>
      <article className="contentSectionWrapper bg-horizontal-gradient">
        <MdToHtml mdSource={pageContent} />
      </article>
    </MainLayout>
  );
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return await generatePostMetadata(slug);
}
