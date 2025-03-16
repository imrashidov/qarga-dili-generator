import type { NextConfig } from "next";
import type { Configuration as WebpackConfig } from "webpack";
import withPWA from "next-pwa";

declare module "next-pwa" {
  export default function withPWA(
    config: any
  ): (nextConfig: NextConfig) => NextConfig;
}

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
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

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
