'use client'
import { IconRouter, IconBuildingCommunity, IconHome, IconBriefcase, IconSchool, IconStethoscope, IconBuildingBank, IconBed, IconHeart, IconDeviceLaptop } from '@tabler/icons-react'
import AnimatedText from '@/components/ui/AnimatedText'
import SectionTag from '@/components/ui/SectionTag'
import StaggerChildren from '@/components/ui/StaggerChildren'
import FlipCard from '@/components/ui/FlipCard'

const industries = [
  { icon: <IconRouter size={28} />, title: 'ISPs', back: 'Infrastructure and transit for service providers of all sizes.' },
  { icon: <IconBuildingCommunity size={28} />, title: 'Property Developers', back: 'Fiber-ready developments from planning to handover.' },
  { icon: <IconHome size={28} />, title: 'Residential Estates', back: 'Community-wide broadband for apartments and gated estates.' },
  { icon: <IconBriefcase size={28} />, title: 'Businesses', back: 'Dedicated fiber connectivity with guaranteed SLA.' },
  { icon: <IconSchool size={28} />, title: 'Schools', back: 'High-speed internet enabling digital learning.' },
  { icon: <IconStethoscope size={28} />, title: 'Healthcare', back: 'Reliable connectivity for telemedicine and records.' },
  { icon: <IconBuildingBank size={28} />, title: 'Government', back: 'Secure infrastructure for public sector needs.' },
  { icon: <IconBed size={28} />, title: 'Hospitality', back: 'Guest WiFi and management systems connectivity.' },
  { icon: <IconHeart size={28} />, title: 'NGOs', back: 'Affordable broadband for non-profit operations.' },
  { icon: <IconDeviceLaptop size={28} />, title: 'Tech Companies', back: 'Low-latency fiber for startups and tech hubs.' },
]

export default function IndustriesStrip() {
  return (
    <section className="bg-[#B8DEFF] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
        <SectionTag>Industries</SectionTag>
        <AnimatedText
          text="Sectors We Power"
          className="font-syne font-bold text-3xl lg:text-4xl text-navy text-center justify-center"
        />
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto mt-12">
          {industries.map((ind) => (
            <FlipCard
              key={ind.title}
              frontIcon={ind.icon}
              frontTitle={ind.title}
              backContent={ind.back}
              backColor="#1A5FF0"
            />
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
