import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/shared/PageHero'
import IndustriesStrip from '@/components/home/IndustriesStrip'
import CtaBanner from '@/components/home/CtaBanner'
import ContactSection from '@/components/home/ContactSection'
import FadeUp from '@/components/ui/FadeUp'
import SectionTag from '@/components/ui/SectionTag'
import AnimatedText from '@/components/ui/AnimatedText'
import StaggerChildren from '@/components/ui/StaggerChildren'
import CircleProgress from '@/components/ui/CircleProgress'
import { IconBolt, IconShield, IconClock, IconHeadset } from '@tabler/icons-react'

export const metadata: Metadata = {
  title: 'Business Internet — Gani Fiber Ltd',
  description: 'Dedicated fiber connectivity with guaranteed SLA for SMEs, enterprises, and organizations across Kenya.',
}

const solutions = [
  { icon: IconBolt, title: 'Dedicated Fiber', desc: 'Symmetric, uncontended fiber connections from 10 Mbps to 10 Gbps for your business.' },
  { icon: IconShield, title: 'Managed Security', desc: 'DDoS protection, firewall management, and secure VPN tunnels included.' },
  { icon: IconClock, title: 'Guaranteed SLA', desc: '99.9% uptime guarantee with 4-hour fault response and dedicated escalation paths.' },
  { icon: IconHeadset, title: 'Account Management', desc: 'Dedicated account manager and 24/7 NOC support for priority fault resolution.' },
]

export default function BusinessPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          tag="Business"
          title="Connectivity That Keeps Business Moving"
          subtitle="Dedicated fiber internet solutions built for businesses of every size — from SMEs to enterprise."
          imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&fit=crop"
          imageAlt="Modern office space"
          ctaText="Get a Quote →"
          ctaHref="/contact"
          statValue="99.9%"
          statLabel="Uptime SLA"
        />

        {/* Solutions */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-16">
            <div className="text-center">
              <SectionTag>Solutions</SectionTag>
              <AnimatedText
                text="Business-Grade Connectivity"
                className="font-syne font-bold text-3xl lg:text-4xl text-navy text-center justify-center"
              />
            </div>
            <StaggerChildren className="grid md:grid-cols-2 gap-6 mt-12">
              {solutions.map((s) => (
                <FadeUp key={s.title}>
                  <div className="card-premium p-8 h-full group">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="h-px w-4 bg-accent-gold" />
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent-gold">BUSINESS</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <s.icon size={24} className="text-accent-gold" />
                    </div>
                    <h3 className="font-syne font-bold text-xl text-navy mb-3 transition-colors duration-300 group-hover:text-accent-gold">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </StaggerChildren>
          </div>
        </section>

        <IndustriesStrip />

        {/* SLA Guarantee */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-16">
            <div className="text-center">
              <SectionTag>SLA Guarantee</SectionTag>
              <AnimatedText
                text="Performance You Can Count On"
                className="font-syne font-bold text-3xl lg:text-4xl text-navy text-center justify-center"
              />
            </div>
            <StaggerChildren className="flex flex-wrap justify-center gap-12 lg:gap-16 mt-12">
              <CircleProgress value={99.9} label="Network Uptime" color="#2ECC5A" />
              <CircleProgress value={100} label="Symmetric Speeds" color="#1A5FF0" />
              <CircleProgress value={98} label="Customer Satisfaction" color="#00C2F0" />
            </StaggerChildren>
          </div>
        </section>

        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
