'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { IconBuilding, IconWorld, IconHome, IconBuildingSkyscraper } from '@tabler/icons-react'
import LivelyIcon from '@/components/ui/LivelyIcon'
import { cinematicCard } from '@/lib/animations'
import AnimatedText from '@/components/ui/AnimatedText'
import SectionTag from '@/components/ui/SectionTag'
import StaggerChildren from '@/components/ui/StaggerChildren'

const solutions = [
  {
    icon: IconBuilding,
    iconBg: 'bg-blue-50',
    iconColor: 'text-electric',
    variant: 'electric' as const,
    title: 'Wholesale FTTH Infrastructure',
    desc: 'We build, own, and manage fiber infrastructure that ISPs and estate managers can leverage to deliver broadband.',
    tags: ['Open Access', 'Last Mile'],
    link: '/for-isps',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop',
    imageAlt: 'Telecom infrastructure and fiber construction',
  },
  {
    icon: IconWorld,
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan',
    variant: 'cyan' as const,
    title: 'IP Transit & Metro Fiber',
    desc: 'Full BGP routing, carrier interconnect, and metro fiber links for ISPs expanding across Nairobi and beyond.',
    tags: ['BGP', 'IPv4/IPv6', 'Metro'],
    link: '/for-isps',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop',
    imageAlt: 'High-performance datacenter with fiber switches',
  },
  {
    icon: IconHome,
    iconBg: 'bg-green-50',
    iconColor: 'text-fiber',
    variant: 'green' as const,
    title: 'Home & Estate Broadband',
    desc: 'Unlimited symmetrical fiber broadband for apartments, gated communities, and residential estates.',
    tags: ['Unlimited', 'Symmetrical', 'FTTH'],
    link: '/for-homes',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop',
    imageAlt: 'Modern residential estate with fiber connectivity',
  },
  {
    icon: IconBuildingSkyscraper,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-500',
    variant: 'purple' as const,
    title: 'Business & Developer Solutions',
    desc: 'Dedicated connectivity for SMEs, enterprises, and property developers building future-ready projects.',
    tags: ['Dedicated', 'SLA', 'Enterprise'],
    link: '/business',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop',
    imageAlt: 'Dynamic corporate office environment',
  },
]

export default function SolutionsGrid() {
  return (
    <section className="relative z-20 -mt-14 md:-mt-20 rounded-t-[36px] md:rounded-t-[56px] shadow-[0_-25px_60px_rgba(6,14,43,0.03)] bg-gradient-to-br from-electric/5 via-cyan/5 to-fiber/5 py-24 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center">
          <SectionTag>Our Solutions</SectionTag>
          <AnimatedText
            text="One Network. Every Kind of Customer."
            highlightWords={['Every']}
            className="font-syne font-bold text-3xl lg:text-4xl text-navy text-center justify-center"
          />
        </div>

        <StaggerChildren className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              variants={cinematicCard}
              className="card-premium group cursor-pointer relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-cyan after:to-electric after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-500"
            >
              {/* Photo Header with Zoom Effect */}
              <div className="relative h-44 lg:h-52 overflow-hidden rounded-t-[2rem]">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-luxury group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating icon badge */}
                <div className="absolute bottom-[-18px] left-7 z-20 bg-white rounded-2xl shadow-luxe border-2 border-white">
                  <LivelyIcon
                    icon={s.icon}
                    variant={s.variant}
                    className="w-12 h-12 !bg-transparent !border-none !shadow-none"
                    size={24}
                  />
                </div>

                {/* Category badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-navy text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border border-electric/15">
                  {s.tags[0]}
                </div>
              </div>

              {/* Floating backdrop number watermark */}
              <div className="absolute bottom-2 right-4 font-syne font-black text-8xl text-navy/[0.02] group-hover:text-electric/[0.04] transition-colors duration-550 select-none pointer-events-none z-0">
                0{i + 1}
              </div>

              <div className="relative z-10 p-7 pt-8">
                {/* Optional styled top dash */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-px w-6 bg-cyan" />
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-cyan">
                    {s.tags.slice(0, 1).join('')} SPECIFICATION
                  </p>
                </div>

                <h3 className="font-syne font-bold text-xl text-navy mb-3 transition-colors duration-350 group-hover:text-electric">{s.title}</h3>
                <p className="text-gray-650 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.tags.map((tag) => (
                    <span key={tag} className="bg-electric/5 text-electric text-xs rounded-md px-2.5 py-1 font-semibold group-hover:bg-electric/10 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={s.link} className="text-electric text-sm font-bold group inline-flex items-center gap-1">
                  Learn more
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
