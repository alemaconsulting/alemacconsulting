'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';

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
    <Suspense>
      <ModalOverlay closeModal={closeModal}>
        <NavBlock closeModal={closeModal} linksData={linksData} />
      </ModalOverlay>
    </Suspense>
  ) : null;
};

export default ModalNav;
