import { Metadata } from 'next';

import Head from 'next/head';

import MainLayout from '@/app/components/layouts/main-layout';
import { SITE_URL } from '@/app/shared/constants';
import { getAllPostsData } from '@/app/shared/helpers/getAllPostsData';
import { getAllPostSlugs } from '@/app/shared/helpers/getAllPostsSlugs';
import MdToHtml from '@/app/shared/helpers/mdToHtml';
import { resultObj } from '@/app/shared/types';

type LinksData = { slug: string; title: string }[];

export async function generateStaticParams() {
  return await getAllPostSlugs();
}

export const dynamicParams = false;

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
  const jsonLd = postMetadata
    ? {
        '@context': 'https://schema.org',
        '@type': 'Dienstleistung',
        name: postMetadata.title,
        url: SITE_URL + slug,
        description: postMetadata.description,
      }
    : null;

  return (
    <MainLayout linksData={linksData as LinksData}>
      <article className="contentSectionWrapper bg-horizontal-gradient">
        <MdToHtml mdSource={pageContent} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </article>
    </MainLayout>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const allPostsData = await getAllPostsData();
  const post = allPostsData.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: 'Seite nicht gefunden | Alema Consulting',
      description: 'Diese Seite konnte leider nicht gefunden werden.',
    };
  }

  return {
    title: post.title,
    description: post.description || 'Professionelle Beratung und Expertise von Alema Consulting.',
    keywords: (post.tags || []).filter(Boolean),
    creator: post.author || 'Alema Consulting Team',
    publisher: 'Alema Consulting',
    icons: {
      icon: '/assets/icons/favicon.ico',
      apple: '/apple-icon.png',
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description || '',
      siteName: 'Alema Consulting',
      url: `${SITE_URL}${slug}`,
      images: [
        {
          url: '/assets/opengraph-image.jpg',
          width: 677,
          height: 508,
        },
      ],
      locale: 'de',
    },
  };
}
