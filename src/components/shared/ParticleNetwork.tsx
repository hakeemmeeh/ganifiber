'use client'
import { useMemo } from 'react'

interface Node {
  x: number
  y: number
  delay: number
  duration: number
}

export default function ParticleNetwork() {
  const nodes = useMemo<Node[]>(() => {
    const positions: Node[] = [
      { x: 100, y: 80, delay: 0, duration: 7 },
      { x: 250, y: 150, delay: 0.5, duration: 8 },
      { x: 400, y: 60, delay: 1.2, duration: 6 },
      { x: 550, y: 200, delay: 0.3, duration: 9 },
      { x: 700, y: 100, delay: 1.8, duration: 7 },
      { x: 850, y: 250, delay: 0.7, duration: 8 },
      { x: 1000, y: 120, delay: 2.1, duration: 6 },
      { x: 1100, y: 300, delay: 0.9, duration: 7 },
      { x: 150, y: 350, delay: 1.5, duration: 8 },
      { x: 300, y: 450, delay: 2.5, duration: 9 },
      { x: 500, y: 400, delay: 0.2, duration: 7 },
      { x: 650, y: 500, delay: 1.0, duration: 6 },
      { x: 800, y: 380, delay: 2.0, duration: 8 },
      { x: 950, y: 520, delay: 0.6, duration: 9 },
      { x: 1050, y: 450, delay: 1.3, duration: 7 },
      { x: 200, y: 600, delay: 2.8, duration: 8 },
      { x: 450, y: 650, delay: 0.4, duration: 6 },
      { x: 750, y: 700, delay: 1.7, duration: 9 },
    ]
    return positions
  }, [])

  const lines = useMemo(() => {
    const result: { x1: number; y1: number; x2: number; y2: number }[] = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 300) {
          result.push({ x1: nodes[i].x, y1: nodes[i].y, x2: nodes[j].x, y2: nodes[j].y })
        }
      }
    }
    return result
  }, [nodes])

  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-50 pointer-events-none"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Lines */}
      {lines.map((line, i) => (
        <line
          key={`l-${i}`}
          x1={line.x1} y1={line.y1}
          x2={line.x2} y2={line.y2}
          stroke="rgba(26,95,240,0.1)"
          strokeWidth="1"
        />
      ))}
      {/* Nodes */}
      {nodes.map((node, i) => (
        <circle
          key={`n-${i}`}
          cx={node.x}
          cy={node.y}
          r="3"
          fill="rgba(26,95,240,0.3)"
          style={{
            animation: `float ${node.duration}s ease-in-out infinite`,
            animationDelay: `${node.delay}s`,
          }}
        />
      ))}
    </svg>
  )
}
