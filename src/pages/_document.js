import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* SEO */}
        <meta
          name="description"
          content="Transforma tus equipos de Producto y Tecnología"
        />

        {/* Open Graph */}
        <meta property="og:title" content="The Agile Product" />
        <meta
          property="og:description"
          content="Transforma tus equipos de Producto y Tecnología"
        />
        <meta
          property="og:image"
          content="https://the-agile-product.vercel.app/TAP thumbnail.png"
        />
        <meta
          property="og:url"
          content="https://the-agile-product.vercel.app/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Agile Product" />
        <meta
          name="twitter:description"
          content="Transforma tus equipos de Producto y Tecnología"
        />
        <meta
          name="twitter:image"
          content="https://the-agile-product.vercel.app/TAP thumbnail.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
