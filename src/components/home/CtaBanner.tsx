'use client'
import Image from 'next/image'
import AnimatedText from '@/components/ui/AnimatedText'
import FadeUp from '@/components/ui/FadeUp'
import { motion } from 'framer-motion'

export default function CtaBanner() {
  return (
    <section 
      className="relative overflow-hidden py-32 bg-parallax"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1548421820-2d4cfd15f8e8?w=1600&auto=format&fit=crop')`
      }}
    >
      {/* Dark overlay & backdrop filter */}
      <div className="absolute inset-0 bg-navy/90 backdrop-blur-[2px] pointer-events-none" />

      {/* Dot matrix pattern overlay */}
      <div className="absolute inset-0 bg-dot-matrix-dark opacity-15 pointer-events-none" />

      {/* Glow orb decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-64 h-64 bg-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Inner ambient gold glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent-gold/10 rounded-full blur-[85px] pointer-events-none animate-pulse-slow" />
          
          <AnimatedText
            text="Let's Build Better Connectivity Together."
            tag="h2"
            className="font-syne font-bold text-4xl lg:text-5xl text-white text-center justify-center tracking-tight"
          />
          
          <FadeUp delay={0.2}>
            <p className="text-gray-300 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed font-semibold">
              Whether you&apos;re an ISP looking to expand, a developer building the future, or a business requiring dedicated SLA connectivity — Gani Fiber is your infrastructure partner.
            </p>
          </FadeUp>

          <FadeUp delay={0.35}>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center font-bold text-sm px-8 py-4 rounded-xl bg-fiber text-navy hover:bg-fiber-dark shadow-lg shadow-fiber/15 transition-all cursor-pointer font-syne"
              >
                Get Connected
              </motion.a>
              <motion.a
                href="/for-isps"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center font-bold text-sm px-8 py-4 rounded-xl border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all cursor-pointer font-syne"
              >
                Partner With Us
              </motion.a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
