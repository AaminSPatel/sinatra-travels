import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AboutClient from './AboutClient'

export const metadata = {
  title: 'About Sinatra Travels | Best Travel Agency in Indore | Our Story & Mission',
  description: 'Learn about Sinatra Travels — Indore\'s most trusted religious travel agency since 2008. Our story, mission, values, and team dedicated to making your pilgrimage perfect.',
  keywords: 'about Sinatra Travels, best travel agency Indore, religious tour agency MP, pilgrimage travel Indore',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutClient />
      <Footer />
    </>
  )
}