/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,php}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Font chữ mặc định
        serif: ["Merriweather", "serif"],
        mono: ["Menlo", "monospace"],
      },
      color: {
        primary: "#1D4ED8", // Màu chính
        secondary: "#4F46E5", // Màu phụ
        accent: "#FBBF24", // Màu nhấn
      },
      fontSize: {
        xxs: "0.65rem", // Kích thước font tùy chỉnh
        xxl: "1.5rem",
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        // Thêm các trọng số khác nếu cần
      },
    },
  },
  plugins: [],
};
