import { BurgerIcon } from './ui/burgerIcon';
import { Logo } from './ui/logo';
import { Matrix } from './ui/matrix';
import { Title } from './ui/title';

export const Header = () => {
  return (
    <header className="bg-horizontal-gradient">
      <Title />
      <Logo />
      <BurgerIcon />
      <Matrix />
    </header>
  );
};
