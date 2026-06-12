'use client'
import { useState, useEffect } from 'react'
import { IconSettings } from '@tabler/icons-react'

const fonts = [
  { id: 'syne', name: 'Original (Poppins)', variable: 'var(--font-syne-loaded)' },
  { id: 'outfit', name: 'Outfit (Sleek Tech)', variable: 'var(--font-outfit)' },
  { id: 'montserrat', name: 'Montserrat (Bold Classic)', variable: 'var(--font-montserrat)' },
  { id: 'playfair', name: 'Playfair (Elegant Serif)', variable: 'var(--font-playfair)' }
]

export default function FontTester() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentFont, setCurrentFont] = useState(fonts[0])

  useEffect(() => {
    // Apply font variable to root
    document.documentElement.style.setProperty('--font-syne-loaded', currentFont.variable)
  }, [currentFont])

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white shadow-2xl border border-gray-100 rounded-2xl p-4 w-64">
          <div className="text-xs font-bold text-gray-500 mb-3 uppercase tracking-wider">Heading Font Tester</div>
          <div className="flex flex-col gap-2">
            {fonts.map(font => (
              <button
                key={font.id}
                onClick={() => setCurrentFont(font)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm transition-colors ${
                  currentFont.id === font.id
                    ? 'bg-electric text-white font-bold'
                    : 'hover:bg-gray-50 text-gray-700 font-medium'
                }`}
              >
                {font.name}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-navy hover:bg-electric text-white rounded-full p-4 shadow-xl shadow-navy/20 transition-colors flex items-center justify-center cursor-pointer"
      >
        <IconSettings size={24} className={isOpen ? "animate-spin-slow" : ""} />
      </button>
    </div>
  )
}
