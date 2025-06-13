import { Metadata } from 'next';

import { SITE_URL } from '@/app/shared/constants';
import { getAllPostsData } from '@/app/shared/helpers';

export async function generatePostMetadata(slug: string): Promise<Metadata> {
	const allPostsData = await getAllPostsData();
	const post = allPostsData.find((post) => post.slug === slug);

	// Если пост не найден
	if (!post) {
		return {
			title: 'Seite nicht gefunden | Alema Consulting',
			description: 'Diese Seite konnte leider nicht gefunden werden.',
		};
	}

	// Базовые метаданные
	const baseMetadata: Metadata = {
		title: post.title,
		description: post.description || 'Professionelle Beratung und Expertise von Alema Consulting.',
		keywords: (post.tags || []).filter(Boolean),
		creator: post.author || 'Alema Consulting Team',
		publisher: 'Alema Consulting',
	};

	// Иконки
	const icons = {
		icon: '/assets/icons/favicon.ico',
		apple: '/apple-icon.png',
	};

	// OpenGraph
	const openGraph = {
		type: 'article' as const,
		title: post.title,
		description: post.description || '',
		siteName: 'Alema Consulting',
		url: `${SITE_URL}${slug}`,
		images: [
			{
				url: '/assets/opengraph-image.jpg',
				width: 677,
				height: 508,
			},
		],
		locale: 'de',
	};

	return {
		...baseMetadata,
		icons,
		openGraph,
	};
}
