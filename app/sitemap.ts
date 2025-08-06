import { MetadataRoute } from 'next';

import { SITE_URL } from '@/app/shared/constants';
import { getAllPostsData } from '@/app/shared/helpers/getAllPostsData';

const homepage = {
	changeFrequency: 'monthly',
	lastModified: new Date(),
	priority: 1,
	url: SITE_URL,
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const postsData = await getAllPostsData();
	const contentPages = postsData.map((post) => {
		return {
			changeFrequency: 'monthly',
			lastModified: new Date(post.date.toString()),
			priority: 0.8,
			url: `${SITE_URL}${post.slug}`,
		};
	});
	return [homepage, ...contentPages] as MetadataRoute.Sitemap;
}
