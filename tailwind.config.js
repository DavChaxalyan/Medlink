module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        24: "24px",
      },
      filter: {
        "custom-filter":
          "brightness(0) saturate(100%) invert(96%) sepia(6%) saturate(1202%) hue-rotate(179deg) brightness(97%) contrast(101%)",
      },
      colors: {
        customGray: "#1F2933",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(270deg, rgba(180, 192, 208, 0) 0%, #B4C0D0 77.83%)",
      },
      screens: {
        lg: { max: "1024px" },
        lg2: { max: "1370px" },
        xs: { max: "678px" },
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
