import BurgerIcon from './ui/burgerIcon';
import Logo from './ui/logo';
import Matrix from './ui/matrix';
import Title from './ui/title';

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between rounded-lg border-2 border-borderGrey bg-gradBacking bg-horizontalBgGrad p-4 md:px-8 md:py-3 lg:py-5">
      <Title />
      <Logo />
      <BurgerIcon />
      <Matrix />
    </header>
  );
};

export default Header;
