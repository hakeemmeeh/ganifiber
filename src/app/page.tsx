import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import PartnerMarquee from '@/components/home/PartnerMarquee'
import StatsBand from '@/components/home/StatsBand'
import SolutionsGrid from '@/components/home/SolutionsGrid'
import AboutSplit from '@/components/home/AboutSplit'
import PlansPreview from '@/components/home/PlansPreview'
import HowItWorks from '@/components/home/HowItWorks'
import WhyGaniFiber from '@/components/home/WhyGaniFiber'
import CircleStatsSection from '@/components/home/CircleStatsSection'
import IndustriesStrip from '@/components/home/IndustriesStrip'
import PortalPreview from '@/components/home/PortalPreview'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CtaBanner from '@/components/home/CtaBanner'
import ContactSection from '@/components/home/ContactSection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PartnerMarquee />
        <StatsBand />
        <SolutionsGrid />
        <AboutSplit />
        <PlansPreview />
        <HowItWorks />
        <WhyGaniFiber />
        <CircleStatsSection />
        <IndustriesStrip />
        <PortalPreview />
        <TestimonialsSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
