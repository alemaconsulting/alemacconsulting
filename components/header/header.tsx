import { useState } from 'react';

import BurgerIcon from './ui/burgerIcon';
import Logo from './ui/logo';
import ModalOverlay from './ui/modalOverlay';
import NavModal from './ui/navModal';

const Header = () => {
  const [isModalShown, setIsModalShown] = useState(true);
  return (
    <header className="flex w-full items-center justify-between rounded-lg border-2 border-borderGrey bg-gradBacking bg-horizontalBgGrad p-4">
      <Logo />
      <BurgerIcon setIsModalShown={setIsModalShown} />
      <ModalOverlay isModalShown={isModalShown} setIsModalShown={setIsModalShown}></ModalOverlay>
      <NavModal setIsModalShown={setIsModalShown} isModalShown={isModalShown} />
    </header>
  );
};

export default Header;
