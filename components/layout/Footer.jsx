'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'
import { RiWhatsappLine, RiPlaneLine } from 'react-icons/ri'

const destinations = ['Char Dham Yatra', 'Kedarnath', 'Vaishno Devi', 'Tirupati', 'Rameswaram', 'Kashi Vishwanath']
const packages = ['Jyotirlinga Tour', 'Ujjain Omkareshwar', 'South India Circuit', 'Gujarat Temple Tour', 'Mathura Vrindavan']

export default function Footer() {
  return (
    <footer style={{ background: '#060B10', borderTop: '1px solid rgba(255,249,244,0.06)' }}>
      {/* CTA Band */}
      <div className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #005F73, #0A9396)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-outfit text-3xl md:text-5xl mb-4"
            style={{ color: '#FFF9F4', fontWeight: 800 }}>
            Begin Your Sacred Journey
          </motion.h2>
          <p className="font-jakarta text-lg mb-8" style={{ color: 'rgba(255,249,244,0.75)' }}>
            Let Sinatra Travels curate your perfect pilgrimage. Speak with our travel experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919876543210" target="_blank"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-outfit"
              style={{ background: '#25D366', color: 'white', fontWeight: 700, textDecoration: 'none' }}>
              <RiWhatsappLine size={20} /> Chat on WhatsApp
            </a>
            <Link href="/contact"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-outfit"
              style={{ background: 'rgba(255,249,244,0.15)', color: '#FFF9F4', fontWeight: 700, backdropFilter: 'blur(10px)', textDecoration: 'none' }}>
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #0A9396, #005F73)' }}>
                <RiPlaneLine style={{ color: 'white', fontSize: '1.25rem' }} />
              </div>
              <div>
                <div>
                  <span className="font-outfit" style={{ color: '#FFF9F4', fontWeight: 800, fontSize: '1.125rem' }}>Sinatra</span>
                  <span className="font-outfit ml-1" style={{ color: '#EE9B00', fontWeight: 800, fontSize: '1.125rem' }}>Travels</span>
                </div>
                <div style={{ color: 'rgba(255,249,244,0.4)', fontSize: '0.7rem', fontFamily: 'Inter, sans-serif' }}>Est. 2008 · Indore</div>
              </div>
            </div>
            <p className="font-jakarta text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,249,244,0.5)' }}>
              Indore's most trusted religious travel agency. We transform pilgrimage dreams into deeply moving, spiritual realities for over 10,000 families.
            </p>
            <div className="flex gap-3">
              {[FiInstagram, FiFacebook, FiYoutube].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-110"
                  style={{ background: 'rgba(255,249,244,0.06)', color: 'rgba(255,249,244,0.5)' }}>
                  <Icon size={16} />
                </a>
              ))}
              <a href="https://wa.me/919876543210" target="_blank"
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-110"
                style={{ background: 'rgba(37,211,102,0.1)', color: '#25D366' }}>
                <RiWhatsappLine size={16} />
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-outfit text-sm mb-5" style={{ color: '#EE9B00', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Top Destinations
            </h4>
            <ul className="flex flex-col gap-2.5">
              {destinations.map((dest) => (
                <li key={dest}>
                  <Link href="/destinations"
                    className="font-jakarta text-sm transition-colors duration-200 hover:text-white flex items-center gap-1.5"
                    style={{ color: 'rgba(255,249,244,0.5)', textDecoration: 'none' }}>
                    <span style={{ color: '#0A9396', fontSize: '0.6rem' }}>▶</span> {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div>
            <h4 className="font-outfit text-sm mb-5" style={{ color: '#EE9B00', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Tour Packages
            </h4>
            <ul className="flex flex-col gap-2.5">
              {packages.map((pkg) => (
                <li key={pkg}>
                  <Link href="/packages"
                    className="font-jakarta text-sm transition-colors duration-200 hover:text-white flex items-center gap-1.5"
                    style={{ color: 'rgba(255,249,244,0.5)', textDecoration: 'none' }}>
                    <span style={{ color: '#0A9396', fontSize: '0.6rem' }}>▶</span> {pkg}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit text-sm mb-5" style={{ color: '#EE9B00', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <FiMapPin size={16} style={{ color: '#0A9396', marginTop: 2, flexShrink: 0 }} />
                <span className="font-jakarta text-sm" style={{ color: 'rgba(255,249,244,0.5)' }}>
                  12, Vijay Nagar, Indore, Madhya Pradesh 452010
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone size={16} style={{ color: '#0A9396', flexShrink: 0 }} />
                <a href="tel:+919876543210" className="font-jakarta text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,249,244,0.5)', textDecoration: 'none' }}>
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FiMail size={16} style={{ color: '#0A9396', flexShrink: 0 }} />
                <a href="mailto:tours@sinatratravels.com" className="font-jakarta text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,249,244,0.5)', textDecoration: 'none' }}>
                  tours@sinatratravels.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,249,244,0.06)' }}>
          <p className="font-inter text-sm" style={{ color: 'rgba(255,249,244,0.3)' }}>
            © 2024 Sinatra Travels. All rights reserved. | GST: 23ABCDE1234F1Z5
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms', 'Sitemap'].map((item) => (
              <Link key={item} href="#"
                className="font-inter text-sm hover:text-white transition-colors"
                style={{ color: 'rgba(255,249,244,0.3)', textDecoration: 'none' }}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}