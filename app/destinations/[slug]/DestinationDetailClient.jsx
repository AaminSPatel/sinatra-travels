'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiClock, FiCalendar, FiMapPin, FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { RiWhatsappLine } from 'react-icons/ri'

export default function DestinationDetailClient({ dest }) {
  return (
    <main className="pt-20" style={{ background: '#0D1117' }}>
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: dest.gradient, minHeight: '360px' }}>
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link href="/destinations"
            className="inline-flex items-center gap-2 mb-6 font-inter text-sm transition-colors hover:text-white"
            style={{ color: 'rgba(255,249,244,0.5)', textDecoration: 'none' }}>
            <FiArrowLeft size={14} /> All Destinations
          </Link>
          <span className="font-outfit text-xs px-3 py-1.5 rounded-full inline-block mb-4"
            style={{ background: `${dest.color}20`, border: `1px solid ${dest.color}40`, color: dest.color, fontWeight: 700 }}>
            {dest.type}
          </span>
          <h1 className="font-outfit mb-3" style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#FFF9F4' }}>
            {dest.name}
          </h1>
          <div className="flex flex-wrap gap-5 mt-4">
            <span className="flex items-center gap-2 font-inter text-sm" style={{ color: 'rgba(255,249,244,0.6)' }}>
              <FiMapPin size={14} style={{ color: dest.color }} />{dest.location}
            </span>
            <span className="flex items-center gap-2 font-inter text-sm" style={{ color: 'rgba(255,249,244,0.6)' }}>
              <FiClock size={14} style={{ color: dest.color }} />{dest.duration}
            </span>
            <span className="flex items-center gap-2 font-inter text-sm" style={{ color: 'rgba(255,249,244,0.6)' }}>
              <FiCalendar size={14} style={{ color: dest.color }} />{dest.bestTime}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Overview */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-outfit mb-4" style={{ fontWeight: 800, fontSize: '1.5rem', color: '#FFF9F4' }}>About {dest.name}</h2>
          <p className="font-jakarta leading-relaxed" style={{ color: 'rgba(255,249,244,0.65)', fontSize: '1.05rem' }}>
            {dest.overview}
          </p>
        </motion.div>

        {/* History */}
        {dest.history && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-6 rounded-2xl" style={{ background: `${dest.color}08`, border: `1px solid ${dest.color}20` }}>
            <h2 className="font-outfit mb-3" style={{ fontWeight: 700, color: dest.color }}>✦ History & Legend</h2>
            <p className="font-jakarta leading-relaxed" style={{ color: 'rgba(255,249,244,0.6)' }}>{dest.history}</p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Attractions */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-outfit mb-4" style={{ fontWeight: 700, fontSize: '1.2rem', color: '#FFF9F4' }}>Key Attractions</h2>
            <ul className="space-y-2.5">
              {dest.attractions.map((a) => (
                <li key={a} className="flex items-center gap-3 font-jakarta text-sm"
                  style={{ color: 'rgba(255,249,244,0.6)' }}>
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: dest.color }} />{a}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Travel Tips */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-outfit mb-4" style={{ fontWeight: 700, fontSize: '1.2rem', color: '#FFF9F4' }}>Travel Tips</h2>
            <ul className="space-y-3">
              {dest.tips.map((t, i) => (
                <li key={i} className="flex items-start gap-3 font-jakarta text-sm"
                  style={{ color: 'rgba(255,249,244,0.6)' }}>
                  <span className="font-outfit text-xs mt-0.5 shrink-0" style={{ color: dest.color, fontWeight: 700 }}>0{i + 1}</span>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* How to Reach */}
        {dest.howToReach && (
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-6 rounded-2xl" style={{ background: 'rgba(255,249,244,0.03)', border: '1px solid rgba(255,249,244,0.06)' }}>
            <h2 className="font-outfit mb-3" style={{ fontWeight: 700, fontSize: '1.1rem', color: '#FFF9F4' }}>🗺️ How to Reach</h2>
            <p className="font-jakarta text-sm" style={{ color: 'rgba(255,249,244,0.55)', lineHeight: 1.7 }}>{dest.howToReach}</p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="p-8 rounded-2xl text-center"
          style={{ background: dest.gradient, border: `1px solid ${dest.color}30` }}>
          <h3 className="font-outfit mb-3" style={{ fontWeight: 800, fontSize: '1.5rem', color: '#FFF9F4' }}>
            Plan Your Visit to {dest.name}
          </h3>
          <p className="font-jakarta mb-6" style={{ color: 'rgba(255,249,244,0.6)' }}>
            Let Sinatra Travels handle all arrangements — transport, accommodation, guides, and darshan bookings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages" className="btn-sun px-7 py-3.5 rounded-full font-outfit inline-flex items-center justify-center gap-2"
              style={{ fontWeight: 700, textDecoration: 'none' }}>
              View Tour Packages <FiArrowRight size={15} />
            </Link>
            <a href="https://wa.me/919876543210" target="_blank"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-outfit"
              style={{ background: '#25D366', color: 'white', fontWeight: 700, textDecoration: 'none' }}>
              <RiWhatsappLine size={18} /> WhatsApp Enquiry
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}