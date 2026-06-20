'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiClock, FiUsers, FiArrowRight, FiStar, FiMapPin } from 'react-icons/fi'
import { packages } from '@/lib/packagesData'

const categories = ['All', 'Char Dham', 'Jyotirlinga', 'South India', 'North India', 'Weekend Tour', 'West India', 'East India', 'Shakti Peeth']

function PackageCard({ pkg, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="group relative overflow-hidden rounded-2xl flex flex-col"
      style={{
        background: pkg.gradient || 'linear-gradient(135deg, #161B22, #0D1117)',
        border: `1px solid rgba(255,249,244,0.07)`,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
      {/* Badge */}
      {pkg.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="font-outfit text-xs px-3 py-1.5 rounded-full"
            style={{ background: `${pkg.badgeColor}20`, border: `1px solid ${pkg.badgeColor}40`, color: pkg.badgeColor, fontWeight: 700 }}>
            {pkg.badge}
          </span>
        </div>
      )}

      {/* Image placeholder with gradient bg */}
      <div className="h-44 w-full relative overflow-hidden"
        style={{ background: pkg.gradient }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20">🏛️</div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {/* Destinations */}
        <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
          {pkg.destinations.slice(0, 3).map((d) => (
            <span key={d} className="font-inter text-xs px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(13,17,23,0.7)', backdropFilter: 'blur(10px)', color: 'rgba(255,249,244,0.7)' }}>
              {d}
            </span>
          ))}
          {pkg.destinations.length > 3 && (
            <span className="font-inter text-xs px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(13,17,23,0.7)', color: 'rgba(255,249,244,0.5)' }}>
              +{pkg.destinations.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-inter text-xs" style={{ color: pkg.accentColor || '#0A9396' }}>
            {pkg.category}
          </span>
        </div>
        <h3 className="font-outfit mb-1.5 group-hover:text-white transition-colors"
          style={{ color: '#FFF9F4', fontWeight: 800, fontSize: '1.1rem', lineHeight: 1.3 }}>
          {pkg.name}
        </h3>
        <p className="font-jakarta text-sm mb-4 flex-1"
          style={{ color: 'rgba(255,249,244,0.5)', lineHeight: 1.6 }}>
          {pkg.subtitle}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 mb-4">
          <span className="flex items-center gap-1.5 font-inter text-xs" style={{ color: 'rgba(255,249,244,0.4)' }}>
            <FiClock size={11} style={{ color: pkg.accentColor }} />{pkg.duration}
          </span>
          <span className="flex items-center gap-1.5 font-inter text-xs" style={{ color: 'rgba(255,249,244,0.4)' }}>
            <FiUsers size={11} style={{ color: pkg.accentColor }} />{pkg.groupSize}
          </span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4"
          style={{ borderTop: '1px solid rgba(255,249,244,0.06)' }}>
          <div>
            <div className="font-outfit" style={{ color: pkg.accentColor || '#EE9B00', fontWeight: 800, fontSize: '1.3rem' }}>
              ₹{pkg.price.toLocaleString('en-IN')}
            </div>
            <div className="font-inter text-xs" style={{ color: 'rgba(255,249,244,0.3)' }}>per person</div>
          </div>
          <Link href={`/packages/${pkg.slug}`}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full font-outfit text-sm group-hover:gap-2.5 transition-all"
            style={{ background: `${pkg.accentColor || '#0A9396'}15`, border: `1px solid ${pkg.accentColor || '#0A9396'}30`, color: pkg.accentColor || '#0A9396', fontWeight: 700, textDecoration: 'none' }}>
            View Details <FiArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function PackagesClient() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? packages : packages.filter(p => p.category === filter)
  const featured = packages.filter(p => p.featured)

  return (
    <section className="pb-20" style={{ background: '#0D1117' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Featured Char Dham Package */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="font-inter text-sm font-semibold tracking-widest uppercase" style={{ color: '#EE9B00' }}>
              ✦ Signature Package ✦
            </span>
          </div>
          {(() => {
            const charDham = packages.find(p => p.slug === 'char-dham-yatra')
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-3xl"
                style={{ background: charDham.gradient, border: '1px solid rgba(238,155,0,0.2)', minHeight: 280 }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  <div className="md:col-span-2 p-8 md:p-10">
                    <span className="font-outfit text-xs px-3 py-1.5 rounded-full inline-block mb-4"
                      style={{ background: 'rgba(238,155,0,0.15)', border: '1px solid rgba(238,155,0,0.35)', color: '#EE9B00', fontWeight: 700 }}>
                      ★ Most Popular — 2024
                    </span>
                    <h2 className="font-outfit mb-2" style={{ fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#FFF9F4' }}>
                      Char Dham Yatra
                    </h2>
                    <p className="font-jakarta mb-4" style={{ color: 'rgba(255,249,244,0.6)', maxWidth: 480, lineHeight: 1.7 }}>
                      India's ultimate Himalayan pilgrimage — Yamunotri, Gangotri, Kedarnath & Badrinath. 11 days of spiritual transformation in the abode of the gods.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {['11 Days', '10 Nights', 'Group & Private', 'Helicopter Option'].map(t => (
                        <span key={t} className="font-inter text-xs px-3 py-1 rounded-full"
                          style={{ background: 'rgba(255,249,244,0.06)', border: '1px solid rgba(255,249,244,0.1)', color: 'rgba(255,249,244,0.6)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link href="/packages/char-dham-yatra"
                      className="btn-sun px-7 py-3.5 rounded-full font-outfit inline-flex items-center gap-2"
                      style={{ fontWeight: 700, textDecoration: 'none' }}>
                      View Full Itinerary <FiArrowRight size={15} />
                    </Link>
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center items-center md:items-end"
                    style={{ borderLeft: '1px solid rgba(255,249,244,0.06)' }}>
                    <div className="text-center md:text-right">
                      <div className="font-inter text-xs mb-1" style={{ color: 'rgba(255,249,244,0.35)' }}>Starting from</div>
                      <div className="font-outfit" style={{ color: '#EE9B00', fontWeight: 900, fontSize: '3rem', lineHeight: 1 }}>₹24,999</div>
                      <div className="font-inter text-sm mb-2" style={{ color: 'rgba(255,249,244,0.35)' }}>per person (twin sharing)</div>
                      <div className="font-outfit text-sm" style={{ color: '#0A9396', fontWeight: 600 }}>Group price: ₹21,999</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })()}
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className="px-5 py-2 rounded-full font-outfit text-sm transition-all duration-200"
              style={{
                background: filter === cat ? 'linear-gradient(135deg, #0A9396, #005F73)' : 'rgba(255,249,244,0.05)',
                color: filter === cat ? 'white' : 'rgba(255,249,244,0.5)',
                border: filter === cat ? 'none' : '1px solid rgba(255,249,244,0.08)',
                fontWeight: 600, cursor: 'pointer',
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((pkg, i) => (
            <PackageCard key={pkg.slug} pkg={pkg} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl text-center"
          style={{ background: 'rgba(10,147,150,0.06)', border: '1px solid rgba(10,147,150,0.15)' }}>
          <h3 className="font-outfit mb-3" style={{ fontWeight: 800, fontSize: '1.5rem', color: '#FFF9F4' }}>
            Can't Find Your Perfect Package?
          </h3>
          <p className="font-jakarta mb-6" style={{ color: 'rgba(255,249,244,0.55)' }}>
            We design completely custom pilgrimage tours. Tell us your dates, destinations, budget, and group size — we'll craft a bespoke itinerary just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"
              className="btn-sun px-7 py-3.5 rounded-full font-outfit inline-flex items-center justify-center gap-2"
              style={{ fontWeight: 700, textDecoration: 'none' }}>
              Request Custom Package
            </Link>
            <a href="https://wa.me/919876543210?text=I want a custom pilgrimage package" target="_blank"
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