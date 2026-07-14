const YEAR = new Date().getFullYear()
const SITE_URL = 'https://portfolio.fritzen.one'
const SITE_NAME = 'Caspar Emanuel Fritzen'
const DEFAULT_DESCRIPTION =
  'Portfolio of Caspar Emanuel Fritzen, an applied AI and computer vision engineer building production-facing automation systems.'
const PROFILE_IMAGE = `${SITE_URL}/images/caspar_portrait.jpeg`

const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: SITE_URL,
  mainEntity: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: SITE_NAME,
    url: SITE_URL,
    image: PROFILE_IMAGE,
    jobTitle: 'Applied AI and Computer Vision Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Tesla'
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Technical University of Munich'
    },
    sameAs: [
      'https://www.linkedin.com/in/caspar-emanuel-fritzen/',
      'https://github.com/casparfritzen',
      'https://x.com/FritzenCaspar'
    ],
    knowsAbout: [
      'Applied artificial intelligence',
      'Computer vision',
      'Industrial automation',
      'Software engineering'
    ]
  }
}

function SeoHead({ title, meta }) {
  const pageTitle = meta.seoTitle || `${title} | ${SITE_NAME}`
  const description = meta.description || DEFAULT_DESCRIPTION
  const canonicalUrl = new URL(meta.canonical || '/', SITE_URL).toString()

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={SITE_NAME} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1"
      />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={meta.profile ? 'profile' : 'website'} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={PROFILE_IMAGE} />
      <meta property="og:image:alt" content={`Portrait of ${SITE_NAME}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@FritzenCaspar" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={PROFILE_IMAGE} />

      {meta.profile ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
        />
      ) : null}
    </>
  )
}

export default {
  head: SeoHead,
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Caspar Emanuel Fritzen
      <style jsx>{`
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
