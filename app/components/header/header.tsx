import { BurgerIcon, Logo, Matrix, Title } from "@/app/components/header/ui";

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
