import { SITE_URL } from '@/app/shared/constants';

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				allow: ['/'],
				disallow: '/private/',
				userAgent: 'Googlebot',
			},
			{
				disallow: ['/'],
				userAgent: ['Applebot', 'Bingbot'],
			},
		],
		sitemap: `${SITE_URL}sitemap.xml`,
	};
}
