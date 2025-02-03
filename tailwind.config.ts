import type { Config } from "tailwindcss";

const globalColors = {
	brand: {
		primary: "#00878F",
		secondary: "#E47128",
		accent: "#21935B",
	},
	neutral: {
		50: "#FFFFFF",
		100: "#F9FBF7",
		200: "#FFFFFF",
		300: "#FFFFFF",
		400: "#FFFFFF",
		500: "#000000",
	},
};

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			colors: globalColors,
			backgroundColor: {
				"brand-primary": globalColors.brand.primary,
				"brand-secondary": globalColors.brand.secondary,
				"brand-primary-hover": globalColors.neutral[500],
				"neutral-primary": globalColors.neutral[500],
				"neutral-secondary": globalColors.neutral[100],
				"neutral-emphasis": globalColors.neutral[200],
			},
			borderColor: {
				"neutral-gray": "#DDDCDC",
			},
			textColor: {
				"brand-onprimary": globalColors.neutral[50],
				"brand-onsecondary": globalColors.neutral[400],
				"neutral-primary": globalColors.neutral[400],
				"neutral-primary-hover": globalColors.neutral[50],
				"neutral-secondary": globalColors.neutral[300],
			},
		},
	},
	plugins: [],
} satisfies Config;
