'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FiMapPin, FiClock, FiCalendar, FiArrowRight } from 'react-icons/fi'
import { destinations } from '@/lib/destinationsData'

const types = ['All', 'Jyotirlinga', 'Char Dham', 'Shakti Peeth', 'Sacred City', 'Krishna Dham']

function DestinationCard({ dest, index }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl flex flex-col"
      style={{ background: '#161B22', border: '1px solid rgba(255,249,244,0.07)', minHeight: '340px' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: '200px', flexShrink: 0 }}>
        {!imgError ? (
          <img
            src={dest.image}
            alt={dest.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl"
            style={{ background: dest.gradient }}>
            🛕
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(22,27,34,1) 0%, rgba(22,27,34,0.4) 50%, transparent 100%)' }} />

        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <span className="font-outfit text-xs px-2.5 py-1 rounded-full"
            style={{ background: `${dest.color}22`, border: `1px solid ${dest.color}44`, color: dest.color, fontWeight: 700, backdropFilter: 'blur(10px)', background: 'rgba(0,0,0,0.5)' }}>
            {dest.type.split(' + ')[0]}
          </span>
        </div>

        {/* Duration badge */}
        <div className="absolute top-3 right-3">
          <span className="font-inter text-xs px-2.5 py-1 rounded-full flex items-center gap-1"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', color: 'rgba(255,249,244,0.8)', border: '1px solid rgba(255,249,244,0.1)' }}>
            <FiClock size={10} />{dest.duration}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-outfit mb-1 leading-tight transition-colors group-hover:text-white"
          style={{ color: '#FFF9F4', fontWeight: 800, fontSize: '1.05rem' }}>
          {dest.name}
        </h3>
        <div className="flex items-center gap-1.5 mb-3">
          <FiMapPin size={11} style={{ color: dest.color, flexShrink: 0 }} />
          <span className="font-inter text-xs" style={{ color: 'rgba(255,249,244,0.4)' }}>{dest.location}</span>
        </div>
        <p className="font-jakarta text-xs leading-relaxed mb-4 flex-1"
          style={{ color: 'rgba(255,249,244,0.5)', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {dest.overview.slice(0, 120)}...
        </p>

        <div className="flex items-center justify-between pt-3"
          style={{ borderTop: '1px solid rgba(255,249,244,0.06)' }}>
          <div className="flex items-center gap-1.5">
            <FiCalendar size={11} style={{ color: dest.color }} />
            <span className="font-inter text-xs" style={{ color: 'rgba(255,249,244,0.35)' }}>{dest.bestTime}</span>
          </div>
          <Link href={`/destinations/${dest.slug}`}
            className="flex items-center gap-1 font-outfit text-xs px-3 py-1.5 rounded-full transition-all group-hover:gap-2"
            style={{ background: `${dest.color}15`, border: `1px solid ${dest.color}30`, color: dest.color, fontWeight: 700, textDecoration: 'none' }}>
            Explore <FiArrowRight size={11} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function DestinationsClient() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? destinations
    : destinations.filter(d => d.type.toLowerCase().includes(filter.toLowerCase()))

  return (
    <section className="pb-20" style={{ background: '#0D1117' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {types.map((t) => (
            <button key={t} onClick={() => setFilter(t)}
              className="px-5 py-2 rounded-full font-outfit text-sm transition-all duration-200"
              style={{
                background: filter === t ? 'linear-gradient(135deg, #0A9396, #005F73)' : 'rgba(255,249,244,0.05)',
                color: filter === t ? 'white' : 'rgba(255,249,244,0.5)',
                border: filter === t ? 'none' : '1px solid rgba(255,249,244,0.08)',
                fontWeight: 600, cursor: 'pointer',
              }}>
              {t}
            </button>
          ))}
        </div>

        {/* Count */}
        <div className="text-center mb-8">
          <span className="font-inter text-sm" style={{ color: 'rgba(255,249,244,0.3)' }}>
            Showing {filtered.length} sacred destination{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((dest, i) => (
            <DestinationCard key={dest.slug} dest={dest} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl text-center"
          style={{ background: 'rgba(10,147,150,0.06)', border: '1px solid rgba(10,147,150,0.15)' }}>
          <h3 className="font-outfit mb-3" style={{ fontWeight: 800, fontSize: '1.5rem', color: '#FFF9F4' }}>
            Ready to Visit Any of These Sacred Destinations?
          </h3>
          <p className="font-jakarta mb-6 max-w-xl mx-auto" style={{ color: 'rgba(255,249,244,0.55)' }}>
            Sinatra Travels offers expert-curated tour packages to all 20 destinations above from Indore. Get a free personalized itinerary today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages"
              className="btn-sun px-7 py-3.5 rounded-full font-outfit inline-flex items-center justify-center gap-2"
              style={{ fontWeight: 700, textDecoration: 'none' }}>
              View All Packages <FiArrowRight size={15} />
            </Link>
            <a href="https://wa.me/919876543210" target="_blank"
              className="btn-glass px-7 py-3.5 rounded-full font-outfit inline-flex items-center justify-center gap-2"
              style={{ fontWeight: 600, textDecoration: 'none' }}>
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}