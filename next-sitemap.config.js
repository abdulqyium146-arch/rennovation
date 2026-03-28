/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://centralfloridarenovations.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/api/*', '/privacy', '/terms'],
  transform: async (config, path) => {
    // Boost priority for key pages
    let priority = 0.7
    if (path === '/') priority = 1.0
    else if (path === '/free-estimate') priority = 0.9
    else if (path.startsWith('/services/') && path.split('/').length === 3) priority = 0.85
    else if (path.startsWith('/locations/') && path.split('/').length === 3) priority = 0.85
    else if (path === '/about' || path === '/contact') priority = 0.8
    else if (path.startsWith('/blog/') && path.split('/').length === 3) priority = 0.75

    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}
