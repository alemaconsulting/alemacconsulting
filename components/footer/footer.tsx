import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/24/outline';

import { CONTACT_PHONE_ONE, CONTACT_PHONE_TWO } from '@/shared/constants';

const Footer = () => {
  return (
    <footer>
      <address className="flex items-center gap-4">
        <PhoneIcon className="h-5 w-5 lg:h-7 lg:w-7" />
        <a href="tel:">Mob. {CONTACT_PHONE_TWO}</a>
        <a href="tel:">Tel. {CONTACT_PHONE_ONE}</a>
        <AtSymbolIcon className="h-5 w-5 lg:h-7 lg:w-7" />
        <a href="mailto:info@alema-consulting.de">info@alema-consulting.de</a>
      </address>
    </footer>
  );
};

export default Footer;
