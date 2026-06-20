import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import DestinationDetailClient from './DestinationDetailClient'
import { destinations, getDestinationBySlug } from '@/lib/destinationsData'

export async function generateStaticParams() {
  return destinations.map(d => ({ slug: d.slug }))
}

export async function generateMetadata({ params }) {
  const dest = getDestinationBySlug(params.slug)
  if (!dest) return {}
  return {
    title: `${dest.name} | Pilgrimage Guide & Tour Packages – Sinatra Travels`,
    description: `Visit ${dest.name} in ${dest.location}. Best time: ${dest.bestTime}. Duration: ${dest.duration}. Book with Sinatra Travels, Indore's most trusted religious travel agency.`,
  }
}

export default function DestinationDetailPage({ params }) {
  const dest = getDestinationBySlug(params.slug)
  if (!dest) notFound()
  return (
    <>
      <Navbar />
      <DestinationDetailClient dest={dest} />
      <Footer />
    </>
  )
}