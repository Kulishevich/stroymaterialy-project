import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ru", "hy"], // Доступные языки
    defaultLocale: "en", // Язык по умолчанию
  },
};

export default nextConfig;
