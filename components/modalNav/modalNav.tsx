import { useRouter } from 'next/navigation';

import ModalOverlay from './modalOverlay';
import NavBlock from './navBlock';

type PropsType = {
  linksData: { slug: string; title: string }[];
};

const ModalNav = ({ linksData }: PropsType) => {
  const router = useRouter();
  const closeModal = () => router.back();
  return (
    <ModalOverlay closeModal={closeModal}>
      <NavBlock closeModal={closeModal} linksData={linksData} />
    </ModalOverlay>
  );
};

export default ModalNav;
