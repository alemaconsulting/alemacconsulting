import { BurgerIcon } from "@/app/components/header/ui/burgerIcon";
import { Logo } from "@/app/components/header/ui/logo";
import { Matrix } from "@/app/components/header/ui/matrix";
import { Title } from "@/app/components/header/ui/title";

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
