'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
  frontIcon: React.ReactNode
  frontTitle: string
  backContent: string
  backColor?: string
}

export default function FlipCard({ frontIcon, frontTitle, backContent, backColor = '#1A5FF0' }: Props) {
  const [flipped, setFlipped] = useState(false)
  return (
    <div className="h-40 cursor-pointer perspective-1000"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-gray-50 border border-cyan/15 rounded-2xl flex flex-col items-center justify-center gap-3 backface-hidden group shadow-sm hover:border-cyan/40 transition-colors">
          <div className="text-cyan text-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">{frontIcon}</div>
          <span className="font-syne font-bold text-sm text-navy text-center px-3 group-hover:text-cyan transition-colors duration-300">{frontTitle}</span>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-2xl flex items-center justify-center p-4 backface-hidden border border-cyan/30"
          style={{ background: 'linear-gradient(135deg, var(--color-navy-mid) 0%, var(--color-navy) 100%)', transform: 'rotateY(180deg)' }}>
          <p className="text-white text-xs text-center leading-relaxed">{backContent}</p>
        </div>
      </motion.div>
    </div>
  )
}
