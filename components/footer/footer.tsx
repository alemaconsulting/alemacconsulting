import { PhoneIcon } from '@heroicons/react/24/outline';
import { MapPinIcon } from '@heroicons/react/24/solid';

import {
  CONTACT_PHONE_ONE,
  CONTACT_PHONE_TWO,
  ADDRESS_PART_ONE,
  ADDRESS_PART_TWO,
} from '../../shared/constants';

const Footer = () => {
  return (
    <footer className="flex w-full items-center justify-center gap-3 border-t-2 border-t-borderGrey pt-2 text-sm font-bold sm:gap-[175px] sm:text-base md:pt-4 lg:gap-[360px] lg:text-lg">
      <address className="flex items-center gap-2 ">
        <MapPinIcon className="h-5 w-5 lg:h-7 lg:w-7" />
        <p className="not-italic">
          {ADDRESS_PART_ONE}, <br /> {ADDRESS_PART_TWO}
        </p>
      </address>
      <section className="flex items-center gap-2 ">
        <PhoneIcon className="h-5 w-5 lg:h-7 lg:w-7" />
        <div>
          <a href="tel:">Tel. {CONTACT_PHONE_ONE}</a>
          <br />
          <a href="tel:">Mob. {CONTACT_PHONE_TWO}</a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
