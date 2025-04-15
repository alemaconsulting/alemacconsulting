import { XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

type PropsType = {
  closeModal: () => void;
  linksData: { slug: string; title: string }[];
};

const NavBlock = ({ closeModal, linksData }: PropsType) => {
  const pathName = usePathname();
  const isActiveLink = (slug: string) => pathName === slug;
  const mappedLinks = linksData.map((link) => {
    return (
      <li key={link.slug} className="border-border-base h-11 w-full border-t-2 text-center">
        <Link
          href={link.slug}
          className={twMerge(
            'routeLink font-bold',
            isActiveLink(`/${link.slug}`) && 'text-primary-bright'
          )}
          title={link.title}
        >
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <nav
      className={twMerge(
        'bg-info-muted absolute top-0 right-0 z-20 w-[250px] cursor-auto rounded-tl-xl rounded-bl-xl px-6 py-3'
      )}
    >
      <XMarkIcon
        onClick={closeModal}
        className="text-primary hover:text-primary-bright/50 absolute top-5 right-5 z-20 h-8 w-8 cursor-pointer transition-transform hover:scale-110"
        aria-label="Close modal"
      />
      <ul className="border-border-base mt-[72px] border-b-2">
        <li className="border-border-base h-11 w-full border-t-2 text-center">
          <Link
            href="/"
            className={twMerge('routeLink font-bold', isActiveLink('/') && 'text-primary-bright')}
          >
            Alema Consulting
          </Link>
        </li>
        {mappedLinks}
      </ul>
    </nav>
  );
};

export default NavBlock;
