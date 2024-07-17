const CONTENT_FOLDER = '_source';

const SITE_URL = 'https://alema-consulting.de/';
const CONTACT_PHONE_ONE = '03085629694';
const CONTACT_PHONE_TWO = '01703707021';

const defaultMetaObj = {
	title: 'Alema Consulting',
	description: 'Alema Consulting Unternehmensberatung in Berlin.',
	icons: {
		icon: '/assets/icons/favicon.ico',
	},
	metadataBase: new URL(SITE_URL),
	openGraph: {
		title: 'Alema Consulting',
		description: 'Alema Consulting Unternehmensberatung in Berlin.',
		url: SITE_URL,
		siteName: 'Alema consulting',
		images: [
			{
				url: `assets/opengraph-image.jpg`,
				width: 677,
				height: 508,
			},
		],
		locale: 'de',
		type: 'website',
	},
};

export { CONTENT_FOLDER, SITE_URL, CONTACT_PHONE_ONE, CONTACT_PHONE_TWO, defaultMetaObj };
