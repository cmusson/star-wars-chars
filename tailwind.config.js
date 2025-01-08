/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        disc: "url('/bg-modal.webp')",
        yoda: "url('/baby-yoda.jpg')",
      },
    },
  },
  plugins: [],
};
