import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Changing 'inter' to 'sans' makes it the default across Tailwind
        sans: ["var(--font-inter)", "sans-serif", "system-ui"],
      },
    },
  },
};
export default config;
