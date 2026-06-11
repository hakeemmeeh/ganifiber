'use client'
import { motion, AnimatePresence } from 'framer-motion'

interface City {
  name: string
  x: number
  y: number
  live: boolean
}

interface Props {
  hoveredZone: string | null
  setHoveredZone: (zone: string | null) => void
}

const cities: City[] = [
  // Nairobi cluster (live)
  { name: 'Eastleigh', x: 248, y: 358, live: true },
  { name: 'Parklands', x: 232, y: 348, live: true },
  { name: 'Westlands', x: 226, y: 340, live: true },
  { name: 'Kilimani', x: 236, y: 365, live: true },
  { name: 'South C', x: 244, y: 375, live: true },
  { name: 'Hurlingham', x: 240, y: 360, live: true },
  { name: 'Embakasi', x: 256, y: 368, live: true },
  { name: 'Kasarani', x: 248, y: 338, live: true },
  // Expansion cities
  { name: 'Mombasa', x: 280, y: 455, live: false },
  { name: 'Kisumu', x: 140, y: 310, live: false },
  { name: 'Eldoret', x: 160, y: 270, live: false },
  { name: 'Garissa', x: 320, y: 310, live: false },
]

const zoneDetails: Record<string, { desc: string; stat: string }> = {
  'Eastleigh': { desc: 'High-density commercial last-mile fiber active.', stat: '10 Gbps ring' },
  'Parklands': { desc: 'Full FTTH ring active for apartments and clinics.', stat: '1 Gbps ready' },
  'Westlands': { desc: 'Premium commercial fiber and business park networks live.', stat: '10 Gbps core' },
  'Kilimani': { desc: 'FTTH core active for residential and office estates.', stat: '1 Gbps ready' },
  'South C': { desc: 'Residential fiber loops fully live and active.', stat: '100% FTTH ready' },
  'Hurlingham': { desc: 'Core metro interconnect hub live.', stat: '10 Gbps capacity' },
  'Embakasi': { desc: 'Logistics parks and residential rings live.', stat: '1 Gbps ready' },
  'Kasarani': { desc: 'Trunk line and residential ring connections live.', stat: '1 Gbps ready' },
  'Mombasa': { desc: 'Trunk routing to subsea landing stations.', stat: 'In deployment' },
  'Kisumu': { desc: 'Metro ring deploying to lakeside business hubs.', stat: 'Trunk laying' },
  'Eldoret': { desc: 'Backhaul deployment for academic & commercial estates.', stat: 'Survey phase' },
  'Garissa': { desc: 'Expanding regional fiber paths to Eastern gateway.', stat: 'Survey phase' },
}

