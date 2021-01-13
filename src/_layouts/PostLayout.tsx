import Head from 'next/head'

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
    <main className="bg-gray-400 h-screen">
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
      </Head>
      <article className="py-6 px-4">
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
          className="text-justify p-2"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </main>
  )
}

export { PostLayout }
