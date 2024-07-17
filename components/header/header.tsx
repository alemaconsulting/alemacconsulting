import BurgerIcon from './ui/burgerIcon';
import Logo from './ui/logo';
import Matrix from './ui/matrix';
import Title from './ui/title';

const Header = () => {
  return (
    <header>
      <Title />
      <Logo />
      <BurgerIcon />
      <Matrix />
    </header>
  );
};

export default Header;
