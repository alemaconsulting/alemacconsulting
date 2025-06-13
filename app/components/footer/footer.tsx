import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { CONTACT_PHONE_ONE, CONTACT_PHONE_TWO } from '@/app/shared/constants';

export const Footer = () => {
  return (
    <footer className="py-6">
      <address className="text-text-primary flex flex-wrap items-center gap-4 text-sm not-italic">
        <div className="flex items-center gap-2">
          <PhoneIcon className="hover:text-primary h-5 w-5 transition-transform duration-200 lg:h-6 lg:w-6" />
          <Link
            href={`tel:${CONTACT_PHONE_TWO}`}
            className="hover:text-primary-bright transition-colors duration-200"
          >
            Mob. {CONTACT_PHONE_TWO}
          </Link>
          <Link
            href={`tel:${CONTACT_PHONE_ONE}`}
            className="hover:text-primary-bright transition-colors duration-200"
          >
            Tel. {CONTACT_PHONE_ONE}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <AtSymbolIcon className="hover:text-primary h-5 w-5 transition-transform duration-200 lg:h-6 lg:w-6" />
          <Link
            href="mailto:info@alema-consulting.de"
            className="hover:text-primary-bright transition-colors duration-200"
          >
            info@alema-consulting.de
          </Link>
        </div>
      </address>
    </footer>
  );
};
