'use client'
import Marquee from 'react-fast-marquee'

const partners = [
  { name: 'Netflix', url: 'https://cdn.simpleicons.org/netflix/E50914' },
  { name: 'Google Cloud', url: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
  { name: 'Equinix', url: 'https://cdn.simpleicons.org/equinix/ED1C24' },
  { name: 'Cloudflare', url: 'https://cdn.simpleicons.org/cloudflare/F38020' },
  { name: 'Cisco', url: 'https://cdn.simpleicons.org/cisco/049FD9' },
  { name: 'Nokia', url: 'https://cdn.simpleicons.org/nokia/124191' },
  { name: 'Meta', url: 'https://cdn.simpleicons.org/meta/0668E1' },
  { name: 'AWS', url: 'https://cdn.simpleicons.org/amazonwebservices/232F3E' },
]

export default function PartnerMarquee() {
  return (
    <section className="bg-white border-y border-gray-100 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-8 text-center">
        <p className="text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase">
          Powering Connections With Top Tier Network Providers
        </p>
      </div>
      
      {/* 
        A seamless, borderless scrolling ribbon.
        Logos are represented as real SVGs.
      */}
      <div className="relative">
        {/* Gradient fade on edges for smooth entry/exit */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <Marquee speed={40} gradient={false} pauseOnHover={true}>
          <div className="flex items-center">
            {partners.map((partner, i) => (
              <div 
                key={i} 
                className="mx-12 lg:mx-16 flex items-center justify-center cursor-pointer group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={partner.url} 
                  alt={`${partner.name} logo`} 
                  className="h-8 md:h-10 w-auto opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  )
}
