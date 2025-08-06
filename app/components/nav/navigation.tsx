'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

interface PropertiesType {
  linksData: { slug: string; title: string }[];
}

export const Navigation = ({ linksData }: PropertiesType) => {
  const pathName = usePathname();
  const isActiveLink = (slug: string) => pathName === slug;
  const mappedLinks = linksData.map((link) => {
    return (
      <li className="border-border-base h-11 w-full border-t-2 text-center" key={link.slug}>
        <Link
          className={twMerge('routeLink', isActiveLink(`/${link.slug}`) && 'text-primary-bright')}
          href={link.slug}
          title={link.title}
        >
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <nav className="border-border-base bg-surface-light bg-horizontal-gradient hidden h-max rounded-3xl border-2 px-8 py-10 lg:block lg:w-[400px]">
      <ul className="border-border-base w-full border-b-2 font-extrabold">
        <li className="border-border-base h-11 w-full border-t-2 text-center">
          <Link
            className={twMerge('routeLink', isActiveLink('/') && 'text-primary-bright')}
            href="/"
          >
            Alema Consulting
          </Link>
        </li>
        {mappedLinks}
      </ul>
    </nav>
  );
};
