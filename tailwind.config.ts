import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./**/*.{tsx, html}'],
	theme: {
		extend: {
			colors: {
				gradBacking: 'rgb(248,251,254)',
				primeText: 'rgb(40, 53, 72)',
				borderGrey: 'rgb(188, 188, 188)',
				paleBlue: 'rgb(200, 227, 241)',
			},
			backgroundImage: {
				verticalBgGrad:
					'linear-gradient(180deg, rgba(248,251,254,1) 0%, rgba(200,227,241,1) 15%, rgba(131,197,232,1) 100%)',
				horizontalBgGrad:
					'linear-gradient(90deg, rgba(248,251,254,1) 0%, rgba(200,227,241,1) 15%, rgba(200,227,241,1) 85%, rgba(248,251,254,1) 100%) ',
			},
		},
	},
	plugins: [],
};
export default config;
