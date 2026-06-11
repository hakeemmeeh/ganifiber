'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  rating: number
}

interface Props {
  testimonials: Testimonial[]
}

const colors = [
  'from-electric to-cyan border-electric/30 shadow-electric/15',
  'from-fiber to-cyan border-fiber/30 shadow-fiber/15',
  'from-purple-500 to-electric border-purple-500/30 shadow-purple-500/15'
]

export default function TestimonialSlider({ testimonials }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)

  const advance = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    const interval = setInterval(advance, 6000)
    return () => clearInterval(interval)
  }, [advance])

  const t = testimonials[activeIndex]

  return (
    <div className="relative max-w-3xl mx-auto overflow-visible px-4">
      {/* Quotation mark decoration (large, background layered) */}
      <div className="absolute top-[-30px] left-8 font-serif text-8xl text-accent-gold/[0.1] pointer-events-none select-none z-0">
        “
      </div>

      <div className="card-premium p-8 lg:p-12 relative z-10 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-full blur-2xl pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <span key={i} className="text-amber-400 text-md drop-shadow-sm select-none">★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="font-medium text-navy/90 text-sm md:text-base leading-relaxed text-center max-w-2xl mx-auto italic">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author details */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {/* Glowing Avatar Initials Bubble */}
              <div className={`w-13 h-13 rounded-full bg-gradient-to-br ${colors[activeIndex % colors.length]} border-2 flex items-center justify-center text-white font-syne font-bold text-sm shadow-md transition-all`}>
                {t.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="text-left">
                <div className="font-syne font-bold text-navy text-sm tracking-wide">{t.name}</div>
                <div className="text-xs text-gray-400 mt-0.5 font-semibold">
                  {t.role} <span className="text-gray-300">·</span> <span className="text-electric">{t.company}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2.5 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`transition-all duration-300 cursor-pointer h-2.5 rounded-full ${
              i === activeIndex ? 'w-8 bg-accent-gold' : 'w-2.5 bg-gray-250 hover:bg-gray-300'
            }`}
            aria-label={`View testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
