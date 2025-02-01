'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BurgerIcon = () => {
  const pathname = usePathname() || '';

  // Строим корректный путь
  const href = pathname ? `${pathname}?modal=true` : '/?modal=true';

  return (
    <Link className="block md:w-[33%] lg:hidden" href={href}>
      <Image
        className="ml-auto"
        src="/assets/icons/Burger_icon.svg" // Абсолютный путь
        alt="Burger icon"
        width={24}
        height={24}
      />
    </Link>
  );
};

export default BurgerIcon;
