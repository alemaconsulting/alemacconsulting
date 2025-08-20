import { Metadata } from "next";

import { SITE_URL } from "@/app/shared/constants";
import { getAllPostsData } from "@/app/shared/helpers";

export async function generatePostMetadata(slug: string): Promise<Metadata> {
  const allPostsData = await getAllPostsData();
  const post = allPostsData.find((post) => post.slug === slug);

  // Если пост не найден
  if (!post) {
    return {
      description: "Diese Seite konnte leider nicht gefunden werden.",
      title: "Seite nicht gefunden | Alema Consulting",
    };
  }

  // Базовые метаданные
  const baseMetadata: Metadata = {
    creator: post.author || "Alema Consulting Team",
    description:
      post.description ||
      "Professionelle Beratung und Expertise von Alema Consulting.",
    keywords: (post.tags || []).filter(Boolean),
    publisher: "Alema Consulting",
    title: post.title,
  };

  // Иконки
  const icons = {
    apple: "/apple-icon.png",
    icon: "/assets/icons/favicon.ico",
  };

  // OpenGraph
  const openGraph = {
    description: post.description || "",
    images: [
      {
        height: 508,
        url: "/assets/opengraph-image.jpg",
        width: 677,
      },
    ],
    locale: "de",
    siteName: "Alema Consulting",
    title: post.title,
    type: "article" as const,
    url: `${SITE_URL}${slug}`,
  };

  return {
    ...baseMetadata,
    icons,
    openGraph,
  };
}
