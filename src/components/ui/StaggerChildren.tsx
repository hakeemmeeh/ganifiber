'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { staggerContainer } from '@/lib/animations'

interface Props {
  children: React.ReactNode
  className?: string
  fast?: boolean
  slow?: boolean
}

export default function StaggerChildren({ children, className = '', fast, slow }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const variants = fast
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }
    : slow
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } } }
    : staggerContainer
  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={className}>
      {children}
    </motion.div>
  )
}
