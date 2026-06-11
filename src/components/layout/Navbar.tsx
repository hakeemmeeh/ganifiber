'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { IconMenu2, IconX } from '@tabler/icons-react'

const links = [
  { href: '/for-homes', label: 'For Homes' },
  { href: '/for-isps', label: 'For ISPs' },
  { href: '/for-developers', label: 'Developers' },
  { href: '/business', label: 'Business' },
  { href: '/coverage', label: 'Coverage' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none px-6">
      <motion.header
        animate={{
          y: scrolled ? 16 : 0,
          width: scrolled ? '100%' : '100%',
          maxWidth: scrolled ? 1200 : '100%',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.82)' : 'rgba(255, 255, 255, 0)',
          backdropFilter: scrolled ? 'blur(18px)' : 'blur(0px)',
          borderRadius: scrolled ? 20 : 0,
          borderWidth: 1,
          borderColor: scrolled ? 'rgba(6, 14, 43, 0.05)' : 'transparent',
          boxShadow: scrolled ? '0 15px 45px rgba(6, 14, 43, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.6)' : '0 0 0 transparent',
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        className="pointer-events-auto w-full transition-all border-b border-transparent z-50 overflow-visible"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/gani-fiber-logo.png"
              alt="Gani Fiber"
              width={200}
              height={62}
              className="h-15 w-auto object-contain transition-transform duration-300 hover:scale-103"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-electric'
                      : 'text-navy/70 hover:text-electric'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeDot"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan rounded-full shadow-sm shadow-cyan/50"
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center bg-fiber text-navy font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-xl hover:bg-fiber-dark transition-all duration-200 hover:shadow-md hover:shadow-fiber/10"
          >
            Get Connected
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-navy p-2 cursor-pointer transition-transform duration-200 active:scale-95"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden rounded-b-2xl mx-[1px]"
            >
              <nav className="px-6 py-6 space-y-2">
                {links.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-2.5 text-sm font-semibold rounded-lg px-3 hover:bg-gray-50 transition-colors ${
                        pathname === link.href ? 'text-electric bg-electric/5' : 'text-navy'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: links.length * 0.05, duration: 0.3 }}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-fiber text-navy font-bold text-xs tracking-wider uppercase py-3.5 rounded-xl shadow-sm"
                  >
                    Get Connected
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  )
}
