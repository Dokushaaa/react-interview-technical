import { info } from "autoprefixer";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			linearBorderGradients: (theme) => ({
				colors: theme("colors"),
				background: theme("colors"),
			}),
			backgroundImage: {
				bodyBG: "url('/public/endless-constellation.svg')",
				wavyBG: "url('/public/wavey-fingerprint.svg')",
				contactBG: "url('/public/contactme.svg')",
			},
			colors: {
				header: "rgb(var(--header) / <alpha-value>)",
				primary: "rgb(var(--primary) / <alpha-value>)",
				secondary: "rgb(var(--secondary) / <alpha-value>)",
				accent: "rgb(var(--accent) / <alpha-value>)",
				yellow: "rgb(var(--yellow) / <alpha-value>)",
				content: "rgb(var(--content) / <alpha-value>)",
				search: "rgb(var(--search) / <alpha-value>)",
				line: "rgb(var(--line) / <alpha-value>)",

				alert: "rgb(var(--alert) / <alpha-value>)",
				disable: "rgb(var(--disable) / <alpha-value>)",
				info: "rgb(var(--info) / <alpha-value>)",
				warning: "rgb(var(--warning) / <alpha-value>)",
				hazard: "rgb(var(--hazard) / <alpha-value>)",
			},

			backgroundColor: {
				header: "rgb(var(--header) / <alpha-value>)",
				primary: "rgb(var(--primary) / <alpha-value>)",
				secondary: "rgb(var(--secondary) / <alpha-value>)",
				accent: "rgb(var(--accent) / <alpha-value>)",
				yellow: "rgb(var(--yellow) / <alpha-value>)",
				content: "rgb(var(--content) / <alpha-value>)",
				search: "rgb(var(--search) / <alpha-value>)",
				line: "rgb(var(--line) / <alpha-value>)",

				alert: "rgb(var(--alert) / <alpha-value>)",
				disable: "rgb(var(--disable) / <alpha-value>)",
				info: "rgb(var(--info) / <alpha-value>)",
				warning: "rgb(var(--warning) / <alpha-value>)",
				hazard: "rgb(var(--hazard) / <alpha-value>)",
			},

			fill: {
				header: "var(--header)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				accent: "var(--accent)",
				yellow: "var(--yellow)",
				content: "var(--content)",
				search: "var(--search)",
				line: "var(--line)",

				alert: "var(--alert)",
				disable: "var(--disable)",
				info: "var(--info)",
				warning: "var(--warning)",
				hazard: "var(--hazard)",
			},

			gridTemplateColumns: {
				"auto-fill": "repeat(auto-fit, minmax(300px, 1fr))",
			},
			fontFamily: {
				oswald: "oswald",
			},
			keyframes: {
				rotate: {
					"100%": { transform: "rotate-360" },
				},
				loading: {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(100%)" },
				},
				loading2sm: {
					"0%": { transform: "translateX(-5%)" },
					"100%": { transform: "translateX(5%)" },
				},
				loading2md: {
					"0%": { transform: "translateX(-5%)" },
					"100%": { transform: "translateX(5%)" },
				},
				planet: {
					"0%": { transform: "translateX(-5%) rotate-360 translateY(-10%)" },
					"100%": { transform: "translateX(20%) rotate-360 translateY(100%)" },
				},
			},
			animation: {
				rotate: "dash 2s linear infinite",
				loading: "loading 2s ease-in infinite",
				loading2sm: "loading2sm 2s ease-in-out infinite",
				loading2md: "loading2md 2s ease-in-out infinite",
				planet: "planet 10s ease-in-out infinite",
				planetmd: "planetmd 10s ease-in-out infinite",
			},
		},
	},
	plugins: ["tailwindcss-border-gradient-radius"],
};
