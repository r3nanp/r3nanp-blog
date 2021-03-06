import '../styles/tailwind.css'
import '../styles/global.css'
import { AppProps } from 'next/app'
import { FC, useEffect } from 'react'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/serviceworker.js')
        .then(() => {
          console.log('service worker registered')
        })
        .catch(() => {
          console.warn('service worker failed')
        })
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
