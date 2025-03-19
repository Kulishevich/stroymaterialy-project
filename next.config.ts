import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.domix.am",
      },
    ],
  },
  reactStrictMode: true,
  i18n: {
    locales: ["hy", "ru"],
    defaultLocale: "hy",
    localeDetection: false,
  },
};

export default nextConfig;
