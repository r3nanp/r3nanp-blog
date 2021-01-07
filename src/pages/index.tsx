import { GetStaticProps } from 'next'
import Link from 'next/link'
import { getAllPosts } from './api/post'

interface HomeProps {
  posts: Array<{
    slug: string
    title: string
  }>
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Blog do Renan</h1>
      <ul>
        {props.posts.map((post, index) => (
          <li key={index}>
            <Link href={post.slug}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
