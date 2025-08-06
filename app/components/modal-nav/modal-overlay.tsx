import { JSX, KeyboardEvent, MouseEvent } from 'react';

interface PropertiesType {
  children?: JSX.Element;
  closeModal: () => void;
}

export const ModalOverlay = ({ children, closeModal }: PropertiesType) => {
  function closeHandler(e: KeyboardEvent<HTMLDialogElement> | MouseEvent<HTMLDialogElement>) {
    const target = e.target as HTMLElement;
    if (target.dataset && Object.hasOwn(target.dataset, 'overlay')) {
      closeModal();
    }
  }

  return (
    <dialog
      className="overlay pointer-events-auto absolute top-0 left-0 z-10 flex h-full w-full justify-start bg-black/40"
      data-overlay="true"
      onClick={(e) => {
        closeHandler(e);
      }}
    >
      {children}
    </dialog>
  );
};
