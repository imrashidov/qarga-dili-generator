/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://qargadili.vercel.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/404"],
};
