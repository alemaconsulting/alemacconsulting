import { JSX, MouseEvent, KeyboardEvent } from 'react';

type PropsType = {
  closeModal: () => void;
  children?: JSX.Element;
};

const ModalOverlay = ({ children, closeModal }: PropsType) => {
  function closeHandler(e: MouseEvent<HTMLDialogElement> | KeyboardEvent<HTMLDialogElement>) {
    if ((e.target as HTMLButtonElement).hasAttribute('data-overlay')) closeModal();
  }

  return (
    <dialog
      data-overlay="true"
      onClick={(e) => closeHandler(e)}
      className="overlay pointer-events-auto absolute left-0 top-0 z-10 flex h-full w-full justify-start bg-black/40"
    >
      {children}
    </dialog>
  );
};

export default ModalOverlay;
