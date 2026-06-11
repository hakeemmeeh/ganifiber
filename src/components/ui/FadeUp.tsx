'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeUp } from '@/lib/animations'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function FadeUp({ children, className = '', delay = 0 }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
