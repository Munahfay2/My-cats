/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.html', 'index.html'],
	theme: {
		extend: {
			fontFamily: {
				ubuntu: ['Ubuntu', 'sans - serif'],
				roboto: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
