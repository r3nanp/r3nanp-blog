import '../styles/tailwind.css'
import '../styles/global.css'
import { AppProps } from 'next/app'
import { FC } from 'react'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
