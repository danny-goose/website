/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'xsm': '550px',
				// => @media (min-width: 391px) { ... }
			  },
			  colors: {
				'gpink': '#F72697',
			  },
		},
	},
	plugins: [],
}
