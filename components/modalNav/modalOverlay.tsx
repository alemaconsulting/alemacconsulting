type PropsType = {
  closeModal: () => void;
  children?: JSX.Element;
};

const ModalOverlay = ({ children, closeModal }: PropsType) => {
  function closeHandler(
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>
  ) {
    if ((e.target as HTMLButtonElement).hasAttribute('data-overlay')) closeModal();
  }
  return (
    <div
      data-overlay
      onClick={(e) => closeHandler(e)}
      className="overlay pointer-events-auto absolute left-0 top-0 z-10 flex h-full w-full justify-start bg-black/40"
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
