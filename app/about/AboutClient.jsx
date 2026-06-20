'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

const timeline = [
  { year: '2008', title: 'Founded in Indore', desc: 'Sinatra Travels began as a small pilgrim taxi service operating between Indore and Ujjain, driven by a passion for serving devotees.' },
  { year: '2011', title: 'First Char Dham Group Tour', desc: 'We organized our first 40-person Char Dham Yatra, establishing our reputation for meticulous planning and genuine care.' },
  { year: '2014', title: 'Govt. Registration & TAAI Membership', desc: 'Received Ministry of Tourism certification and joined TAAI, formalizing our commitment to quality and compliance.' },
  { year: '2017', title: '5,000 Pilgrims Milestone', desc: 'Crossed 5,000 satisfied pilgrims — families, senior citizens, and solo devotees who trusted us with their most sacred journeys.' },
  { year: '2020', title: 'Digital Expansion', desc: 'Launched online booking, WhatsApp support, and digital documentation — making pilgrim travel accessible and paperless.' },
  { year: '2023', title: 'South India & All-India Packages', desc: 'Expanded our portfolio to cover South India temple circuits, Amarnath, and comprehensive all-India Jyotirlinga tours.' },
  { year: '2024', title: '10,000+ Happy Pilgrims', desc: 'Crossed the 10,000-pilgrim milestone with a 4.9-star rating and 2,800+ verified Google reviews. Our proudest achievement.' },
]

const values = [
  { emoji: '🙏', title: 'Devotion First', desc: 'We approach every tour as a sacred responsibility, not a commercial transaction. Your darshan matters more than our margins.' },
  { emoji: '🛡️', title: 'Absolute Integrity', desc: 'Transparent pricing, no hidden costs, honest itineraries. What we promise is exactly what you experience.' },
  { emoji: '🤝', title: 'Genuine Care', desc: 'From the Indore office to the temple steps, our team treats every pilgrim as family — especially our senior citizens.' },
  { emoji: '⭐', title: 'Relentless Excellence', desc: 'We improve after every tour. Customer feedback shapes everything we do, from hotel selection to guide training.' },
]

const team = [
  { name: 'Rajesh Sinatra', role: 'Founder & Managing Director', initials: 'RS', color: '#EE9B00', desc: '20+ years in pilgrim travel. Born in Ujjain, raised with a lifelong reverence for the Jyotirlingas.' },
  { name: 'Priya Sinatra', role: 'Head of Operations', initials: 'PS', color: '#0A9396', desc: 'Ensures every tour runs like clockwork — from hotel confirmations to on-ground emergencies.' },
  { name: 'Vikram Sharma', role: 'Senior Tour Guide', initials: 'VS', color: '#005F73', desc: 'Certified guide with 15 years of experience across Char Dham, Jyotirlinga, and South India routes.' },
  { name: 'Sunita Agarwal', role: 'Senior Citizen Care Specialist', initials: 'SA', color: '#EE9B00', desc: 'Dedicated to ensuring our elderly pilgrims receive exceptional care, comfort, and attention at every step.' },
]

