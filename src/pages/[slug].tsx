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

export default function Post(props: PostProps) {
  return (
    <PostLayout
      title={props.title}
      description={props.description}
      thumbnailUrl={props.thumbnailUrl}
      content={props.content}
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
