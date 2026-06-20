import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import DestinationsClient from './DestinationsClient'

export const metadata = {
  title: 'Best Religious Places to Visit in India | Sacred Destinations – Sinatra Travels',
  description: 'Explore India\'s most sacred religious destinations — Char Dham, 12 Jyotirlingas, Vaishno Devi, Tirupati, Rameswaram and more. Plan your pilgrimage with Sinatra Travels, Indore.',
  keywords: 'best religious places India, Hindu pilgrimage destinations, Char Dham sites, Jyotirlinga temples, Vaishno Devi, Tirupati Balaji',
}

export default function DestinationsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="relative pt-20 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #050A10, #0D1117)', minHeight: '380px' }}>
          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(10,147,150,0.15) 0%, transparent 70%)' }} />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative">
            <span className="font-inter text-sm font-semibold tracking-widest uppercase mb-4 block"
              style={{ color: '#0A9396' }}>
              Sacred India
            </span>
            <h1 className="font-outfit mb-6" style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#FFF9F4' }}>
              Best Religious Places to
              <span style={{ color: '#EE9B00' }}> Visit in India</span>
            </h1>
            <p className="font-jakarta max-w-2xl mx-auto" style={{ color: 'rgba(255,249,244,0.6)', fontSize: '1.1rem', lineHeight: 1.75 }}>
              India is home to thousands of ancient temples, sacred rivers, and pilgrimage sites that have drawn millions of devotees for centuries. From the icy peaks of Kedarnath to the sun-kissed shores of Rameswaram, every destination tells a divine story. Explore our curated selection of India's most spiritually significant destinations.
            </p>
          </div>
        </div>

        {/* SEO intro */}
        <section className="py-16" style={{ background: '#0D1117' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 font-jakarta" style={{ color: 'rgba(255,249,244,0.55)', lineHeight: 1.85, fontSize: '1.05rem' }}>
              <p>
                India is the land of spiritual wealth, where every mountain, river, and stone carries the memory of divine encounters. For pilgrims and spiritual seekers, choosing the right <strong style={{ color: 'rgba(255,249,244,0.8)' }}>religious destinations in India</strong> can be both exciting and overwhelming. At Sinatra Travels, we have curated over 20 of the most sacred sites across the country — each with carefully designed tour packages that bring you closer to the divine while ensuring complete comfort throughout your journey.
              </p>
              <p>
                From the <strong style={{ color: 'rgba(255,249,244,0.8)' }}>12 Jyotirlingas of Lord Shiva</strong> to the four holy abodes of the Char Dham Yatra, from the golden heights of Vaishno Devi to the ancient corridors of Tirupati Balaji — each destination is a universe of faith, history, and transcendence. Our expert guides make each visit not just a darshan, but a deeply immersive spiritual experience.
              </p>
            </div>
          </div>
        </section>

        <DestinationsClient />

        {/* Bottom SEO */}
        <section className="py-16" style={{ background: '#161B22', borderTop: '1px solid rgba(255,249,244,0.06)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-outfit mb-6" style={{ fontWeight: 800, fontSize: '1.75rem', color: '#FFF9F4' }}>
              Plan Your Pilgrimage to Any of These Sacred Sites
            </h2>
            <div className="space-y-3 font-jakarta" style={{ color: 'rgba(255,249,244,0.5)', lineHeight: 1.8 }}>
              <p>All 20 destinations above are covered under Sinatra Travels' tour packages originating from Indore, Madhya Pradesh. Whether you wish to undertake a short 2-day temple visit or a comprehensive 15-day all-India pilgrimage circuit, our team will craft the perfect itinerary for your needs, budget, and physical ability.</p>
              <p>We offer special arrangements for <strong style={{ color: 'rgba(255,249,244,0.7)' }}>senior citizens</strong>, including wheelchair support, medical assistance, and a comfortable, unhurried pace. Group bookings for families and communities receive preferential pricing. Contact us today to begin your sacred journey.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}