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

export const metadata: Metadata = {
  title: 'About — Gani Fiber Ltd',
  description: 'Gani Fiber Ltd is a telecommunications and fiber infrastructure company building reliable, scalable broadband networks across Kenya.',
}

const values = [
  { icon: IconTarget, title: 'Mission', desc: 'To build and operate the most reliable fiber infrastructure network in East Africa, enabling affordable and high-quality broadband access for all.' },
  { icon: IconEye, title: 'Vision', desc: 'To be the leading fiber infrastructure provider in East Africa, connecting communities and powering digital transformation across the region.' },
  { icon: IconDiamond, title: 'Values', desc: 'Infrastructure excellence, customer-first service, rapid innovation, partnership mindset, and community impact drive everything we do.' },
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
            <FadeInSide direction="left">
              <div className="relative rounded-2xl overflow-hidden min-h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&auto=format&fit=crop"
                  alt="Network connections"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-electric/8" />
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
                  <div className="card-premium p-8 text-center h-full group">
                    <div className="w-14 h-14 rounded-2xl bg-accent-gold/10 flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <v.icon size={28} className="text-accent-gold" />
                    </div>
                    <h3 className="font-syne font-bold text-xl text-navy mb-3 transition-colors duration-300 group-hover:text-accent-gold">{v.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
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
