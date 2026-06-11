import React from 'react'

interface LivelyIconProps {
  icon: React.ComponentType<any>
  size?: number
  className?: string // Additional outer wrapper classes
  iconClassName?: string // Additional icon element classes
  variant?: 'gold' | 'electric' | 'cyan' | 'green' | 'purple' | 'pink' | 'indigo' | 'navy'
}

export default function LivelyIcon({
  icon: Icon,
  size = 24,
  className = '',
  iconClassName = '',
  variant = 'gold'
}: LivelyIconProps) {
  // Map variant to styling colors matching our design system
  const variantStyles = {
    gold: {
      bg: 'bg-accent-gold/5 border-accent-gold/15 group-hover:border-accent-gold/45',
      icon: 'text-accent-gold group-hover:text-accent-gold',
      glow: 'bg-accent-gold/25'
    },
    electric: {
      bg: 'bg-electric/5 border-electric/15 group-hover:border-electric/45',
      icon: 'text-electric group-hover:text-electric',
      glow: 'bg-electric/25'
    },
    cyan: {
      bg: 'bg-cyan/5 border-cyan/15 group-hover:border-cyan/45',
      icon: 'text-cyan group-hover:text-cyan',
      glow: 'bg-cyan/25'
    },
    green: {
      bg: 'bg-fiber/5 border-fiber/15 group-hover:border-fiber/45',
      icon: 'text-fiber group-hover:text-fiber',
      glow: 'bg-fiber/25'
    },
    purple: {
      bg: 'bg-purple-500/5 border-purple-500/15 group-hover:border-purple-500/45',
      icon: 'text-purple-500 group-hover:text-purple-500',
      glow: 'bg-purple-500/25'
    },
    pink: {
      bg: 'bg-pink-500/5 border-pink-500/15 group-hover:border-pink-500/45',
      icon: 'text-pink-500 group-hover:text-pink-500',
      glow: 'bg-pink-500/25'
    },
    indigo: {
      bg: 'bg-indigo-500/5 border-indigo-500/15 group-hover:border-indigo-500/45',
      icon: 'text-indigo-500 group-hover:text-indigo-500',
      glow: 'bg-indigo-500/25'
    },
    navy: {
      bg: 'bg-navy/5 border-navy/15 group-hover:border-navy/45',
      icon: 'text-navy group-hover:text-navy',
      glow: 'bg-navy/25'
    }
  }

  const styles = variantStyles[variant] || variantStyles.gold

  // Determine standard size and rounded corners if not explicitly defined in custom classes
  const hasWidth = className.includes('w-')
  const hasHeight = className.includes('h-')
  const hasRounded = className.includes('rounded-')
  const sizeClasses = `${hasWidth ? '' : 'w-12'} ${hasHeight ? '' : 'h-12'}`
  const roundedClasses = hasRounded ? '' : 'rounded-2xl'

  return (
    <div className={`relative flex items-center justify-center border transition-all duration-500 ease-luxury shadow-xs group-hover:scale-105 group-hover:shadow-md overflow-hidden ${sizeClasses} ${roundedClasses} ${styles.bg} ${className}`}>
      {/* Absolute glow overlay */}
      <span className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Radial blur backdrop */}
      <span className={`absolute -inset-2 rounded-full scale-50 opacity-0 group-hover:scale-120 group-hover:opacity-100 transition-all duration-700 ease-luxury blur-md ${styles.glow}`} />

      {/* Floating dot particles */}
      <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-white/40 opacity-0 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all duration-500" />
      <span className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-white/30 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all duration-500" />

      {/* Inner Icon with micro-movement */}
      <div className="relative z-10 transition-all duration-500 ease-luxury group-hover:scale-110 group-hover:rotate-6">
        <Icon size={size} className={`${styles.icon} ${iconClassName} transition-colors duration-500`} />
      </div>
    </div>
  )
}
