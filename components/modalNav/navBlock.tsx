import { XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type PropsType = {
  closeModal: () => void;
  linksData: { slug: string; title: string }[];
};

const NavBlock = ({ closeModal, linksData }: PropsType) => {
  const pathName = usePathname();
  const isActiveLink = (slug: string) => pathName === slug;
  const mappedLinks = linksData.map((link) => {
    return (
      <li key={link.slug} className="h-11 w-full border-t-2 border-borderGrey text-center">
        <Link
          href={link.slug}
          className={`routeLink font-bold ${isActiveLink(`/${link.slug}`) ? 'text-brightBlue' : ''}`}
        >
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <nav className="absolute right-0 top-0 z-20 w-[250px] cursor-auto rounded-bl-xl rounded-tl-xl bg-paleBlue px-6 py-3">
      <XMarkIcon onClick={closeModal} className="absolute right-[20px] top-[20px] z-20 h-12 w-12" />
      <ul className="mt-[72px] border-b-2 border-borderGrey">
        <li className="h-11 w-full border-t-2 border-borderGrey text-center">
          <Link
            href="/"
            className={`routeLink font-bold ${isActiveLink('/') ? 'text-brightBlue' : ''}`}
          >
            Alema consulting
          </Link>
        </li>
        {mappedLinks}
      </ul>
    </nav>
  );
};

export default NavBlock;
