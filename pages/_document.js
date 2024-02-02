import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Caspar Emanuel Fritzen - Portfolio',
    description: 'This site aims to replace a classical CV in a playful manner.',
    image: 'https://media.licdn.com/dms/image/C4E03AQE5oXNATLy0QQ/profile-displayphoto-shrink_800_800/0/1664179816645?e=1712188800&v=beta&t=Hsvdv2o_Vid4f2Nrc0o7Q_EcW8SRPEFO9uSVIdBXzYI'
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
