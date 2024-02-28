import { Dispatch, SetStateAction } from 'react';

type PropsType = {
  setIsModalShown: Dispatch<SetStateAction<boolean>>;
};

const BurgerIcon = ({ setIsModalShown }: PropsType) => {
  return (
    <div className="md:w-[33%]">
      <img
        className="ml-auto"
        onClick={() => setIsModalShown(true)}
        src="../assets/icons/Burger_icon.svg"
        alt=""
      />
    </div>
  );
};

export default BurgerIcon;
