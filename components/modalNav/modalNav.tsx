import { useRouter } from 'next/navigation';

import ModalOverlay from './modalOverlay';
import NavBlock from './navBlock';

const ModalNav = () => {
  const router = useRouter();
  const closeModal = () => router.back();
  return (
    <ModalOverlay closeModal={closeModal}>
      <NavBlock closeModal={closeModal} />
    </ModalOverlay>
  );
};

export default ModalNav;
