import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface PropertiesType {
  closeModal: () => void;
  linksData: { slug: string; title: string }[];
}

export const NavBlock = ({ closeModal, linksData }: PropertiesType) => {
  const pathName = usePathname();
  const isActiveLink = (slug: string) => pathName === slug;
  const mappedLinks = linksData.map((link) => {
    return (
      <li
        className="border-border-base h-11 w-full border-t-2 text-center"
        key={link.slug}
      >
        <Link
          className={twMerge(
            "routeLink font-bold",
            isActiveLink(`/${link.slug}`) && "text-primary-bright",
          )}
          href={link.slug}
          title={link.title}
        >
          {link.title}
        </Link>
      </li>
    );
  });

  return (
    <nav
      className={twMerge(
        "bg-info-muted absolute top-0 right-0 z-20 w-[250px] cursor-auto rounded-tl-xl rounded-bl-xl px-6 py-3",
      )}
    >
      <XMarkIcon
        aria-label="Close modal"
        className="text-primary hover:text-primary-bright/50 absolute top-5 right-5 z-20 h-8 w-8 cursor-pointer transition-transform hover:scale-110"
        onClick={closeModal}
      />
      <ul className="border-border-base mt-[72px] border-b-2">
        <li className="border-border-base h-11 w-full border-t-2 text-center">
          <Link
            className={twMerge(
              "routeLink font-bold",
              isActiveLink("/") && "text-primary-bright",
            )}
            href="/"
          >
            Alema Consulting
          </Link>
        </li>
        {mappedLinks}
      </ul>
    </nav>
  );
};
