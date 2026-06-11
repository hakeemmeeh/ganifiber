'use client'
import Marquee from 'react-fast-marquee'

const partners = [
  {
    name: 'Safaricom Partner',
    logo: (
      <svg className="h-8 w-auto text-gray-400 hover:text-emerald-500 transition-colors duration-300" viewBox="0 0 160 40" fill="currentColor">
        <circle cx="20" cy="20" r="10" className="text-emerald-500/20 fill-current" />
        <circle cx="20" cy="20" r="6" className="text-emerald-500 fill-current" />
        <text x="38" y="26" className="font-syne font-bold text-sm tracking-wide">SAFARICOM</text>
      </svg>
    )
  },
  {
    name: 'Liquid Tech',
    logo: (
      <svg className="h-8 w-auto text-gray-400 hover:text-blue-500 transition-colors duration-300" viewBox="0 0 140 40" fill="currentColor">
        <path d="M10,25 Q20,10 30,25 T50,25" stroke="currentColor" strokeWidth="3" fill="none" className="text-blue-500" />
        <text x="58" y="26" className="font-syne font-bold text-sm tracking-wide">LIQUID</text>
      </svg>
    )
  },
  {
    name: 'KIXP',
    logo: (
      <svg className="h-8 w-auto text-gray-400 hover:text-cyan transition-colors duration-300" viewBox="0 0 130 40" fill="currentColor">
        <path d="M12,20 L22,12 L32,20 L22,28 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan" />
        <circle cx="22" cy="20" r="3" className="text-cyan fill-current" />
        <text x="42" y="26" className="font-syne font-bold text-sm tracking-wide">KIXP</text>
      </svg>
    )
  },
  {
    name: 'Netflix OpenConnect',
    logo: (
      <svg className="h-8 w-auto text-gray-400 hover:text-red-600 transition-colors duration-300" viewBox="0 0 140 40" fill="currentColor">
        <path d="M15,10 L22,10 L22,30 L15,30 Z" className="text-red-600 fill-current" />
        <path d="M22,10 L30,30 L22,30 Z" className="opacity-80 fill-current" />
        <path d="M30,10 L30,30 L22,10 Z" className="text-red-600 fill-current" />
        <text x="38" y="26" className="font-syne font-bold text-sm tracking-wide">NETFLIX</text>
      </svg>
    )
  },
  {
    name: 'Google Edge',
    logo: (
      <svg className="h-8 w-auto text-gray-400 hover:text-blue-600 transition-colors duration-300" viewBox="0 0 140 40" fill="currentColor">
        <path d="M20,20 L32,20 A12,12 0 1,1 28,12 L23,17 A6,6 0 1,0 26,23 L20,23 Z" className="text-blue-500 fill-current" />
        <text x="42" y="26" className="font-syne font-bold text-sm tracking-wide">GOOGLE</text>
      </svg>
    )
  },
  {
    name: 'MetroNet Kenya',
    logo: (
      <svg className="h-8 w-auto text-gray-400 hover:text-indigo-500 transition-colors duration-300" viewBox="0 0 160 40" fill="currentColor">
        <path d="M10,12 L20,28 L30,12 L40,28" stroke="currentColor" strokeWidth="3" fill="none" className="text-indigo-500" />
        <text x="48" y="26" className="font-syne font-bold text-sm tracking-wide">METRONET</text>
      </svg>
    )
  },
  {
    name: 'CloudVibe',
    logo: (
      <svg className="h-8 w-auto text-gray-400 hover:text-purple-500 transition-colors duration-300" viewBox="0 0 150 40" fill="currentColor">
        <path d="M22,15 A4,4 0 0,1 28,18 A5,5 0 0,1 36,22 A4,4 0 0,1 32,28 L18,28 A4,4 0 0,1 15,22 A4,4 0 0,1 22,15" className="text-purple-500 fill-current" />
        <text x="44" y="26" className="font-syne font-bold text-sm tracking-wide">CLOUDVIBE</text>
      </svg>
    )
  }
]

export default function PartnerMarquee() {
  return (
    <section className="bg-white border-y border-gray-100 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-4 text-center">
        <p className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
          Powering Connections With Top Tier Network Providers
        </p>
      </div>
      <div className="opacity-70 hover:opacity-100 transition-opacity duration-300">
        <Marquee speed={40} gradient={true} gradientWidth={80} pauseOnHover={true}>
          <div className="flex items-center gap-20 pr-20">
            {partners.map((partner, i) => (
              <div key={i} className="flex items-center justify-center min-w-[150px]">
                {partner.logo}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  )
}
