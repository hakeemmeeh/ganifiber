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
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto pt-16 pb-12 px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center">
              <Image
                src="/logo/gani-fiber-logo.png"
                alt="Gani Fiber"
                width={190}
                height={58}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">
              Connecting Today. Powering Tomorrow.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-gray-250 flex items-center justify-center text-gray-400 hover:text-cyan hover:border-cyan/40 hover:scale-110 hover:shadow-xs transition-all duration-300 group"
                >
                  <s.icon size={16} className="transition-transform duration-300 group-hover:rotate-6" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-4">A Rodol Homes Company</p>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-navy font-syne font-bold text-sm tracking-wider uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-gray-550 hover:text-navy transition-colors duration-200 text-sm">
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
                  <Link href={c.href} className="text-gray-550 hover:text-navy transition-colors duration-200 text-sm">
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
            <ul className="space-y-3 text-gray-550 text-sm">
              <li>
                <a href="mailto:sales@ganifiber.com" className="hover:text-navy transition-colors">
                  sales@ganifiber.com
                </a>
              </li>
              <li>
                <a href="mailto:partnerships@ganifiber.com" className="hover:text-navy transition-colors">
                  partnerships@ganifiber.com
                </a>
              </li>
              <li>
                <a href="tel:+254745372776" className="hover:text-navy transition-colors">
                  +254 745 372 776
                </a>
              </li>
              <li className="leading-relaxed">
                Valley View Park, Parklands<br />
                Block B, 7th Floor, Nairobi
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-white border-t border-gray-200/60 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © 2026 Gani Fiber Ltd. All Rights Reserved.
          </p>
          <p className="text-cyan text-xs font-bold tracking-widest uppercase">
            Designed by Xpeedium
          </p>
        </div>
      </div>
    </footer>
  )
}
