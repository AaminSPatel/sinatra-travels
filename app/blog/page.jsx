import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BlogClient from './BlogClient'

export const metadata = {
  title: 'Pilgrimage Travel Blog | Tips, Guides & Stories – Sinatra Travels',
  description: 'Read expert tips, destination guides, and inspiring pilgrim stories from Sinatra Travels. Plan your Char Dham Yatra, Jyotirlinga tour, and more with our detailed travel guides.',
  keywords: 'pilgrimage travel blog, Char Dham Yatra guide, Kedarnath trek tips, Varanasi travel guide, religious travel India',
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <BlogClient />
      <Footer />
    </>
  )
}