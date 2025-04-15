export const CONTENT_FOLDER = '_source';

export const SITE_URL = 'https://alema-consulting.de/';
export const CONTACT_PHONE_ONE = '03085629694';
export const CONTACT_PHONE_TWO = '01703707021';


export const matrix: string = '/assets/Matrix.svg';

export const logo: string = '/assets/logo-triangle.svg';


export const defaultMetaObj = {
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
