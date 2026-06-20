'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { number: 10000, suffix: '+', label: 'Happy Travelers', sublabel: 'Families who trust us', color: '#EE9B00' },
  { number: 85, suffix: '+', label: 'Temple Tours', sublabel: 'Sacred routes covered', color: '#0A9396' },
  { number: 20, suffix: '+', label: 'Destinations', sublabel: 'Across sacred India', color: '#EE9B00' },
  { number: 500, suffix: '+', label: 'Group Trips', sublabel: 'Successfully completed', color: '#0A9396' },
  { number: 15, suffix: '+', label: 'Years of Trust', sublabel: 'Serving pilgrims', color: '#EE9B00' },
  { number: 4.9, suffix: '★', label: 'Rating', sublabel: '2,800+ Reviews', color: '#0A9396' },
]

function CountUp({ target, suffix, color, isDecimal }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + increment, target)
      setCount(current)
      if (current >= target) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target])

  const display = isDecimal ? count.toFixed(1) : Math.floor(count).toLocaleString('en-IN')

  return (
    <span ref={ref} className="counter-num" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
      {display}{suffix}
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#0D1117', padding: '80px 0' }}>
      {/* Ambient bg */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at 20% 50%, rgba(10,147,150,0.07) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(238,155,0,0.05) 0%, transparent 60%)',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-inter text-sm font-semibold tracking-widest uppercase"
            style={{ color: '#0A9396' }}>
            Our Journey in Numbers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
            className="font-outfit mt-3" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#FFF9F4' }}>
            Trusted by Thousands of
            <span className="gradient-text"> Pilgrims Across India</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px"
          style={{ border: '1px solid rgba(255,249,244,0.06)', borderRadius: '24px', overflow: 'hidden' }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ background: 'rgba(10,147,150,0.08)' }}
              className="flex flex-col items-center justify-center py-10 px-6 text-center transition-all duration-300"
              style={{ background: '#161B22', borderRight: i < 5 ? '1px solid rgba(255,249,244,0.06)' : 'none' }}>
              <CountUp
                target={stat.number}
                suffix={stat.suffix}
                color={stat.color}
                isDecimal={stat.number % 1 !== 0}
              />
              <div className="font-outfit mt-2 mb-1" style={{ color: '#FFF9F4', fontWeight: 700, fontSize: '0.95rem' }}>
                {stat.label}
              </div>
              <div className="font-inter text-xs" style={{ color: 'rgba(255,249,244,0.35)' }}>
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }}
          className="text-center mt-8 font-inter text-sm"
          style={{ color: 'rgba(255,249,244,0.3)' }}>
          *Stats as of December 2024. Data verified by customer reviews and internal records.
        </motion.p>
      </div>
    </section>
  )
}