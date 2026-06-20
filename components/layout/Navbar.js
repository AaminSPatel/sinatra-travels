'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'
import { RiPlaneLine } from 'react-icons/ri'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Packages', href: '/packages' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(13, 17, 23, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,249,244,0.06)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #0A9396, #005F73)' }}>
                <RiPlaneLine style={{ color: 'white', fontSize: '1.25rem' }} />
              </div>
              <div>
                <div>
                  <span className="font-outfit text-lg tracking-tight" style={{ color: '#FFF9F4', fontWeight: 800 }}>Sinatra</span>
                  <span className="font-outfit text-lg tracking-tight ml-1" style={{ color: '#EE9B00', fontWeight: 800 }}>Travels</span>
                </div>
                <div className="text-xs font-inter" style={{ color: 'rgba(255,249,244,0.4)', lineHeight: 1 }}>Indore, MP</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  className="relative px-4 py-2 text-sm rounded-lg transition-all duration-200"
                  style={{ color: pathname === link.href ? '#EE9B00' : 'rgba(255,249,244,0.75)', fontWeight: 500 }}>
                  {link.label}
                  {pathname === link.href && (
                    <motion.div layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'rgba(238,155,0,0.08)' }} />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="tel:+919876543210" className="flex items-center gap-1.5 text-sm"
                style={{ color: 'rgba(255,249,244,0.55)', fontFamily: 'Inter, sans-serif' }}>
                <FiPhone size={14} /><span>+91 98765 43210</span>
              </a>
              <Link href="/contact"
                className="btn-sun px-5 py-2.5 rounded-full text-sm font-outfit"
                style={{ textDecoration: 'none' }}>
                Book Now
              </Link>
            </div>

            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl"
              style={{ background: 'rgba(255,249,244,0.05)', color: '#FFF9F4' }}
              onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col p-8 pt-24"
            style={{ background: 'rgba(13, 17, 23, 0.98)', backdropFilter: 'blur(20px)' }}>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
                  <Link href={link.href}
                    className="block text-3xl font-outfit py-3 border-b"
                    style={{ color: pathname === link.href ? '#EE9B00' : '#FFF9F4', borderColor: 'rgba(255,249,244,0.06)', fontWeight: 700 }}
                    onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a href="tel:+919876543210" className="flex items-center gap-2 py-3 font-inter"
                style={{ color: 'rgba(255,249,244,0.5)' }}>
                <FiPhone /> +91 98765 43210
              </a>
              <a href="https://wa.me/919876543210" target="_blank"
                className="btn-sun px-6 py-4 rounded-xl text-center font-outfit"
                style={{ fontWeight: 700 }}>
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}