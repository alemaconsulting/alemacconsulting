'use client';
import { Squares2X2Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BurgerIcon = () => {
  const pathname = usePathname() || '';

  // Строим корректный путь
  const href = pathname ? `${pathname}?modal=true` : '/?modal=true';
  // TODO: мне не нравится логика сокрытия в компоненте
  return (
    <Link className="block md:w-[33%] lg:hidden" href={href}>
      <Squares2X2Icon className="text-primary h-8 w-8" aria-hidden="true" />
    </Link>
  );
};

export default BurgerIcon;
