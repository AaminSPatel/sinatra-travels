import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PackageDetailClient from './PackageDetailClient'
import { packages, getPackageBySlug } from '@/lib/packagesData'

export async function generateStaticParams() {
  return packages.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const pkg = getPackageBySlug(params.slug)
  if (!pkg) return {}
  return {
    title: `${pkg.name} | ${pkg.duration} | Sinatra Travels`,
    description: `Book ${pkg.name} with Sinatra Travels. ${pkg.subtitle}. Starting from ₹${pkg.price.toLocaleString('en-IN')} per person. ${pkg.inclusions.slice(0, 3).join(', ')} included.`,
  }
}

export default function PackageDetailPage({ params }) {
  const pkg = getPackageBySlug(params.slug)
  if (!pkg) notFound()
  return (
    <>
      <Navbar />
      <PackageDetailClient pkg={pkg} />
      <Footer />
    </>
  )
}