import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/shared/PageHero'
import StatsBand from '@/components/home/StatsBand'
import CtaBanner from '@/components/home/CtaBanner'
import FadeUp from '@/components/ui/FadeUp'
import FadeInSide from '@/components/ui/FadeInSide'
import SectionTag from '@/components/ui/SectionTag'
import AnimatedText from '@/components/ui/AnimatedText'
import StaggerChildren from '@/components/ui/StaggerChildren'
import CircleProgress from '@/components/ui/CircleProgress'
import { IconTarget, IconEye, IconDiamond } from '@tabler/icons-react'
import LivelyIcon from '@/components/ui/LivelyIcon'

export const metadata: Metadata = {
  title: 'About — Gani Fiber Ltd',
  description: 'Gani Fiber Ltd is a telecommunications and fiber infrastructure company building reliable, scalable broadband networks across Kenya.',
}

const values = [
  { icon: IconTarget, title: 'Mission', desc: 'To build and operate the most reliable fiber infrastructure network in East Africa, enabling affordable and high-quality broadband access for all.', variant: 'electric' as const },
  { icon: IconEye, title: 'Vision', desc: 'To be the leading fiber infrastructure provider in East Africa, connecting communities and powering digital transformation across the region.', variant: 'cyan' as const },
  { icon: IconDiamond, title: 'Values', desc: 'Infrastructure excellence, customer-first service, rapid innovation, partnership mindset, and community impact drive everything we do.', variant: 'gold' as const },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          tag="About"
          title="Infrastructure First. Connectivity Always."
          subtitle="Gani Fiber Ltd is a telecommunications and fiber infrastructure company focused on building reliable, scalable, and future-ready broadband networks."
          imageSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop"
          imageAlt="Nairobi skyline"
        />

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSide direction="left" className="relative pb-8 pr-8 lg:pb-12 lg:pr-12">
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-dot-matrix opacity-35 -z-10 rounded-2xl pointer-events-none animate-float-slow" />
              <div className="relative rounded-[2rem] overflow-hidden min-h-[460px] shadow-luxe border border-cyan/15 card-premium">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&auto=format&fit=crop"
                  alt="Network connections"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent pointer-events-none" />
              </div>
              
              {/* Overlapping small image card */}
              <div className="absolute bottom-2 right-2 w-[200px] h-[200px] rounded-[1.5rem] overflow-hidden border-[6px] border-white shadow-luxe z-20 hover:-translate-y-2 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop"
                  alt="Fiber splicing"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeInSide>
            <FadeInSide direction="right" delay={0.15}>
              <div>
                <SectionTag>Our Story</SectionTag>
                <AnimatedText
                  text="Building Kenya's Next Generation Fiber Network"
                  tag="h2"
                  className="font-syne font-bold text-3xl lg:text-4xl text-navy leading-tight"
                />
                <p className="text-gray-600 text-sm leading-relaxed mt-4">
                  Gani Fiber Ltd is a telecommunications and fiber infrastructure company focused on building reliable, scalable, and future-ready broadband networks across two strategic segments: wholesale infrastructure for ISPs, and direct broadband for homes, estates, and businesses.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mt-3">
                  Founded as part of the Rodol Homes family, Gani Fiber brings real estate development expertise to telecommunications — ensuring every development is connected from the ground up. Our carrier-grade infrastructure serves ISPs, property developers, businesses, and households across Nairobi, with rapid expansion planned across Kenya and East Africa.
                </p>
              </div>
            </FadeInSide>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-16">
            <StaggerChildren className="grid md:grid-cols-3 gap-6">
              {values.map((v) => (
                <FadeUp key={v.title}>
                  <div className="card-premium p-8 h-full group relative overflow-hidden text-left">
                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan to-electric scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                    
                    {/* Floating watermark */}
                    <div className="absolute -bottom-4 -right-4 text-navy/[0.03] group-hover:text-cyan/[0.05] transition-colors duration-500 pointer-events-none">
                      <v.icon size={140} stroke={1} />
                    </div>
                    
                    <LivelyIcon
                      icon={v.icon}
                      variant={v.variant}
                      className="mb-6 w-14 h-14"
                      size={28}
                    />
                    <h3 className="font-syne font-bold text-xl text-navy mb-3 transition-colors duration-300 group-hover:text-cyan relative z-10">{v.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed relative z-10">{v.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </StaggerChildren>
          </div>
        </section>

        <StatsBand />

        {/* Stats circles */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-16">
            <StaggerChildren className="flex flex-wrap justify-center gap-12 lg:gap-16">
              <CircleProgress value={99.9} label="Network Uptime SLA" color="#2ECC5A" />
              <CircleProgress value={98} label="Customer Satisfaction" color="#1A5FF0" />
              <CircleProgress value={100} label="FTTH Capable" color="#00C2F0" />
              <CircleProgress value={80} label="Active Zones" color="#1A5FF0" />
            </StaggerChildren>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
