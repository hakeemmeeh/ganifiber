'use client'
import AnimatedText from '@/components/ui/AnimatedText'
import SectionTag from '@/components/ui/SectionTag'
import FadeUp from '@/components/ui/FadeUp'
import TestimonialSlider from '@/components/ui/TestimonialSlider'

const testimonials = [
  {
    quote: "Gani Fiber's infrastructure has allowed us to expand our ISP services across Nairobi without the capital expenditure of building our own network. Their NOC team is responsive and professional.",
    name: 'James Mwangi',
    role: 'CEO',
    company: 'NetConnect Kenya',
    rating: 5,
  },
  {
    quote: 'The fiber rollout to our estate was completed in under three weeks. Residents are thrilled with the speeds and reliability. Gani Fiber truly delivers on their promises.',
    name: 'Sarah Ochieng',
    role: 'Property Manager',
    company: 'Riverside Gardens Estate',
    rating: 5,
  },
  {
    quote: "As a tech startup, reliable internet is non-negotiable. Gani Fiber's dedicated business line gives us symmetric speeds that keep our team productive and our services running.",
    name: 'Ahmed Hassan',
    role: 'CTO',
    company: 'PayStack East Africa',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 text-center">
        <SectionTag>Testimonials</SectionTag>
        <AnimatedText
          text="What Our Partners Say"
          className="font-syne font-bold text-3xl lg:text-4xl text-navy text-center justify-center"
        />
        <FadeUp className="mt-12">
          <TestimonialSlider testimonials={testimonials} />
        </FadeUp>
      </div>
    </section>
  )
}
