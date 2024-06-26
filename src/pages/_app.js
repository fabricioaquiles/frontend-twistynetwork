import Script from 'next/script'
import '../styles/core.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
      </Head>
      <Component {...pageProps} />
      <Script strategy="beforeInteractive" src="/ajax/libs/jquery/3.5.1/jquery.min.js" />
      <Script strategy="beforeInteractive" src="/ajax/libs/sweetalert/2.1.2/sweetalert.min.js" />
      <Script strategy="beforeInteractive" src="/ajax/libs/izimodal/1.5.1/js/iziModal.min.js" />
      <Script strategy="beforeInteractive" src="/counter/dist/axios.min.js" />
      <Script strategy="beforeInteractive" src="/assets/js/other.js" />
    </>
  )
}

export default MyApp
