// eslint-disable-next-line no-use-before-define
import React from 'react'
import { motion } from 'framer-motion'

const Container: React.FC = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0, translateX: -40 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="flex justify-center items-center"
    >
      {children}
    </motion.main>
  )
}

export { Container }
