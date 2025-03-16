import type { NextConfig } from "next";
import type { Configuration as WebpackConfig } from "webpack";
// @ts-expect-error - next-pwa doesn't have types
import withPWA from "next-pwa";

const config = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["qargadili.vercel.app"],
  },
  webpack(config: WebpackConfig) {
    if (config.module) {
      config.module.rules = [
        ...(config.module.rules || []),
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"],
        },
      ];
    }
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: `https://qargadili.vercel.app/sitemap.xml`,
      },
    ];
  },
} satisfies NextConfig);

export default config;
