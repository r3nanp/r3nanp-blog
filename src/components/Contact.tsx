import { ReactNode, FC } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ContactProps {
  href: string
  color: string
  hover_color: string
  children: ReactNode
}

const Contact: FC<ContactProps> = ({ href, children, color, hover_color }) => {
  return (
    <>
      <Link href={href}>
        <a className="mb-2 w-48" rel="noopener noreferrer" target="_blank">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className={`flex transition items-center justify-center w-48 font-bold rounded text-white shadow-md ${color} p-4 hover:${hover_color}`}
          >
            {children}
          </motion.div>
        </a>
      </Link>
    </>
  )
}

export { Contact }
