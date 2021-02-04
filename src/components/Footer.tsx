// eslint-disable-next-line no-use-before-define
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center justify-center flex-col pb-2 w-full md:flex-row">
      <p className="text-center font-sm">Blog desenvolvido com Next.js 💖!</p>
      <Link href="https://github.com/r3nanp/r3nanp-blog">
        <a rel="noopener noreferrer" target="_blank">
          <motion.div whileHover={{ scale: 1.1 }} className="mx-4 flex items-center justify-center rounded-md shadow-md hover:opacity-70 px-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">
            <FaGithub size={15} color="#000" />
            <span className="mx-2">Star</span>
          </motion.div>
        </a>
      </Link>
    </footer>
  )
}

export { Footer }
