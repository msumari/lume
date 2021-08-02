module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        wallpaper:
          "url('https://firebasestorage.googleapis.com/v0/b/shop-1df14.appspot.com/o/wallpaper.jpg?alt=media&token=35a14fb7-e6b8-4a58-b49b-1572d5f93e24')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
