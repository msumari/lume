module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        wallpaper:
          "url('https://firebasestorage.googleapis.com/v0/b/shop-1df14.appspot.com/o/wallpaper.jpg?alt=media&token=35a14fb7-e6b8-4a58-b49b-1572d5f93e24')",
        bannerWallpaper:
          "url('https://firebasestorage.googleapis.com/v0/b/medias-da388.appspot.com/o/banner.jpg?alt=media&token=93ab8264-227c-4405-b075-19083058eddf')",
        loginbanner:
          "url('https://firebasestorage.googleapis.com/v0/b/shop-1df14.appspot.com/o/thor.jpg?alt=media&token=22906730-5a87-440d-b131-b5f2433fc132')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
