'use client'
import { motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  href?: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export default function Button({ children, variant = 'primary', href, className = '', onClick, type = 'button' }: Props) {
  const base = 'inline-flex items-center justify-center font-syne font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300'
  const variants = {
    primary: 'bg-gradient-to-r from-accent-gold to-amber-500 hover:from-amber-500 hover:to-accent-gold text-navy shadow-md shadow-accent-gold/10 hover:shadow-lg hover:shadow-accent-gold/25',
    secondary: 'bg-gradient-to-r from-electric to-cyan hover:from-cyan hover:to-electric text-white shadow-md shadow-electric/10 hover:shadow-lg hover:shadow-electric/25',
    outline: 'border border-accent-gold/30 text-navy bg-nude-light/40 hover:bg-gradient-to-r hover:from-accent-gold hover:to-amber-500 hover:text-navy hover:border-transparent shadow-sm hover:shadow-md',
  }
  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a href={href}
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 450, damping: 25 }}
        className={cls}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button onClick={onClick} type={type}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 450, damping: 25 }}
      className={cls}>
      {children}
    </motion.button>
  )
}
