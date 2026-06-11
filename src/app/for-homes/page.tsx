import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/shared/PageHero'
import PlansPreview from '@/components/home/PlansPreview'
import CtaBanner from '@/components/home/CtaBanner'
import ContactSection from '@/components/home/ContactSection'
import FadeUp from '@/components/ui/FadeUp'
import FadeInSide from '@/components/ui/FadeInSide'
import SectionTag from '@/components/ui/SectionTag'
import AnimatedText from '@/components/ui/AnimatedText'
import StaggerChildren from '@/components/ui/StaggerChildren'
import { IconDeviceTv, IconDeviceGamepad2, IconBriefcase, IconSmartHome, IconSchool, IconUsers } from '@tabler/icons-react'
import LivelyIcon from '@/components/ui/LivelyIcon'

export const metadata: Metadata = {
  title: 'Home Internet — Gani Fiber Ltd',
  description: 'Fast, reliable, unlimited fiber broadband for modern households — streaming, remote work, gaming, smart homes, and more.',
}

const useCases = [
  { icon: IconDeviceTv, label: 'Streaming' },
  { icon: IconDeviceGamepad2, label: 'Gaming' },
  { icon: IconBriefcase, label: 'Remote Work' },
  { icon: IconSmartHome, label: 'Smart Home' },
  { icon: IconSchool, label: 'E-Learning' },
  { icon: IconUsers, label: 'Family' },
]

const faqs = [
  { q: 'What speeds are available?', a: 'We offer plans from 25 Mbps to 1 Gbps symmetrical fiber. All plans include unlimited data with no throttling.' },
  { q: 'Is there a setup fee?', a: 'Standard installation is free on all plans with a 12-month commitment. One-time installations are available at a nominal fee.' },
  { q: 'Do you provide a router?', a: 'Yes! All plans come with a free WiFi router. Our Home Plus and Home Max plans include mesh WiFi systems for whole-home coverage.' },
  { q: 'What areas do you cover?', a: 'We currently serve Eastleigh, Parklands, Westlands, Kilimani, South C, Hurlingham, Embakasi, and Kasarani in Nairobi. Expanding to Mombasa and Kisumu in Q3 2026.' },
  { q: 'How long does installation take?', a: 'Most installations are completed within 3–5 business days from order confirmation in covered areas.' },
]

export default function ForHomesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          tag="For Homes"
          title="Fast. Reliable. Unlimited."
          subtitle="High-speed fiber internet designed for modern households — streaming, remote work, gaming, smart homes, and more."
          imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&auto=format&fit=crop"
          imageAlt="Family using devices at home"
          ctaText="View Plans →"
          ctaHref="#plans"
          statValue="25–1000 Mbps"
          statLabel="Speed Range"
        />

        {/* Plans */}
        <div id="plans">
          <PlansPreview />
        </div>

        {/* Perfect For section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-16 text-center">
            <SectionTag>Perfect For</SectionTag>
            <AnimatedText
              text="Everything Your Household Needs"
              className="font-syne font-bold text-3xl lg:text-4xl text-navy text-center justify-center"
            />
            <StaggerChildren className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-12 justify-center justify-items-center">
              {useCases.map((uc) => (
                <FadeUp key={uc.label}>
                  <div className="flex flex-col items-center gap-3 group">
                    <LivelyIcon
                      icon={uc.icon}
                      variant="gold"
                      className="w-20 h-20 rounded-full border-accent-gold/20"
                      size={28}
                    />
                    <span className="text-xs font-bold uppercase tracking-wider text-navy mt-1">{uc.label}</span>
                  </div>
                </FadeUp>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Estate section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSide direction="left">
              <div className="relative rounded-2xl overflow-hidden min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&auto=format&fit=crop"
                  alt="Modern apartment complex"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </FadeInSide>
            <FadeInSide direction="right" delay={0.15}>
              <div>
                <SectionTag>Estates & Apartments</SectionTag>
                <AnimatedText
                  text="Built For Communities"
                  tag="h2"
                  className="font-syne font-bold text-3xl lg:text-4xl text-navy leading-tight"
                />
                <p className="text-gray-600 text-sm leading-relaxed mt-4">
                  Gani Fiber connects apartment developments, gated communities, mixed-use developments, and residential estates with dedicated fiber infrastructure designed for high-density living.
                </p>
                <ul className="mt-6 space-y-3">
                  {['Dedicated fiber to each unit', 'Community-wide mesh WiFi', 'Smart building integration', 'Estate management portal'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-accent-gold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSide>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-16">
            <div className="text-center">
              <SectionTag>FAQ</SectionTag>
              <AnimatedText
                text="Frequently Asked Questions"
                className="font-syne font-bold text-3xl lg:text-4xl text-navy text-center justify-center"
              />
            </div>
            <div className="mt-12 space-y-4">
              {faqs.map((faq, i) => (
                <FadeUp key={i} delay={i * 0.05}>
                  <details className="group card-premium p-5 cursor-pointer">
                    <summary className="font-syne font-bold text-navy text-sm flex items-center justify-between list-none">
                      {faq.q}
                      <span className="text-accent-gold group-open:rotate-45 transition-transform duration-200 text-lg">+</span>
                    </summary>
                    <p className="text-gray-600 text-sm leading-relaxed mt-3">{faq.a}</p>
                  </details>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
