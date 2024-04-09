const Logo = () => {
  return (
    <section className="flex select-none items-center md:w-[33%] md:flex-col">
      <img
        alt="Alema consunlting logo: triangle composed from differently shaped blue parts."
        src="../assets/Logo_triangle.svg"
        className="h-[46px] w-[55px] lg:h-[99px] lg:w-[118px] "
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
    </section>
  );
};

export default Logo;
