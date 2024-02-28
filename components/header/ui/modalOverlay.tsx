import { motion } from 'framer-motion';

type PropsType = {
  setIsModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  isModalShown: boolean;
  children?: JSX.Element;
};

const ModalOverlay = ({ isModalShown, setIsModalShown, children }: PropsType) => {
  function closeHandler(
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>
  ) {
    if ((e.target as HTMLButtonElement).hasAttribute('data-overlay')) {
      setIsModalShown((prev) => !prev);
    }
  }
  return (
    <motion.div
      data-overlay
      animate={{ opacity: isModalShown ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      onClick={(e) => closeHandler(e)}
      onKeyDown={(e) => closeHandler(e)}
      className={`${isModalShown ? 'pointer-events-auto' : 'pointer-events-none'} overlay absolute left-0 top-0 z-10 flex h-full w-full justify-start bg-black/40`}
    >
      {children}
    </motion.div>
  );
};

export default ModalOverlay;
