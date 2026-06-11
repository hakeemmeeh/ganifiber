'use client'
import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { IconBolt, IconRocket, IconMap, IconWorld } from '@tabler/icons-react'
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
        {/* Left — 3D Parallax Tilt Card */}
        <FadeInSide direction="left" className="perspective-1000">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ rotateX, rotateY }}
            transition={{ type: 'spring', stiffness: 220, damping: 25 }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative rounded-3xl overflow-hidden min-h-[440px] lg:min-h-[540px] shadow-[0_30px_70px_rgba(26,95,240,0.1)] cursor-pointer bg-navy border border-white/5"
          >
            {/* Base Image */}
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&auto=format&fit=crop"
              alt="Global network connections from space"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-80" />

            {/* Glowing orbs inside 3D space */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-electric/25 rounded-full blur-[80px] pointer-events-none" />

            {/* Circuit pattern overlay in 3D layer */}
            <div 
              style={{ transform: 'translateZ(20px)' }}
              className="absolute inset-0 circuit-pattern opacity-[0.06] pointer-events-none" 
            />

            {/* Parallax Badge 1 — Floating in front (Z=40px) */}
            <div
              style={{ transform: 'translateZ(40px)' }}
              className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 text-white max-w-[170px]"
            >
              <div className="flex items-center gap-2">
                <IconWorld size={18} className="text-cyan animate-spin-slow shrink-0" />
                <span className="font-syne font-bold text-2xs leading-tight">East Africa Ring Backbone</span>
              </div>
            </div>

            {/* Parallax Badge 2 — Floating in front (Z=50px) */}
            <div
              style={{ transform: 'translateZ(50px)' }}
              className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 text-white max-w-[170px]"
            >
              <div className="font-syne font-bold text-xs text-fiber leading-tight">Redundant Nodes</div>
              <div className="text-gray-300 text-4xs mt-0.5 font-medium leading-none">Nairobi - Mombasa trunk</div>
            </div>
          </motion.div>
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
                    <div className="w-10 h-10 rounded-xl bg-electric/5 border border-electric/10 text-electric flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <f.icon size={20} className="stroke-[1.75]" />
                    </div>
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
