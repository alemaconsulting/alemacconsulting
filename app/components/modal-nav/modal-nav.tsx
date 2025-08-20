"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { ModalOverlay } from "@/app/components/modal-nav/modal-overlay";
import { NavBlock } from "@/app/components/modal-nav/nav-block";

interface PropertiesType {
  linksData: { slug: string; title: string }[];
}

export const ModalNav = ({ linksData }: PropertiesType) => {
  const isModalShown =
    useSearchParams()?.get("modal") && window.innerWidth < 1024;
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };
  return isModalShown ? (
    <ModalOverlay closeModal={closeModal}>
      <NavBlock closeModal={closeModal} linksData={linksData} />
    </ModalOverlay>
  ) : null;
};
