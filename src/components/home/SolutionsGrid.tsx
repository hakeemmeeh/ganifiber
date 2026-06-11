'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { IconBuilding, IconWorld, IconHome, IconBuildingSkyscraper } from '@tabler/icons-react'
import { fadeInUp } from '@/lib/animations'
import AnimatedText from '@/components/ui/AnimatedText'
import SectionTag from '@/components/ui/SectionTag'
import StaggerChildren from '@/components/ui/StaggerChildren'

const solutions = [
  {
    icon: IconBuilding,
    iconBg: 'bg-blue-50',
    iconColor: 'text-electric',
    title: 'Wholesale FTTH Infrastructure',
    desc: 'We build, own, and manage fiber infrastructure that ISPs and estate managers can leverage to deliver broadband.',
    tags: ['Open Access', 'Last Mile'],
    link: '/for-isps',
  },
  {
    icon: IconWorld,
    iconBg: 'bg-cyan-50',
    iconColor: 'text-cyan',
    title: 'IP Transit & Metro Fiber',
    desc: 'Full BGP routing, carrier interconnect, and metro fiber links for ISPs expanding across Nairobi and beyond.',
    tags: ['BGP', 'IPv4/IPv6', 'Metro'],
    link: '/for-isps',
  },
  {
    icon: IconHome,
    iconBg: 'bg-green-50',
    iconColor: 'text-fiber',
    title: 'Home & Estate Broadband',
    desc: 'Unlimited symmetrical fiber broadband for apartments, gated communities, and residential estates.',
    tags: ['Unlimited', 'Symmetrical', 'FTTH'],
    link: '/for-homes',
  },
  {
    icon: IconBuildingSkyscraper,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-500',
    title: 'Business & Developer Solutions',
    desc: 'Dedicated connectivity for SMEs, enterprises, and property developers building future-ready projects.',
    tags: ['Dedicated', 'SLA', 'Enterprise'],
    link: '/business',
  },
]

export default function SolutionsGrid() {
  return (
    <section className="overlap-panel-gray py-24 pb-20">
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
              variants={fadeInUp}
              className="card-premium p-9 group cursor-pointer"
            >
              {/* Optional Yaa Mucaad styled top dash */}
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-6 bg-accent-gold" />
                <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent-gold">
                  {s.tags.slice(0, 1).join('')} SPECIFICATION
                </p>
              </div>

              <div className={`w-13 h-13 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${s.iconBg}`}>
                <s.icon size={24} className={`${s.iconColor} transition-transform duration-300`} />
              </div>
              <h3 className="font-syne font-bold text-xl text-navy mb-3 transition-colors duration-350 group-hover:text-accent-gold">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {s.tags.map((tag) => (
                  <span key={tag} className="bg-accent-gold/5 text-accent-gold text-xs rounded-md px-2.5 py-1 font-semibold group-hover:bg-accent-gold/10 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={s.link} className="text-accent-gold text-sm font-bold group inline-flex items-center gap-1">
                Learn more
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
