'use client'
import { useRef } from 'react'
import AnimatedText from '@/components/ui/AnimatedText'
import FadeUp from '@/components/ui/FadeUp'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function CtaBanner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80])

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden py-32 bg-[#EAF2FE] border-t border-electric/5"
    >
      {/* GPU-Accelerated Parallax Background Image */}
      <motion.div
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1548421820-2d4cfd15f8e8?w=1600&auto=format&fit=crop')`,
          y,
          transformStyle: "preserve-3d"
        }}
        className="absolute inset-x-0 -top-24 -bottom-24 bg-cover bg-center pointer-events-none"
      />
      {/* Dark overlay & backdrop filter */}
      <div className="absolute inset-0 bg-[#EAF2FE]/90 backdrop-blur-[2px] pointer-events-none" />

      {/* Dot matrix pattern overlay */}
      <div className="absolute inset-0 bg-dot-matrix opacity-12 pointer-events-none" />

      {/* Glow orb decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-64 h-64 bg-cyan/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="bg-white/70 backdrop-blur-md border border-electric/10 rounded-[2.5rem] p-10 md:p-16 shadow-luxe relative overflow-hidden">
          {/* Inner ambient gold glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-electric/8 rounded-full blur-[85px] pointer-events-none animate-pulse-slow" />
          
          <AnimatedText
            text="Let's Build Better Connectivity Together."
            tag="h2"
            className="font-syne font-bold text-4xl lg:text-5xl text-navy text-center justify-center tracking-tight"
          />
          
          <FadeUp delay={0.2}>
            <p className="text-gray-600 text-base md:text-lg mt-6 max-w-2xl mx-auto leading-relaxed font-semibold">
              Whether you&apos;re an ISP looking to expand, a developer building the future, or a business requiring dedicated SLA connectivity — Gani Fiber is your infrastructure partner.
            </p>
          </FadeUp>

          <FadeUp delay={0.35}>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center font-bold text-sm px-8 py-4 rounded-xl bg-electric text-white hover:bg-electric-dark shadow-lg shadow-electric/15 transition-all cursor-pointer font-syne"
              >
                Get Connected
              </motion.a>
              <motion.a
                href="/for-isps"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center font-bold text-sm px-8 py-4 rounded-xl border-2 border-navy/20 text-navy hover:bg-navy/5 hover:border-navy/40 transition-all cursor-pointer font-syne"
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
