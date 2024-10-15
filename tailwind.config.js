/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#363079",
          foreground: "hsl(var(--primary-foreground))",
          light: "#363079b8",
        },

        secondary: {
          DEFAULT: "#f1f6fa"
        }
      },
    },
  },
  plugins: [],
};
