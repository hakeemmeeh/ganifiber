'use client'
import Link from 'next/link'
import Image from 'next/image'
import { IconBrandLinkedin, IconBrandX, IconBrandFacebook } from '@tabler/icons-react'

const services = [
  { label: 'Wholesale FTTH', href: '/for-isps' },
  { label: 'IP Transit', href: '/for-isps' },
  { label: 'Metro Fiber', href: '/for-isps' },
  { label: 'Home Internet', href: '/for-homes' },
  { label: 'Business Fiber', href: '/business' },
]

const company = [
  { label: 'About', href: '/about' },
  { label: 'Coverage Map', href: '/coverage' },
  { label: 'Partner Program', href: '/for-isps' },
  { label: 'Careers', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const socials = [
  { icon: IconBrandLinkedin, href: '#', label: 'LinkedIn' },
  { icon: IconBrandX, href: '#', label: 'X' },
  { icon: IconBrandFacebook, href: '#', label: 'Facebook' },
]

export default function Footer() {
  return (
    <footer className="bg-cyan/10 border-t border-cyan/20 antialiased">
      <div className="max-w-7xl mx-auto pt-16 pb-12 px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center">
              <Image
                src="/logo/gani-fiber-logo.png"
                alt="Gani Fiber"
                width={280}
                height={85}
                className="h-20 lg:h-24 w-auto object-contain drop-shadow-sm"
              />
            </div>
            <p className="text-navy font-medium text-sm mt-4 leading-relaxed opacity-90">
              Connecting Today. Powering Tomorrow.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-cyan hover:bg-cyan hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 group"
                >
                  <s.icon size={18} className="transition-transform duration-300 group-hover:rotate-6" />
                </a>
              ))}
            </div>
            <p className="text-navy font-bold text-xs mt-6 opacity-75">A Rodol Homes Company</p>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-navy font-syne font-bold text-sm tracking-wider uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-navy/80 hover:text-white font-medium transition-colors duration-200 text-sm drop-shadow-sm">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h4 className="text-navy font-syne font-bold text-sm tracking-wider uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="text-navy/80 hover:text-white font-medium transition-colors duration-200 text-sm drop-shadow-sm">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-navy font-syne font-bold text-sm tracking-wider uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-navy/80 font-medium text-sm drop-shadow-sm">
              <li>
                <a href="mailto:sales@ganifiber.com" className="hover:text-white transition-colors">
                  sales@ganifiber.com
                </a>
              </li>
              <li>
                <a href="mailto:partnerships@ganifiber.com" className="hover:text-white transition-colors">
                  partnerships@ganifiber.com
                </a>
              </li>
              <li>
                <a href="tel:+254745372776" className="hover:text-white transition-colors">
                  +254 745 372 776
                </a>
              </li>
              <li className="leading-relaxed opacity-90">
                Valley View Park, Parklands<br />
                Block B, 7th Floor, Nairobi
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-navy border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 font-medium text-xs">
            © 2026 Gani Fiber Ltd. All Rights Reserved.
          </p>
          <p className="text-cyan text-xs font-bold tracking-widest uppercase drop-shadow-sm">
            Designed by Xpeedium
          </p>
        </div>
      </div>
    </footer>
  )
}
