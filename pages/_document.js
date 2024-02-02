import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Caspar Emanuel Fritzen - Portfolio',
    description: 'This site aims to replace a classical CV in a playful manner.',
    image: 'https://media.licdn.com/dms/image/D4D03AQH1qP9El7Hltw/profile-displayphoto-shrink_800_800/0/1706897127020?e=1712188800&v=beta&t=1WOXh_ibG_c3iVKphrvvIS93INnN31k3TT2xejHpwa4'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FritzenCaspar" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
