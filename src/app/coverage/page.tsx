import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PageHero from '@/components/shared/PageHero'
import CoverageSection from '@/components/home/CoverageSection'
import CtaBanner from '@/components/home/CtaBanner'
import ContactSection from '@/components/home/ContactSection'

export const metadata: Metadata = {
  title: 'Coverage Map — Gani Fiber Ltd',
  description: 'View Gani Fiber coverage areas across Nairobi and planned expansion zones in Mombasa, Kisumu, Eldoret, and Garissa.',
}

export default function CoveragePage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          tag="Coverage"
          title="Current & Planned Service Areas"
          subtitle="Check our live coverage zones across Nairobi and upcoming expansion areas across Kenya."
          imageSrc="/coverage_hero.png"
          imageAlt="High-tech interactive 3D network coverage map"
          statValue="8+"
          statLabel="Active Zones"
        />
        <CoverageSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
