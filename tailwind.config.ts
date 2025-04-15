import type { Config } from 'tailwindcss';

const config: Config = {
	// content: ['./**/*.{tsx, html}'],
};
export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
} satisfies Config;
