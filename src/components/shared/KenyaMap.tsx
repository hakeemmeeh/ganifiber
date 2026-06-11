'use client'
import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'

interface City {
  name: string
  lat: number
  lng: number
  live: boolean
  desc: string
  stat: string
}

const cities: City[] = [
  // Nairobi cluster
  { name: 'Nairobi Core', lat: -1.2921, lng: 36.8219, live: true, desc: 'High-density commercial last-mile fiber active.', stat: '10 Gbps ring' },
  { name: 'Eastleigh', lat: -1.2750, lng: 36.8480, live: true, desc: 'High-density commercial last-mile fiber active.', stat: '10 Gbps ring' },
  { name: 'Westlands', lat: -1.2667, lng: 36.8000, live: true, desc: 'Premium commercial fiber and business park networks live.', stat: '10 Gbps core' },
  { name: 'Kilimani', lat: -1.2890, lng: 36.7844, live: true, desc: 'FTTH core active for residential and office estates.', stat: '1 Gbps ready' },
  { name: 'South C', lat: -1.3188, lng: 36.8274, live: true, desc: 'Residential fiber loops fully live and active.', stat: '100% FTTH ready' },
  { name: 'Embakasi', lat: -1.3061, lng: 36.8967, live: true, desc: 'Logistics parks and residential rings live.', stat: '1 Gbps ready' },
  { name: 'Kasarani', lat: -1.2163, lng: 36.8961, live: true, desc: 'Trunk line and residential ring connections live.', stat: '1 Gbps ready' },
  
  // Expansion cities
  { name: 'Mombasa', lat: -4.0435, lng: 39.6682, live: false, desc: 'Trunk routing to subsea landing stations.', stat: 'In deployment' },
  { name: 'Kisumu', lat: -0.0917, lng: 34.7680, live: false, desc: 'Metro ring deploying to lakeside business hubs.', stat: 'Trunk laying' },
  { name: 'Eldoret', lat: 0.5143, lng: 35.2698, live: false, desc: 'Backhaul deployment for academic & commercial estates.', stat: 'Survey phase' },
  { name: 'Garissa', lat: -0.4532, lng: 39.6461, live: false, desc: 'Expanding regional fiber paths to Eastern gateway.', stat: 'Survey phase' },
]

// Custom Icon definitions (run only on client)
const createIcon = (color: string, animate: boolean) => {
  if (typeof window === 'undefined') return undefined as any
  return L.divIcon({
    className: 'custom-leaflet-icon',
    html: `
      <div class="relative flex items-center justify-center">
        <div class="absolute w-6 h-6 rounded-full opacity-30 ${animate ? 'animate-ping' : ''}" style="background-color: ${color}"></div>
        <div class="relative w-3 h-3 rounded-full border border-white/50" style="background-color: ${color}; box-shadow: 0 0 10px ${color}"></div>
      </div>
    `,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  })
}

// Component to handle map view changes from parent
function MapUpdater({ hoveredZone }: { hoveredZone: string | null }) {
  const map = useMap()
  
  useEffect(() => {
    if (hoveredZone) {
      // Map standard names to specific marker names if needed
      const lookupName = hoveredZone === 'Hurlingham' ? 'Kilimani' : 
                         hoveredZone === 'Parklands' ? 'Westlands' : hoveredZone
                         
      const city = cities.find(c => c.name === lookupName)
      if (city) {
        map.flyTo([city.lat, city.lng], 12, { duration: 1.5, easeLinearity: 0.25 })
      }
    }
  }, [hoveredZone, map])

  return null
}

interface Props {
  hoveredZone: string | null
  setHoveredZone: (zone: string | null) => void
}

export default function KenyaMap({ hoveredZone, setHoveredZone }: Props) {
  // Ensure we only render icons on the client
  if (typeof window === 'undefined') {
    return <div className="relative w-full aspect-[4/5] lg:aspect-square max-w-md mx-auto bg-navy border border-navy-mid/60 rounded-[2rem] p-2 shadow-xl shadow-cyan/10 animate-pulse" />
  }

  const liveIcon = createIcon('#2ECC5A', true)
  const expandingIcon = createIcon('#00C2F0', false)

  return (
    <div className="relative w-full aspect-[4/5] lg:aspect-square max-w-md mx-auto bg-navy border border-navy-mid/60 rounded-[2rem] p-2 shadow-xl overflow-hidden shadow-cyan/10">
      <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-[#0A1020] relative z-10">
        <MapContainer 
          center={[-0.5, 37.5]} // Center of Kenya
          zoom={6} 
          zoomControl={false}
          scrollWheelZoom={true}
          className="w-full h-full z-10"
          style={{ background: '#0A1020' }}
        >
          {/* CartoDB Dark Matter base map for ultra-premium sleek look */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          <MapUpdater hoveredZone={hoveredZone} />

          {cities.map((city) => (
            <Marker 
              key={city.name}
              position={[city.lat, city.lng]}
              icon={city.live ? liveIcon : expandingIcon}
              eventHandlers={{
                mouseover: () => setHoveredZone(city.name),
                mouseout: () => setHoveredZone(null),
              }}
            >
              <Popup className="premium-popup">
                <div className="font-syne">
                  <h4 className="font-bold text-sm" style={{ color: city.live ? '#2ECC5A' : '#00C2F0' }}>{city.name}</h4>
                  <p className="text-xs mt-1 text-gray-600 font-sans">{city.desc}</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider mt-2 opacity-60">Status: {city.stat}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Embedded styles for popup to avoid css clutter */}
      <style dangerouslySetInnerHTML={{__html: `
        .premium-popup .leaflet-popup-content-wrapper {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
          color: #060E2B;
        }
        .premium-popup .leaflet-popup-tip {
          background: rgba(255, 255, 255, 0.95);
        }
        .leaflet-container {
          background: #0A1020 !important;
          outline: none;
        }
        .leaflet-control-attribution {
          opacity: 0.3 !important;
          background: transparent !important;
          color: #fff !important;
          font-size: 8px !important;
        }
        .leaflet-control-attribution a {
          color: #fff !important;
        }
        .custom-leaflet-icon {
          background: transparent;
          border: none;
        }
      `}} />
    </div>
  )
}
