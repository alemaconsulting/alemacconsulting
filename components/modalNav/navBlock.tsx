type PropsType = {
  closeModal: () => void;
};

const NavBlock = ({ closeModal }: PropsType) => {
  return (
    <section className="absolute right-0 top-0 z-20 h-screen w-[250px] cursor-auto rounded-bl-xl rounded-tl-xl bg-paleBlue p-3">
      <div onClick={closeModal} className="absolute right-[20px] top-[20px] z-20">
        <img src="../assets/icons/close_icon.svg" alt="" />
      </div>
      <div className="mt-10">Here is my modal content!</div>
    </section>
  );
};

export default NavBlock;
