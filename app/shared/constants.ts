const CONTENT_FOLDER = '_source';

const SITE_URL = 'https://alema-consulting.de/';
const CONTACT_PHONE_ONE = '03085629694';
const CONTACT_PHONE_TWO = '01703707021';

const defaultMetaObj = {
	title: {
		template: '%s | Alema Consulting – Unternehmensberatung in Berlin',
		default: 'Alema Consulting – Unternehmensberatung in Berlin',
	},
	description:
		'Alema Consulting bietet professionelle Unternehmensberatung in Berlin – Strategien für Wachstum, Digitalisierung und nachhaltigen Erfolg.',
	icons: {
		icon: '/assets/icons/favicon.ico',
	},
	keywords: [
		'Unternehmensberatung Berlin',
		'Business Consulting',
		'Strategieberatung',
		'Digitalisierung',
		'Alema Consulting',
	],
	metadataBase: new URL(SITE_URL),
	openGraph: {
		title: 'Alema Consulting – Unternehmensberatung in Berlin',
		description:
			'Professionelle Unternehmensberatung in Berlin. Alema Consulting unterstützt Unternehmen bei Strategie, Effizienzsteigerung und digitaler Transformation.',
		url: SITE_URL,
		siteName: 'Alema Consulting',
		images: [
			{
				url: 'assets/opengraph-image.jpg',
				width: 677,
				height: 508,
			},
		],
		locale: 'de',
		type: 'website',
	},
};

export { CONTENT_FOLDER, SITE_URL, CONTACT_PHONE_ONE, CONTACT_PHONE_TWO, defaultMetaObj };
