import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["ru", "en", "hy"],
    defaultLocale: "hy",
    localeDetection: false,
  },
};

export default nextConfig;
