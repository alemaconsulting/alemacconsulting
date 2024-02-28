const Logo = () => {
  return (
    <div className="flex items-center">
      <img
        alt="Alema consunlting logo: triangle composed from differently shaped blue parts."
        src="../assets/Logo_triangle.svg"
        className="h-[46px] w-[55px]"
      />
      <div className="text-center text-primeText">
        <p className="text-base font-[800] leading-[20px] tracking-[1px]">ALEMA</p>
        <p className="text-base font-[800] leading-[20px] tracking-[1px]">CONSULTING</p>
        <p className="hidden">Unternehmensberatung</p>
      </div>
    </div>
  );
};

export default Logo;
