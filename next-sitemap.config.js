/** @type {import('next-sitemap').IConfig} */
// The primary sitemap is generated natively via app/sitemap.ts at runtime.
// next-sitemap is kept in package.json but excluded from generating anything
// so it does not overwrite the native /sitemap.xml.
module.exports = {
  siteUrl: 'https://centralfloridarenovations.com',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  exclude: ['/**'],
}
