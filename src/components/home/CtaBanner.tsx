'use client'
import Image from 'next/image'
import AnimatedText from '@/components/ui/AnimatedText'
import FadeUp from '@/components/ui/FadeUp'
import { motion } from 'framer-motion'

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-24 mesh-bg border-t border-white/5">
      {/* Background image overlay with extremely low opacity */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&auto=format&fit=crop"
          alt="Fiber optic cables"
          fill
          className="object-cover"
        />
      </div>

      {/* Glow orb decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-64 h-64 bg-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <AnimatedText
          text="Let's Build Better Connectivity Together."
          tag="h2"
          className="font-syne font-bold text-4xl lg:text-5xl text-white text-center justify-center tracking-tight"
        />
        
        <FadeUp delay={0.2}>
          <p className="text-gray-300 text-base md:text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re an ISP looking to expand, a developer building the future, or a business requiring dedicated SLA connectivity — Gani Fiber is your infrastructure partner.
          </p>
        </FadeUp>

        <FadeUp delay={0.35}>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center font-bold text-sm px-8 py-4 rounded-xl bg-fiber text-navy hover:bg-fiber-dark shadow-lg shadow-fiber/15 transition-all cursor-pointer"
            >
              Get Connected
            </motion.a>
            <motion.a
              href="/for-isps"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center font-bold text-sm px-8 py-4 rounded-xl border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer"
            >
              Partner With Us
            </motion.a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
