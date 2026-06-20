'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const moods = [
  {
    id: 'spiritual',
    emoji: '🕉️',
    title: 'Spiritual Journey',
    tagline: 'Seek the divine',
    color: '#EE9B00',
    description: 'Deep temple visits, aarti ceremonies, and sacred rituals. Connect with the divine at India\'s most powerful shrines.',
    packages: ['Char Dham Yatra', 'Jyotirlinga Circuit', 'Kashi–Ayodhya Tour'],
    bg: 'linear-gradient(135deg, rgba(238,155,0,0.15), rgba(238,155,0,0.03))',
  },
  {
    id: 'family',
    emoji: '👨‍👩‍👧‍👦',
    title: 'Family Trip',
    tagline: 'Together in faith',
    color: '#0A9396',
    description: 'Comfortable, well-paced tours designed for families with children and elderly members. Safe, joyful, and memorable.',
    packages: ['Ujjain Omkareshwar', 'Mathura Vrindavan', 'Vaishno Devi'],
    bg: 'linear-gradient(135deg, rgba(10,147,150,0.15), rgba(10,147,150,0.03))',
  },
  {
    id: 'luxury',
    emoji: '✨',
    title: 'Luxury Tour',
    tagline: 'Sacred in style',
    color: '#EE9B00',
    description: 'Premium hotels, private vehicles, VIP darshan passes, and personal travel concierge. Experience pilgrimage in ultimate comfort.',
    packages: ['Premium Char Dham', 'Tirupati VIP Darshan', 'South India Circuit'],
    bg: 'linear-gradient(135deg, rgba(238,155,0,0.15), rgba(0,95,115,0.1))',
  },
  {
    id: 'senior',
    emoji: '🙏',
    title: 'Senior Citizen Tour',
    tagline: 'Care at every step',
    color: '#005F73',
    description: 'Specially designed for older pilgrims with medical support, wheelchair assistance, slower pace, and extra comfort throughout.',
    packages: ['Senior Char Dham', 'Easy Jyotirlinga', 'Rameswaram by Air'],
    bg: 'linear-gradient(135deg, rgba(0,95,115,0.15), rgba(0,95,115,0.03))',
  },
]

export default function MoodSelector() {
  const [selected, setSelected] = useState(null)
  const selectedMood = moods.find(m => m.id === selected)

  return (
    <section className="section-padding" style={{ background: '#0D1117' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-inter text-sm font-semibold tracking-widest uppercase"
            style={{ color: '#0A9396' }}>
            Find Your Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
            className="font-outfit mt-3" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#FFF9F4' }}>
            What Kind of Traveler
            <span className="gradient-text"> Are You?</span>
          </motion.h2>
        </div>

        {/* Mood buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {moods.map((mood, i) => (
            <motion.button
              key={mood.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              onClick={() => setSelected(selected === mood.id ? null : mood.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative flex flex-col items-center p-6 rounded-2xl text-center transition-all duration-300"
              style={{
                background: selected === mood.id ? mood.bg : 'rgba(255,249,244,0.03)',
                border: selected === mood.id ? `2px solid ${mood.color}50` : '2px solid rgba(255,249,244,0.07)',
                cursor: 'pointer',
              }}>
              <span className="text-4xl mb-3">{mood.emoji}</span>
              <div className="font-outfit" style={{ color: selected === mood.id ? mood.color : '#FFF9F4', fontWeight: 700, fontSize: '0.95rem' }}>
                {mood.title}
              </div>
              <div className="font-inter text-xs mt-1" style={{ color: 'rgba(255,249,244,0.35)' }}>
                {mood.tagline}
              </div>
              {selected === mood.id && (
                <motion.div
                  layoutId="mood-indicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                  style={{ background: mood.color }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Result panel */}
        <AnimatePresence>
          {selectedMood && (
            <motion.div
              key={selectedMood.id}
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden">
              <div className="p-8 rounded-2xl"
                style={{ background: selectedMood.bg, border: `1px solid ${selectedMood.color}30` }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="text-5xl mb-4">{selectedMood.emoji}</div>
                    <h3 className="font-outfit mb-3" style={{ color: '#FFF9F4', fontWeight: 800, fontSize: '1.5rem' }}>
                      {selectedMood.title}
                    </h3>
                    <p className="font-jakarta leading-relaxed mb-4" style={{ color: 'rgba(255,249,244,0.65)' }}>
                      {selectedMood.description}
                    </p>
                    <Link href="/packages"
                      className="btn-sun inline-flex items-center gap-2 px-6 py-3 rounded-full font-outfit"
                      style={{ fontWeight: 700, textDecoration: 'none' }}>
                      View Matching Packages <FiArrowRight size={15} />
                    </Link>
                  </div>
                  <div>
                    <div className="font-outfit text-xs mb-4 tracking-widest uppercase" style={{ color: selectedMood.color, fontWeight: 700 }}>
                      Recommended For You
                    </div>
                    <div className="flex flex-col gap-3">
                      {selectedMood.packages.map((pkg) => (
                        <div key={pkg} className="flex items-center gap-3 p-4 rounded-xl"
                          style={{ background: 'rgba(13,17,23,0.5)', border: '1px solid rgba(255,249,244,0.06)' }}>
                          <div className="w-2 h-2 rounded-full" style={{ background: selectedMood.color, flexShrink: 0 }} />
                          <span className="font-jakarta" style={{ color: 'rgba(255,249,244,0.75)', fontWeight: 500 }}>{pkg}</span>
                          <FiArrowRight size={14} style={{ color: selectedMood.color, marginLeft: 'auto', flexShrink: 0 }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!selected && (
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center font-inter text-sm mt-4"
            style={{ color: 'rgba(255,249,244,0.25)' }}>
            Select your travel style above to see personalized package recommendations
          </motion.p>
        )}
      </div>
    </section>
  )
}