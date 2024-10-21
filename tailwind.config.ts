import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        accent:"",

        background: "#212529",
        foreground: "var(--foreground)",

        primaryBackground: "#212529",
        secondaryBackground: "#343A40",
        tertiaryBackground: "#495057",

        textPrimary:"#F8F9FA",
        textSecondaty:"#E9ECEF",




        quaternary: "#DEE2E6",
        quinary: "#CED4DA",
        senary: "#ADB5BD",
        septenary: "#6C757D",


      },

    },
  },
  plugins: [],
};
export default config;
