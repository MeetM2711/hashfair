import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["OpenSans", "sans-serif"],
        josefinSans: ["JosefinSans", "sans-serif"],
      },
      boxShadow: {
        custom:
          "-3.828px -3.828px 6px 0px rgba(255, 200, 39, 0.4), 3px 5px 8px 0px rgba(255, 82, 1, 0.2)",
        "custom-hover":
          "-5px -5px 20px rgba(255, 200, 39, 0.6), 3px 5px 20px rgba(255, 82, 1, 0.2)",
      },
      colors: {
        "hover-yellow": "#FFC827", // Custom hover yellow
        "button-text": "#1f1f23", // Custom button text color on hover
      },
    },
  },
  plugins: [],
};
export default config;
