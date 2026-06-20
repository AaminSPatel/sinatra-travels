import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PackagesClient from './PackagesClient'

export const metadata = {
  title: 'Best Temple Tour Packages in India | Religious Tour Packages – Sinatra Travels',
  description: 'Book the best temple tour packages from Indore — Char Dham Yatra, 12 Jyotirlinga, Vaishno Devi, Tirupati, South India circuit and more. Starting from ₹5,999. Group & senior citizen packages available.',
  keywords: 'temple tour packages India, Char Dham Yatra package, Jyotirlinga tour, religious tour packages from Indore, best pilgrimage tour packages',
}

export default function PackagesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <div className="relative pt-20 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #050A10, #0D1117)', minHeight: '380px' }}>
          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(238,155,0,0.1) 0%, transparent 70%)' }} />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center relative">
            <span className="font-inter text-sm font-semibold tracking-widest uppercase mb-4 block"
              style={{ color: '#EE9B00' }}>
              ✦ Our Tour Packages ✦
            </span>
            <h1 className="font-outfit mb-6" style={{ fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#FFF9F4' }}>
              Best Temple Tour Packages
              <span style={{ color: '#EE9B00' }}> in India</span>
            </h1>
            <p className="font-jakarta max-w-2xl mx-auto" style={{ color: 'rgba(255,249,244,0.6)', fontSize: '1.1rem', lineHeight: 1.75 }}>
              From the Himalayas to the southern shores, from desert temples to island shrines — Sinatra Travels offers India's most comprehensive selection of religious tour packages. Every package is crafted with devotion, designed for comfort, and priced for every pilgrim.
            </p>
          </div>
        </div>

        {/* SEO Content */}
        <section className="py-16" style={{ background: '#0D1117' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 font-jakarta" style={{ color: 'rgba(255,249,244,0.55)', lineHeight: 1.85 }}>
                <p>
                  Looking for the <strong style={{ color: 'rgba(255,249,244,0.8)' }}>best temple tour packages in India</strong>? Sinatra Travels offers over 12 meticulously planned religious tour packages covering every major pilgrimage destination across the country. Whether you seek the snow-clad peaks of Kedarnath, the tropical divinity of Rameswaram, or the ancient grandeur of Varanasi — we have a package for every pilgrim.
                </p>
                <p>
                  All our packages are available for <strong style={{ color: 'rgba(255,249,244,0.8)' }}>groups, families, and senior citizens</strong>, with customizable departure dates and itineraries. We understand that every pilgrimage is personal, which is why we offer the flexibility to tailor any package to your specific needs, budget, and physical ability.
                </p>
              </div>
              <div className="space-y-4 font-jakarta" style={{ color: 'rgba(255,249,244,0.55)', lineHeight: 1.85 }}>
                <p>
                  Our packages include everything you need: AC transport, hotel/dharmashala accommodation, vegetarian meals, experienced guides, temple permits, and 24/7 on-ground support. We never compromise on quality, and our transparent pricing means you'll never encounter hidden costs.
                </p>
                <p>
                  Special <strong style={{ color: 'rgba(255,249,244,0.8)' }}>senior citizen packages</strong> include wheelchair support, medical assistance, oxygen cylinders for high-altitude tours, and a specially designed pace that allows for rest and spiritual absorption at every stop.
                </p>
              </div>
            </div>
          </div>
        </section>

        <PackagesClient />
      </main>
      <Footer />
    </>
  )
}