'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { scaleIn, slideDown } from '@/lib/animations'
import AnimatedText from '@/components/ui/AnimatedText'
import FadeUp from '@/components/ui/FadeUp'
import FadeInSide from '@/components/ui/FadeInSide'
import Button from '@/components/ui/Button'
import ParticleNetwork from '@/components/shared/ParticleNetwork'
import { IconSearch, IconMapPin, IconCheck, IconClock, IconHelpCircle } from '@tabler/icons-react'

export default function Hero() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState<{
    status: 'idle' | 'checking' | 'covered' | 'coming-soon' | 'not-covered'
    location: string
  }>({ status: 'idle', location: '' })

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    setResult({ status: 'checking', location: query })
    
    setTimeout(() => {
      const q = query.toLowerCase().trim()
      const coveredAreas = ['kilimani', 'westlands', 'kileleshwa', 'south c', 'runda', 'karen', 'nairobi cbd', 'lavington', 'parklands', 'muthaiga', 'hurlingham', 'mombasa road', 'ngara']
      const comingSoonAreas = ['syokimau', 'langata', 'kasarani', 'rongai', 'ngong', 'imara daima', 'embakasi', 'roysambu']
      
      const isCovered = coveredAreas.some(area => q.includes(area))
      const isComingSoon = comingSoonAreas.some(area => q.includes(area))
      
      if (isCovered) {
        setResult({ status: 'covered', location: query })
      } else if (isComingSoon) {
        setResult({ status: 'coming-soon', location: query })
      } else {
        setResult({ status: 'not-covered', location: query })
      }
    }, 800)
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle radial glow layers */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-cyan/5 blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-electric/4 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-cyan/3 blur-[110px] pointer-events-none" />
      
      {/* Elementor-style decorative background elements */}
      <div className="absolute top-24 left-12 w-64 h-64 bg-dot-matrix opacity-25 pointer-events-none animate-float-slow" />
      <div className="absolute bottom-24 right-12 w-80 h-80 bg-dot-matrix opacity-20 pointer-events-none animate-float-slow [animation-delay:2s]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center py-24 lg:py-0 w-full">
        {/* Left column */}
        <div className="pt-8 lg:pt-0">
          {/* Eyebrow */}
          <motion.p
            variants={slideDown}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-cyan text-xs tracking-[0.18em] uppercase font-bold"
          >
            Kenya&apos;s Fiber Infrastructure Company
          </motion.p>

          {/* Headline */}
          <div className="mt-4">
            <AnimatedText
              text="Infrastructure First. Connectivity Always."
              tag="h1"
              highlightWords={['First.', 'Always.']}
              className="font-syne font-bold text-5xl lg:text-7xl text-navy leading-[1.05]"
              delay={0.3}
            />
          </div>

          {/* Subtitle */}
          <FadeUp delay={0.5}>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg mt-6">
              Wholesale FTTH infrastructure, IP transit, and home broadband —
              built for ISPs, estates, and businesses across Kenya.
            </p>
          </FadeUp>

          {/* Interactive Coverage Search Widget */}
          <FadeUp delay={0.65}>
            <div className="mt-8 relative bg-white/60 backdrop-blur-2xl border border-white/80 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <h3 className="font-syne font-bold text-navy text-xs tracking-wider uppercase mb-3.5 flex items-center gap-1.5 opacity-85">
                  <IconSearch size={14} className="text-cyan drop-shadow-sm" /> Check Coverage In Your Area
                </h3>
              <form onSubmit={handleCheck} className="flex gap-2.5">
                <div className="relative flex-grow">
                  <IconMapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan/60" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter neighborhood (e.g. Kilimani, Syokimau)"
                    className="w-full bg-white border border-cyan/15 rounded-full pl-11 pr-5 py-3.5 text-sm text-navy placeholder-gray-400 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-accent-gold/10 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={result.status === 'checking'}
                  className="bg-gradient-to-r from-cyan to-electric hover:from-amber-500 hover:to-accent-gold text-navy font-syne font-extrabold text-xs tracking-widest uppercase px-7 py-3.5 rounded-full transition-all duration-500 shadow-md shadow-cyan/10 hover:shadow-lg hover:shadow-cyan/25 cursor-pointer disabled:opacity-70 flex items-center gap-1.5"
                >
                  {result.status === 'checking' ? (
                    <span className="w-4 h-4 border-2 border-navy border-t-transparent rounded-full animate-spin" />
                  ) : (
                    'Check'
                  )}
                </button>
              </form>
              
              {/* Coverage Results */}
              {result.status !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                  className="overflow-hidden border-t border-cyan/10 pt-4"
                >
                  {result.status === 'covered' && (
                    <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 flex items-start gap-3">
                      <div className="bg-emerald-500 text-white rounded-full p-1 mt-0.5">
                        <IconCheck size={12} />
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm text-emerald-800 font-bold">
                          ⚡ Gani Fiber is Live in {result.location}!
                        </p>
                        <p className="text-xs text-emerald-600 mt-1 leading-relaxed">
                          Up to 1 Gbps symmetrical speeds available for your building.
                        </p>
                        <button
                          onClick={() => {
                            const el = document.getElementById('plans');
                            el?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="text-xs font-bold text-cyan hover:text-electric mt-2.5 flex items-center gap-0.5 cursor-pointer transition-colors"
                        >
                          View Plans & Get Started →
                        </button>
                      </div>
                    </div>
                  )}

                  {result.status === 'coming-soon' && (
                    <div className="bg-amber-50/70 border border-amber-100 rounded-2xl p-4 flex items-start gap-3">
                      <div className="bg-electric text-white rounded-full p-1 mt-0.5">
                        <IconClock size={12} />
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm text-amber-800 font-bold">
                          🛠️ Coming soon to {result.location}!
                        </p>
                        <p className="text-xs text-amber-600 mt-1 leading-relaxed">
                          Our engineering teams are laying trunk lines. Pre-register below to get connected first.
                        </p>
                        <form onSubmit={(e) => { e.preventDefault(); alert('Pre-registered successfully!'); }} className="flex gap-2 mt-3">
                          <input
                            type="email"
                            required
                            placeholder="Your email address"
                            className="bg-white border border-amber-200 rounded-full px-4 py-2 text-xs text-navy placeholder-gray-400 focus:outline-none focus:border-amber-500 flex-grow"
                          />
                          <button type="submit" className="bg-cyan hover:bg-electric text-navy text-3xs font-extrabold tracking-wider uppercase px-4 py-2 rounded-full transition-colors cursor-pointer">
                            Notify Me
                          </button>
                        </form>
                      </div>
                    </div>
                  )}

                  {result.status === 'not-covered' && (
                    <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 flex items-start gap-3">
                      <div className="bg-blue-500 text-white rounded-full p-1 mt-0.5">
                        <IconHelpCircle size={12} />
                      </div>
                      <div className="flex-grow">
                        <p className="text-sm text-blue-800 font-bold">
                          🔍 Expanding to {result.location} soon.
                        </p>
                        <p className="text-xs text-blue-600 mt-1 leading-relaxed">
                          We don&apos;t have active fibers in this neighborhood yet. Request connectivity for your estate.
                        </p>
                        <form onSubmit={(e) => { e.preventDefault(); alert('Interest registered! Thank you.'); }} className="flex gap-2 mt-3">
                          <input
                            type="email"
                            required
                            placeholder="Your email address"
                            className="bg-white border border-blue-200 rounded-full px-4 py-2 text-xs text-navy placeholder-gray-400 focus:outline-none focus:border-blue-500 flex-grow"
                          />
                          <button type="submit" className="bg-navy hover:bg-navy-mid text-white text-3xs font-extrabold tracking-wider uppercase px-4 py-2 rounded-full transition-colors cursor-pointer">
                            Request Fiber
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <Button variant="outline" href="/for-isps">ISP Partnerships ↗</Button>
            </div>
          </FadeUp>
        </div>

        {/* Right column — High Tech Interactive Network Core */}
        <FadeInSide direction="right" delay={0.4}>
          <div className="relative min-h-[420px] lg:min-h-[540px] w-full rounded-[2.5rem] bg-navy border border-cyan/15 overflow-hidden flex items-center justify-center p-6 shadow-luxe shadow-navy/25">
            {/* Background glowing gradients inside map */}
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-electric/25 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan/20 rounded-full blur-[80px] pointer-events-none" />
            
            {/* Circuit grid background */}
            <div className="circuit-pattern opacity-[0.04] absolute inset-0 pointer-events-none" />

            {/* Interactive SVG Network Core Map */}
            <svg viewBox="0 0 400 400" className="w-full h-full max-w-[340px] relative z-10 overflow-visible">
              {/* Fiber Route 1 (Electric Blue) */}
              <path d="M 50,150 L 120,150 L 180,90 L 280,90 L 350,160" stroke="rgba(255,255,255,0.05)" strokeWidth="3" fill="none" />
              <motion.path
                d="M 50,150 L 120,150 L 180,90 L 280,90 L 350,160"
                stroke="#1A5FF0"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                initial={{ strokeDasharray: '30, 150', strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -180 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />

              {/* Fiber Route 2 (Cyan) */}
              <path d="M 50,250 L 150,250 L 220,320 L 300,320 L 350,240" stroke="rgba(255,255,255,0.05)" strokeWidth="3" fill="none" />
              <motion.path
                d="M 50,250 L 150,250 L 220,320 L 300,320 L 350,240"
                stroke="#00C2F0"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
                initial={{ strokeDasharray: '40, 120', strokeDashoffset: 60 }}
                animate={{ strokeDashoffset: -160 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', delay: 1 }}
              />

              {/* Main Core Connection (Fiber Green) */}
              <path d="M 120,150 L 220,220 L 300,150" stroke="rgba(255,255,255,0.05)" strokeWidth="4" fill="none" />
              <motion.path
                d="M 120,150 L 220,220 L 300,150"
                stroke="#2ECC5A"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
                initial={{ strokeDasharray: '25, 200', strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -225 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />

              {/* Intersecting Node 1 */}
              <g className="cursor-pointer group">
                <circle cx="120" cy="150" r="14" fill="#1A5FF0" opacity="0.15" />
                <circle cx="120" cy="150" r="6" fill="#1A5FF0" className="transition-transform group-hover:scale-125" />
                <circle cx="120" cy="150" r="3" fill="#ffffff" />
              </g>

              {/* Intersecting Node 2 */}
              <g className="cursor-pointer group">
                <circle cx="220" cy="220" r="18" fill="#2ECC5A" opacity="0.15" />
                <circle cx="220" cy="220" r="7" fill="#2ECC5A" className="transition-transform group-hover:scale-125" />
                <circle cx="220" cy="220" r="3.5" fill="#ffffff" />
              </g>

              {/* Intersecting Node 3 */}
              <g className="cursor-pointer group">
                <circle cx="300" cy="150" r="14" fill="#00C2F0" opacity="0.15" />
                <circle cx="300" cy="150" r="6" fill="#00C2F0" className="transition-transform group-hover:scale-125" />
                <circle cx="300" cy="150" r="3" fill="#ffffff" />
              </g>
            </svg>

            {/* Floating Glassmorphic Badge 1 — Core Uptime with floating animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -8, 0]
              }}
              transition={{
                delay: 0.8,
                y: {
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-6 left-6 bg-white/8 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 shadow-lg flex items-center gap-3 max-w-[180px] pointer-events-auto"
            >
              <span className="w-2 h-2 rounded-full bg-fiber animate-pulse-slow shrink-0" />
              <div>
                <div className="font-syne font-bold text-white text-xs leading-tight">99.99% Core SLA</div>
                <div className="text-gray-400 text-3xs mt-0.5 leading-none font-medium">BGP IPv4/IPv6 transit</div>
              </div>
            </motion.div>

            {/* Floating Glassmorphic Badge 2 — Transit Rates with floating animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, 8, 0]
              }}
              transition={{
                delay: 1.0,
                y: {
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-6 right-6 bg-white/8 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 shadow-lg flex items-center gap-3 max-w-[180px] pointer-events-auto"
            >
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse-slow shrink-0" />
              <div>
                <div className="font-syne font-bold text-white text-xs leading-tight">100 Gbps Core</div>
                <div className="text-gray-400 text-3xs mt-0.5 leading-none font-medium">Redundant ring backhaul</div>
              </div>
            </motion.div>
          </div>
        </FadeInSide>
      </div>
    </section>
  )
}
