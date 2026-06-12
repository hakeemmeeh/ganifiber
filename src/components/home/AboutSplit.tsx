'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { IconBolt, IconRocket, IconMap, IconWorld } from '@tabler/icons-react'
import LivelyIcon from '@/components/ui/LivelyIcon'
import AnimatedText from '@/components/ui/AnimatedText'
import FadeInSide from '@/components/ui/FadeInSide'
import SectionTag from '@/components/ui/SectionTag'
import StaggerChildren from '@/components/ui/StaggerChildren'
import FadeUp from '@/components/ui/FadeUp'

const features = [
  {
    icon: IconBolt,
    title: 'Carrier-Grade Networks',
    desc: 'Enterprise-level infrastructure built for reliability and scale.',
  },
  {
    icon: IconRocket,
    title: 'Rapid Deployment',
    desc: 'Fast rollout of fiber networks to new areas and estates.',
  },
  {
    icon: IconMap,
    title: 'East Africa Expansion',
    desc: 'Growing coverage from Nairobi across Kenya and East Africa.',
  },
]

export default function AboutSplit() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left - width / 2
    const mouseY = e.clientY - rect.top - height / 2
    
    // Calculate tilt angles (max 15 degrees)
    const rX = -(mouseY / height) * 15
    const rY = (mouseX / width) * 15
    
    setRotateX(rX)
    setRotateY(rY)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-[0.9fr_1fr] gap-16 items-center">
        {/* Left — Overlapping Elementor Collage */}
        <FadeInSide direction="left" className="relative pb-8 pr-8 lg:pb-12 lg:pr-12">
          {/* Dot matrix grid decoration */}
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-dot-matrix opacity-35 -z-10 rounded-2xl pointer-events-none animate-float-slow" />
          
          {/* Main big image card */}
          <div className="relative rounded-[2rem] overflow-hidden h-[380px] lg:h-[460px] w-full border border-cyan/15 shadow-luxe z-10 card-premium">
            <Image
              src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&auto=format&fit=crop"
              alt="Gani Fiber field engineer installing cables"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent pointer-events-none" />
          </div>

          {/* Overlapping small image card */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-2 right-2 w-[180px] h-[180px] lg:w-[240px] lg:h-[240px] rounded-[2rem] overflow-hidden border-2 border-cyan bg-gray-50 p-1.5 shadow-luxe z-20 cursor-pointer"
          >
            <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop"
                alt="Fiber cable splicing close-up"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Decorative floating ring in background */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full border-2 border-dashed border-cyan/25 animate-spin-slow pointer-events-none -z-10" />
        </FadeInSide>

        {/* Right — Content */}
        <FadeInSide direction="right" delay={0.15}>
          <div>
            <SectionTag>About Gani Fiber</SectionTag>
            <AnimatedText
              text="Building Kenya's Next Generation Fiber Network."
              tag="h2"
              className="font-syne font-bold text-3xl lg:text-4xl text-navy leading-tight mt-2"
            />
            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              Gani Fiber Ltd is a telecommunications and fiber infrastructure company 
              focused on building reliable, scalable, and future-ready broadband networks 
              across two strategic segments: wholesale infrastructure for ISPs, and direct 
              broadband for homes, estates, and businesses.
            </p>

            <StaggerChildren className="mt-8 space-y-5">
              {features.map((f, i) => (
                <FadeUp key={i}>
                  <div className="flex items-start gap-4 group">
                    <LivelyIcon
                      icon={f.icon}
                      variant="electric"
                      className="w-10 h-10 shrink-0"
                      size={20}
                    />
                    <div>
                      <div className="font-semibold text-navy text-sm transition-colors duration-250 group-hover:text-electric">{f.title}</div>
                      <div className="text-sm text-gray-550 mt-0.5 leading-relaxed">{f.desc}</div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </StaggerChildren>

            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-electric text-sm font-bold mt-8 group"
            >
              Learn more about us
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
        </FadeInSide>
      </div>
    </section>
  )
}
