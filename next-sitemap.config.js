/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://qargadili.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.SITE_URL || "https://qargadili.vercel.app"}/sitemap.xml`,
    ],
  },
  exclude: ["/admin", "/login", "/private*"],
  // For additional configuration options, see https://github.com/iamvishnusankar/next-sitemap
};
