'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import Link from 'next/link'
import { FiArrowRight, FiMapPin, FiClock, FiStar } from 'react-icons/fi'
import { RiWhatsappLine } from 'react-icons/ri'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

const slides = [
  {
    id: 1,
    title: 'Mahakaleshwar',
    subtitle: 'Jyotirlinga',
    description: 'Experience the divine aura of Lord Shiva at the ancient Mahakaleshwar temple in Ujjain — the only Jyotirlinga that faces south.',
    location: 'Ujjain, Madhya Pradesh',
    duration: '2 Nights / 3 Days',
    rating: 4.9,
    color: 'from-orange-900/80',
    gradient: 'linear-gradient(135deg, rgba(180,60,0,0.7), rgba(0,95,115,0.5))',
    bg: 'linear-gradient(to bottom right, #1a0800, #001a20)',
    price: '₹8,999',
  },
  {
    id: 2,
    title: 'Omkareshwar',
    subtitle: 'Sacred Island Temple',
    description: 'Set on an island shaped like Om itself, Omkareshwar Jyotirlinga is one of the most sacred destinations in Hindu pilgrimage.',
    location: 'Khandwa, Madhya Pradesh',
    duration: '1 Night / 2 Days',
    rating: 4.8,
    color: 'from-blue-900/80',
    gradient: 'linear-gradient(135deg, rgba(0,60,80,0.8), rgba(10,147,150,0.4))',
    bg: 'linear-gradient(to bottom right, #001520, #003040)',
    price: '₹5,999',
  },
  {
    id: 3,
    title: 'Kashi Vishwanath',
    subtitle: 'City of Moksha',
    description: 'Walk the ancient ghats of Varanasi and seek blessings at Kashi Vishwanath — where Lord Shiva is believed to grant liberation.',
    location: 'Varanasi, Uttar Pradesh',
    duration: '3 Nights / 4 Days',
    rating: 5.0,
    color: 'from-amber-900/80',
    gradient: 'linear-gradient(135deg, rgba(120,80,0,0.8), rgba(0,95,115,0.4))',
    bg: 'linear-gradient(to bottom right, #1a1000, #001520)',
    price: '₹12,999',
  },
  {
    id: 4,
    title: 'Kedarnath',
    subtitle: 'Himalayan Sanctuary',
    description: 'Trek through breathtaking Himalayan terrain to reach Kedarnath — one of the most revered shrines of Lord Shiva at 3,583 metres.',
    location: 'Rudraprayag, Uttarakhand',
    duration: '5 Nights / 6 Days',
    rating: 4.9,
    color: 'from-slate-900/80',
    gradient: 'linear-gradient(135deg, rgba(20,40,60,0.8), rgba(0,95,115,0.5))',
    bg: 'linear-gradient(to bottom right, #050a10, #001a20)',
    price: '₹24,999',
  },
  {
    id: 5,
    title: 'Badrinath',
    subtitle: 'Abode of Vishnu',
    description: 'Nestled in the Garhwal Himalayas at 3,133 metres, Badrinath is Lord Vishnu\'s sacred abode and part of the Char Dham Yatra.',
    location: 'Chamoli, Uttarakhand',
    duration: '4 Nights / 5 Days',
    rating: 4.9,
    color: 'from-indigo-900/80',
    gradient: 'linear-gradient(135deg, rgba(20,0,60,0.8), rgba(10,147,150,0.4))',
    bg: 'linear-gradient(to bottom right, #050010, #001520)',
    price: '₹21,999',
  },
]

