'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/ui/AnimatedText'
import SectionTag from '@/components/ui/SectionTag'
import StaggerChildren from '@/components/ui/StaggerChildren'
import PricingCard from '@/components/ui/PricingCard'
import FadeUp from '@/components/ui/FadeUp'

export default function PlansPreview() {
  const [period, setPeriod] = useState<'month' | 'year'>('month')

  return (
    <section id="pricing-preview" className="overlap-panel-gray py-24 pb-20 relative scroll-mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center">
          <SectionTag>Pricing</SectionTag>
          <AnimatedText
            text="Simple Plans. Symmetrical Speed."
            className="font-syne font-bold text-3xl lg:text-4xl text-navy text-center justify-center"
          />
          
          {/* Custom Billing Cycle Toggle */}
          <div className="flex justify-center items-center gap-3 mt-8">
            <span className={`text-sm font-semibold transition-colors duration-200 ${period === 'month' ? 'text-navy' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setPeriod(period === 'month' ? 'year' : 'month')}
              className={`w-14 h-8 rounded-full p-1 cursor-pointer flex items-center transition-colors duration-300 ${period === 'year' ? 'bg-electric' : 'bg-gray-250'}`}
              aria-label="Toggle billing period"
            >
              <motion.div
                layout
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className={`w-6 h-6 rounded-full shadow-sm ${period === 'year' ? 'bg-white' : 'bg-white'}`}
                style={{ marginLeft: period === 'month' ? '0px' : '24px' }}
              />
            </button>
            <span className={`text-sm font-semibold transition-colors duration-200 flex items-center gap-1.5 ${period === 'year' ? 'text-navy' : 'text-gray-400'}`}>
              Annual
              <span className="bg-fiber/20 text-fiber-dark text-3xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                2 Months Free
              </span>
            </span>
          </div>
        </div>

        <StaggerChildren slow className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
          <PricingCard
            name="Home Starter"
            speed="25 Mbps"
            price={period === 'month' ? 'KES 2,500' : 'KES 24,000'}
            period={period}
            downloadSpeed="25 Mbps"
            uploadSpeed="25 Mbps"
            speedPercentage={25}
            features={[
              'Unlimited data quota',
              'Free basic router installation',
              'Business hours phone/email support',
              'Recommended for 1-3 devices priority',
            ]}
            cta="Get Started"
          />
          <PricingCard
            name="Home Plus"
            speed="100 Mbps"
            price={period === 'month' ? 'KES 4,500' : 'KES 43,200'}
            period={period}
            downloadSpeed="100 Mbps"
            uploadSpeed="100 Mbps"
            speedPercentage={60}
            highlighted
            features={[
              'Unlimited high-speed data',
              'Free fiber terminal + mesh WiFi',
              '24/7 priority customer support',
              'Recommended for 5-10 devices',
              'Static IPv4 address available',
            ]}
            cta="Get Started"
          />
          <PricingCard
            name="Home Max"
            speed="1 Gbps"
            price={period === 'month' ? 'KES 8,500' : 'KES 81,600'}
            period={period}
            downloadSpeed="1000 Mbps"
            uploadSpeed="1000 Mbps"
            speedPercentage={100}
            features={[
              'Maximum available line rate',
              'Premium dual-band mesh WiFi system',
              'Dedicated account manager',
              'Unlimited priority device queueing',
              'Static IPv4 address included',
            ]}
            cta="Get Started"
          />
        </StaggerChildren>

        <FadeUp>
          <p className="text-center mt-12 text-gray-600 text-sm">
            Business and enterprise plans available —{' '}
            <Link href="/business" className="text-electric font-medium group inline-flex items-center gap-1">
              Contact us
              <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
            </Link>
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
