'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiPhone, FiSend, FiChevronDown } from 'react-icons/fi'
import { RiWhatsappLine } from 'react-icons/ri'

const packages = [
  'Char Dham Yatra', '12 Jyotirlinga Tour', 'Ujjain Omkareshwar Tour',
  'Kashi Ayodhya Tour', 'Vaishno Devi Tour', 'Tirupati Darshan',
  'Rameswaram Tour', 'South India Circuit', 'Custom Package',
]

export default function InquiryPopup() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', pkg: '' })
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Check if already dismissed in this session
    if (sessionStorage.getItem('popup_dismissed')) return

    // Progress bar animation over 9 seconds
    const progressInterval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(progressInterval); return 100 }
        return p + (100 / 90) // 90 steps over 9 seconds
      })
    }, 100)

    const timer = setTimeout(() => {
      setVisible(true)
    }, 9000)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [])

  const handleDismiss = () => {
    setVisible(false)
    setDismissed(true)
    sessionStorage.setItem('popup_dismissed', '1')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setSubmitted(true)
    setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('popup_dismissed', '1')
    }, 3000)
  }

  const waMessage = encodeURIComponent(
    `Hi Sinatra Travels! I'm ${form.name || 'interested'} and want to enquire about ${form.pkg || 'a pilgrimage package'}.`
  )

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleDismiss}
            className="fixed inset-0 z-[9998]"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed z-[9999] inset-x-4 bottom-6 sm:inset-auto sm:bottom-8 sm:right-8 sm:left-auto sm:w-[380px]"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #0D1117 0%, #161B22 100%)', border: '1px solid rgba(10,147,150,0.3)' }}>

              {/* Top accent bar */}
              <div className="h-1 w-full" style={{ background: 'linear-gradient(to right, #EE9B00, #0A9396)' }} />

              {/* Close button */}
              <button onClick={handleDismiss}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full transition-all hover:scale-110 z-10"
                style={{ background: 'rgba(255,249,244,0.08)', color: 'rgba(255,249,244,0.6)' }}>
                <FiX size={15} />
              </button>

              <div className="p-6">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-4"
                  >
                    <div className="text-5xl mb-3">🙏</div>
                    <h3 className="font-outfit mb-2" style={{ color: '#FFF9F4', fontWeight: 800, fontSize: '1.15rem' }}>
                      Jai Shri Ram!
                    </h3>
                    <p className="font-jakarta text-sm" style={{ color: 'rgba(255,249,244,0.6)' }}>
                      We've received your enquiry and will call you within 30 minutes.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-5">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'linear-gradient(135deg, #0A9396, #005F73)' }}>
                        <span style={{ fontSize: '1.3rem' }}>🕉️</span>
                      </div>
                      <div>
                        <div className="font-outfit" style={{ color: '#EE9B00', fontWeight: 800, fontSize: '1rem', lineHeight: 1.2 }}>
                          Plan Your Sacred Journey
                        </div>
                        <div className="font-jakarta text-xs mt-0.5" style={{ color: 'rgba(255,249,244,0.5)' }}>
                          Get a free personalized quote in 30 mins
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        placeholder="Your Name *"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        required
                        className="w-full px-4 py-2.5 rounded-xl text-sm font-jakarta outline-none"
                        style={{ background: 'rgba(255,249,244,0.05)', border: '1px solid rgba(255,249,244,0.1)', color: '#FFF9F4' }}
                      />
                      <input
                        type="tel"
                        placeholder="WhatsApp / Phone Number *"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        required
                        className="w-full px-4 py-2.5 rounded-xl text-sm font-jakarta outline-none"
                        style={{ background: 'rgba(255,249,244,0.05)', border: '1px solid rgba(255,249,244,0.1)', color: '#FFF9F4' }}
                      />
                      <div className="relative">
                        <select
                          value={form.pkg}
                          onChange={e => setForm({ ...form, pkg: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl text-sm font-jakarta outline-none appearance-none"
                          style={{ background: 'rgba(255,249,244,0.05)', border: '1px solid rgba(255,249,244,0.1)', color: form.pkg ? '#FFF9F4' : 'rgba(255,249,244,0.4)' }}
                        >
                          <option value="">Select Package (optional)</option>
                          {packages.map(p => <option key={p} value={p} style={{ background: '#161B22', color: '#FFF9F4' }}>{p}</option>)}
                        </select>
                        <FiChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                          style={{ color: 'rgba(255,249,244,0.4)' }} />
                      </div>

                      <button type="submit"
                        className="btn-sun w-full py-3 rounded-xl font-outfit flex items-center justify-center gap-2"
                        style={{ fontWeight: 700, fontSize: '0.9rem', border: 'none', cursor: 'pointer' }}>
                        <FiSend size={14} /> Get Free Quote
                      </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-3 my-3">
                      <div className="flex-1 h-px" style={{ background: 'rgba(255,249,244,0.07)' }} />
                      <span className="font-inter text-xs" style={{ color: 'rgba(255,249,244,0.25)' }}>or</span>
                      <div className="flex-1 h-px" style={{ background: 'rgba(255,249,244,0.07)' }} />
                    </div>

                    {/* Quick actions */}
                    <div className="grid grid-cols-2 gap-2">
                      <a href={`https://wa.me/919876543210?text=${waMessage}`} target="_blank"
                        className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-outfit text-xs"
                        style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.25)', color: '#25D366', fontWeight: 700, textDecoration: 'none' }}>
                        <RiWhatsappLine size={15} /> WhatsApp
                      </a>
                      <a href="tel:+919876543210"
                        className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-outfit text-xs"
                        style={{ background: 'rgba(10,147,150,0.12)', border: '1px solid rgba(10,147,150,0.25)', color: '#0A9396', fontWeight: 700, textDecoration: 'none' }}>
                        <FiPhone size={13} /> Call Now
                      </a>
                    </div>

                    {/* Trust badge */}
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <span style={{ fontSize: '0.65rem', color: 'rgba(255,249,244,0.25)', fontFamily: 'Inter' }}>
                        🔒 10,000+ pilgrims trust us · Govt. Certified Agency
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}