import { twMerge } from 'tailwind-merge';

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

export default async function NotFound() {
  const linksData = await getAllPosts();
  return (
    <MainLayout linksData={linksData}>
      <section
        className={twMerge(
          'flex flex-col gap-4',
          'bg-horizontal-gradient contentSectionWrapper items-center'
        )}
      >
        <p className="text-center text-2xl">Diese Seite existiert leider nicht :(</p>
        <p className="font-medium">
          Versuchen Sie, zu einer vorhandenen Seite zu navigieren. Alle verfügbaren Seiten sind im
          Navigationsbereich auf der linken Seite aufgelistet. Falls Sie ein Mobilgerät oder Tablet
          verwenden, finden Sie das Menü über das Burger-Symbol in der rechten oberen Ecke.
        </p>
      </section>
    </MainLayout>
  );
}
