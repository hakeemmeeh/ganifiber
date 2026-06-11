'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { staggerFast, wordReveal } from '@/lib/animations'

interface Props {
  text: string
  className?: string
  tag?: 'h1' | 'h2' | 'h3' | 'p'
  delay?: number
  highlightWords?: string[]
  greenWords?: string[]
}

export default function AnimatedText({ text, className = '', tag = 'h2', delay = 0, highlightWords = [], greenWords = [] }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  const words = text.split(' ')
  const Tag = tag

  return (
    <motion.div ref={ref} variants={staggerFast} initial="hidden" animate={inView ? 'visible' : 'hidden'} style={{ transitionDelay: `${delay}s` }}>
      <Tag className={`flex flex-wrap gap-x-[0.3em] ${className}`}>
        {words.map((word, i) => (
          <motion.span key={i} variants={wordReveal} className={`inline-block ${
            highlightWords.includes(word) ? 'text-electric' :
            greenWords.includes(word) ? 'text-fiber' : ''
          }`}>
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  )
}
