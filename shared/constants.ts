export const CONTENT_FOLDER = '_source';

export const SITE_URL = 'https://alemacconsulting.vercel.app/';

export const defaultMetaObj = {
	title: 'Alema consulting',
	description: 'Alema Consulting Unternehmensberatung in Berlin.',
	icons: {
		icon: '/assets/icons/favicon.ico',
	},
	openGraph: {
		title: 'Alema consulting',
		description: 'Alema Consulting Unternehmensberatung in Berlin.',
		url: SITE_URL,
		siteName: 'Alema consulting',
		images: [
			{
				url: `${SITE_URL}og.jpg`,
				width: 677,
				height: 508,
			},
		],
		locale: 'de',
		type: 'website',
	},
};