// Floating particles
function Particle({ x, y, size, delay }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, background: 'rgba(238,155,0,0.3)' }}
      animate={{ y: [-10, 10, -10], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: 4 + delay, repeat: Infinity, delay }}
    />
  )
}

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 90 + 5,
  y: Math.random() * 80 + 10,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 3,
}))

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouse = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
      })
    }
    const el = containerRef.current
    el?.addEventListener('mousemove', handleMouse)
    return () => el?.removeEventListener('mousemove', handleMouse)
  }, [])

  const slide = slides[activeIndex]

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: 700 }}>
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{ background: slide.bg }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />

      {/* Swiper for background images */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full"
          style={{ opacity: 0.35 }}
        >
          {slides.map((s) => (
            <SwiperSlide key={s.id}>
              <div className="w-full h-full flex items-center justify-center overflow-hidden"
                style={{ background: s.bg }}>
                <motion.div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url(https://source.unsplash.com/1600x900/?${encodeURIComponent(s.title + ' temple india')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    x: mousePos.x * 0.5,
                    y: mousePos.y * 0.5,
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to right, rgba(13,17,23,0.95) 0%, rgba(13,17,23,0.6) 60%, rgba(13,17,23,0.3) 100%)' }} />
      <div className="absolute inset-0 z-10"
        style={{ background: 'linear-gradient(to top, rgba(13,17,23,0.9) 0%, transparent 50%)' }} />

      {/* Floating particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {particles.map((p) => <Particle key={p.id} {...p} />)}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <motion.div
              key={`badge-${activeIndex}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: 'rgba(10,147,150,0.15)', border: '1px solid rgba(10,147,150,0.3)' }}>
              <span style={{ fontSize: '0.5rem', color: '#0A9396' }}>●</span>
              <span className="font-inter text-sm" style={{ color: '#0A9396', fontWeight: 500 }}>
                <FiMapPin size={11} style={{ display: 'inline', marginRight: 4 }} />{slide.location}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div key={`title-${activeIndex}`} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <h1 className="font-outfit leading-none mb-2" style={{ fontWeight: 900, fontSize: 'clamp(3rem, 8vw, 6.5rem)', color: '#FFF9F4' }}>
                {slide.title}
              </h1>
              <div className="font-jakarta text-xl md:text-2xl mb-5" style={{ color: '#EE9B00', fontWeight: 600 }}>
                {slide.subtitle}
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              key={`desc-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-jakarta text-lg leading-relaxed mb-8 max-w-xl"
              style={{ color: 'rgba(255,249,244,0.7)' }}>
              {slide.description}
            </motion.p>

            {/* Meta chips */}
            <motion.div
              key={`meta-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-8">
              <span className="glass flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-inter"
                style={{ color: 'rgba(255,249,244,0.8)' }}>
                <FiClock size={13} style={{ color: '#0A9396' }} />{slide.duration}
              </span>
              <span className="glass flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-inter"
                style={{ color: 'rgba(255,249,244,0.8)' }}>
                <FiStar size={13} style={{ color: '#EE9B00' }} />
                {slide.rating} Rated
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-outfit"
                style={{ background: 'rgba(238,155,0,0.15)', border: '1px solid rgba(238,155,0,0.3)', color: '#EE9B00', fontWeight: 700 }}>
                Starting {slide.price}/person
              </span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              key={`cta-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3">
              <Link href="/packages"
                className="btn-sun px-8 py-4 rounded-full font-outfit flex items-center justify-center gap-2 group"
                style={{ fontWeight: 700, textDecoration: 'none' }}>
                Explore Packages
                <FiArrowRight size={16} style={{ transition: 'transform 0.3s' }} className="group-hover:translate-x-1" />
              </Link>
              <a href="https://wa.me/919876543210?text=I'm%20interested%20in%20booking%20a%20tour%20to%20" target="_blank"
                className="btn-glass px-8 py-4 rounded-full font-outfit flex items-center justify-center gap-2"
                style={{ fontWeight: 600, textDecoration: 'none' }}>
                <RiWhatsappLine size={18} style={{ color: '#25D366' }} /> WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <motion.div key={i}
            animate={{ width: i === activeIndex ? 28 : 6, opacity: i === activeIndex ? 1 : 0.4 }}
            className="h-1.5 rounded-full"
            style={{ background: i === activeIndex ? '#EE9B00' : '#FFF9F4', transition: 'all 0.4s' }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 z-20 font-outfit"
        style={{ color: 'rgba(255,249,244,0.4)', fontSize: '0.75rem', fontWeight: 600 }}>
        <span style={{ color: '#EE9B00', fontSize: '1.1rem' }}>0{activeIndex + 1}</span> / 0{slides.length}
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-8 z-20 flex flex-col items-center gap-1">
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, rgba(255,249,244,0.0), rgba(255,249,244,0.3))' }} />
        <span className="font-inter text-xs" style={{ color: 'rgba(255,249,244,0.3)', writingMode: 'vertical-rl' }}>scroll</span>
      </motion.div>
    </section>
  )
}