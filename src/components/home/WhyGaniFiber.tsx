'use client'
import { motion } from 'framer-motion'
import { IconBolt, IconRocket, IconAntenna, IconCpu, IconHeartHandshake, IconMap2 } from '@tabler/icons-react'
import LivelyIcon from '@/components/ui/LivelyIcon'
import { cinematicCard } from '@/lib/animations'
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

        <StaggerChildren verySlow className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              variants={cinematicCard}
              className="card-premium p-8 group cursor-pointer relative overflow-hidden"
            >
              {/* Floating backdrop number watermark */}
              <div className="absolute bottom-2 right-4 font-syne font-black text-8xl text-navy/[0.02] group-hover:text-cyan/[0.06] transition-colors duration-550 select-none pointer-events-none z-0">
                0{i + 1}
              </div>

              <div className="relative z-10">
                {/* Gold top accent label */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-px w-4 bg-cyan" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan">PILLAR 0{i + 1}</span>
                </div>

                <LivelyIcon
                  icon={p.icon}
                  variant={p.variant}
                  className="mb-5 w-12 h-12"
                  size={24}
                />
                
                <h3 className="font-syne font-bold text-lg text-navy mb-3 transition-colors duration-300 group-hover:text-cyan">
                  {p.title}
                </h3>
                <p className="text-gray-650 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>

        {/* Speed Comparison Chart */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="bg-navy border border-cyan/20 rounded-[2.5rem] p-8 lg:p-12 shadow-luxe overflow-hidden relative group">
            {/* Glowing background elements */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-cyan/20 rounded-full blur-[80px] group-hover:bg-cyan/30 transition-colors duration-700 pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-electric/20 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <SectionTag>Speed & Capacity</SectionTag>
                <h3 className="font-syne font-bold text-2xl lg:text-3xl text-white mt-3 leading-tight">
                  Experience true gigabit performance.
                </h3>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  Stop settling for congested, shared copper lines. Our dedicated optical fiber drops guarantee symmetrical bandwidth exactly when you need it.
                </p>
              </div>
              
              <div className="flex-1 w-full space-y-7">
                {/* Traditional ISP Bar */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-2.5 uppercase tracking-wider">
                    <span className="text-gray-400">Standard ISPs</span>
                    <span className="text-gray-500">~50 Mbps</span>
                  </div>
                  <div className="h-3.5 bg-gray-800 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '12%' }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                      className="h-full bg-gray-600 rounded-full"
                    />
                  </div>
                </div>

                {/* Gani Fiber Bar */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-2.5 uppercase tracking-wider">
                    <span className="text-cyan drop-shadow-sm">Gani Fiber FTTH</span>
                    <span className="text-white drop-shadow-[0_0_8px_rgba(0,194,240,0.6)] animate-pulse-slow">1,000+ Mbps</span>
                  </div>
                  <div className="h-4 bg-gray-800 rounded-full overflow-hidden relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] border border-gray-700">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                      className="h-full rounded-full bg-gradient-to-r from-electric via-cyan to-fiber relative overflow-hidden"
                    >
                      {/* Sweeping light reflection */}
                      <motion.div 
                        initial={{ x: '-100%' }}
                        whileInView={{ x: '200%' }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: 'linear', delay: 2 }}
                        className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]" 
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
