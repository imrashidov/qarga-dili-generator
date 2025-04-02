/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://qargadili.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "daily",
  priority: 1,
  exclude: ["/404", "/500", "/_error"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://qargadili.vercel.app/sitemap.xml"],
  },
};
