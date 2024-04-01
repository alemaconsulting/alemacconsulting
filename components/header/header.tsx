import BurgerIcon from './ui/burgerIcon';
import Logo from './ui/logo';
import Title from './ui/title';

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between rounded-lg border-2 border-borderGrey bg-gradBacking bg-horizontalBgGrad p-4 md:px-8 md:py-3">
      <Title />
      <Logo />
      <BurgerIcon />
    </header>
  );
};

export default Header;
