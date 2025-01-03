import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary-dark': 'var(--bg-primary-dark)',
        'bg-secondary-dark': 'var(--bg-secondary-dark)',
        'bg-tertiary-dark': 'var(--bg-tertiary-dark)',

        'text-primary-dark': 'var(--text-primary-dark)',
        'text-secondary-dark': 'var(--text-secondary-dark)',

        'border-dark': 'var(--border-dark)',

        'electric-blue-dark': 'var(--electric-blue-dark)',
        'purple-dark': 'var(--purple-dark)',
        'sky-dark': 'var(--sky-dark)',
        'teal-dark': 'var(--teal-dark)',

        'purple-hover-dark': 'var(--purple-hover-dark)',
        'sky-hover-dark': 'var(--sky-hover-dark)',
        'teal-hover-dark': 'var(--teal-hover-dark)',
      },
      fontFamily: {
        'montserrat': 'var(--font-montserrat)',
        'firaCode': 'var(--font-fira-code)',
        'poppins': 'var(--font-poppins)',
        'firaSans': 'var(--font-fira-sans)',
      },
    },
  },
  plugins: [],
} satisfies Config;
