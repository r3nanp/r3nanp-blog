import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ContainerProps {
  children: ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
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
