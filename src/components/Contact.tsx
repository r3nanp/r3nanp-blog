// eslint-disable-next-line no-use-before-define
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface IContactProps {
  href: string
  color: string
  hover_color: string
  children: React.ReactNode
}

const Contact: React.FC<IContactProps> = ({
  href,
  children,
  color,
  hover_color,
}) => {
  return (
    <>
      <Link href={href}>
        <a className="mb-2 w-48" rel="noopener noreferrer" target="_blank">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className={`flex transition items-center justify-center w-48 rounded text-white ${color} p-4 hover:${hover_color}`}
          >
            {children}
          </motion.div>
        </a>
      </Link>
    </>
  )
}

export { Contact }
