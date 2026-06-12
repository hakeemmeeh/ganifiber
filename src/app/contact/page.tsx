import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/shared/PageHero'
import ContactSection from '@/components/home/ContactSection'
import FadeUp from '@/components/ui/FadeUp'
import SectionTag from '@/components/ui/SectionTag'
import AnimatedText from '@/components/ui/AnimatedText'
import { IconMail, IconPhone, IconHeadset } from '@tabler/icons-react'
import LivelyIcon from '@/components/ui/LivelyIcon'

export const metadata: Metadata = {
  title: 'Contact — Gani Fiber Ltd',
  description: "Get in touch with Gani Fiber for sales, partnerships, or technical support. We're here to help.",
}

const contactTypes = [
  { icon: IconMail, title: 'Sales Enquiries', desc: 'For new connections, packages, and pricing information.', email: 'sales@ganifiber.com', variant: 'electric' as const },
  { icon: IconPhone, title: 'Partnerships', desc: 'For ISP partnerships, wholesale infrastructure, and developer collaborations.', email: 'partnerships@ganifiber.com', variant: 'green' as const },
  { icon: IconHeadset, title: 'Technical Support', desc: 'For existing customers — fault reporting, speed issues, and account support.', email: 'support@ganifiber.com', variant: 'cyan' as const },
]

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          tag="Contact"
          title="Let's Build Better Connectivity Together"
          subtitle="Whether you need internet for your home, want to partner as an ISP, or have a development project — we'd love to hear from you."
          imageSrc="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=900&auto=format&fit=crop"
          imageAlt="Customer support team"
        />

        {/* Contact types */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-16">
            <div className="text-center">
              <SectionTag>How Can We Help?</SectionTag>
              <AnimatedText
                text="Choose Your Department"
                className="font-syne font-bold text-3xl lg:text-4xl text-navy text-center justify-center"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {contactTypes.map((ct) => (
                <FadeUp key={ct.title}>
                  <div className="card-premium p-7 text-center group h-full">
                    <LivelyIcon
                      icon={ct.icon}
                      variant={ct.variant}
                      className="mx-auto mb-4 w-14 h-14"
                      size={26}
                    />
                    <h3 className="font-syne font-bold text-lg text-navy mb-2 transition-colors duration-300 group-hover:text-cyan">{ct.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{ct.desc}</p>
                    <a href={`mailto:${ct.email}`} className="text-electric text-sm font-medium hover:underline">
                      {ct.email}
                    </a>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />

        {/* Address & Info */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6 lg:px-16 text-center">
            <SectionTag>Our Office</SectionTag>
            <AnimatedText
              text="Visit Us in Nairobi"
              className="font-syne font-bold text-3xl lg:text-4xl text-navy text-center justify-center"
            />
            <FadeUp>
              <div className="mt-8 text-gray-600 text-sm leading-relaxed space-y-1">
                <p className="font-semibold text-navy text-base">Gani Fiber Ltd</p>
                <p>Valley View Park, Parklands</p>
                <p>Block B, 7th Floor</p>
                <p>Nairobi, Kenya</p>
                <p className="mt-3">
                  <a href="tel:+254745372776" className="text-electric font-medium">+254 745 372 776</a>
                </p>
                <p className="mt-4 text-xs text-gray-400">A Rodol Homes Company</p>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
