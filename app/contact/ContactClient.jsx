'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiClock, FiChevronDown, FiChevronUp, FiSend } from 'react-icons/fi'
import { RiWhatsappLine } from 'react-icons/ri'

const faqs = [
  { q: 'What is the best time to book a Char Dham Yatra?', a: 'The Char Dham temples open in late April/early May and close after Diwali (October/November). Ideal months are May–June and September–October. We recommend booking at least 3–4 months in advance for peak seasons.' },
  { q: 'Do you offer senior citizen special tours?', a: 'Yes! All our packages have senior-friendly options including wheelchair support, medical assistance, oxygen cylinders for high-altitude tours, and a comfortable, unhurried pace. We can also arrange helicopter services for Kedarnath.' },
  { q: 'Are vegetarian meals provided throughout?', a: 'Absolutely. All meals included in our packages are 100% vegetarian and prepared with the sanctity of pilgrimage in mind. We accommodate special dietary requirements on request.' },
  { q: 'Can you customize a package for our family group?', a: 'Yes, custom packages are our specialty. Tell us your dates, budget, group size, and preferred destinations — we\'ll design a bespoke itinerary. Contact us via WhatsApp or phone for a free consultation.' },
  { q: 'Is travel insurance provided?', a: 'Travel insurance is not included in standard packages but is strongly recommended, especially for Himalayan tours. We can assist you in getting suitable coverage through our partner insurers.' },
  { q: 'How do I make a payment?', a: 'We accept NEFT/IMPS, UPI (GPay, PhonePe, Paytm), cash at our Indore office, and cheque. A 25% advance confirms your booking; the balance is due 15 days before departure.' },
  { q: 'What if a tour gets cancelled due to weather or natural events?', a: 'We carry a full cancellation/rescheduling policy. In case of natural calamities, government advisories, or force majeure, we offer full rescheduling or a credit for future tours. Please see our Terms & Conditions.' },
]

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} viewport={{ once: true }}
      className="border-b" style={{ borderColor: 'rgba(255,249,244,0.06)' }}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
        style={{ cursor: 'pointer', background: 'none', border: 'none' }}>
        <span className="font-outfit pr-4" style={{ color: '#FFF9F4', fontWeight: 600, fontSize: '0.95rem' }}>{faq.q}</span>
        {open ? <FiChevronUp size={18} style={{ color: '#0A9396', flexShrink: 0 }} /> : <FiChevronDown size={18} style={{ color: 'rgba(255,249,244,0.4)', flexShrink: 0 }} />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="pb-5 font-jakarta text-sm" style={{ color: 'rgba(255,249,244,0.55)', lineHeight: 1.75 }}>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function ContactClient() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', package: '', message: '', travelers: '1-5' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="pt-20" style={{ background: '#0D1117' }}>
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #001520, #050A10)', minHeight: '320px' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(10,147,150,0.1) 0%, transparent 60%)' }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative">
          <span className="font-inter text-sm font-semibold tracking-widest uppercase mb-4 block" style={{ color: '#0A9396' }}>
            Get In Touch
          </span>
          <h1 className="font-outfit mb-4" style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#FFF9F4' }}>
            Contact Sinatra Travels
          </h1>
          <p className="font-jakarta max-w-xl mx-auto" style={{ color: 'rgba(255,249,244,0.6)', lineHeight: 1.75 }}>
            Ready to plan your sacred journey? Our pilgrim travel experts are available Monday to Saturday, 9 AM to 7 PM. Reach us by phone, WhatsApp, or email — or simply fill out the form below.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { icon: FiPhone, label: 'Call Us', value: '+91 98765 43210', sub: 'Mon–Sat, 9 AM – 7 PM', href: 'tel:+919876543210', color: '#0A9396' },
            { icon: RiWhatsappLine, label: 'WhatsApp', value: 'Chat Now', sub: 'Quick responses 24/7', href: 'https://wa.me/919876543210', color: '#25D366' },
            { icon: FiMail, label: 'Email Us', value: 'tours@sinatratravels.com', sub: 'Reply within 4 hours', href: 'mailto:tours@sinatratravels.com', color: '#EE9B00' },
            { icon: FiMapPin, label: 'Visit Office', value: 'Vijay Nagar, Indore', sub: 'MP 452010', href: '#map', color: '#005F73' },
          ].map(({ icon: Icon, label, value, sub, href, color }) => (
            <motion.a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="p-6 rounded-2xl flex flex-col items-center text-center"
              style={{ background: '#161B22', border: '1px solid rgba(255,249,244,0.06)', textDecoration: 'none', transition: 'all 0.3s' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                <Icon size={22} style={{ color }} />
              </div>
              <div className="font-outfit text-xs mb-1 tracking-widest uppercase" style={{ color: 'rgba(255,249,244,0.35)', fontWeight: 700 }}>{label}</div>
              <div className="font-outfit" style={{ color: '#FFF9F4', fontWeight: 700, fontSize: '0.9rem' }}>{value}</div>
              <div className="font-inter text-xs mt-1" style={{ color: 'rgba(255,249,244,0.35)' }}>{sub}</div>
            </motion.a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <h2 className="font-outfit mb-2" style={{ fontWeight: 800, fontSize: '1.5rem', color: '#FFF9F4' }}>Send Us a Message</h2>
            <p className="font-jakarta text-sm mb-8" style={{ color: 'rgba(255,249,244,0.4)' }}>Fill out the form and we'll respond within 4 working hours.</p>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl text-center" style={{ background: 'rgba(10,147,150,0.1)', border: '1px solid rgba(10,147,150,0.3)' }}>
                <div className="text-4xl mb-4">🙏</div>
                <h3 className="font-outfit mb-2" style={{ color: '#FFF9F4', fontWeight: 700, fontSize: '1.3rem' }}>Thank You!</h3>
                <p className="font-jakarta" style={{ color: 'rgba(255,249,244,0.6)' }}>We've received your enquiry and will contact you within 4 hours. For urgent requests, please call or WhatsApp us directly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-inter text-xs mb-2 block" style={{ color: 'rgba(255,249,244,0.5)' }}>Full Name *</label>
                    <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl font-jakarta text-sm outline-none transition-all"
                      style={{ background: '#161B22', border: '1px solid rgba(255,249,244,0.08)', color: '#FFF9F4' }} />
                  </div>
                  <div>
                    <label className="font-inter text-xs mb-2 block" style={{ color: 'rgba(255,249,244,0.5)' }}>Phone / WhatsApp *</label>
                    <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl font-jakarta text-sm outline-none"
                      style={{ background: '#161B22', border: '1px solid rgba(255,249,244,0.08)', color: '#FFF9F4' }} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-inter text-xs mb-2 block" style={{ color: 'rgba(255,249,244,0.5)' }}>Email Address</label>
                    <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl font-jakarta text-sm outline-none"
                      style={{ background: '#161B22', border: '1px solid rgba(255,249,244,0.08)', color: '#FFF9F4' }} />
                  </div>
                  <div>
                    <label className="font-inter text-xs mb-2 block" style={{ color: 'rgba(255,249,244,0.5)' }}>No. of Travelers</label>
                    <select value={formData.travelers} onChange={e => setFormData({...formData, travelers: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl font-jakarta text-sm outline-none"
                      style={{ background: '#161B22', border: '1px solid rgba(255,249,244,0.08)', color: '#FFF9F4' }}>
                      {['1-5', '6-15', '16-30', '31-50', '50+'].map(v => <option key={v} value={v}>{v} persons</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="font-inter text-xs mb-2 block" style={{ color: 'rgba(255,249,244,0.5)' }}>Package of Interest</label>
                  <select value={formData.package} onChange={e => setFormData({...formData, package: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl font-jakarta text-sm outline-none"
                    style={{ background: '#161B22', border: '1px solid rgba(255,249,244,0.08)', color: '#FFF9F4' }}>
                    <option value="">Select a package</option>
                    {['Char Dham Yatra', '12 Jyotirlinga Tour', 'Ujjain Omkareshwar Tour', 'Kashi Ayodhya Tour', 'Vaishno Devi Tour', 'Tirupati Darshan', 'Rameswaram Tour', 'South India Circuit', 'Custom Package'].map(v => <option key={v}>{v}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-inter text-xs mb-2 block" style={{ color: 'rgba(255,249,244,0.5)' }}>Message / Special Requirements</label>
                  <textarea rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your preferred dates, budget, any special requirements (senior citizen care, wheelchair, etc.)"
                    className="w-full px-4 py-3 rounded-xl font-jakarta text-sm outline-none resize-none"
                    style={{ background: '#161B22', border: '1px solid rgba(255,249,244,0.08)', color: '#FFF9F4' }} />
                </div>
                <button type="submit"
                  className="btn-sun w-full py-4 rounded-xl font-outfit flex items-center justify-center gap-2"
                  style={{ fontWeight: 700, fontSize: '1rem', cursor: 'pointer', border: 'none' }}>
                  <FiSend size={16} /> Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Right: Info + Map */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl" style={{ background: '#161B22', border: '1px solid rgba(255,249,244,0.06)' }}>
              <h3 className="font-outfit mb-4" style={{ fontWeight: 700, color: '#FFF9F4' }}>Office Information</h3>
              <div className="space-y-4">
                {[
                  { icon: FiMapPin, label: 'Address', value: '12, Vijay Nagar Square, Near Big Bazaar, Indore, MP 452010' },
                  { icon: FiPhone, label: 'Phone', value: '+91 98765 43210 / +91 73XXX XXXXX' },
                  { icon: FiMail, label: 'Email', value: 'tours@sinatratravels.com' },
                  { icon: FiClock, label: 'Hours', value: 'Mon–Sat: 9:00 AM – 7:00 PM\nSunday: 10:00 AM – 2:00 PM' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <Icon size={16} style={{ color: '#0A9396', marginTop: 3, flexShrink: 0 }} />
                    <div>
                      <div className="font-inter text-xs mb-0.5" style={{ color: 'rgba(255,249,244,0.35)' }}>{label}</div>
                      <div className="font-jakarta text-sm whitespace-pre-line" style={{ color: 'rgba(255,249,244,0.65)' }}>{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a href="https://wa.me/919876543210?text=Hello! I'd like to enquire about a pilgrimage tour." target="_blank"
              className="flex items-center justify-center gap-3 p-5 rounded-2xl font-outfit"
              style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.25)', color: '#25D366', fontWeight: 700, textDecoration: 'none', transition: 'all 0.3s' }}>
              <RiWhatsappLine size={24} />
              <div>
                <div style={{ fontSize: '0.95rem' }}>Chat on WhatsApp</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(37,211,102,0.6)', fontFamily: 'Inter', fontWeight: 400 }}>Typically replies within 1 hour</div>
              </div>
            </a>

            {/* Map */}
            <div id="map" className="rounded-2xl overflow-hidden" style={{ height: '220px', border: '1px solid rgba(255,249,244,0.06)' }}>
              <iframe
                title="Sinatra Travels Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.8847743714827!2d75.8773449!3d22.7195587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0d84c8d0e9%3A0x793c1a6e5a0a3f28!2sVijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1707000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0, filter: 'invert(0.85) hue-rotate(180deg)' }} allowFullScreen loading="lazy" />
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="font-outfit mb-8 text-center" style={{ fontWeight: 800, fontSize: '2rem', color: '#FFF9F4' }}>
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, i) => <FaqItem key={i} faq={faq} index={i} />)}
          </div>
        </div>

        {/* Contact SEO content */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="font-jakarta" style={{ color: 'rgba(255,249,244,0.35)', lineHeight: 1.8, fontSize: '0.9rem' }}>
            Sinatra Travels is the go-to <strong style={{ color: 'rgba(255,249,244,0.5)' }}>travel agency in Indore</strong> for religious and pilgrimage tours. Located at Vijay Nagar, Indore, we serve pilgrims from across Madhya Pradesh — Bhopal, Ujjain, Jabalpur, Gwalior, and Ratlam. Whether you are planning a local Ujjain day trip or a full Char Dham Yatra, our expert team is ready to help. Visit us, call us, or WhatsApp us — we would love to be part of your sacred journey.
          </p>
        </div>
      </div>
    </main>
  )
}