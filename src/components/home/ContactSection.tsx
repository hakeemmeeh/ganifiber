'use client'
import { motion } from 'framer-motion'
import { IconMail, IconPhone, IconMapPin } from '@tabler/icons-react'
import LivelyIcon from '@/components/ui/LivelyIcon'
import AnimatedText from '@/components/ui/AnimatedText'
import FadeInSide from '@/components/ui/FadeInSide'
import CircleProgress from '@/components/ui/CircleProgress'

const contacts = [
  { icon: IconMail, label: 'Sales', value: 'sales@ganifiber.com', href: 'mailto:sales@ganifiber.com', variant: 'electric' as const },
  { icon: IconMail, label: 'Partnerships', value: 'partnerships@ganifiber.com', href: 'mailto:partnerships@ganifiber.com', variant: 'green' as const },
  { icon: IconPhone, label: 'Phone', value: '+254 745 372 776', href: 'tel:+254745372776', variant: 'cyan' as const },
  { icon: IconMapPin, label: 'Office', value: 'Valley View Park, Parklands Block B, 7th Floor, Nairobi', variant: 'gold' as const },
]

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12">
        {/* Left — Contact Info */}
        <FadeInSide direction="left">
          <div>
            <AnimatedText
              text="Get in Touch"
              tag="h3"
              className="font-syne font-bold text-2xl text-navy"
            />
            <div className="mt-8 space-y-5">
              {contacts.map((c, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <LivelyIcon
                    icon={c.icon}
                    variant={c.variant}
                    className="w-10 h-10 rounded-full shrink-0"
                    size={18}
                  />
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="text-navy text-sm font-medium hover:text-electric transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <span className="text-navy text-sm font-medium">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <CircleProgress value={98} label="Customer Satisfaction" color="#1A5FF0" />
            </div>
          </div>
        </FadeInSide>

        {/* Right — Form */}
        <FadeInSide direction="right">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-electric focus:ring-2 focus:ring-electric/15 outline-none transition w-full"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-electric focus:ring-2 focus:ring-electric/15 outline-none transition w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Company / Organization"
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-electric focus:ring-2 focus:ring-electric/15 outline-none transition w-full"
            />
            <select
              defaultValue=""
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-electric focus:ring-2 focus:ring-electric/15 outline-none transition w-full text-gray-400"
            >
              <option value="" disabled>Select Service</option>
              <option>Home Fiber</option>
              <option>ISP Partnership</option>
              <option>Business</option>
              <option>Developer</option>
              <option>IP Transit</option>
            </select>
            <textarea
              rows={4}
              placeholder="Your Message"
              className="border border-gray-200 rounded-lg px-4 py-3 text-sm focus:border-electric focus:ring-2 focus:ring-electric/15 outline-none transition w-full resize-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-fiber text-navy font-syne font-bold py-4 rounded-lg hover:bg-fiber-dark transition-colors cursor-pointer"
            >
              Send Enquiry →
            </motion.button>
          </form>
        </FadeInSide>
      </div>
    </section>
  )
}
