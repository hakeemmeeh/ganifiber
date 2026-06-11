'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { scaleIn } from '@/lib/animations'

interface Props {
  children: React.ReactNode
  light?: boolean
}

export default function SectionTag({ children, light }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true })
  return (
    <motion.span ref={ref} variants={scaleIn} initial="hidden" animate={inView ? 'visible' : 'hidden'}
      className={`inline-block text-xs font-semibold tracking-[0.14em] uppercase px-4 py-1.5 rounded-full mb-4 ${
        light ? 'bg-white/10 text-cyan' : 'bg-electric/8 text-electric'
      }`}>
      {children}
    </motion.span>
  )
}
