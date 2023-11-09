import '@/styles/globals.css';
import { NextSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <NextSeo
        title="Franck NIAT • Portfolio"
        description="Hi! I am a young computer enthusiast (programming, graphic design, data analysis, computer security, ...). I believe that alone we can work well but together we can do it better. I am 21 years old, FrontEnd developper and Student from Cameroon I like to listen to music and in my spare time I often read articles about development and new technologies."
        canonical="https://franckniat.vercel.app"
        openGraph={{
          url: "https://franckniat.vercel.app",
          title: "Franck NIAT",
          description:
            "Hi! I am a young computer enthusiast (programming, graphic design, data analysis, computer security, ...). I believe that alone we can work well but together we can do it better. I am 21 years old, FrontEnd developper and Student from Cameroon I like to listen to music and in my spare time I often read articles about development and new technologies. ",
          images: [
            {
              url: "/ma_photo.png",
              alt: "NIATO",
              type: "image/png",
              secureUrl: "/ma_photo.png",
            },
          ],
          siteName: "Franck NIAT • Software Engineer",
        }}
        twitter={{
          handle: "@manuel_niat",
          site: "@manuel_niat",
          cardType: "summary_large_image",
        }}
      />
    <ThemeProvider enableSystem defaultTheme='system' attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  )
}
