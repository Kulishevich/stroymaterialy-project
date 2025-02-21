import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["api.domix.am"],
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ru", "hy"],
    defaultLocale: "hy",
  },
};

export default nextConfig;
