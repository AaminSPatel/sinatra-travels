'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight, FiMapPin, FiClock, FiUsers, FiCheck } from 'react-icons/fi'
import { RiMountainLine } from 'react-icons/ri'
import { FaMountain } from 'react-icons/fa'

const itinerary = [
  { day: 'Day 1-2', place: 'Haridwar & Rishikesh', desc: 'Ganga Aarti, Triveni Ghat, Lakshman Jhula' },
  { day: 'Day 3-4', place: 'Kedarnath', desc: 'Trek to Kedarnath shrine, darshan, overnight' },
  { day: 'Day 5-6', place: 'Badrinath', desc: 'Mana village, Tapt Kund, Badri Narayan temple' },
  { day: 'Day 7-8', place: 'Gangotri', desc: 'Ganga origin, Surya Kund, Bhagirathi peaks' },
  { day: 'Day 9-10', place: 'Yamunotri', desc: 'Yamuna devi temple, hot springs, return' },
]

const highlights = [
  'All 4 Dhams covered in one sacred journey',
  'Experienced guides & local experts',
  'AC transport entire route',
  'Temple-side hotel accommodations',
  'Helicopter option for Kedarnath',
  'Vegetarian meals included',
  'Medical support for senior pilgrims',
  '24/7 travel assistance',
]

export default function FeaturedPackage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <section ref={ref} className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #161B22, #0D1117)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-inter text-sm font-semibold tracking-widest uppercase"
            style={{ color: '#EE9B00' }}>
            ✦ Signature Package ✦
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
            className="font-outfit mt-3" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#FFF9F4' }}>
            The Ultimate <span className="gradient-text">Char Dham Yatra</span>
          </motion.h2>
        </div>

        {/* Giant card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
          style={{ border: '1px solid rgba(238,155,0,0.2)' }}>

          {/* Background image */}
          <motion.div
            style={{ y: bgY }}
            className="absolute inset-0 scale-110"
            >
            <div className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80)', filter: 'brightness(0.25)' }} />
          </motion.div>

          {/* Overlay gradient */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, rgba(13,17,23,0.95) 0%, rgba(13,17,23,0.6) 50%, rgba(0,95,115,0.3) 100%)' }} />

          {/* Content */}
          <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-0 min-h-[520px]">
            {/* Left: main info - 3 columns */}
            <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1.5 rounded-full font-outfit text-sm"
                    style={{ background: 'rgba(238,155,0,0.15)', border: '1px solid rgba(238,155,0,0.3)', color: '#EE9B00', fontWeight: 600 }}>
                    ★ Most Popular
                  </span>
                  <span className="px-3 py-1.5 rounded-full font-outfit text-sm"
                    style={{ background: 'rgba(10,147,150,0.15)', border: '1px solid rgba(10,147,150,0.3)', color: '#0A9396', fontWeight: 600 }}>
                    10 Nights / 11 Days
                  </span>
                  <span className="px-3 py-1.5 rounded-full font-outfit text-sm"
                    style={{ background: 'rgba(255,249,244,0.06)', border: '1px solid rgba(255,249,244,0.1)', color: 'rgba(255,249,244,0.7)', fontWeight: 600 }}>
                    <FiUsers size={12} style={{ display: 'inline', marginRight: 4 }} />Group & Private
                  </span>
                </div>

                <h3 className="font-outfit mb-2 leading-tight"
                  style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#FFF9F4' }}>
                  Char Dham Yatra
                </h3>
                <p className="font-jakarta mb-6 leading-relaxed"
                  style={{ color: 'rgba(255,249,244,0.6)', maxWidth: '520px' }}>
                  India's most sacred pilgrimage — visiting all four divine abodes of Yamunotri, Gangotri, Kedarnath, and Badrinath in the majestic Himalayas. A journey that transforms your spirit forever.
                </p>

                {/* Itinerary */}
                <div className="space-y-3 mb-8">
                  {itinerary.map((item, i) => (
                    <motion.div
                      key={item.day}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4">
                      <div className="w-20 shrink-0">
                        <span className="font-outfit text-xs" style={{ color: '#EE9B00', fontWeight: 700 }}>{item.day}</span>
                      </div>
                      <div className="flex-1 pb-3" style={{ borderBottom: '1px solid rgba(255,249,244,0.06)' }}>
                        <div className="font-outfit text-sm mb-0.5" style={{ color: '#FFF9F4', fontWeight: 700 }}>{item.place}</div>
                        <div className="font-inter text-xs" style={{ color: 'rgba(255,249,244,0.35)' }}>{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4">
                  <span className="flex items-center gap-1.5 font-inter text-sm" style={{ color: 'rgba(255,249,244,0.5)' }}>
                    <FiMapPin size={13} style={{ color: '#0A9396' }} />Departs from Indore / Haridwar
                  </span>
                  <span className="flex items-center gap-1.5 font-inter text-sm" style={{ color: 'rgba(255,249,244,0.5)' }}>
                    <FiClock size={13} style={{ color: '#0A9396' }} />May–June & Sept–Oct
                  </span>
                  <span className="flex items-center gap-1.5 font-inter text-sm" style={{ color: 'rgba(255,249,244,0.5)' }}>
                    <FaMountain size={13} style={{ color: '#0A9396' }} />3,583m altitude (Kedarnath)
                  </span>
                </div>
              </div>
            </div>

            {/* Right: highlights & CTA - 2 columns */}
            <div className="lg:col-span-2 p-8 md:p-10 flex flex-col justify-between"
              style={{ background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(10px)', borderLeft: '1px solid rgba(255,249,244,0.06)' }}>
              <div>
                <div className="font-outfit text-xs mb-4 tracking-widest uppercase"
                  style={{ color: '#EE9B00', fontWeight: 700 }}>
                  What's Included
                </div>
                <ul className="space-y-2.5 mb-8">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: 'rgba(10,147,150,0.2)', border: '1px solid rgba(10,147,150,0.4)' }}>
                        <FiCheck size={11} style={{ color: '#0A9396' }} />
                      </div>
                      <span className="font-jakarta text-sm" style={{ color: 'rgba(255,249,244,0.65)' }}>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & CTA */}
              <div className="p-6 rounded-2xl" style={{ background: 'rgba(238,155,0,0.06)', border: '1px solid rgba(238,155,0,0.2)' }}>
                <div className="font-inter text-xs mb-1" style={{ color: 'rgba(255,249,244,0.4)' }}>Starting from</div>
                <div className="font-outfit mb-1" style={{ color: '#EE9B00', fontWeight: 900, fontSize: '2.5rem', lineHeight: 1 }}>
                  ₹24,999
                </div>
                <div className="font-inter text-xs mb-6" style={{ color: 'rgba(255,249,244,0.35)' }}>
                  per person (twin sharing) · GST included
                </div>
                <div className="flex flex-col gap-3">
                  <Link href="/packages"
                    className="btn-sun w-full py-3.5 rounded-xl font-outfit flex items-center justify-center gap-2 group"
                    style={{ fontWeight: 700, textDecoration: 'none' }}>
                    Book This Tour <FiArrowRight size={16} />
                  </Link>
                  <a href="https://wa.me/919876543210?text=I'm%20interested%20in%20Char%20Dham%20Yatra%20package"
                    target="_blank"
                    className="w-full py-3.5 rounded-xl font-outfit flex items-center justify-center gap-2 font-jakarta"
                    style={{ background: 'rgba(255,249,244,0.06)', border: '1px solid rgba(255,249,244,0.12)', color: 'rgba(255,249,244,0.7)', fontWeight: 600, textDecoration: 'none', transition: 'all 0.3s' }}>
                    Get Custom Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}