'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    id: 1,
    name: 'Ramesh & Sunita Sharma',
    location: 'Indore, MP',
    tour: 'Char Dham Yatra',
    rating: 5,
    review: 'Sinatra Travels made our Char Dham dream come true. Every detail was perfectly arranged — from comfortable AC transport to peaceful hotel stays near the temples. We are forever grateful for this life-changing experience.',
    date: 'Oct 2024',
    stampColor: '#EE9B00',
    initials: 'RS',
  },
  {
    id: 2,
    name: 'Priya Agarwal',
    location: 'Bhopal, MP',
    tour: 'Jyotirlinga Tour',
    rating: 5,
    review: 'As a solo traveler, I was initially nervous about a pilgrimage tour. But the Sinatra Travels team made me feel completely safe and cared for throughout the Jyotirlinga circuit. The guides were wonderfully knowledgeable.',
    date: 'Sep 2024',
    stampColor: '#0A9396',
    initials: 'PA',
  },
  {
    id: 3,
    name: 'Vinod Patel Family',
    location: 'Surat, Gujarat',
    tour: 'Gujarat Temple Tour',
    rating: 5,
    review: 'We booked a family trip with 14 people including elderly parents. The team was incredibly thoughtful — arranging wheelchair support, dietary considerations, and a perfectly paced itinerary. Outstanding service!',
    date: 'Nov 2024',
    stampColor: '#005F73',
    initials: 'VP',
  },
  {
    id: 4,
    name: 'Dr. Kavita Mishra',
    location: 'Raipur, CG',
    tour: 'Vaishno Devi Tour',
    rating: 5,
    review: 'The Vaishno Devi tour exceeded all expectations. Sinatra Travels arranged our pony rides, comfortable accommodation, and even managed our Yatra registration seamlessly. My parents were absolutely delighted.',
    date: 'Aug 2024',
    stampColor: '#EE9B00',
    initials: 'KM',
  },
  {
    id: 5,
    name: 'Suresh & Meena Joshi',
    location: 'Ujjain, MP',
    tour: 'Kashi Ayodhya Tour',
    rating: 5,
    review: 'The Kashi–Ayodhya tour by Sinatra Travels was a spiritual feast. The Ganga Aarti experience at Dashashwamedh Ghat and Ram Lalla darshan were transcendent moments. Brilliant planning, incredible value.',
    date: 'Dec 2024',
    stampColor: '#0A9396',
    initials: 'SJ',
  },
]

function PassportCard({ testimonial, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: index % 2 === 0 ? -2 : 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ rotate: 0, scale: 1.03, zIndex: 10, y: -8 }}
      className="relative cursor-default"
      style={{ transformOrigin: 'center bottom' }}>
      {/* Passport-style card */}
      <div className="relative rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #1a1200, #0a1520)',
          border: `2px solid ${testimonial.stampColor}33`,
          boxShadow: hovered ? `0 20px 60px ${testimonial.stampColor}22` : 'none',
          transition: 'box-shadow 0.4s'
        }}>
        {/* Top colored stripe */}
        <div className="h-2 w-full" style={{ background: `linear-gradient(to right, ${testimonial.stampColor}, transparent)` }} />

        {/* Card content */}
        <div className="p-6">
          {/* Header row */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="w-11 h-11 rounded-full flex items-center justify-center font-outfit"
                style={{ background: `${testimonial.stampColor}22`, border: `2px solid ${testimonial.stampColor}44`, color: testimonial.stampColor, fontWeight: 800, fontSize: '0.85rem' }}>
                {testimonial.initials}
              </div>
              <div>
                <div className="font-outfit" style={{ color: '#FFF9F4', fontWeight: 700, fontSize: '0.9rem' }}>{testimonial.name}</div>
                <div className="font-inter text-xs" style={{ color: 'rgba(255,249,244,0.35)' }}>{testimonial.location}</div>
              </div>
            </div>

            {/* Stamp */}
            <motion.div
              animate={hovered ? { scale: [1, 1.2, 1], rotate: [-5, -5, -5] } : {}}
              className="w-14 h-14 rounded-full flex flex-col items-center justify-center text-center"
              style={{
                border: `3px solid ${testimonial.stampColor}`,
                color: testimonial.stampColor,
                transform: 'rotate(-12deg)',
                opacity: 0.85,
              }}>
              <div style={{ fontSize: '0.4rem', fontWeight: 800, lineHeight: 1.2, fontFamily: 'Outfit' }}>VERIFIED</div>
              <div style={{ fontSize: '0.55rem', fontWeight: 700, fontFamily: 'Outfit' }}>SINATRA</div>
              <div style={{ fontSize: '0.35rem', fontFamily: 'Inter' }}>{testimonial.date}</div>
            </motion.div>
          </div>

          {/* Stars */}
          <div className="flex gap-1 mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <FiStar key={i} size={13} style={{ color: '#EE9B00', fill: '#EE9B00' }} />
            ))}
          </div>

          {/* Review */}
          <p className="font-jakarta text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,249,244,0.65)' }}>
            "{testimonial.review}"
          </p>

          {/* Tour tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-outfit text-xs"
            style={{ background: `${testimonial.stampColor}15`, border: `1px solid ${testimonial.stampColor}30`, color: testimonial.stampColor, fontWeight: 700 }}>
            ✈ {testimonial.tour}
          </div>
        </div>

        {/* Decorative barcode-like bottom */}
        <div className="px-6 pb-4 flex gap-0.5 opacity-20">
          {Array.from({ length: 28 }).map((_, i) => (
            <div key={i} className="flex-1 rounded-full" style={{ height: Math.random() > 0.6 ? '12px' : '8px', background: testimonial.stampColor }} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="section-padding overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0D1117, #161B22)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-inter text-sm font-semibold tracking-widest uppercase"
            style={{ color: '#EE9B00' }}>
            Pilgrim Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
            className="font-outfit mt-3 mb-4" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#FFF9F4' }}>
            10,000+ Souls Touched
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}
            className="font-jakarta max-w-xl mx-auto" style={{ color: 'rgba(255,249,244,0.5)', fontSize: '1.05rem' }}>
            Every review is a real memory made. Here's what our travelers say about their sacred journeys with Sinatra Travels.
          </motion.p>
        </div>

        {/* Passport cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => <PassportCard key={t.id} testimonial={t} index={i} />)}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
          {testimonials.slice(3).map((t, i) => <PassportCard key={t.id} testimonial={t} index={i + 3} />)}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }}
          className="text-center mt-12">
          <a href="https://g.co/kgs/sinatratravels" target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-outfit transition-all duration-200 hover:scale-105"
            style={{ background: 'rgba(238,155,0,0.1)', border: '1px solid rgba(238,155,0,0.25)', color: '#EE9B00', fontWeight: 600, textDecoration: 'none' }}>
            <FiStar size={15} style={{ fill: '#EE9B00' }} /> View All 2,847 Reviews on Google
          </a>
        </motion.div>
      </div>
    </section>
  )
}