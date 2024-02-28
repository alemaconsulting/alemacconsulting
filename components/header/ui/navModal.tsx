import { motion } from 'framer-motion';

import { Dispatch, SetStateAction } from 'react';

type PropsType = {
  setIsModalShown: Dispatch<SetStateAction<boolean>>;
  isModalShown: boolean;
};

const NavModal = ({ setIsModalShown, isModalShown }: PropsType) => {
  return (
    <motion.div
      animate={{ right: isModalShown ? 0 : '-100%' }}
      transition={{ duration: 0.2 }}
      className="absolute top-0 z-20 h-screen w-[250px] cursor-auto rounded-bl-xl rounded-tl-xl bg-paleBlue p-3"
    >
      <div
        onClick={() => {
          setIsModalShown((prev) => !prev);
        }}
        className="absolute right-[20px] top-[20px] z-20"
      >
        <img src="../assets/icons/close_icon.svg" alt="" />
      </div>
      <div className="mt-10">Here is my modal content!</div>
    </motion.div>
  );
};

export default NavModal;
