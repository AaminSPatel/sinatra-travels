'use client'
import { motion } from 'framer-motion'
import { BiBus } from 'react-icons/bi'
import { FiShield, FiDollarSign,  FiCompass, FiHome, FiSliders, FiStar, FiUsers } from 'react-icons/fi'
import { GiLotus } from 'react-icons/gi'

const features = [
  {
    icon: FiShield,
    title: 'Trusted & Certified',
    description: 'Govt. registered travel agency with 15+ years of expertise in religious tourism. Every tour is carefully planned and executed by our certified guides.',
    size: 'large',
    accent: '#0A9396',
    bg: 'linear-gradient(135deg, rgba(10,147,150,0.12), rgba(10,147,150,0.04))',
  },
  {
    icon: FiDollarSign,
    title: 'Affordable Packages',
    description: 'Best-in-class value for your pilgrimage. Transparent pricing with no hidden costs — we believe spiritual travel should be accessible to everyone.',
    size: 'medium',
    accent: '#EE9B00',
    bg: 'linear-gradient(135deg, rgba(238,155,0,0.12), rgba(238,155,0,0.04))',
  },
  {
    icon: BiBus,
    title: 'Comfortable Transport',
    description: 'AC buses, Tempo Travellers, and luxury coaches. Well-maintained vehicles with professional drivers for a safe, comfortable journey.',
    size: 'medium',
    accent: '#005F73',
    bg: 'linear-gradient(135deg, rgba(0,95,115,0.15), rgba(0,95,115,0.05))',
  },
  {
    icon: FiCompass,
    title: 'Experienced Guides',
    description: 'Knowledgeable local guides who bring the spiritual stories and history alive at each destination.',
    size: 'small',
    accent: '#0A9396',
    bg: 'linear-gradient(135deg, rgba(10,147,150,0.1), rgba(10,147,150,0.02))',
  },
  {
    icon: FiHome,
    title: 'Hotel Booking Included',
    description: 'Handpicked hotels and dharamshalas close to temples for your comfort.',
    size: 'small',
    accent: '#EE9B00',
    bg: 'linear-gradient(135deg, rgba(238,155,0,0.1), rgba(238,155,0,0.02))',
  },
  {
    icon: FiSliders,
    title: 'Custom Tour Design',
    description: 'Tell us your dates, budget, and wishes — we\'ll craft a completely personalized pilgrimage itinerary just for you.',
    size: 'medium',
    accent: '#005F73',
    bg: 'linear-gradient(135deg, rgba(0,95,115,0.12), rgba(0,95,115,0.04))',
  },
  {
    icon: FiUsers,
    title: 'Group & Senior Tours',
    description: 'Dedicated tours for senior citizens with extra care, medical support, and comfortable pacing.',
    size: 'small',
    accent: '#0A9396',
    bg: 'linear-gradient(135deg, rgba(10,147,150,0.1), rgba(10,147,150,0.02))',
  },
  {
    icon: GiLotus,
    title: '24/7 Support',
    description: 'Round-the-clock assistance during your journey. We\'re always just a call away.',
    size: 'small',
    accent: '#EE9B00',
    bg: 'linear-gradient(135deg, rgba(238,155,0,0.1), rgba(238,155,0,0.02))',
  },
]

function BentoCard({ feature, index }) {
  const Icon = feature.icon
  const isLarge = feature.size === 'large'
  const isMedium = feature.size === 'medium'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -4 }}
      className={`bento-card p-6 flex flex-col justify-between group cursor-default
        ${isLarge ? 'col-span-2 row-span-2 md:col-span-2' : isMedium ? 'col-span-2 md:col-span-1' : ''}`}
      style={{ background: feature.bg, minHeight: isLarge ? 280 : isMedium ? 180 : 160 }}>
      <div>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${feature.accent}22`, border: `1px solid ${feature.accent}33` }}>
          <Icon size={22} style={{ color: feature.accent }} />
        </div>
        <h3 className="font-outfit mb-2.5" style={{ fontWeight: 700, fontSize: isLarge ? '1.375rem' : '1.1rem', color: '#FFF9F4' }}>
          {feature.title}
        </h3>
        <p className="font-jakarta text-sm leading-relaxed" style={{ color: 'rgba(255,249,244,0.55)' }}>
          {feature.description}
        </p>
      </div>
      {isLarge && (
        <div className="mt-6 flex items-center gap-2">
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: `hsl(${i * 40 + 180}, 50%, 40%)`, border: '2px solid #161B22', fontSize: '0.7rem', color: 'white', fontWeight: 700 }}>
                {String.fromCharCode(65 + i)}
              </div>
            ))}
          </div>
          <span className="font-inter text-sm" style={{ color: 'rgba(255,249,244,0.4)' }}>
            10,000+ satisfied pilgrims
          </span>
        </div>
      )}
    </motion.div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="section-padding" style={{ background: 'linear-gradient(to bottom, #0D1117, #161B22)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-inter text-sm font-semibold tracking-widest uppercase"
            style={{ color: '#0A9396' }}>
            Why Travel With Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
            className="font-outfit mt-3" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#FFF9F4' }}>
            Indore's Most Trusted
            <span className="gradient-text"> Religious Travel Partner</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} viewport={{ once: true }}
            className="font-jakarta mt-4 max-w-2xl mx-auto"
            style={{ color: 'rgba(255,249,244,0.55)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Since 2008, we have been the go-to travel agency for families, senior citizens, and spiritual seekers from Indore who want a deeply fulfilling, hassle-free pilgrimage experience.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-auto">
          {features.map((feature, index) => (
            <BentoCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: 'rgba(10,147,150,0.06)', border: '1px solid rgba(10,147,150,0.15)' }}>
          <div className="text-center md:text-left">
            <div className="font-outfit text-2xl" style={{ color: '#FFF9F4', fontWeight: 800 }}>Government Certified Travel Agency</div>
            <div className="font-inter text-sm mt-1" style={{ color: 'rgba(255,249,244,0.4)' }}>
              Registered with Ministry of Tourism, Govt. of India | IATA Accredited | Member TAAI
            </div>
          </div>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {['Ministry of Tourism', 'IATA', 'TAAI'].map((badge) => (
              <span key={badge} className="px-4 py-2 rounded-full font-outfit text-sm"
                style={{ background: 'rgba(10,147,150,0.12)', border: '1px solid rgba(10,147,150,0.25)', color: '#0A9396', fontWeight: 600 }}>
                ✓ {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}