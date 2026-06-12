'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedText from '@/components/ui/AnimatedText'
import SectionTag from '@/components/ui/SectionTag'
import FadeInSide from '@/components/ui/FadeInSide'
import dynamic from 'next/dynamic'
import { IconSearch, IconCheck, IconClock, IconHelpCircle, IconWifi, IconServer, IconActivity } from '@tabler/icons-react'
import LivelyIcon from '@/components/ui/LivelyIcon'

// Dynamically import Leaflet map to disable SSR
const KenyaMap = dynamic(() => import('@/components/shared/KenyaMap'), { 
  ssr: false,
  loading: () => <div className="w-full aspect-[4/5] lg:aspect-square max-w-md mx-auto bg-navy border border-navy-mid/60 rounded-[2rem] p-2 shadow-xl animate-pulse" />
})

const liveZones = [
  { name: 'Eastleigh', speed: '10G Ring', latency: '2ms' },
  { name: 'Parklands', speed: '1G Ready', latency: '3ms' },
  { name: 'Westlands', speed: '10G Ring', latency: '1ms' },
  { name: 'Kilimani', speed: '1G Ready', latency: '3ms' },
  { name: 'South C', speed: '1G Ready', latency: '4ms' },
  { name: 'Hurlingham', speed: '10G Ring', latency: '2ms' },
  { name: 'Embakasi', speed: '1G Ready', latency: '4ms' },
  { name: 'Kasarani', speed: '1G Ready', latency: '4ms' },
]
const expansionZones = [
  { name: 'Mombasa', quarter: "Q3 '26", desc: 'Subsea landing interconnect.', speed: 'Backhaul Trunk' },
  { name: 'Kisumu', quarter: "Q3 '26", desc: 'Western Metro fiber ring.', speed: 'Trunk Laying' },
  { name: 'Eldoret', quarter: "Q4 '26", desc: 'Rift Valley regional trunk.', speed: 'Survey Phase' },
  { name: 'Garissa', quarter: "Q4 '26", desc: 'Eastern Gateway fiber path.', speed: 'Survey Phase' },
]

