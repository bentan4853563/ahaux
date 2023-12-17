/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				yellow: "#FFCA6E",
				green: "#309975",
				// gray: "#454D66",
			},
			fontFamily: {
				itc: ["ITC Avant Garde Gothic STD"],
				raleway: ["Raleway"],
			},
		},
	},

	plugins: [],
};
