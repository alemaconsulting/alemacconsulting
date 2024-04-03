import Link from 'next/link';

type PropsType = {
  linksData: { slug: string; title: string }[];
};

const Navigation = ({ linksData }: PropsType) => {
  const mappedLinks = linksData.map((link) => {
    return (
      <li key={link.slug} className="h-11 w-full border-t-2 border-borderGrey text-center">
        <Link href={link.slug} className="block h-full w-full truncate text-xl leading-10">
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <nav className="hidden h-max w-[300px] rounded-3xl border-2 border-borderGrey bg-gradBacking bg-horizontalBgGrad px-8 py-10 lg:block">
      <ul className="border-b-2 border-borderGrey font-extrabold">
        <li className="h-11 w-full border-t-2 border-borderGrey text-center">
          <Link href="/" className="block h-full w-full truncate text-xl leading-10">
            Alema consulting
          </Link>
        </li>
        {mappedLinks}
      </ul>
    </nav>
  );
};

export default Navigation;
