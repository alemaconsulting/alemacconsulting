import Link from 'next/link';
import { usePathname } from 'next/navigation';

type PropsType = {
  linksData: { slug: string; title: string }[];
};

const Navigation = ({ linksData }: PropsType) => {
  const pathName = usePathname();
  const isActiveLink = (slug: string) => pathName === slug;
  const mappedLinks = linksData.map((link) => {
    return (
      <li key={link.slug} className="h-11 w-full border-t-2 border-borderGrey text-center">
        <Link
          href={link.slug}
          className={`routeLink ${isActiveLink(`/${link.slug}`) ? 'text-brightBlue' : ''}`}
        >
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <nav className="hidden h-max w-[300px] rounded-3xl border-2 border-borderGrey bg-gradBacking bg-horizontalBgGrad px-8 py-10 lg:block">
      <ul className="border-b-2 border-borderGrey font-extrabold">
        <li className="h-11 w-full border-t-2 border-borderGrey text-center">
          <Link href="/" className={`routeLink ${isActiveLink('/') ? 'text-brightBlue' : ''}`}>
            Alema consulting
          </Link>
        </li>
        {mappedLinks}
      </ul>
    </nav>
  );
};

export default Navigation;
