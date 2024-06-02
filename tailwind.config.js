/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/assets/**/*.{js,ts,jsx,tsx,mdx,css}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"background-2": "url('assets/images/hero/bg2.jpg')",
				"background-1": "url('assets/images/hero/bg.jpg')",
				"background-4": "url('assets/images/hero/bg4.jpg')",
				"background-3": "url('assets/images/hero/bg3.jpg')",
			},
			colors: {
				prime: "#02B4C0",
				prime2: "#2FD6E1",
				prime3: "#88F5FC",
				prime4: "#BBFBFF",
				prime5: "#D6FCFF",
				prime6: "#EDFEFF",
				secondary: "#003C58",
				secondary2: "#25607B",
				secondary3: "#49768B",
				secondary4: "#809EAC",
				secondary5: "#C6D6DD",
				secondary6: "#E2EAEE",
				greyScale: "#F5F5F5",
				greyScale2: "#475569",
				greyScale3: "#64748B",
				greyScale4: "#94A3B8",
				greyScale5: "#CBD5E1",
				greyScale6: "#E2E8F0",
				black: "#0F2228",
				stepNumberColor: "#3C50E0",
				orange: "#FFB800",
				neutrals100: "#25324B",
				neutrals80: "#515B6F",
				accentsGreen: "#56CDAD",
				neutrals10i: "#F8F8FD",
				neutrals60: "#7C8493",
				danger: "#EF4444",
			},
		},
	},
	plugins: [],
};
