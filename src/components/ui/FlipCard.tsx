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
        <div className="absolute inset-0 bg-white border border-gray-100 rounded-xl flex flex-col items-center justify-center gap-3 backface-hidden">
          <div className="text-electric text-3xl">{frontIcon}</div>
          <span className="font-syne font-bold text-sm text-navy text-center px-3">{frontTitle}</span>
        </div>
        {/* Back */}
        <div className="absolute inset-0 rounded-xl flex items-center justify-center p-4 backface-hidden"
          style={{ background: backColor, transform: 'rotateY(180deg)' }}>
          <p className="text-white text-xs text-center leading-relaxed">{backContent}</p>
        </div>
      </motion.div>
    </div>
  )
}
