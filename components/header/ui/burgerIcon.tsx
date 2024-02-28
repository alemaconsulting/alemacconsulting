import { Dispatch, SetStateAction } from 'react';

type PropsType = {
  setIsModalShown: Dispatch<SetStateAction<boolean>>;
};

const BurgerIcon = ({ setIsModalShown }: PropsType) => {
  return (
    <div onClick={() => setIsModalShown(true)}>
      <img src="../assets/icons/Burger_icon.svg" alt="" />
    </div>
  );
};

export default BurgerIcon;
