'use client'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import SectionTag from '@/components/ui/SectionTag'
import AnimatedText from '@/components/ui/AnimatedText'
import { IconMapPin, IconClipboardList, IconRouter, IconWifi } from '@tabler/icons-react'
import LivelyIcon from '@/components/ui/LivelyIcon'

const steps = [
  {
    num: '01',
    title: 'Check Coverage',
    desc: 'Use our interactive coverage widget above or view our maps to check if Gani Fiber is live in your estate.',
    icon: IconMapPin,
    variant: 'electric' as const
  },
  {
    num: '02',
    title: 'Select Your Plan',
    desc: 'Choose from our high-speed packages (25 Mbps, 100 Mbps, or 1 Gbps) with flexible monthly or annual billing.',
    icon: IconClipboardList,
    variant: 'cyan' as const
  },
  {
    num: '03',
    title: 'Professional Setup',
    desc: 'Our dedicated technicians will run a fiber terminal directly into your home and set up your premium mesh WiFi.',
    icon: IconRouter,
    variant: 'green' as const
  },
  {
    num: '04',
    title: 'Experience the Speed',
    desc: 'Connect your devices instantly and enjoy unlimited, symmetrical fiber internet with guaranteed 99.9% uptime.',
    icon: IconWifi,
    variant: 'purple' as const
  }
]

export default function HowItWorks() {
  return (
    <section className="overlap-panel-white py-24 pb-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-electric/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionTag>Process</SectionTag>
          <AnimatedText
            text="How to Get Connected"
            className="font-syne font-bold text-3xl lg:text-4xl text-navy justify-center mt-2"
          />
          <p className="text-gray-550 text-sm mt-4 leading-relaxed">
            We&apos;ve streamlined our onboarding so you can transition to ultra-fast fiber internet with minimal downtime and zero hassle.
          </p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-4 gap-8 relative"
        >
          {/* Connecting dashed line (desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-gray-100 -z-10" />

          {steps.map((step, idx) => {
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex flex-col items-center text-center group relative bg-white border border-gray-50 rounded-2xl p-6 hover:shadow-[0_20px_45px_rgba(26,95,240,0.06)] hover:border-gray-100 transition-all duration-300"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-3.5 left-6 bg-gradient-to-r from-navy to-navy-mid text-white font-syne font-bold text-xs px-3 py-1 rounded-full shadow-md tracking-wider">
                  STEP {step.num}
                </div>

                {/* Step Icon */}
                <LivelyIcon
                  icon={step.icon}
                  variant={step.variant}
                  className="mb-5 w-14 h-14"
                  size={26}
                />

                {/* Step Content */}
                <h3 className="font-syne font-bold text-lg text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-550 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
