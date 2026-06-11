'use client'
import AnimatedText from '@/components/ui/AnimatedText'
import SectionTag from '@/components/ui/SectionTag'
import StaggerChildren from '@/components/ui/StaggerChildren'
import CircleProgress from '@/components/ui/CircleProgress'

export default function CircleStatsSection() {
  return (
    <section className="bg-gray-50/50 py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
        <SectionTag>Performance</SectionTag>
        <AnimatedText
          text="Numbers That Speak"
          className="font-syne font-bold text-3xl lg:text-4xl text-navy text-center justify-center mt-2"
        />
        <p className="text-gray-500 text-sm mt-4 leading-relaxed max-w-xl mx-auto mb-16">
          Our carrier-grade fiber network is engineered to deliver peak telemetry reliability, ensuring your digital services remain active under any network loads.
        </p>
        
        <StaggerChildren className="flex flex-wrap justify-center gap-8 lg:gap-12 max-w-5xl mx-auto">
          <CircleProgress value={99.9} label="Core Network SLA" color="#2ECC5A" />
          <CircleProgress value={98} label="Customer Satisfaction" color="#1A5FF0" />
          <CircleProgress value={100} label="FTTH Capable" color="#00C2F0" />
          <CircleProgress value={80} label="Nairobi Zone Coverage" color="#1A5FF0" />
        </StaggerChildren>
      </div>
    </section>
  )
}
