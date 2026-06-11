'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedText from '@/components/ui/AnimatedText'
import SectionTag from '@/components/ui/SectionTag'
import FadeUp from '@/components/ui/FadeUp'

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop',
    alt: 'Data center fiber infrastructure',
    span: 'col-span-2 row-span-2',
    label: 'Core Data Center',
  },
  {
    src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&auto=format&fit=crop',
    alt: 'Fiber optic cable closeup',
    span: 'col-span-1 row-span-1',
    label: 'Fiber Splicing',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop',
    alt: 'Modern residential estate',
    span: 'col-span-1 row-span-1',
    label: 'Connected Estates',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop',
    alt: 'Modern office workspace',
    span: 'col-span-1 row-span-1',
    label: 'Enterprise Offices',
  },
  {
    src: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop',
    alt: 'Network fiber cables',
    span: 'col-span-1 row-span-1',
    label: 'Metro Ring Nodes',
  },
]

export default function ImageGalleryBand() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const x1 = useTransform(scrollYProgress, [0, 1], [30, -30])
  const x2 = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <section ref={containerRef} className="relative py-28 bg-gray-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dot-matrix opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionTag>Our Infrastructure</SectionTag>
          <AnimatedText
            text="See Our Network in Action."
            tag="h2"
            highlightWords={['Action.']}
            className="font-syne font-bold text-3xl lg:text-5xl text-navy text-center justify-center tracking-tight"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-base mt-4 max-w-xl mx-auto"
          >
            From core data centers to last-mile estates — a glimpse into the infrastructure powering your connectivity.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {gallery.map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <motion.div
                style={{ x: i % 2 === 0 ? x1 : x2 }}
                className={`${item.span} relative rounded-[1.5rem] overflow-hidden group cursor-pointer border border-accent-gold/10 hover:border-accent-gold/40 transition-all duration-700 h-full`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-luxury group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Label revealed on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-luxury">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse-slow" />
                    <span className="text-white text-sm font-bold font-syne">{item.label}</span>
                  </div>
                </div>

                {/* Top-left corner accent */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-white/0 group-hover:border-accent-gold/60 rounded-tl-lg transition-all duration-500 pointer-events-none" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-white/0 group-hover:border-accent-gold/60 rounded-br-lg transition-all duration-500 pointer-events-none" />
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
