
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import appColors from "./ai-colors.json";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: colors.blue,
      secondary: "#ff80b520",
      ai: appColors,
    },
    extend: {
      boxShadow: {
        "neo-brutal-px-end": "1px 1px 0px 0px #111827",
        "neo-brutal": "-3px 3px 0px 0px #111827",
        "neo-brutal-base-end": "3px 3px 0px 0px #111827",
        "neo-brutal-lg-start": "-4px 4px 0px 0px #111827",
        "neo-brutal-lg-end": "4px 4px 0px 0px #111827",
        "neo-brutal-xl-end": "6px 6px 0px 1px #111827",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;

