import '../styles/tailwind.css'
import '../styles/global.css'
// eslint-disable-next-line no-use-before-define
import React from 'react'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