export default function CoverageSection() {
  const [activeTab, setActiveTab] = useState<'nairobi' | 'regional'>('nairobi')
  const [hoveredZone, setHoveredZone] = useState<string | null>(null)
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
      const coveredAreas = ['kilimani', 'westlands', 'kileleshwa', 'south c', 'runda', 'karen', 'nairobi cbd', 'lavington', 'parklands', 'muthaiga', 'hurlingham', 'mombasa road', 'ngara', 'eastleigh', 'embakasi', 'kasarani']
      const comingSoonAreas = ['syokimau', 'langata', 'kasarani', 'rongai', 'ngong', 'imara daima', 'embakasi', 'roysambu', 'mombasa', 'kisumu', 'eldoret', 'garissa']
      
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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background nodes indicator */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-electric/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        {/* Left — Zone list & Interactive Controls */}
        <FadeInSide direction="left">
          <div>
            <SectionTag>Coverage Network</SectionTag>
            <AnimatedText
              text="Service Zones & Core Infrastructure"
              className="font-syne font-bold text-3xl lg:text-4xl text-navy leading-tight mt-2"
            />
            
            <p className="text-gray-550 text-sm mt-3 mb-8 leading-relaxed">
              We operate carrier-grade fiber rings interconnecting key economic zones in Nairobi, with high-capacity regional backhaul expansion currently underway.
            </p>

            {/* Premium Tab Selector */}
            <div className="flex gap-1.5 p-1 bg-gray-50 border border-gray-100 rounded-full max-w-sm mb-6">
              <button
                onClick={() => setActiveTab('nairobi')}
                className={`flex-grow py-2.5 text-3xs font-bold uppercase tracking-widest rounded-full transition-all cursor-pointer ${
                  activeTab === 'nairobi'
                    ? 'bg-navy text-white shadow-md shadow-navy/15'
                    : 'text-gray-500 hover:text-navy'
                }`}
              >
                Nairobi Core
              </button>
              <button
                onClick={() => setActiveTab('regional')}
                className={`flex-grow py-2.5 text-3xs font-bold uppercase tracking-widest rounded-full transition-all cursor-pointer ${
                  activeTab === 'regional'
                    ? 'bg-navy text-white shadow-md shadow-navy/15'
                    : 'text-gray-500 hover:text-navy'
                }`}
              >
                Regional Hubs
              </button>
            </div>

            {/* List Panels (Stateful) */}
            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                {activeTab === 'nairobi' ? (
                  <motion.div
                    key="nairobi-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-2 gap-3"
                  >
                    {liveZones.map((zone) => {
                      const isHovered = hoveredZone === zone.name
                      return (
                        <motion.div
                          key={zone.name}
                          onMouseEnter={() => setHoveredZone(zone.name)}
                          onMouseLeave={() => setHoveredZone(null)}
                          whileHover={{ y: -2 }}
                          className={`border rounded-xl p-3 flex flex-col justify-between border-l-4 transition-all duration-200 cursor-pointer ${
                            isHovered
                              ? 'bg-emerald-50/40 border-fiber border-l-fiber shadow-md shadow-fiber/10 scale-[1.01]'
                              : 'bg-white border-gray-100 border-l-fiber'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full bg-fiber ${isHovered ? 'animate-ping' : 'animate-pulse-slow'}`} />
                              <span className="text-navy font-bold text-xs">{zone.name}</span>
                            </div>
                            <span className="bg-fiber/10 text-fiber text-5xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                              LIVE
                            </span>
                          </div>
                          
                          <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-50 text-5xs text-gray-400 font-bold uppercase tracking-wider">
                            <span>{zone.speed}</span>
                            <span className="text-navy">{zone.latency}</span>
                          </div>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                ) : (
                  <motion.div
                    key="regional-tab"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-2 gap-3"
                  >
                    {expansionZones.map((zone) => {
                      const isHovered = hoveredZone === zone.name
                      return (
                        <motion.div
                          key={zone.name}
                          onMouseEnter={() => setHoveredZone(zone.name)}
                          onMouseLeave={() => setHoveredZone(null)}
                          whileHover={{ y: -2 }}
                          className={`border rounded-xl p-3 flex flex-col justify-between border-l-4 transition-all duration-200 cursor-pointer ${
                            isHovered
                              ? 'bg-cyan-50/30 border-cyan border-l-cyan shadow-md shadow-cyan/10 scale-[1.01]'
                              : 'bg-white border-gray-100 border-l-cyan'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className={`w-2 h-2 rounded-full bg-cyan ${isHovered ? 'animate-ping' : 'animate-pulse-slow'}`} />
                              <span className="text-navy font-bold text-xs">{zone.name}</span>
                            </div>
                            <span className="bg-cyan/10 text-cyan text-5xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                              {zone.quarter}
                            </span>
                          </div>
                          
                          <div className="mt-2 text-5xs text-gray-550 leading-relaxed font-semibold">
                            {zone.desc}
                          </div>
                          
                          <div className="flex items-center justify-between mt-2 pt-2 border-t border-gray-50 text-5xs text-gray-400 font-bold uppercase tracking-wider">
                            <span>Status:</span>
                            <span className="text-cyan font-bold">{zone.speed}</span>
                          </div>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Core Metrics Network Strip */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
              <div className="flex gap-2.5 items-start bg-gray-50/50 p-2.5 rounded-2xl border border-gray-100/50 hover:border-electric/10 transition-colors group">
                <LivelyIcon
                  icon={IconActivity}
                  variant="electric"
                  className="w-8 h-8 rounded-lg shrink-0"
                  size={15}
                />
                <div>
                  <div className="text-navy font-syne font-bold text-sm leading-none">&lt; 4ms</div>
                  <div className="text-5xs text-gray-400 font-bold uppercase tracking-wider mt-1.5">Nairobi Latency</div>
                </div>
              </div>
              <div className="flex gap-2.5 items-start bg-gray-50/50 p-2.5 rounded-2xl border border-gray-100/50 hover:border-cyan/10 transition-colors group">
                <LivelyIcon
                  icon={IconServer}
                  variant="cyan"
                  className="w-8 h-8 rounded-lg shrink-0"
                  size={15}
                />
                <div>
                  <div className="text-navy font-syne font-bold text-sm leading-none">100G</div>
                  <div className="text-5xs text-gray-400 font-bold uppercase tracking-wider mt-1.5">Core Capacity</div>
                </div>
              </div>
              <div className="flex gap-2.5 items-start bg-gray-50/50 p-2.5 rounded-2xl border border-gray-100/50 hover:border-fiber/10 transition-colors group">
                <LivelyIcon
                  icon={IconWifi}
                  variant="green"
                  className="w-8 h-8 rounded-lg shrink-0"
                  size={15}
                />
                <div>
                  <div className="text-navy font-syne font-bold text-sm leading-none">99.9%</div>
                  <div className="text-5xs text-gray-400 font-bold uppercase tracking-wider mt-1.5">SLA Uptime</div>
                </div>
              </div>
            </div>

            {/* Coverage checker (Pill shape) */}
            <div className="bg-gray-50/80 border border-gray-100 rounded-3xl p-5 mt-8 max-w-xl">
              <p className="font-syne font-bold text-navy text-xs tracking-wider uppercase mb-3 flex items-center gap-1.5 opacity-85">
                <IconSearch size={14} className="text-electric" /> Specific Building Locator
              </p>
              <form onSubmit={handleCheck} className="flex gap-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Enter estate or building name (e.g. Westlands, Kilimani)..."
                  className="flex-1 border border-gray-200 rounded-full px-5 py-3 bg-white text-navy placeholder-gray-400 text-sm focus:border-electric focus:ring-1 focus:ring-electric outline-none transition"
                />
                <button
                  type="submit"
                  disabled={result.status === 'checking'}
                  className="bg-electric hover:bg-electric-dark text-white font-extrabold text-xs tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 shadow-md shadow-electric/10 hover:shadow-lg cursor-pointer disabled:opacity-70 flex items-center justify-center min-w-[80px]"
                >
                  {result.status === 'checking' ? (
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    'Check'
                  )}
                </button>
              </form>

              {/* Suggestions row */}
              <div className="flex gap-2 flex-wrap mt-3.5 items-center">
                <span className="text-5xs font-bold text-gray-400 uppercase tracking-widest">Quick Search:</span>
                {['Kilimani Loop', 'Westlands Metro', 'Mombasa Hub', 'Syokimau Line'].map((sug) => (
                  <button
                    key={sug}
                    type="button"
                    onClick={() => {
                      setQuery(sug)
                      setResult({ status: 'checking', location: sug })
                      setTimeout(() => {
                        const q = sug.toLowerCase().trim()
                        if (q.includes('kilimani') || q.includes('westlands')) {
                          setResult({ status: 'covered', location: sug })
                        } else if (q.includes('mombasa') || q.includes('syokimau')) {
                          setResult({ status: 'coming-soon', location: sug })
                        } else {
                          setResult({ status: 'not-covered', location: sug })
                        }
                      }, 750)
                    }}
                    className="text-5xs bg-white hover:bg-navy hover:text-white transition-all border border-gray-200 text-navy font-bold px-2.5 py-1 rounded-full cursor-pointer"
                  >
                    {sug}
                  </button>
                ))}
              </div>

              {result.status !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                  className="overflow-hidden border-t border-gray-200/60 pt-3"
                >
                  {result.status === 'covered' && (
                    <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-3 flex items-start gap-2.5 text-xs text-emerald-800">
                      <IconCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Gani Fiber is fully live in {result.location}!</span>
                        <p className="mt-0.5 opacity-90 leading-relaxed">Your location has active last-mile fiber drops ready to connect.</p>
                      </div>
                    </div>
                  )}
                  {result.status === 'coming-soon' && (
                    <div className="bg-amber-50 border border-amber-100 rounded-2xl p-3 flex items-start gap-2.5 text-xs text-amber-800">
                      <IconClock size={16} className="text-electric shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Deployment in progress for {result.location}!</span>
                        <p className="mt-0.5 opacity-90 leading-relaxed">Optical trunk lines are laid. Register details for priority slot reservation.</p>
                      </div>
                    </div>
                  )}
                  {result.status === 'not-covered' && (
                    <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-3 flex items-start gap-2.5 text-xs text-blue-800">
                      <IconHelpCircle size={16} className="text-blue-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Expansion planned for {result.location} soon.</span>
                        <p className="mt-0.5 opacity-90 leading-relaxed">Submit interest forms to prioritize fiber expansion into your building.</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </div>
        </FadeInSide>

        {/* Right — Kenya Map */}
        <FadeInSide direction="right" delay={0.2} className="flex items-center justify-center">
          <KenyaMap hoveredZone={hoveredZone} setHoveredZone={setHoveredZone} />
        </FadeInSide>
      </div>
    </section>
  )
}
