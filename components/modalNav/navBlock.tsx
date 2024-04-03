import Link from 'next/link';

type PropsType = {
  closeModal: () => void;
  linksData: { slug: string; title: string }[];
};

const NavBlock = ({ closeModal, linksData }: PropsType) => {
  const mappedLinks = linksData.map((link) => {
    return (
      <li key={link.slug} className="h-11 w-full border-t-2 border-borderGrey text-center">
        <Link
          href={link.slug}
          className="block h-full w-full truncate text-base font-bold leading-10"
        >
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <nav className="absolute right-0 top-0 z-20 h-screen w-[250px] cursor-auto rounded-bl-xl rounded-tl-xl bg-paleBlue px-6 py-3">
      <div onClick={closeModal} className="absolute right-[20px] top-[20px] z-20">
        <img src="../assets/icons/close_icon.svg" alt="" />
      </div>
      <ul className="mt-[72px] border-b-2 border-borderGrey">
        <li className="h-11 w-full border-t-2 border-borderGrey text-center">
          <Link href="/" className="block h-full w-full truncate text-base font-bold leading-10">
            Alema consulting
          </Link>
        </li>
        {mappedLinks}
      </ul>
    </nav>
  );
};

export default NavBlock;
