import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/tw-elements/js/**/*.js'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primaryColor: '#cb7f9'
			}
		},
	},
	plugins: [
		animations,
	]
}
