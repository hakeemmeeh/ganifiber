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
          ? '0 30px 80px rgba(26,95,240,0.35)'
          : 'var(--shadow-luxe-hover)',
      }}
      className={`p-8 border relative overflow-hidden flex flex-col h-full transition-all duration-700 ease-luxury ${
        highlighted
          ? 'rounded-[2rem] bg-gradient-to-br from-electric to-electric-dark border-electric text-white shadow-xl shadow-electric/15'
          : 'card-premium text-navy'
      }`}
    >
      {/* Glow highlight for featured card */}
      {highlighted && (
        <>
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-fiber text-navy text-xs font-bold px-4 py-1.5 rounded-full shadow-md tracking-wider uppercase">
            Most Popular
          </div>
        </>
      )}

      {/* Plan Header */}
      <div className={`text-xs font-bold tracking-wider uppercase mb-2 ${highlighted ? 'text-white/70' : 'text-accent-gold'}`}>
        {name}
      </div>
      
      {/* Plan Speed */}
      <div className="font-syne font-bold text-5xl tracking-tight mb-2 flex items-baseline">
        {speed}
      </div>

      {/* Symmetrical Speed Indicator Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-2xs mb-1.5 font-medium">
          <span className="flex items-center gap-0.5 opacity-80">
            <IconDownload size={10} className={highlighted ? 'text-cyan' : 'text-accent-gold'} /> Down: {downloadSpeed}
          </span>
          <span className="flex items-center gap-0.5 opacity-80">
            <IconUpload size={10} className={highlighted ? 'text-cyan' : 'text-fiber'} /> Up: {uploadSpeed}
          </span>
        </div>
        <div className={`h-2.5 w-full rounded-full overflow-hidden p-[1.5px] ${highlighted ? 'bg-white/20' : 'bg-gray-150'}`}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${speedPercentage}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={`h-full rounded-full bg-gradient-to-r ${highlighted ? 'from-cyan to-fiber' : 'from-accent-gold to-fiber'}`}
          />
        </div>
        <div className="text-3xs text-right mt-1 opacity-60 italic font-medium">Symmetrical Line</div>
      </div>

      {/* Plan Price */}
      <div className="mb-8">
        <div className="flex items-baseline">
          <span className="font-syne font-bold text-3xl">{price}</span>
          <span className={`text-xs font-medium ml-1.5 ${highlighted ? 'text-white/80' : 'text-gray-400'}`}>
            / {period === 'month' ? 'month' : 'year'}
          </span>
        </div>
        {period === 'year' && (
          <div className={`text-3xs font-semibold mt-1 uppercase ${highlighted ? 'text-cyan' : 'text-accent-gold'}`}>
            ✓ Get 2 months free!
          </div>
        )}
      </div>

      {/* Features List */}
      <ul className="space-y-3.5 mb-8 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm leading-snug">
            <span className={`font-bold mt-0.5 shrink-0 ${highlighted ? 'text-cyan' : 'text-accent-gold'}`}>✓</span>
            <span className={highlighted ? 'text-white/90' : 'text-gray-600'}>{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        className={`w-full py-3.5 rounded-full font-extrabold text-xs tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-sm ${
          highlighted
            ? 'bg-white text-electric hover:bg-gray-50 hover:shadow-lg'
            : 'bg-electric text-white hover:bg-electric-dark hover:shadow-md'
        }`}
      >
        {cta}
      </button>
    </motion.div>
  )
}
