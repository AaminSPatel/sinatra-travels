'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCheck, FiX, FiClock, FiUsers, FiMapPin, FiCalendar, FiArrowRight, FiArrowLeft, FiPhone } from 'react-icons/fi'
import { RiWhatsappLine } from 'react-icons/ri'

export default function PackageDetailClient({ pkg }) {
  return (
    <main className="pt-20" style={{ background: '#0D1117' }}>
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: pkg.gradient, minHeight: '380px' }}>
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link href="/packages"
            className="inline-flex items-center gap-2 mb-6 font-inter text-sm transition-colors hover:text-white"
            style={{ color: 'rgba(255,249,244,0.5)', textDecoration: 'none' }}>
            <FiArrowLeft size={14} /> All Packages
          </Link>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="font-outfit text-xs px-3 py-1.5 rounded-full"
              style={{ background: `${pkg.accentColor}20`, border: `1px solid ${pkg.accentColor}40`, color: pkg.accentColor, fontWeight: 700 }}>
              {pkg.category}
            </span>
            {pkg.badge && (
              <span className="font-outfit text-xs px-3 py-1.5 rounded-full"
                style={{ background: `${pkg.badgeColor}20`, border: `1px solid ${pkg.badgeColor}40`, color: pkg.badgeColor, fontWeight: 700 }}>
                ★ {pkg.badge}
              </span>
            )}
          </div>
          <h1 className="font-outfit mb-3" style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#FFF9F4' }}>
            {pkg.name}
          </h1>
          <p className="font-jakarta text-xl mb-8" style={{ color: 'rgba(255,249,244,0.65)' }}>{pkg.subtitle}</p>
          <div className="flex flex-wrap gap-5">
            {[
              { icon: FiClock, label: pkg.duration },
              { icon: FiUsers, label: pkg.groupSize },
              { icon: FiMapPin, label: pkg.departurePoint },
              { icon: FiCalendar, label: pkg.bestTime },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-2 font-inter text-sm"
                style={{ color: 'rgba(255,249,244,0.6)' }}>
                <Icon size={14} style={{ color: pkg.accentColor }} />{label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-outfit mb-4" style={{ fontWeight: 800, fontSize: '1.5rem', color: '#FFF9F4' }}>Tour Overview</h2>
              <div className="font-jakarta leading-relaxed whitespace-pre-line" style={{ color: 'rgba(255,249,244,0.6)' }}>
                {pkg.overview}
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-outfit mb-5" style={{ fontWeight: 800, fontSize: '1.5rem', color: '#FFF9F4' }}>Tour Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((h, i) => (
                  <motion.div key={h} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 rounded-xl"
                    style={{ background: 'rgba(255,249,244,0.03)', border: '1px solid rgba(255,249,244,0.06)' }}>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: `${pkg.accentColor}20`, border: `1px solid ${pkg.accentColor}40` }}>
                      <FiCheck size={11} style={{ color: pkg.accentColor }} />
                    </div>
                    <span className="font-jakarta text-sm" style={{ color: 'rgba(255,249,244,0.65)' }}>{h}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Itinerary */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-outfit mb-6" style={{ fontWeight: 800, fontSize: '1.5rem', color: '#FFF9F4' }}>Day-by-Day Itinerary</h2>
              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-px" style={{ background: `linear-gradient(to bottom, ${pkg.accentColor}, transparent)` }} />
                <div className="space-y-0">
                  {pkg.itinerary.map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}
                      className="relative flex gap-6 pb-8">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-outfit text-xs z-10"
                        style={{ background: `${pkg.accentColor}20`, border: `2px solid ${pkg.accentColor}`, color: pkg.accentColor, fontWeight: 700, fontSize: '0.7rem' }}>
                        {typeof item.day === 'number' ? `D${item.day}` : item.day.replace('Day ', '').split('-')[0]}
                      </div>
                      <div className="flex-1 pt-2">
                        <div className="font-outfit mb-1" style={{ color: '#FFF9F4', fontWeight: 700 }}>{item.title}</div>
                        <div className="font-jakarta text-sm" style={{ color: 'rgba(255,249,244,0.5)' }}>{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Inclusions / Exclusions */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl" style={{ background: 'rgba(10,147,150,0.06)', border: '1px solid rgba(10,147,150,0.15)' }}>
                  <h3 className="font-outfit mb-4" style={{ fontWeight: 700, color: '#0A9396' }}>✓ Inclusions</h3>
                  <ul className="space-y-2">
                    {pkg.inclusions.map(item => (
                      <li key={item} className="flex items-center gap-2.5 font-jakarta text-sm" style={{ color: 'rgba(255,249,244,0.65)' }}>
                        <FiCheck size={13} style={{ color: '#0A9396', flexShrink: 0 }} />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-2xl" style={{ background: 'rgba(255,100,100,0.04)', border: '1px solid rgba(255,100,100,0.1)' }}>
                  <h3 className="font-outfit mb-4" style={{ fontWeight: 700, color: 'rgba(255,100,100,0.7)' }}>✗ Exclusions</h3>
                  <ul className="space-y-2">
                    {pkg.exclusions.map(item => (
                      <li key={item} className="flex items-center gap-2.5 font-jakarta text-sm" style={{ color: 'rgba(255,249,244,0.5)' }}>
                        <FiX size={13} style={{ color: 'rgba(255,100,100,0.5)', flexShrink: 0 }} />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {pkg.tags.map(tag => (
                <span key={tag} className="font-outfit text-xs px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(255,249,244,0.04)', border: '1px solid rgba(255,249,244,0.08)', color: 'rgba(255,249,244,0.4)' }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: sticky booking card */}
          <div>
            <div className="sticky top-24">
              <div className="rounded-2xl overflow-hidden"
                style={{ background: '#161B22', border: '1px solid rgba(255,249,244,0.08)' }}>
                <div className="p-6" style={{ borderBottom: '1px solid rgba(255,249,244,0.06)' }}>
                  <div className="font-inter text-xs mb-1" style={{ color: 'rgba(255,249,244,0.35)' }}>Starting from</div>
                  <div className="font-outfit" style={{ color: pkg.accentColor || '#EE9B00', fontWeight: 900, fontSize: '2.5rem', lineHeight: 1 }}>
                    ₹{pkg.price.toLocaleString('en-IN')}
                  </div>
                  <div className="font-inter text-sm mt-1 mb-2" style={{ color: 'rgba(255,249,244,0.35)' }}>per person (twin sharing)</div>
                  {pkg.groupPrice && (
                    <div className="font-outfit text-sm" style={{ color: '#0A9396', fontWeight: 600 }}>
                      Group price: ₹{pkg.groupPrice.toLocaleString('en-IN')} /person
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  <a href="https://wa.me/919876543210?text=I want to book: " target="_blank"
                    className="w-full py-3.5 rounded-xl font-outfit flex items-center justify-center gap-2"
                    style={{ background: '#25D366', color: 'white', fontWeight: 700, textDecoration: 'none' }}>
                    <RiWhatsappLine size={18} /> Book on WhatsApp
                  </a>
                  <a href="tel:+919876543210"
                    className="w-full py-3.5 rounded-xl font-outfit flex items-center justify-center gap-2"
                    style={{ background: 'rgba(10,147,150,0.15)', border: '1px solid rgba(10,147,150,0.3)', color: '#0A9396', fontWeight: 700, textDecoration: 'none' }}>
                    <FiPhone size={16} /> Call for Custom Quote
                  </a>
                  <Link href="/contact"
                    className="w-full py-3.5 rounded-xl font-outfit flex items-center justify-center gap-2"
                    style={{ background: 'rgba(255,249,244,0.05)', border: '1px solid rgba(255,249,244,0.08)', color: 'rgba(255,249,244,0.6)', fontWeight: 600, textDecoration: 'none' }}>
                    Get Brochure / Quote
                  </Link>
                </div>

                <div className="px-6 pb-6 space-y-3">
                  {[
                    { label: 'Duration', value: pkg.duration },
                    { label: 'Difficulty', value: pkg.difficulty },
                    { label: 'Best Time', value: pkg.bestTime },
                    { label: 'Group Size', value: pkg.groupSize },
                    { label: 'Departs from', value: pkg.departurePoint },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-start">
                      <span className="font-inter text-xs" style={{ color: 'rgba(255,249,244,0.35)' }}>{label}</span>
                      <span className="font-outfit text-xs text-right" style={{ color: 'rgba(255,249,244,0.7)', fontWeight: 600, maxWidth: '60%' }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}