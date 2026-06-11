'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Props {
  value: number
  label: string
  color?: string
}

export default function CircleProgress({ value, label, color = '#1A5FF0' }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true })
  const radius = 44
  const circumference = 2 * Math.PI * radius
  
  // Custom unique gradient ID per label
  const gradId = `grad-${label.replace(/\s+/g, '')}`
  
  // Custom gradient colors based on passed hex
  const getGradientColors = (hex: string) => {
    if (hex === '#2ECC5A') return { start: '#2ECC5A', end: '#00C2F0' } // Live Green -> Cyan
    if (hex === '#00C2F0') return { start: '#00C2F0', end: '#1A5FF0' } // Cyan -> Blue
    return { start: '#1A5FF0', end: '#A855F7' } // Blue -> Purple
  }

  const gradColors = getGradientColors(color)

  return (
    <div ref={ref} className="flex flex-col items-center gap-4 bg-white border border-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-[0_15px_40px_rgba(26,95,240,0.05)] transition-all duration-300 w-[180px] group cursor-pointer">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90 overflow-visible" viewBox="0 0 100 100">
          <defs>
            {/* Glow Filter */}
            <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            
            {/* Linear Gradient */}
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={gradColors.start} />
              <stop offset="100%" stopColor={gradColors.end} />
            </linearGradient>
          </defs>

          {/* Background circle track */}
          <circle 
            cx="50" 
            cy="50" 
            r={radius} 
            fill="none" 
            stroke="#F1F5F9" 
            strokeWidth="7" 
          />
          
          {/* Active progress circle (glowing) */}
          <motion.circle 
            cx="50" 
            cy="50" 
            r={radius}
            fill="none" 
            stroke={`url(#${gradId})`} 
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            filter="url(#glow-filter)"
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: circumference * (1 - value / 100) } : {}}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="opacity-90 transition-all"
          />
        </svg>
        
        {/* Central percentage count */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-syne font-bold text-2xl text-navy transition-colors group-hover:text-electric">
            {value}%
          </span>
        </div>
      </div>
      
      <span className="text-xs font-bold text-navy/80 text-center tracking-wide leading-snug">
        {label}
      </span>
    </div>
  )
}
