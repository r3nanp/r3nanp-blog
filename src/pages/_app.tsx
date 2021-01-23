/* eslint-disable no-use-before-define */
import '../styles/tailwind.css'
import '../styles/global.css'
import { AppProps } from 'next/app'
import React from 'react'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
