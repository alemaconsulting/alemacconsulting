import { MetadataRoute } from 'next';

import { SITE_URL } from '@/app/shared/constants';
import { getAllPostsData } from '@/app/shared/helpers/getAllPostsData';

const homepage = {
	url: SITE_URL,
	lastModified: new Date(),
	changeFrequency: 'monthly',
	priority: 1,
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const postsData = await getAllPostsData();
	const contentPages = postsData.map((post) => {
		return {
			url: `${SITE_URL}${post.slug}`,
			lastModified: new Date(post.date.toString()),
			changeFrequency: 'monthly',
			priority: 0.8,
		};
	});
	return [homepage, ...contentPages] as MetadataRoute.Sitemap;
}