export default function KenyaMap({ hoveredZone, setHoveredZone }: Props) {
  const activeCity = cities.find((c) => c.name === hoveredZone)

  return (
    <div className="relative w-full max-w-md mx-auto bg-navy border border-navy-mid/60 rounded-3xl p-6 shadow-xl overflow-visible mesh-bg">
      <svg viewBox="0 0 450 550" className="w-full h-auto overflow-visible">
        {/* Glowing background grid lines */}
        <defs>
          <pattern id="mapGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(26, 95, 240, 0.05)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="450" height="550" fill="url(#mapGrid)" rx="24" opacity="0.7" pointerEvents="none" />

        {/* Simplified Kenya outline with high-tech glowing border */}
        <path
          d="M140,80 L190,60 L240,55 L290,70 L340,85 L380,110 L400,150 L410,200 L400,250 L380,290 L350,320 L340,360 L310,400 L290,430 L280,460 L270,480 L260,470 L250,450 L240,430 L230,410 L220,400 L200,390 L180,380 L160,370 L140,360 L120,340 L110,310 L100,280 L90,250 L85,220 L90,190 L100,160 L110,130 L120,110 L130,95 Z"
          fill="#0A1845"
          fillOpacity="0.4"
          stroke="rgba(0, 194, 240, 0.25)"
          strokeWidth="2"
          className="filter drop-shadow-[0_0_8px_rgba(26,95,240,0.15)]"
        />

        {/* Lake Victoria approximation */}
        <ellipse cx="120" cy="310" rx="28" ry="22" fill="#0E1F55" fillOpacity="0.6" stroke="rgba(0, 194, 240, 0.15)" strokeWidth="1" />

        {/* Connecting Regional fiber trunks */}
        {/* Nairobi (240, 355) to Mombasa (280, 455) */}
        <line x1="240" y1="355" x2="280" y2="455" stroke="rgba(0, 194, 240, 0.15)" strokeWidth="2" />
        <line x1="240" y1="355" x2="280" y2="455" stroke="#00C2F0" strokeWidth="1.5" strokeDasharray="8, 20" className="animate-map-dash" />

        {/* Nairobi (240, 355) to Kisumu (140, 310) */}
        <line x1="240" y1="355" x2="140" y2="310" stroke="rgba(0, 194, 240, 0.15)" strokeWidth="2" />
        <line x1="240" y1="355" x2="140" y2="310" stroke="#00C2F0" strokeWidth="1.5" strokeDasharray="8, 20" className="animate-map-dash" />

        {/* Nairobi (240, 355) to Eldoret (160, 270) */}
        <line x1="240" y1="355" x2="160" y2="270" stroke="rgba(0, 194, 240, 0.15)" strokeWidth="2" />
        <line x1="240" y1="355" x2="160" y2="270" stroke="#00C2F0" strokeWidth="1.5" strokeDasharray="8, 20" className="animate-map-dash" />

        {/* Nairobi (240, 355) to Garissa (320, 310) */}
        <line x1="240" y1="355" x2="320" y2="310" stroke="rgba(0, 194, 240, 0.15)" strokeWidth="2" />
        <line x1="240" y1="355" x2="320" y2="310" stroke="#00C2F0" strokeWidth="1.5" strokeDasharray="8, 20" className="animate-map-dash" />

        {/* Nairobi core fiber ring (connecting live zones) */}
        <polygon
          points="226,340 232,348 248,338 248,358 256,368 244,375 236,365 240,360"
          fill="rgba(46, 204, 90, 0.05)"
          stroke="rgba(46, 204, 90, 0.25)"
          strokeWidth="2"
        />
        <polygon
          points="226,340 232,348 248,338 248,358 256,368 244,375 236,365 240,360"
          fill="none"
          stroke="#2ECC5A"
          strokeWidth="1.5"
          strokeDasharray="6, 12"
          className="animate-map-dash"
        />

        {/* Nairobi label */}
        <text x="245" y="398" fill="#FFFFFF" fontSize="9" fontWeight="800" opacity="0.4" textAnchor="middle" className="font-syne tracking-widest pointer-events-none">
          CORE RING
        </text>

        {/* City markers */}
        {cities.map((city, i) => {
          const isSelected = hoveredZone === city.name
          const color = city.live ? '#2ECC5A' : '#00C2F0'
          const showLabel = !city.live || ['Westlands', 'Embakasi', 'Kasarani'].includes(city.name)

          return (
            <g
              key={city.name}
              className="cursor-pointer group"
              onMouseEnter={() => setHoveredZone(city.name)}
              onMouseLeave={() => setHoveredZone(null)}
            >
              {/* Pulse ring */}
              <motion.circle
                cx={city.x}
                cy={city.y}
                fill="none"
                stroke={color}
                strokeWidth={isSelected ? 2.5 : 1.5}
                animate={{ r: isSelected ? [4, 18] : [4, 13], opacity: isSelected ? [1, 0] : [0.7, 0] }}
                transition={{ duration: isSelected ? 1.5 : 2.2, repeat: Infinity, delay: i * 0.15, ease: 'easeOut' }}
              />
              {/* Glowing hover underlay */}
              {isSelected && (
                <circle cx={city.x} cy={city.y} r={10} fill={color} opacity="0.25" className="blur-[2px]" />
              )}
              {/* Dot */}
              <motion.circle
                cx={city.x}
                cy={city.y}
                r={isSelected ? 6 : city.live ? 4 : 5}
                fill={color}
                animate={{ scale: isSelected ? 1.15 : 1 }}
                className="transition-all duration-200"
              />
              {/* Label */}
              {(showLabel || !city.live || isSelected) && (
                <text
                  x={city.x + 10}
                  y={city.y + 4}
                  fill={isSelected ? color : '#FFFFFF'}
                  fontSize={isSelected ? '10.5' : '9'}
                  fontWeight={isSelected ? '800' : '500'}
                  opacity={isSelected ? '1' : '0.65'}
                  className="font-sans transition-all duration-200 filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]"
                >
                  {city.name}
                </text>
              )}
            </g>
          )
        })}

        {/* Legend */}
        <g transform="translate(30, 510)">
          <circle cx="8" cy="8" r="5" fill="#2ECC5A" className="animate-pulse" />
          <text x="20" y="12" fill="#FFFFFF" fontSize="9.5" className="font-bold font-syne tracking-wider" opacity="0.8">Live Fiber Ring</text>
          
          <circle cx="130" cy="8" r="5" fill="#00C2F0" className="animate-pulse" />
          <text x="142" y="12" fill="#FFFFFF" fontSize="9.5" className="font-bold font-syne tracking-wider" opacity="0.8">Expanding Trunks</text>
        </g>
      </svg>

      {/* Floating Interactive Tooltip */}
      <AnimatePresence>
        {activeCity && zoneDetails[activeCity.name] && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            className="absolute bg-navy-mid/95 backdrop-blur-md border border-white/15 rounded-xl p-3.5 shadow-xl shadow-cyan/10 text-white z-30 max-w-[170px]"
            style={{
              left: `${(activeCity.x / 450) * 100}%`,
              top: `${(activeCity.y / 550) * 100 - 8}%`,
              transform: 'translate(-50%, -100%)',
            }}
          >
            {/* Tooltip arrow */}
            <div className="absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-navy-mid/95 border-r border-b border-white/15 rotate-45" />
            
            <h5 className="font-syne font-bold text-2xs text-cyan flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${activeCity.live ? 'bg-fiber' : 'bg-cyan'} animate-pulse`} />
              {activeCity.name}
            </h5>
            
            <p className="text-4xs text-gray-300 mt-1 leading-snug">
              {zoneDetails[activeCity.name].desc}
            </p>
            
            <div className="text-5xs text-white/50 font-bold uppercase tracking-wider mt-2 border-t border-white/10 pt-1.5 flex justify-between">
              <span>Cap / Speed:</span>
              <span className={activeCity.live ? 'text-fiber' : 'text-cyan'}>
                {zoneDetails[activeCity.name].stat}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
