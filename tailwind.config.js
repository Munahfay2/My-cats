/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.html', 'index.html'],
	theme: {
		extend: {
			fontFamily: {
				ubuntu: ['Ubuntu', 'sans - serif'],
				robot0: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
