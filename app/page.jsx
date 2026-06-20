import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import CollageSection from '@/components/home/CollageSection'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import StatsSection from '@/components/home/StatsSection'
import FeaturedPackage from '@/components/home/FeaturedPackage'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import MoodSelector from '@/components/home/MoodSelector'
import InquiryPopup from '@/components/InquiryPopup'

export const metadata = {
  title: 'Best Travel Agency in Indore | Religious & Pilgrimage Tours – Sinatra Travels',
  description: 'Sinatra Travels is the best travel agency in Indore for religious and pilgrimage tours. Book Char Dham Yatra, Jyotirlinga tours, Vaishno Devi, Tirupati, and 20+ sacred destinations. Trusted by 10,000+ pilgrims.',
  keywords: 'best travel agency in Indore, religious tour packages, Char Dham Yatra Indore, Jyotirlinga tour package, pilgrimage tour India',
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <InquiryPopup />
      <main>
        <HeroSection />
        <section className="py-20" style={{ background: '#0D1117' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-outfit mb-6" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#FFF9F4' }}>
              The Best Travel Agency in Indore for<span style={{ color: '#EE9B00' }}> Religious Tours</span>
            </h2>
            <div className="space-y-4 font-jakarta" style={{ color: 'rgba(255,249,244,0.6)', lineHeight: 1.85, fontSize: '1.05rem' }}>
              <p>If you are searching for the <strong style={{ color: 'rgba(255,249,244,0.85)' }}>best travel agency in Indore</strong> for religious and pilgrimage tours, your search ends at Sinatra Travels. Established in 2008, we have spent over 15 years curating deeply meaningful, spiritually enriching journeys for families, senior citizens, couples, and groups across Indore, Madhya Pradesh, and beyond.</p>
              <p>We specialize in <strong style={{ color: 'rgba(255,249,244,0.85)' }}>Char Dham Yatra packages</strong>, 12 Jyotirlinga tours, Vaishno Devi darshan, Tirupati Balaji tours, Rameswaram pilgrimages, and complete South India temple circuits. Every tour we design puts your comfort, safety, and spiritual experience first.</p>
              <p>Our expert travel consultants are available six days a week to help you plan the perfect sacred journey. With affordable packages, transparent pricing, and 10,000+ satisfied pilgrims, Sinatra Travels is <strong style={{ color: 'rgba(255,249,244,0.85)' }}>Indore most trusted name in religious tourism</strong>.</p>
            </div>
          </div>
        </section>
        <CollageSection />
        <WhyChooseUs />
        <StatsSection />
        <FeaturedPackage />
        <MoodSelector />
        <TestimonialsSection />
        <section className="py-16 px-4" style={{ background: '#161B22', borderTop: '1px solid rgba(255,249,244,0.06)' }}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-outfit mb-4" style={{ fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#FFF9F4' }}>Ready to Begin Your Sacred Journey?</h2>
            <p className="font-jakarta mb-8" style={{ color: 'rgba(255,249,244,0.55)', fontSize: '1.05rem' }}>Call us, WhatsApp us, or visit our office in Indore. Our pilgrim travel experts are ready to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919876543210" className="btn-sun px-8 py-4 rounded-full font-outfit" style={{ fontWeight: 700, textDecoration: 'none' }}>Call Now: +91 98765 43210</a>
              <a href="https://wa.me/919876543210" target="_blank" className="btn-glass px-8 py-4 rounded-full font-outfit" style={{ fontWeight: 600, textDecoration: 'none' }}>WhatsApp Chat</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}