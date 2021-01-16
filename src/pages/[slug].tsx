// eslint-disable-next-line no-use-before-define
import React from 'react'
import { PostLayout } from '../_layouts/PostLayout'
import { getPostBySlug, getAllPosts } from './api/post'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

interface PostProps {
  title: string
  description: string
  thumbnailUrl: string
  content: string
}

const Post: React.FC<PostProps> = ({
  title,
  description,
  thumbnailUrl,
  content,
}) => {
  return (
    <PostLayout
      title={title}
      description={description}
      thumbnailUrl={thumbnailUrl}
      content={content}
    />
  )
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  return {
    props: await getPostBySlug(context.params.slug),
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = await getAllPosts()

  paths = paths.map(post => {
    return {
      params: { slug: post.slug },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export default Post
