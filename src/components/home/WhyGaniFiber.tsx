'use client'
import { motion } from 'framer-motion'
import { IconBolt, IconRocket, IconAntenna, IconCpu, IconHeartHandshake, IconMap2 } from '@tabler/icons-react'
import LivelyIcon from '@/components/ui/LivelyIcon'
import { fadeInUp } from '@/lib/animations'
import AnimatedText from '@/components/ui/AnimatedText'
import SectionTag from '@/components/ui/SectionTag'
import StaggerChildren from '@/components/ui/StaggerChildren'

const pillars = [
  {
    icon: IconBolt,
    title: 'Carrier-Grade Networks',
    desc: 'Built on enterprise-level equipment and redundant fiber paths ensuring maximum reliability.',
    variant: 'electric' as const,
  },
  {
    icon: IconRocket,
    title: 'Rapid Deployment',
    desc: 'Our streamlined process gets estates and ISPs connected in weeks, not months.',
    variant: 'cyan' as const,
  },
  {
    icon: IconAntenna,
    title: 'Wholesale + Retail Expertise',
    desc: 'Serving both ISP partners and end consumers with tailored solutions.',
    variant: 'green' as const,
  },
  {
    icon: IconCpu,
    title: 'Future-Ready Infrastructure',
    desc: 'Networks designed for tomorrow — supporting 10G PON and beyond.',
    variant: 'purple' as const,
  },
  {
    icon: IconHeartHandshake,
    title: 'Local Customer Support',
    desc: '24/7 NOC and dedicated account managers based in Nairobi.',
    variant: 'pink' as const,
  },
  {
    icon: IconMap2,
    title: 'East Africa Expansion',
    desc: 'Growing from Nairobi to Mombasa, Kisumu, Eldoret, and across the region.',
    variant: 'indigo' as const,
  },
]

export default function WhyGaniFiber() {
  return (
    <section className="overlap-panel-white py-24 pb-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center">
          <SectionTag>Why Choose Us</SectionTag>
          <AnimatedText
            text="Trusted Infrastructure. Reliable Connectivity."
            className="font-syne font-bold text-3xl lg:text-4xl text-navy text-center justify-center mt-2"
          />
        </div>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="card-premium p-8 group cursor-pointer"
            >
              {/* Gold top accent label */}
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-4 bg-accent-gold" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent-gold">PILLAR 0{i + 1}</span>
              </div>

              <LivelyIcon
                icon={p.icon}
                variant={p.variant}
                className="mb-5 w-12 h-12"
                size={24}
              />
              
              <h3 className="font-syne font-bold text-lg text-navy mb-3 transition-colors duration-300 group-hover:text-accent-gold">
                {p.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
