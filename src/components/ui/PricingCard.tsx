'use client'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'
import { IconUpload, IconDownload } from '@tabler/icons-react'

interface Props {
  name: string
  speed: string
  price: string
  period: 'month' | 'year'
  downloadSpeed: string
  uploadSpeed: string
  speedPercentage: number // out of 100 for visual indicator
  features: string[]
  highlighted?: boolean
  cta: string
}

export default function PricingCard({
  name,
  speed,
  price,
  period,
  downloadSpeed,
  uploadSpeed,
  speedPercentage,
  features,
  highlighted,
  cta
}: Props) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{
        y: -10,
        boxShadow: highlighted
          ? '0 30px 80px rgba(6,14,43,0.25)'
          : 'var(--shadow-luxe-hover)',
      }}
      className={`border relative overflow-hidden flex flex-col h-full transition-all duration-700 ease-luxury ${
        highlighted
          ? 'rounded-[2rem] bg-gradient-to-br from-navy via-navy-mid to-navy border-cyan shadow-xl shadow-navy/25 text-white'
          : 'card-premium text-navy'
      }`}
    >
      {/* Glow highlight for featured card */}
      {highlighted && (
        <>
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan to-electric text-navy text-[10px] font-extrabold px-5 py-1.5 rounded-full shadow-md tracking-wider uppercase z-20">
            Most Popular
          </div>
        </>
      )}

      {/* Plan Header Band (Satenet style) */}
      <div className={`p-8 text-center border-b flex flex-col items-center justify-center ${
        highlighted 
          ? 'bg-white/5 border-white/10' 
          : 'bg-cyan-pale/35 border-cyan/15'
      }`}>
        <div className={`text-2xs font-extrabold tracking-[0.2em] uppercase mb-2 ${highlighted ? 'text-cyan' : 'text-gray-500'}`}>
          {name}
        </div>
        <div className="font-syne font-black text-4xl lg:text-5xl tracking-tight leading-none">
          {speed}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        {/* Symmetrical Speed Indicator Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-2xs mb-2 font-semibold">
            <span className="flex items-center gap-1 opacity-80">
              <IconDownload size={11} className="text-cyan" /> Down: {downloadSpeed}
            </span>
            <span className="flex items-center gap-1 opacity-80">
              <IconUpload size={11} className="text-fiber" /> Up: {uploadSpeed}
            </span>
          </div>
          <div className={`h-2.5 w-full rounded-full overflow-hidden p-[1.5px] ${highlighted ? 'bg-white/10' : 'bg-gray-150'}`}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${speedPercentage}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-cyan via-cyan to-fiber"
            />
          </div>
          <div className="text-4xs text-right mt-1.5 opacity-60 uppercase tracking-widest font-bold">Symmetrical Line</div>
        </div>

        {/* Plan Price */}
        <div className={`mb-8 text-center rounded-2xl py-4 border ${highlighted ? 'bg-white/5 border-white/10' : 'bg-gray-50/50 border-gray-100/60'}`}>
          <div className="flex items-baseline justify-center">
            <span className={`font-syne font-black text-3xl ${highlighted ? 'text-white' : 'text-fiber'}`}>{price}</span>
            <span className={`text-2xs font-bold ml-1.5 uppercase tracking-wider ${highlighted ? 'text-gray-405' : 'text-gray-500'}`}>
              / {period === 'month' ? 'month' : 'year'}
            </span>
          </div>
          {period === 'year' && (
            <div className="text-4xs font-bold mt-1.5 uppercase tracking-widest text-cyan">
              ✓ Get 2 months free!
            </div>
          )}
        </div>

        {/* Features List */}
        <ul className="space-y-4 mb-8 flex-grow">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-xs leading-snug font-semibold">
              <span className="font-bold shrink-0 text-sm text-cyan">✓</span>
              <span className={highlighted ? 'text-gray-300' : 'text-gray-600'}>{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className={`w-full py-4 rounded-full font-syne font-extrabold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-md ${
            highlighted
              ? 'bg-gradient-to-r from-cyan to-electric hover:from-amber-500 hover:to-accent-gold text-navy shadow-cyan/15'
              : 'bg-navy text-white hover:bg-navy-mid hover:shadow-lg'
          }`}
        >
          {cta}
        </button>
      </div>
    </motion.div>
  )
}
