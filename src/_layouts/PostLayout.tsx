// eslint-disable-next-line no-use-before-define
import React from 'react'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

interface IPostLayout {
  title: string
  description: string
  thumbnailUrl: string
  content: string
}

const PostLayout: React.FC<IPostLayout> = ({
  thumbnailUrl,
  content,
  description,
  title,
}) => {
  return (
    <main className="bg-gray-100 h-full">
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />

        <meta property="og:site_name" content="Blog do Renan" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        <meta property="og:image" content={thumbnailUrl} />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={thumbnailUrl} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <article className="py-6 px-4 bg-gray-100">
        <h1 className="flex items-center font-bold text-xl md:justify-center">
          {title}
        </h1>
        <img
          className="py-2 md:m-auto"
          width="600"
          src={thumbnailUrl}
          alt={title}
        />
        <div
          className="text-justify p-2 antialiased bg-gray-100"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
      <Footer />
    </main>
  )
}

export { PostLayout }
