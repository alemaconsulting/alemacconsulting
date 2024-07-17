import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      title="Unternehmensberatung und Consulting in Berlin"
      className="flex select-none items-center md:w-[33%] md:flex-col"
    >
      <Image
        alt="Unternehmensberatung in Berlin"
        src="/assets/Logo_triangle.svg"
        width={118}
        height={99}
        className="h-[46px] w-[55px] lg:h-[99px] lg:w-[118px]"
      />
      <div className="text-center text-primeText md:mt-[7px]">
        <p className="text-base font-[800] leading-[20px] tracking-[1px] md:tracking-[3px] lg:ml-[12px] lg:text-2xl lg:tracking-[12px]">
          ALEMA
        </p>
        <p className="text-base font-[800] leading-[20px] tracking-[1px] md:text-[12px] md:text-accentBlue lg:text-lg lg:tracking-[5px]">
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
