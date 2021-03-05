import { FC } from 'react'
import Head from 'next/head'

interface SEOProps {
  title: string
}

const SEO: FC<SEOProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="keywords" content="r3nanp, blog, coding" />
      <meta name="author" content="Renan Pereira" />
      <meta name="description" content="A app to make you move." />
    </Head>
  )
}

export { SEO }
