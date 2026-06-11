'use client'
import ReactCountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

interface Props {
  end: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
  duration?: number
}

export default function CountUpNumber({ end, suffix = '', prefix = '', decimals = 0, className = '', duration = 2 }: Props) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  return (
    <span ref={ref} className={className}>
      {inView ? (
        <ReactCountUp end={end} suffix={suffix} prefix={prefix} decimals={decimals} duration={duration} />
      ) : (
        <span>{prefix}0{suffix}</span>
      )}
    </span>
  )
}
