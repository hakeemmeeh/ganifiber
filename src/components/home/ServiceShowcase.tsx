'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { IconCheck } from '@tabler/icons-react'
import AnimatedText from '@/components/ui/AnimatedText'
import FadeUp from '@/components/ui/FadeUp'
import FadeInSide from '@/components/ui/FadeInSide'

const checklist = [
  'Open-access fiber infrastructure for all ISPs',
  'Symmetrical upload & download speeds',
  '99.9% SLA-backed uptime guarantee',
  '24/7 NOC monitoring & rapid fault resolution',
  'Scalable from 20 Mbps to 1 Gbps per premise',
]

export default function ServiceShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [-60, 60])

  return (
    <section ref={containerRef} className="relative py-0 bg-white overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Left — Full-bleed Parallax Image */}
        <div className="relative overflow-hidden min-h-[400px] lg:min-h-0">
          <motion.div
            style={{ y: imageY }}
            className="absolute inset-x-0 -top-16 -bottom-16"
          >
            <Image
              src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=1200&auto=format&fit=crop"
              alt="Gani Fiber engineers installing fiber optic cables"
              fill
              className="object-cover"
            />
          </motion.div>
          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 pointer-events-none lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent pointer-events-none" />

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md border border-accent-gold/20 rounded-2xl p-5 shadow-luxe z-10"
          >
            <div className="font-syne font-bold text-3xl text-navy">1 Gbps</div>
            <div className="text-xs text-gray-500 mt-1 font-medium">Maximum Speed Per Home</div>
          </motion.div>

          {/* Decorative corner ring */}
          <div className="absolute top-6 right-6 w-16 h-16 rounded-full border-2 border-dashed border-white/30 animate-spin-slow pointer-events-none" />
        </div>

        {/* Right — Content Panel */}
        <div className="flex items-center px-8 lg:px-16 py-16 lg:py-24">
          <FadeInSide direction="right" delay={0.1}>
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-accent-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent-gold">World-Class Fiber</span>
              </div>

              <AnimatedText
                text="Fiber Infrastructure Built for Tomorrow."
                tag="h2"
                highlightWords={['Tomorrow.']}
                className="font-syne font-bold text-3xl lg:text-4xl text-navy leading-tight"
              />

              <p className="text-gray-600 text-sm leading-relaxed mt-5">
                Gani Fiber deploys carrier-grade FTTH networks using the latest GPON and XGS-PON technologies,
                ensuring every connected home and business experiences true gigabit-capable broadband.
              </p>

              {/* Checklist */}
              <ul className="mt-8 space-y-3.5">
                {checklist.map((item, i) => (
                  <FadeUp key={i} delay={i * 0.08}>
                    <li className="flex items-start gap-3 group">
                      <div className="w-5 h-5 rounded-md bg-fiber/10 border border-fiber/25 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-fiber/20 transition-colors">
                        <IconCheck size={12} className="text-fiber" />
                      </div>
                      <span className="text-sm text-gray-700 leading-relaxed font-medium">{item}</span>
                    </li>
                  </FadeUp>
                ))}
              </ul>

              {/* CTA */}
              <FadeUp delay={0.5}>
                <motion.a
                  href="/for-isps"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-accent-gold to-amber-500 text-navy font-bold text-sm font-syne shadow-lg shadow-accent-gold/15 hover:shadow-xl hover:shadow-accent-gold/25 transition-all cursor-pointer"
                >
                  Explore Our Network
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </motion.a>
              </FadeUp>
            </div>
          </FadeInSide>
        </div>
      </div>
    </section>
  )
}
