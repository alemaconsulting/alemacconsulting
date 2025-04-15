import Image from 'next/image';
import Link from 'next/link';

import { logo } from '@/app/shared/constants';

const Logo = () => {
  return (
    <Link
      href="/"
      title="Unternehmensberatung und Consulting in Berlin"
      className="flex items-center gap-2 select-none md:w-1/3 md:flex-col"
    >
      <Image
        alt="Unternehmensberatung in Berlin"
        src={logo}
        width={118}
        height={99}
        className="h-[46px] w-[55px] lg:h-[99px] lg:w-[118px]"
      />
      <div className="text-text-primary flex flex-col gap-1 text-center">
        <p className="text-base leading-[20px] font-[800] tracking-[1px] md:tracking-[3px] lg:ml-[12px] lg:text-2xl lg:tracking-[12px]">
          ALEMA
        </p>
        <p className="md:text-primary text-base leading-[20px] font-[800] tracking-[1px] md:text-[12px] lg:text-lg lg:tracking-[5px]">
          CONSULTING
        </p>
        <p className="hidden lg:block lg:text-sm lg:font-extrabold lg:tracking-[1px]">
          Unternehmensberatung
        </p>
      </div>
    </Link>
  );
};

export default Logo;
