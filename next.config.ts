import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["api.domix.am"],
  },
  reactStrictMode: true,
  i18n: {
    locales: ["hy", "ru"],
    defaultLocale: "hy",
    localeDetection: false,
  },
};

export default nextConfig;
