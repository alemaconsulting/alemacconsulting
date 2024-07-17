const CONTENT_FOLDER = '_source';

const SITE_URL = 'https://alemacconsulting.vercel.app/';
const CONTACT_PHONE_ONE = '03085629694';
const CONTACT_PHONE_TWO = '01703707021';
// const ADDRESS_PART_ONE = '';
// const ADDRESS_PART_TWO = '';

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
				url: `$opengraph-image.jpg`,
				width: 677,
				height: 508,
			},
		],
		locale: 'de',
		type: 'website',
	},
};

export {
	CONTENT_FOLDER,
	SITE_URL,
	CONTACT_PHONE_ONE,
	CONTACT_PHONE_TWO,
	// ADDRESS_PART_ONE,
	// ADDRESS_PART_TWO,
	defaultMetaObj,
};
