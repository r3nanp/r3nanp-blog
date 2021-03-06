import { FC } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'

import { getAllPosts } from './api/post'

import { motion } from 'framer-motion'
import { SEO } from '../components/SEO'
import { Header } from '../components/Header'
import { Container } from '../components/Container'
import { Footer } from '../components/Footer'

interface HomeProps {
  posts: Array<{
    slug: string
    title: string
  }>
}

const Home: FC<HomeProps> = ({ posts }) => {
  return (
    <>
      <main className="bg-white w-full h-screen">
        <SEO title="r3nanp blog" />

        <Header />
        <Container>
          <ul className="py-2 grid grid-cols-1 grid-rows-4 gap-y-4 sm:px-6 md:px-8 md:grid-cols-3 md:grid-rows-1 gap-x-2">
            {posts.map((post, index) => (
              <li
                key={index}
                className="flex justify-center md:justify-start items-center w-min"
              >
                <Link href={`/${post.slug}`}>
                  <a>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex justify-center items-center m-4 py-4 px-8 bg-purple-500 rounded w-60 h-60 shadow-lg"
                    >
                      <strong className="text-white text-center text-xl">
                        {post.title}
                      </strong>
                    </motion.div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </main>
      <Footer />
    </>
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

export default Home
