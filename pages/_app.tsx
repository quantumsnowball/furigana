import '../styles/globals.css'
import App from '../components/App'
import type { AppProps } from 'next/app'

export default function NextApp({ Component, pageProps }: AppProps) {
  // the root component for every page
  return (
    <>
      <App>
        <Component {...pageProps} />
      </App>
    </>
  )
}
