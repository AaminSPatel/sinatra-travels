import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactClient from './ContactClient'

export const metadata = {
  title: 'Contact Sinatra Travels | Travel Agency in Indore | Book Your Tour',
  description: 'Contact Sinatra Travels, Indore\'s top religious travel agency. Call, WhatsApp, or visit us at Vijay Nagar, Indore. Get a free quote for your pilgrimage tour today.',
  keywords: 'contact travel agency Indore, Sinatra Travels contact, religious tour booking Indore, WhatsApp travel agent Indore',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <ContactClient />
      <Footer />
    </>
  )
}