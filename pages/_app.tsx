import '../styles/globals.css'
import App from '../components/App'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { APP_NAME } from '../constants'


export default function NextApp({ Component, pageProps }: AppProps) {
  // the root component for every page
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content={APP_NAME} />
        <meta name="keywords" content={APP_NAME} />
        <title>Bayes</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon.ico"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icon-512.png"></link>
        <meta name="theme-color" content="#303030" />
        <meta name="robots" content="all" />
      </Head>
      <App>
        <Component {...pageProps} />
      </App>
    </>
  )
}
