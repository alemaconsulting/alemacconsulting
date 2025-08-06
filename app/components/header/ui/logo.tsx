import Image from 'next/image';
import Link from 'next/link';

import { logo } from '@/app/shared/constants';

export const Logo = () => {
  return (
    <Link
      className="flex items-center gap-2 select-none md:w-1/3 md:flex-col"
      href="/"
      title="Unternehmensberatung und Consulting in Berlin"
    >
      <Image
        alt="Unternehmensberatung in Berlin"
        className="h-12 w-14 lg:h-24 lg:w-28"
        height={99}
        src={logo}
        width={118}
      />
      <div className="text-text-primary flex flex-col gap-1 text-center">
        <p className="text-base leading-5 font-extrabold tracking-wide md:tracking-widest lg:ml-3 lg:text-2xl lg:tracking-[12px]">
          ALEMA
        </p>
        <p className="md:text-primary text-base leading-5 font-extrabold tracking-wide md:text-xs lg:text-lg lg:tracking-[5px]">
          CONSULTING
        </p>
        <p className="hidden lg:block lg:text-sm lg:font-extrabold lg:tracking-wide">
          Unternehmensberatung
        </p>
      </div>
    </Link>
  );
};
