import type { Config } from "tailwindcss";
const globalColors = {
	primary: "#008080",
	secondary: "#EE7402",
	accent: "#1A6641",
	white: {
		50: "#E8E8EA",
		100: "#FFFFFF",
	},
	black: "#131118",
};

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: globalColors,
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
				morganite: ["Morganite", "sans-serif"],
			},
			backgroundImage: {
				"gradient-hover": `linear-gradient(135deg, ${globalColors.primary} 0%, #42B7B7 44%, #71DEDF 77%, #7DC5C7 100%)`,
				"gradient-clicked":
					"linear-gradient(135deg, #42B7B7 4%, #E2ECED 78%, #7DC5C7 100%)",
				"gradient-border-default":
					"linear-gradient(0deg, #66F7F7 0%, #B3FBFB 63%, #FFFFFF 100%);",
				"gradient-border-active": `linear-gradient(0deg, #F8F7FC 0%, ${globalColors.accent} 100%)`,
				"gradient-border-transparent":
					"linear-gradient(180deg, #D6EAEA 24%, #1A1A1C 100%)",
			},
			fontSize: {
				sm: ["13.3px", { letterSpacing: "0.005em" }],
				base: ["16px", { letterSpacing: "0.005em" }],
				xl: ["19.2px", { letterSpacing: "0.005em" }],
				"2xl": ["36.2px", { letterSpacing: "0.05em" }],
				"3xl": ["51.99px", { letterSpacing: "0.05em" }],
				"4xl": ["55.23px", { letterSpacing: "0.05em" }],
				"5xl": ["73.96px", { letterSpacing: "0.05em" }],
			},
		},
	},
	plugins: [],
} satisfies Config;