export default function AboutClient() {
  return (
    <main className="pt-20" style={{ background: '#0D1117' }}>
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #001520, #050A10)', minHeight: '420px' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(10,147,150,0.12) 0%, transparent 60%)' }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-inter text-sm font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#0A9396' }}>
              Our Story
            </span>
            <h1 className="font-outfit mb-6" style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#FFF9F4' }}>
              Why Choose
              <span style={{ color: '#EE9B00' }}> Sinatra Travels</span>?
            </h1>
            <p className="font-jakarta leading-relaxed" style={{ color: 'rgba(255,249,244,0.65)', fontSize: '1.05rem' }}>
              Since 2008, Sinatra Travels has been Indore's most trusted name in religious and pilgrimage tourism. We are not just a travel agency — we are pilgrim companions, committed to making your sacred journey as meaningful, comfortable, and transformative as possible.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[['15+', 'Years of Service'], ['10,000+', 'Happy Pilgrims'], ['20+', 'Destinations'], ['4.9 ★', 'Google Rating']].map(([num, label]) => (
              <div key={label} className="p-5 rounded-2xl"
                style={{ background: 'rgba(255,249,244,0.04)', border: '1px solid rgba(255,249,244,0.07)' }}>
                <div className="font-outfit mb-1" style={{ color: '#EE9B00', fontWeight: 900, fontSize: '1.8rem', lineHeight: 1 }}>{num}</div>
                <div className="font-inter text-sm" style={{ color: 'rgba(255,249,244,0.4)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Company Story */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-outfit mb-5" style={{ fontWeight: 800, fontSize: '2rem', color: '#FFF9F4' }}>Our Story</h2>
              <div className="space-y-4 font-jakarta" style={{ color: 'rgba(255,249,244,0.6)', lineHeight: 1.85 }}>
                <p>Sinatra Travels was born from a simple belief: every devotee deserves to experience India's sacred sites with dignity, comfort, and genuine care — regardless of age, physical ability, or budget.</p>
                <p>Our founder, Rajesh Sinatra, grew up in Ujjain with a profound reverence for the Mahakaleshwar Jyotirlinga. After working for a decade in hospitality, he saw that most pilgrims were underserved — overcrowded buses, poorly managed accommodation, no guidance at temples. In 2008, he started Sinatra Travels from a single office in Vijay Nagar, Indore, with one AC vehicle and a team of three.</p>
                <p>Today, we operate a fleet of 12 vehicles, employ 25+ staff, and have helped over 10,000 pilgrims from Indore, Madhya Pradesh, and across India experience their most sacred journeys with peace, comfort, and joy.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl" style={{ background: 'rgba(10,147,150,0.08)', border: '1px solid rgba(10,147,150,0.15)' }}>
                <h3 className="font-outfit mb-2" style={{ color: '#0A9396', fontWeight: 700 }}>Our Mission</h3>
                <p className="font-jakarta text-sm" style={{ color: 'rgba(255,249,244,0.6)', lineHeight: 1.7 }}>
                  To make sacred India accessible to every devotee — providing world-class travel experiences that honor both the spiritual significance of each destination and the dignity of every pilgrim.
                </p>
              </div>
              <div className="p-6 rounded-2xl" style={{ background: 'rgba(238,155,0,0.08)', border: '1px solid rgba(238,155,0,0.15)' }}>
                <h3 className="font-outfit mb-2" style={{ color: '#EE9B00', fontWeight: 700 }}>Our Vision</h3>
                <p className="font-jakarta text-sm" style={{ color: 'rgba(255,249,244,0.6)', lineHeight: 1.7 }}>
                  To become India's most respected religious travel company — known not for the most tours, but for the most deeply meaningful pilgrim experiences delivered with complete integrity.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Values */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-outfit mb-8 text-center" style={{ fontWeight: 800, fontSize: '2rem', color: '#FFF9F4' }}>Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="p-6 rounded-2xl" style={{ background: '#161B22', border: '1px solid rgba(255,249,244,0.06)' }}>
                <div className="text-3xl mb-4">{v.emoji}</div>
                <h3 className="font-outfit mb-2" style={{ color: '#FFF9F4', fontWeight: 700 }}>{v.title}</h3>
                <p className="font-jakarta text-sm" style={{ color: 'rgba(255,249,244,0.5)', lineHeight: 1.65 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-outfit mb-10 text-center" style={{ fontWeight: 800, fontSize: '2rem', color: '#FFF9F4' }}>Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'linear-gradient(to bottom, #0A9396, rgba(10,147,150,0.1))' }} />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div key={item.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-6 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="md:w-1/2 p-5 rounded-2xl" style={{ background: '#161B22', border: '1px solid rgba(255,249,244,0.06)' }}>
                    <div className="font-outfit text-sm mb-2" style={{ color: '#EE9B00', fontWeight: 700 }}>{item.year}</div>
                    <h3 className="font-outfit mb-2" style={{ color: '#FFF9F4', fontWeight: 700 }}>{item.title}</h3>
                    <p className="font-jakarta text-sm" style={{ color: 'rgba(255,249,244,0.5)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                  {/* Center dot */}
                  <div className="hidden md:flex md:w-0 relative justify-center">
                    <div className="absolute top-5 w-3 h-3 rounded-full -translate-x-1.5"
                      style={{ background: '#0A9396', boxShadow: '0 0 12px rgba(10,147,150,0.6)' }} />
                  </div>
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Team */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-outfit mb-8 text-center" style={{ fontWeight: 800, fontSize: '2rem', color: '#FFF9F4' }}>The Sinatra Travels Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="p-6 rounded-2xl text-center" style={{ background: '#161B22', border: '1px solid rgba(255,249,244,0.06)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-outfit text-xl"
                  style={{ background: `${member.color}20`, border: `2px solid ${member.color}40`, color: member.color, fontWeight: 800 }}>
                  {member.initials}
                </div>
                <h3 className="font-outfit mb-1" style={{ color: '#FFF9F4', fontWeight: 700, fontSize: '0.95rem' }}>{member.name}</h3>
                <div className="font-inter text-xs mb-3" style={{ color: member.color }}>{member.role}</div>
                <p className="font-jakarta text-sm" style={{ color: 'rgba(255,249,244,0.45)', lineHeight: 1.6 }}>{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <div className="text-center py-8">
          <Link href="/contact" className="btn-sun px-8 py-4 rounded-full font-outfit inline-flex items-center gap-2"
            style={{ fontWeight: 700, textDecoration: 'none' }}>
            Plan Your Journey With Us <FiArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  )
}