'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

type PropsType = {
  linksData: { slug: string; title: string }[];
};

const Navigation = ({ linksData }: PropsType) => {
  const pathName = usePathname();
  const isActiveLink = (slug: string) => pathName === slug;
  const mappedLinks = linksData.map((link) => {
    return (
      <li key={link.slug} className="border-border-base h-11 w-full border-t-2 text-center">
        <Link
          href={link.slug}
          className={twMerge('routeLink', isActiveLink(`/${link.slug}`) && 'text-primary-bright')}
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
            href="/"
            className={twMerge('routeLink', isActiveLink('/') && 'text-primary-bright')}
          >
            Alema Consulting
          </Link>
        </li>
        {mappedLinks}
      </ul>
    </nav>
  );
};

export default Navigation;
