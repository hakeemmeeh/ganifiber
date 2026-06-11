import FadeUp from '@/components/ui/FadeUp'
import CountUpNumber from '@/components/ui/CountUpNumber'
import { IconBolt, IconActivity, IconMapPin, IconHeadset, IconCpu } from '@tabler/icons-react'
import LivelyIcon from '@/components/ui/LivelyIcon'

const stats = [
  { end: 1, suffix: ' Gbps', label: 'Peak Speed', icon: IconBolt, variant: 'cyan' as const },
  { end: 99.9, suffix: '%', decimals: 1, label: 'SLA Uptime', icon: IconActivity, variant: 'green' as const },
  { end: 8, suffix: '+', label: 'Coverage Zones', icon: IconMapPin, variant: 'gold' as const },
  { end: 24, suffix: '/7', label: 'NOC Support', icon: IconHeadset, variant: 'pink' as const },
  { text: 'FTTH', label: 'Full Fiber to Home', icon: IconCpu, variant: 'electric' as const },
]

export default function StatsBand() {
  return (
    <section 
      className="relative pt-32 pb-32 overflow-hidden bg-parallax"
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&auto=format&fit=crop')` 
      }}
    >
      {/* Wave divider at top (from White background above) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none z-10">
        <svg className="relative block w-full h-8 text-white fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1130.5,107.82,1059.8,109.92,985.66,92.83Z"></path>
        </svg>
      </div>

      {/* Dark overlay & blur mask for high legibility */}
      <div className="absolute inset-0 bg-navy/90 backdrop-blur-[3px] pointer-events-none" />

      {/* Dot matrix overlay */}
      <div className="absolute inset-0 bg-dot-matrix-dark opacity-25 pointer-events-none" />

      {/* Background circuit pattern */}
      <div className="circuit-pattern opacity-15 absolute inset-0 pointer-events-none" />
      
      {/* Background glowing orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-electric/15 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-cyan/15 rounded-full blur-[100px] pointer-events-none animate-pulse-slow [animation-delay:1s]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Glowing Icon Wrapper */}
                  <LivelyIcon
                    icon={stat.icon}
                    variant={stat.variant}
                    className="mb-4 w-12 h-12"
                    size={22}
                  />
                  
                  {/* CountUp or Label */}
                  {'text' in stat && stat.text ? (
                    <div className="font-syne font-bold text-4xl lg:text-5xl text-white tracking-tight leading-none">
                      {stat.text}
                    </div>
                  ) : (
                    <CountUpNumber
                      end={stat.end!}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                      className="font-syne font-bold text-4xl lg:text-5xl text-white tracking-tight leading-none"
                    />
                  )}
                  
                  <div className="text-xs lg:text-sm text-gray-400 mt-2 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </FadeUp>
      </div>

      {/* Wave divider at bottom (to Gray-50 background below) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg className="relative block w-full h-8 text-gray-50 fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1130.5,107.82,1059.8,109.92,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  )
}
