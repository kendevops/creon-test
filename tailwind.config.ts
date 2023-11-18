import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern":
          "linear-gradient(175deg, #000 4.29%, #3D8BFF 47.39%, #AB23FF 95.05%)",
        linear: "linear-gradient(var(--linear))",
      },
      colors: {
        Purple: "#AB23FF",
      },
      fontFamily: {
        monument: "var(--font-monument)",
        satoshi: "var(--font-satoshi)",
      },
    },
    screens: {
      xs: "360px",
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1920px",
    },
  },
  plugins: [],
};
export default config;
