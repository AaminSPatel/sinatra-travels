'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const collageImages = [
  { label: 'Mahakaleshwar Temple', size: 'large', aspectRatio: '4/5', gradient: 'from-orange-900/60 to-transparent', delay: 0 },
  { label: 'Kedarnath Peak', size: 'medium', aspectRatio: '3/4', gradient: 'from-blue-900/60 to-transparent', delay: 0.1 },
  { label: 'Ganga Ghats, Varanasi', size: 'medium', aspectRatio: '4/3', gradient: 'from-amber-900/60 to-transparent', delay: 0.2 },
  { label: 'Pilgrims at Badrinath', size: 'small', aspectRatio: '1/1', gradient: 'from-slate-900/60 to-transparent', delay: 0.15 },
  { label: 'Omkareshwar Island', size: 'medium', aspectRatio: '3/4', gradient: 'from-teal-900/60 to-transparent', delay: 0.25 },
  { label: 'Aerial Temple View', size: 'small', aspectRatio: '4/3', gradient: 'from-indigo-900/60 to-transparent', delay: 0.3 },
]

const imageUrls = [
  'mahakal.jfif',
  'kedarnath.jfif',
  'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800&q=80',
  'badrinath.jfif',
  'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800&q=80',
  'ellora.jfif',
]

function CollageCard({ label, delay, imageUrl, style, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      className="relative overflow-hidden rounded-2xl group cursor-pointer"
      style={{ ...style }}>
      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      <div className="absolute bottom-3 left-3 right-3">
        <span className="font-outfit text-xs px-2.5 py-1 rounded-full"
          style={{ background: 'rgba(255,249,244,0.1)', backdropFilter: 'blur(10px)', color: '#FFF9F4', fontWeight: 600 }}>
          {label}
        </span>
      </div>
      {children}
    </motion.div>
  )
}

export default function CollageSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <section ref={ref} className="section-padding overflow-hidden" style={{ background: '#0D1117' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}>
              <span className="font-inter text-sm font-semibold tracking-widest uppercase mb-4 block"
                style={{ color: '#0A9396' }}>
                Sacred India
              </span>
              <h2 className="font-outfit mb-6 leading-tight"
                style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#FFF9F4' }}>
                Where Every Journey
                <br />Becomes a <span className="gradient-text">Story</span>
              </h2>
              <p className="font-jakarta text-lg leading-relaxed mb-8"
                style={{ color: 'rgba(255,249,244,0.6)' }}>
                From the misty peaks of the Himalayas to the ancient ghats of Varanasi, from Jyotirlinga temples to the divine shores of Rameswaram — Sinatra Travels takes you to the heart of India's most sacred destinations.
              </p>
              <p className="font-jakarta leading-relaxed mb-8"
                style={{ color: 'rgba(255,249,244,0.45)' }}>
                We have been crafting unforgettable pilgrimage experiences for over 15 years, combining spiritual depth with modern comfort. Every tour is designed to nourish the soul while ensuring your complete peace of mind.
              </p>
              <div className="flex gap-8">
                {[['10,000+', 'Happy Pilgrims'], ['150+', 'Sacred Routes'], ['15+', 'Years of Trust']].map(([num, label]) => (
                  <div key={label}>
                    <div className="font-outfit text-2xl mb-1" style={{ color: '#EE9B00', fontWeight: 800 }}>{num}</div>
                    <div className="font-inter text-xs" style={{ color: 'rgba(255,249,244,0.4)' }}>{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Collage grid */}
          <div className="relative">
            {/* Main grid */}
            <div className="grid grid-cols-3 gap-3 h-[520px]">
              {/* Column 1 - tall */}
              <motion.div style={{ y: y1 }} className="flex flex-col gap-3 col-span-1">
                <CollageCard label={collageImages[0].label} delay={0} imageUrl={imageUrls[0]}
                  style={{ flex: 3, minHeight: 0 }} />
                <CollageCard label={collageImages[3].label} delay={0.15} imageUrl={imageUrls[3]}
                  style={{ flex: 2, minHeight: 0 }} />
              </motion.div>

              {/* Column 2 - middle offset */}
              <motion.div style={{ y: y2 }} className="flex flex-col gap-3 col-span-1 mt-8">
                <CollageCard label={collageImages[1].label} delay={0.1} imageUrl={imageUrls[1]}
                  style={{ flex: 2, minHeight: 0 }} />
                <CollageCard label={collageImages[4].label} delay={0.25} imageUrl={imageUrls[4]}
                  style={{ flex: 3, minHeight: 0 }} />
              </motion.div>

              {/* Column 3 */}
              <motion.div style={{ y: y1 }} className="flex flex-col gap-3 col-span-1 mt-4">
                <CollageCard label={collageImages[2].label} delay={0.2} imageUrl={imageUrls[2]}
                  style={{ flex: 2, minHeight: 0 }} />
                <CollageCard label={collageImages[5].label} delay={0.3} imageUrl={imageUrls[5]}
                  style={{ flex: 2, minHeight: 0 }} />
              </motion.div>
            </div>

            {/* Floating tag */}
            <motion.div
              className="absolute -bottom-4 -left-4 glass px-5 py-3 rounded-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}>
              <div className="font-outfit text-2xl" style={{ color: '#EE9B00', fontWeight: 800 }}>4.9 ★</div>
              <div className="font-inter text-xs" style={{ color: 'rgba(255,249,244,0.5)' }}>2,847 Reviews</div>
            </motion.div>

            {/* Floating destination count */}
            <motion.div
              className="absolute -top-4 -right-4 glass px-5 py-3 rounded-2xl"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}>
              <div className="font-outfit text-2xl" style={{ color: '#0A9396', fontWeight: 800 }}>20+</div>
              <div className="font-inter text-xs" style={{ color: 'rgba(255,249,244,0.5)' }}>Destinations</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}