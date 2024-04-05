'use client';

import { useSearchParams, useRouter } from 'next/navigation';

import ModalOverlay from './modalOverlay';
import NavBlock from './navBlock';

type PropsType = {
  linksData: { slug: string; title: string }[];
};

const ModalNav = ({ linksData }: PropsType) => {
  const isModalShown = useSearchParams()?.get('modal') && window.innerWidth < 1024;
  const router = useRouter();
  const closeModal = () => router.back();
  return isModalShown ? (
    <ModalOverlay closeModal={closeModal}>
      <NavBlock closeModal={closeModal} linksData={linksData} />
    </ModalOverlay>
  ) : null;
};

export default ModalNav;
