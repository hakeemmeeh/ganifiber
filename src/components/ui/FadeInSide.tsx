'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeInLeft, fadeInRight } from '@/lib/animations'

interface Props {
  children: React.ReactNode
  direction?: 'left' | 'right'
  className?: string
  delay?: number
}

export default function FadeInSide({ children, direction = 'left', className = '', delay = 0 }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })
  return (
    <motion.div ref={ref} variants={direction === 'left' ? fadeInLeft : fadeInRight}
      initial="hidden" animate={inView ? 'visible' : 'hidden'}
      style={{ transitionDelay: `${delay}s` }} className={className}>
      {children}
    </motion.div>
  )
}
