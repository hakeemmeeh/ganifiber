'use client'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedText from '@/components/ui/AnimatedText'
import FadeUp from '@/components/ui/FadeUp'
import FadeInSide from '@/components/ui/FadeInSide'
import SectionTag from '@/components/ui/SectionTag'
import Button from '@/components/ui/Button'

interface Props {
  tag: string
  title: string
  subtitle: string
  imageSrc: string
  imageAlt: string
  ctaText?: string
  ctaHref?: string
  statValue?: string
  statLabel?: string
}

export default function PageHero({ tag, title, subtitle, imageSrc, imageAlt, ctaText, ctaHref, statValue, statLabel }: Props) {
  return (
    <section className="bg-gray-50 circuit-pattern py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <div className="text-gray-400 text-sm mb-6">
            <Link href="/" className="hover:text-electric transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span>{tag}</span>
          </div>
          <SectionTag>{tag}</SectionTag>
          <AnimatedText
            text={title}
            tag="h1"
            className="font-syne font-bold text-4xl lg:text-5xl text-navy leading-tight"
          />
          <FadeUp delay={0.2}>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg mt-4">{subtitle}</p>
          </FadeUp>
          {ctaText && ctaHref && (
            <FadeUp delay={0.35}>
              <div className="mt-6">
                <Button href={ctaHref}>{ctaText}</Button>
              </div>
            </FadeUp>
          )}
        </div>

        {/* Right */}
        <FadeInSide direction="right">
          <div className="relative rounded-2xl overflow-hidden min-h-[350px] lg:min-h-[420px] shadow-[0_30px_70px_rgba(26,95,240,0.15)]">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
            {statValue && statLabel && (
              <div className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg">
                <div className="font-syne font-bold text-2xl text-electric">{statValue}</div>
                <div className="text-gray-400 text-xs">{statLabel}</div>
              </div>
            )}
          </div>
        </FadeInSide>
      </div>

      <FadeUp>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="h-px bg-gray-100 mt-16" />
        </div>
      </FadeUp>
    </section>
  )
}
