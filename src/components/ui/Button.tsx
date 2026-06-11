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
  const base = 'inline-flex items-center justify-center font-extrabold text-xs tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300'
  const variants = {
    primary: 'bg-fiber text-navy hover:bg-fiber-dark shadow-md shadow-fiber/10 hover:shadow-lg hover:shadow-fiber/25',
    secondary: 'bg-electric text-white hover:bg-electric-dark shadow-md shadow-electric/10 hover:shadow-lg hover:shadow-electric/25',
    outline: 'border-2 border-electric text-electric hover:bg-electric hover:text-white',
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
