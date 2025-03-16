import type { NextConfig } from "next";
import type { Configuration as WebpackConfig } from "webpack";
// @ts-expect-error - next-pwa doesn't have types
import withPWA from "next-pwa";

const config = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    {
      urlPattern: /^https?.*/,
      handler: "NetworkFirst",
      options: {
        cacheName: "offlineCache",
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
      },
    },
    {
      urlPattern: /\.(png|jpg|jpeg|svg|gif|webp)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "imageCache",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
      },
    },
  ],
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
