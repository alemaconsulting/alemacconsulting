const Logo = () => {
  return (
    <div className="flex items-center md:w-[33%] md:flex-col">
      <img
        alt="Alema consunlting logo: triangle composed from differently shaped blue parts."
        src="../assets/Logo_triangle.svg"
        className="h-[46px] w-[55px]"
      />
      <div className="text-center text-primeText md:mt-[7px]">
        <p className="text-base font-[800] leading-[20px] tracking-[1px] md:tracking-[3px]">
          ALEMA
        </p>
        <p className="text-base font-[800] leading-[20px] tracking-[1px] md:text-[12px] md:text-accentBlue">
          CONSULTING
        </p>
        <p className="hidden">Unternehmensberatung</p>
      </div>
    </div>
  );
};

export default Logo;
