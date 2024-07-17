import { PhoneIcon } from '@heroicons/react/24/outline';

import { CONTACT_PHONE_ONE, CONTACT_PHONE_TWO } from '@/shared/constants';

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center gap-3 border-t-2 border-t-borderGrey pt-2 text-sm font-bold sm:gap-[175px] sm:text-base md:pt-4 lg:gap-[360px] lg:text-lg">
      <address className="flex items-center gap-4 ">
        <PhoneIcon className="h-5 w-5 lg:h-7 lg:w-7" />
        <a href="tel:">Mob. {CONTACT_PHONE_TWO}</a>
        <a href="tel:">Tel. {CONTACT_PHONE_ONE}</a>
      </address>
    </footer>
  );
};

export default Footer;
