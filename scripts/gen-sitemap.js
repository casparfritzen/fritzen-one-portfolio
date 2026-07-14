const { promises: fs } = require('fs')
const path = require('path')

const SITE_URL = 'https://portfolio.fritzen.one'
const PAGE_EXTENSION = /\.(md|mdx|js|jsx|ts|tsx)$/

async function generate() {
  const pagesDirectory = path.join(__dirname, '..', 'pages')
  const entries = await fs.readdir(pagesDirectory, { withFileTypes: true })
  const routes = entries
    .filter(
      (entry) =>
        entry.isFile() &&
        PAGE_EXTENSION.test(entry.name) &&
        !entry.name.startsWith('_')
    )
    .map((entry) => entry.name.replace(PAGE_EXTENSION, ''))
    .map((name) => (name === 'index' ? '/' : `/${name}`))
    .sort((a, b) => (a === '/' ? -1 : a.localeCompare(b)))

  const urls = routes
    .map(
      (route) =>
        `  <url>\n    <loc>${new URL(route, SITE_URL).toString()}</loc>\n  </url>`
    )
    .join('\n')
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

  await fs.writeFile(
    path.join(__dirname, '..', 'public', 'sitemap.xml'),
    sitemap
  )
}

generate()
