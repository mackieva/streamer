import type { Config } from 'tailwindcss';

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				red: 'hsl(0, 97%, 63%)',
				bluePrimary: 'hsl(223, 30%, 9%)',
				blueSecondary: 'hsl(223, 23%, 46%)',
				blueTertiary: 'hsl(223, 36%, 14%)',
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
		},
	},
	plugins: [],
} satisfies Config;
