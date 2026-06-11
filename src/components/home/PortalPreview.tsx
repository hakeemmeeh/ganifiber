'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconBolt, IconReceipt, IconActivity, IconHeadset, IconAdjustmentsHorizontal } from '@tabler/icons-react'
import SectionTag from '@/components/ui/SectionTag'
import AnimatedText from '@/components/ui/AnimatedText'
import Button from '@/components/ui/Button'

export default function PortalPreview() {
  const [speed, setSpeed] = useState<number>(100) // Default 100 Mbps
  const [boosting, setBoosting] = useState(false)
  const [boostSuccess, setBoostSuccess] = useState(false)

  // Calculate pricing based on chosen boost speed
  const getPrice = (mbps: number) => {
    if (mbps <= 25) return 2500
    if (mbps <= 100) return 4500
    if (mbps <= 250) return 5500
    if (mbps <= 500) return 7000
    return 8500
  }

  // Get color tier
  const getColor = (mbps: number) => {
    if (mbps <= 25) return 'text-cyan bg-cyan/10 border-cyan/20 fill-cyan'
    if (mbps <= 100) return 'text-electric bg-electric/10 border-electric/20 fill-electric'
    if (mbps <= 500) return 'text-purple-500 bg-purple-500/10 border-purple-500/20 fill-purple-500'
    return 'text-fiber bg-fiber/10 border-fiber/20 fill-fiber'
  }

  const handleBoost = () => {
    setBoosting(true)
    setTimeout(() => {
      setBoosting(false)
      setBoostSuccess(true)
      setTimeout(() => setBoostSuccess(false), 3000)
    }, 1200)
  }

  return (
    <section className="overlap-panel-gray py-24 pb-20 relative overflow-hidden border-y border-white/5">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-electric/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
        {/* Left: Interactive Dashboard Mockup */}
        <div className="relative">
          {/* Main Dashboard Card */}
          <div className="bg-gradient-to-br from-navy via-navy-mid/95 to-navy border border-white/10 rounded-3xl p-6 lg:p-8 shadow-[0_30px_80px_rgba(6,14,43,0.25)] text-white relative z-10 max-w-lg mx-auto">
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-fiber animate-pulse" />
                <span className="font-syne font-bold text-xs tracking-wider text-white/90">GANI PORTAL</span>
              </div>
              <span className="text-4xs font-bold text-white/40 uppercase tracking-widest bg-white/5 px-2.5 py-1 rounded-full">
                Client ID: GF-9482
              </span>
            </div>

            {/* Dashboard grid */}
            <div className="grid md:grid-cols-[1fr_1.1fr] gap-6 items-center">
              {/* Dial Gauge */}
              <div className="flex flex-col items-center">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <svg className="w-full h-full rotate-[-90deg]">
                    <circle cx="72" cy="72" r="62" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="transparent" />
                    <motion.circle
                      cx="72"
                      cy="72"
                      r="62"
                      stroke={speed <= 25 ? '#00C2F0' : speed <= 100 ? '#1A5FF0' : speed <= 500 ? '#A855F7' : '#2ECC5A'}
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={2 * Math.PI * 62}
                      animate={{ strokeDashoffset: (2 * Math.PI * 62) * (1 - (speed / 1000) * 0.95) }}
                      transition={{ type: 'spring', stiffness: 80, damping: 15 }}
                    />
                  </svg>
                  {/* Gauge content text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="font-syne font-bold text-3xl leading-none">
                      {speed === 1000 ? '1' : speed}
                    </span>
                    <span className="text-4xs font-bold text-white/50 tracking-wider mt-1">
                      {speed === 1000 ? 'Gbps' : 'Mbps'}
                    </span>
                  </div>
                </div>
                <div className="text-5xs font-bold text-white/40 uppercase tracking-wider mt-3">Active Allocation</div>
              </div>

              {/* Slider & Actions */}
              <div className="space-y-4">
                <div>
                  <label className="text-4xs font-bold text-white/60 uppercase tracking-wider block mb-2">
                    On-Demand Speed Boost
                  </label>
                  <input
                    type="range"
                    min="25"
                    max="1000"
                    step="25"
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-electric focus:outline-none"
                  />
                  <div className="flex justify-between text-5xs font-bold text-white/40 mt-1">
                    <span>25M</span>
                    <span>250M</span>
                    <span>500M</span>
                    <span>1G</span>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                  <div className="flex justify-between items-baseline">
                    <span className="text-5xs font-bold text-white/50 uppercase">Est. Monthly Cost</span>
                    <span className="font-syne font-bold text-md text-cyan">
                      KES {getPrice(speed).toLocaleString()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleBoost}
                  disabled={boosting || boostSuccess}
                  className={`w-full py-3.5 rounded-full font-extrabold text-2xs tracking-widest uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md ${
                    boostSuccess
                      ? 'bg-fiber text-navy shadow-fiber/10'
                      : 'bg-electric hover:bg-electric-dark text-white shadow-electric/10 hover:shadow-lg'
                  }`}
                >
                  {boosting ? (
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : boostSuccess ? (
                    '⚡ Boost Active!'
                  ) : (
                    'Apply Speed Boost'
                  )}
                </button>
              </div>
            </div>

            {/* Simulated usage chart */}
            <div className="mt-6 border-t border-white/5 pt-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-4xs font-bold text-white/50 uppercase tracking-wider">Weekly Latency telemetry</span>
                <span className="text-5xs font-semibold text-fiber bg-fiber/10 px-1.5 py-0.5 rounded">Stable · 4ms</span>
              </div>
              <div className="h-10 flex items-end gap-1.5">
                {[45, 60, 30, 85, 40, 75, 95, 50, 65, 80, 55, 90].map((val, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${val}%` }}
                    transition={{ delay: i * 0.05, duration: 0.8 }}
                    className={`flex-1 rounded-sm ${speed <= 25 ? 'bg-cyan/40' : speed <= 100 ? 'bg-electric/40' : speed <= 500 ? 'bg-purple-500/40' : 'bg-fiber/40'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Floating UI highlights */}
          <div className="absolute -bottom-5 -right-5 bg-white border border-gray-100 rounded-xl p-3 shadow-lg flex items-center gap-2.5 max-w-[170px] z-20">
            <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-500">
              <IconBolt size={16} />
            </div>
            <div>
              <div className="text-navy font-bold text-2xs leading-none">Instant Boost</div>
              <div className="text-gray-400 text-4xs mt-0.5 font-medium">Under 2 seconds</div>
            </div>
          </div>
        </div>

        {/* Right: Feature Descriptions */}
        <div>
          <SectionTag>Self-Service</SectionTag>
          <AnimatedText
            text="Bandwidth Control. In Your Hands."
            className="font-syne font-bold text-3xl lg:text-4xl text-navy leading-tight mt-2"
          />
          <p className="text-gray-650 text-sm mt-4 leading-relaxed">
            Our open-access network comes with a state-of-the-art self-service portal, giving ISPs, estates, and retail clients real-time autonomous network configuration.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="flex gap-3">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-electric/5 border border-electric/10 text-electric flex items-center justify-center">
                <IconAdjustmentsHorizontal size={20} className="stroke-[1.75]" />
              </div>
              <div>
                <h4 className="font-syne font-bold text-navy text-sm">On-Demand Boosts</h4>
                <p className="text-gray-550 text-xs mt-1 leading-normal">
                  Temporarily scale up your capacity for heavy file transfers, streaming backups, or network loads.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-cyan/10 border border-cyan/20 text-cyan flex items-center justify-center">
                <IconActivity size={20} className="stroke-[1.75]" />
              </div>
              <div>
                <h4 className="font-syne font-bold text-navy text-sm">Real-time Telemetry</h4>
                <p className="text-gray-550 text-xs mt-1 leading-normal">
                  Monitor fiber optic signal strengths, latency statistics, packet delivery ratios, and uptime SLA logs.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-fiber/10 border border-fiber/20 text-fiber-dark flex items-center justify-center">
                <IconReceipt size={20} className="stroke-[1.75]" />
              </div>
              <div>
                <h4 className="font-syne font-bold text-navy text-sm">Billing Automation</h4>
                <p className="text-gray-550 text-xs mt-1 leading-normal">
                  Pay invoices instantly via M-Pesa. Auto-billing setups make recurring subscriptions hassle-free.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-purple-500/5 border border-purple-500/10 text-purple-500 flex items-center justify-center">
                <IconHeadset size={20} className="stroke-[1.75]" />
              </div>
              <div>
                <h4 className="font-syne font-bold text-navy text-sm">Rapid Ticket Dispatch</h4>
                <p className="text-gray-550 text-xs mt-1 leading-normal">
                  Open support tickets that bundle telemetry records instantly, dispatching teams with full context.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <Button href="/contact">Request Access →</Button>
            <Button variant="outline" href="/for-developers">API Docs ↗</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
