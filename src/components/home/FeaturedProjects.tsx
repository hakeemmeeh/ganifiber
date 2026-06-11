'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { IconBuilding, IconBuildingSkyscraper, IconRouter } from '@tabler/icons-react'
import AnimatedText from '@/components/ui/AnimatedText'
import SectionTag from '@/components/ui/SectionTag'
import StaggerChildren from '@/components/ui/StaggerChildren'
import { fadeInUp } from '@/lib/animations'

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop',
    icon: IconBuilding,
    title: 'Connected Estates & Gated Communities',
    subtitle: 'Residential FTTH',
    desc: 'Premium fiber connectivity for gated estates, apartment complexes, and residential compounds across Nairobi.',
    stats: '2,500+ Homes',
    badge: 'FTTH',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop',
    icon: IconBuildingSkyscraper,
    title: 'Commercial Tech Parks & Offices',
    subtitle: 'Enterprise Fiber',
    desc: 'Dedicated fiber links for corporate office centers, tech parks, and high-density business environments.',
    stats: '150+ Businesses',
    badge: 'Enterprise',
  },
  {
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop',
    icon: IconRouter,
    title: 'Metro Backhaul & Core Rings',
    subtitle: 'Infrastructure Backbone',
    desc: 'Core backbone nodes connecting Nairobi&apos;s economic corridors with resilient metro fiber rings.',
    stats: '8 Metro Zones',
    badge: 'Backbone',
  },
]

export default function FeaturedProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  const bgY = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <section ref={containerRef} className="relative py-28 bg-[#EAF2FE] overflow-hidden">
      {/* Parallax photo background */}
      <motion.div
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop')`,
          y: bgY,
          transformStyle: "preserve-3d"
        }}
        className="absolute inset-x-0 -top-20 -bottom-20 bg-cover bg-center pointer-events-none"
      />
      <div className="absolute inset-0 bg-[#EAF2FE]/94 pointer-events-none" />
      <div className="absolute inset-0 bg-dot-matrix opacity-15 pointer-events-none" />

      {/* Glowing orbs */}
      <div className="absolute top-1/3 left-[10%] w-72 h-72 bg-electric/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-64 h-64 bg-cyan/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionTag light>Our Projects</SectionTag>
          <AnimatedText
            text="Powering Communities & Enterprises."
            tag="h2"
            highlightWords={['Communities']}
            className="font-syne font-bold text-3xl lg:text-5xl text-navy text-center justify-center tracking-tight"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-gray-500 text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed"
          >
            From residential estates to enterprise corridors, see how Gani Fiber is transforming Kenya&apos;s digital landscape.
          </motion.p>
        </div>

        {/* Project Grid */}
        <StaggerChildren className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => {
            const ProjectIcon = project.icon
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative rounded-[2rem] overflow-hidden border border-electric/10 hover:border-accent-gold/40 transition-all duration-700 cursor-pointer bg-white/70 backdrop-blur-sm shadow-luxe"
              >
                {/* Image Header with Zoom */}
                <div className="relative h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-luxury group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent pointer-events-none" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-accent-gold/90 backdrop-blur-sm text-navy text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full">
                    {project.badge}
                  </div>

                  {/* Stats pill */}
                  <div className="absolute bottom-4 right-4 bg-navy/70 backdrop-blur-md border border-navy/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {project.stats}
                  </div>

                  {/* Floating icon */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-md border border-electric/15 flex items-center justify-center group-hover:bg-accent-gold/20 group-hover:border-accent-gold/40 transition-all duration-500">
                    <ProjectIcon size={22} className="text-electric group-hover:text-accent-gold transition-colors duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-7">
                  <p className="text-accent-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-2">{project.subtitle}</p>
                  <h3 className="font-syne font-bold text-lg text-navy mb-2 group-hover:text-accent-gold transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Bottom accent bar */}
                  <div className="mt-5 h-[2px] bg-gradient-to-r from-accent-gold via-amber-500 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                </div>
              </motion.div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
