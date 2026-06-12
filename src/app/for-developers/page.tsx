import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/shared/PageHero'
import CtaBanner from '@/components/home/CtaBanner'
import ContactSection from '@/components/home/ContactSection'
import FadeUp from '@/components/ui/FadeUp'
import SectionTag from '@/components/ui/SectionTag'
import AnimatedText from '@/components/ui/AnimatedText'
import StaggerChildren from '@/components/ui/StaggerChildren'
import { IconBuildingCommunity, IconRuler, IconFileCheck, IconPlug, IconHome2, IconHeadset } from '@tabler/icons-react'
import LivelyIcon from '@/components/ui/LivelyIcon'

export const metadata: Metadata = {
  title: 'For Developers — Gani Fiber Ltd',
  description: 'Gani Fiber works alongside developers from planning through occupancy to ensure every project is ready for the digital future.',
}

const services = [
  { icon: IconRuler, title: 'Pre-Construction Planning', desc: 'We integrate fiber duct and pathway design into your architectural plans from day one.' },
  { icon: IconBuildingCommunity, title: 'Infrastructure Deployment', desc: 'Full fiber plant installation during construction — ducts, risers, and distribution frames.' },
  { icon: IconFileCheck, title: 'Regulatory Compliance', desc: 'We handle all licensing and compliance requirements for telecommunications infrastructure.' },
  { icon: IconPlug, title: 'Testing & Commissioning', desc: 'End-to-end network testing before handover, ensuring every unit is fiber-ready.' },
  { icon: IconHome2, title: 'Resident Onboarding', desc: 'Seamless activation for new residents — they move in, connect, and go.' },
  { icon: IconHeadset, title: 'Ongoing Support', desc: '24/7 NOC monitoring and dedicated property manager contact for post-occupancy support.' },
]

const timeline = [
  { phase: 'Planning', desc: 'Fiber infrastructure design integrated into development plans' },
  { phase: 'Construction', desc: 'Duct installation, riser deployment, and distribution frame setup' },
  { phase: 'Testing', desc: 'Full network testing and certification' },
  { phase: 'Occupancy', desc: 'Resident onboarding and service activation' },
]

const benefits = [
  'Increased property value with fiber-ready certification',
  'Zero infrastructure cost for developers',
  'Faster occupancy with move-in-ready connectivity',
  'Premium broadband as a selling point for buyers',
  'Flexible revenue-sharing models available',
  'Single point of contact throughout project lifecycle',
]

export default function ForDevelopersPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          tag="Developers"
          title="Future-Ready Developments Start With Connectivity"
          subtitle="Gani Fiber works alongside developers from planning through occupancy to ensure every project is ready for the digital future."
          imageSrc="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&auto=format&fit=crop"
          imageAlt="Building under construction"
          ctaText="Partner With Us →"
          ctaHref="/contact"
        />

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-16">
            <div className="text-center">
              <SectionTag>What We Do</SectionTag>
              <AnimatedText
                text="End-to-End Developer Partnership"
                className="font-syne font-bold text-3xl lg:text-4xl text-navy text-center justify-center"
              />
            </div>
            <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {services.map((s) => (
                <FadeUp key={s.title}>
                  <div className="card-premium p-7 h-full group">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="h-px w-4 bg-cyan" />
                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan">DEVELOPER</span>
                    </div>
                    <LivelyIcon
                      icon={s.icon}
                      variant="gold"
                      className="mb-4 w-11 h-11"
                      size={22}
                    />
                    <h3 className="font-syne font-bold text-lg text-navy mb-2 transition-colors duration-300 group-hover:text-cyan">{s.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-16">
            <div className="text-center">
              <SectionTag>Process</SectionTag>
              <AnimatedText
                text="From Planning to Occupancy"
                className="font-syne font-bold text-3xl lg:text-4xl text-navy text-center justify-center"
              />
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {timeline.map((step, i) => (
                <FadeUp key={step.phase} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-electric text-white font-syne font-bold text-sm flex items-center justify-center mx-auto">
                      {i + 1}
                    </div>
                    <h4 className="font-syne font-bold text-navy mt-4">{step.phase}</h4>
                    <p className="text-gray-600 text-xs mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-16">
            <div className="text-center">
              <SectionTag>Benefits</SectionTag>
              <AnimatedText
                text="Why Developers Choose Gani Fiber"
                className="font-syne font-bold text-3xl lg:text-4xl text-navy text-center justify-center"
              />
            </div>
            <StaggerChildren className="grid md:grid-cols-2 gap-4 mt-12">
              {benefits.map((b) => (
                <FadeUp key={b}>
                  <div className="card-premium p-4 rounded-xl flex items-center gap-3">
                    <span className="text-cyan text-lg">✓</span>
                    <span className="text-navy text-sm font-medium">{b}</span>
                  </div>
                </FadeUp>
              ))}
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
