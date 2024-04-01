import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BurgerIcon = () => {
  const pathname = usePathname();
  return (
    <Link className="block md:w-[33%]" href={`${pathname}?modal=true`}>
      <img className="ml-auto" src="../assets/icons/Burger_icon.svg" alt="" />
    </Link>
  );
};

export default BurgerIcon;
