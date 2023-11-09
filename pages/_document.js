import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
