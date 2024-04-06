import { PhoneIcon } from '@heroicons/react/24/outline';
import { MapPinIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center gap-3 border-t-2 border-t-borderGrey pt-2 text-sm font-bold sm:gap-[175px] sm:text-base md:pt-4 lg:gap-[360px] lg:text-lg">
      <address className="flex items-center gap-2 ">
        <MapPinIcon className="h-5 w-5 lg:h-7 lg:w-7" />
        <p className="not-italic">
          Siemensstr. 13, <br /> 12247 Berlin
        </p>
      </address>
      <div className="flex items-center gap-2 ">
        <PhoneIcon className="h-5 w-5 lg:h-7 lg:w-7" />
        <div>
          <a href="tel:">Tel. 03085629694</a>
          <br />
          <a href="tel:">Mob. 01703707021</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
