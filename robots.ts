import { SITE_URL } from './shared/constants';

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: 'Googlebot',
				allow: ['/'],
				disallow: '/private/',
			},
			{
				userAgent: ['Applebot', 'Bingbot'],
				disallow: ['/'],
			},
		],
		sitemap: `${SITE_URL}sitemap.xml`,
	};
}
