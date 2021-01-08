import { GetStaticProps } from 'next'
import { getAllPosts } from './api/post'
import Link from 'next/link'
import Head from 'next/head'

interface HomeProps {
  posts: Array<{
    slug: string
    title: string
  }>
}

export default function Home(props: HomeProps) {
  return (
    <main className="bg-gray-300 h-screen w-full py-2 px-2">
      <Head>
        <title>Bem vindo!</title>
      </Head>
      <h1 className="font-bold text-2xl">Blog do Renan</h1>
      <ul className="flex flex-col">
        {props.posts.map((post, index) => (
          <li key={index}>
            <Link href={post.slug}>
              <a className="">{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts()

  return {
    props: {
      posts: allPosts,
    },
  }
}
