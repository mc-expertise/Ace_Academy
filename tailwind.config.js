import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        warning: '#F09272',
      },
      shadow: {
        none: '0 0 #0000',
      },
      size: {
        lg: 'w-20 h-20',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
