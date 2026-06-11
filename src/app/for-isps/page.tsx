import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/shared/PageHero'
import CtaBanner from '@/components/home/CtaBanner'
import FadeUp from '@/components/ui/FadeUp'
import FadeInSide from '@/components/ui/FadeInSide'
import SectionTag from '@/components/ui/SectionTag'
import AnimatedText from '@/components/ui/AnimatedText'
import StaggerChildren from '@/components/ui/StaggerChildren'
import CircleProgress from '@/components/ui/CircleProgress'
import { IconBuilding, IconWorld, IconNetwork, IconArrowRight } from '@tabler/icons-react'
import LivelyIcon from '@/components/ui/LivelyIcon'

export const metadata: Metadata = {
  title: 'For ISPs — Gani Fiber Ltd',
  description: 'Partner with Gani Fiber to launch or expand ISP services quickly and efficiently — without building infrastructure from scratch.',
}

const services = [
  { icon: IconBuilding, title: 'Wholesale FTTH', desc: 'Open-access fiber infrastructure across covered estates and zones. Plug into our network and serve customers immediately.', tags: ['Open Access', 'Last Mile', 'PON'], image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop' },
  { icon: IconWorld, title: 'IP Transit', desc: 'Full BGP routing with IPv4 and IPv6 support. Carrier-grade interconnect at Kenya\'s major IXPs.', tags: ['BGP', 'IPv4/IPv6', 'IXP'], image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop' },
  { icon: IconNetwork, title: 'Metro Fiber', desc: 'Dedicated dark fiber and lit services across Nairobi metro. Point-to-point and ring topologies available.', tags: ['Dark Fiber', 'P2P', 'Metro Ring'], image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop' },
]

const steps = [
  { num: '01', title: 'Inquiry', desc: 'Reach out to discuss your coverage and capacity needs.' },
  { num: '02', title: 'Assessment', desc: 'We evaluate infrastructure availability and design a tailored solution.' },
  { num: '03', title: 'Agreement', desc: 'Commercial terms finalized with flexible SLA options.' },
  { num: '04', title: 'Deployment', desc: 'Network provisioning and testing completed.' },
  { num: '05', title: 'Launch', desc: 'Go live with full NOC support and monitoring.' },
]

const reasons = [
  { title: 'No CAPEX Required', desc: 'Leverage our existing infrastructure without building your own fiber network from scratch.' },
  { title: 'Rapid Market Entry', desc: 'Go from inquiry to serving customers in weeks, not months or years.' },
  { title: 'Carrier-Grade SLA', desc: '99.9% uptime guarantee backed by 24/7 NOC monitoring and rapid fault response.' },
  { title: 'Flexible Commercial Models', desc: 'Revenue share, wholesale pricing, or capacity-based models to suit your business.' },
]

export default function ForISPsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          tag="For ISPs"
          title="Build Faster. Expand Smarter."
          subtitle="Partner with Gani Fiber to launch or expand services quickly and efficiently — without building infrastructure from scratch."
          imageSrc="https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=900&auto=format&fit=crop"
          imageAlt="Server room with blue lighting"
          ctaText="Become a Partner →"
          ctaHref="/contact"
          statValue="99.9%"
          statLabel="SLA Uptime"
        />

        {/* Services */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-16">
            <div className="text-center">
              <SectionTag>Wholesale Services</SectionTag>
              <AnimatedText
                text="Infrastructure Built for ISPs"
                className="font-syne font-bold text-3xl lg:text-4xl text-navy text-center justify-center"
              />
            </div>
            <StaggerChildren className="grid md:grid-cols-3 gap-6 mt-12">
              {services.map((s) => (
                <FadeUp key={s.title}>
                  <div className="card-premium group cursor-pointer relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-gradient-to-r after:from-accent-gold after:to-amber-500 after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-500 flex flex-col h-full">
                    {/* Photo Header */}
                    <div className="relative h-44 lg:h-48 overflow-hidden rounded-t-[2rem]">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-luxury group-hover:scale-110"
                      />
                      {/* Subtle dark gradient to let the photo shine while providing contrast for the icon */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute bottom-[-18px] left-6 z-20">
                        <LivelyIcon
                          icon={s.icon}
                          variant="gold"
                          className="w-12 h-12 border-2 border-white shadow-luxe"
                          size={22}
                        />
                      </div>
                    </div>

                    <div className="relative z-10 p-6 pt-8 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="h-px w-4 bg-accent-gold" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-accent-gold">WHOLESALE</span>
                      </div>
                      <h3 className="font-syne font-bold text-xl text-navy mb-3 transition-colors duration-300 group-hover:text-accent-gold">{s.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{s.desc}</p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {s.tags.map((tag) => (
                          <span key={tag} className="bg-accent-gold/5 text-accent-gold text-xs rounded-md px-2.5 py-1 font-semibold group-hover:bg-accent-gold/10 transition-colors">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Partnership timeline */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-16">
            <div className="text-center">
              <SectionTag>Process</SectionTag>
              <AnimatedText
                text="Partnership in 5 Simple Steps"
                className="font-syne font-bold text-3xl lg:text-4xl text-navy text-center justify-center"
              />
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
              {steps.map((step, i) => (
                <FadeUp key={step.num} delay={i * 0.1}>
                  <div className="text-center relative group">
                    {/* Dashed connector for desktop */}
                    {i !== steps.length - 1 && (
                      <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-[2px] border-t-2 border-dashed border-gray-200 -z-10 group-hover:border-electric transition-colors" />
                    )}
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-100 group-hover:border-electric text-navy group-hover:text-electric font-syne font-bold text-lg flex items-center justify-center mx-auto shadow-sm transition-all duration-300">
                      {step.num}
                    </div>
                    <h4 className="font-syne font-bold text-navy text-sm mt-4">{step.title}</h4>
                    <p className="text-gray-600 text-xs mt-2 leading-relaxed">{step.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Why ISPs Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-16">
            <div className="text-center">
              <SectionTag>Why Partner</SectionTag>
              <AnimatedText
                text="Why ISPs Choose Gani Fiber"
                className="font-syne font-bold text-3xl lg:text-4xl text-navy text-center justify-center"
              />
            </div>
            <div className="mt-12 space-y-6">
              {reasons.map((r, i) => (
                <FadeInSide key={r.title} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className="border border-gray-100 rounded-xl p-6 flex items-start gap-4 hover:border-electric transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center shrink-0 mt-0.5">
                      <IconArrowRight size={16} className="text-electric" />
                    </div>
                    <div>
                      <h4 className="font-syne font-bold text-navy mb-1">{r.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </FadeInSide>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-16">
            <StaggerChildren className="flex flex-wrap justify-center gap-12 lg:gap-16">
              <CircleProgress value={99.9} label="Network Uptime" color="#2ECC5A" />
              <CircleProgress value={80} label="Coverage Zones" color="#1A5FF0" />
              <CircleProgress value={100} label="BGP Capable" color="#00C2F0" />
            </StaggerChildren>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
