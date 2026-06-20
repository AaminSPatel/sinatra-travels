'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { FiMapPin, FiClock, FiCalendar, FiArrowRight } from 'react-icons/fi'

const destinations = [
  {
    id: 1, name: 'Mahakaleshwar Jyotirlinga', location: 'Ujjain, MP', state: 'Madhya Pradesh',
    type: 'Jyotirlinga', duration: '1-2 Days', bestTime: 'Oct–Mar',
    overview: 'The only Jyotirlinga that faces south (Dakshinamukhi), Mahakaleshwar is believed to be swayambhu — self-manifested. The daily Bhasma Aarti at dawn, where sacred ash is applied to the Shiva lingam, is one of India\'s most powerful spiritual experiences.',
    attractions: ['Bhasma Aarti (Dawn)', 'Ram Ghat', 'Harsiddhi Temple', 'Mangalnath Temple', 'Kal Bhairav Temple'],
    tip: 'Book Bhasma Aarti tickets online 2-3 months in advance as slots fill quickly.',
    color: '#EE9B00', gradient: 'linear-gradient(135deg, #3d1500, #1a0800)',
  },
  {
    id: 2, name: 'Omkareshwar Jyotirlinga', location: 'Khandwa, MP', state: 'Madhya Pradesh',
    type: 'Jyotirlinga', duration: '1-2 Days', bestTime: 'Oct–Mar',
    overview: 'Situated on an island shaped like the sacred Om symbol in the Narmada river, Omkareshwar houses two Jyotirlingas — Omkareshwar and Mamleshwar. The boat ride around the Om-shaped island is a profoundly symbolic pilgrimage in itself.',
    attractions: ['Omkareshwar Temple', 'Mamleshwar Temple', 'Narmada Parikrama', 'Siddhanath Temple', 'Kaverī Sangam'],
    tip: 'Combine with Mahakaleshwar in a 3-4 day Indore base tour — both are in Madhya Pradesh.',
    color: '#0A9396', gradient: 'linear-gradient(135deg, #001520, #00282a)',
  },
  {
    id: 3, name: 'Kashi Vishwanath', location: 'Varanasi, UP', state: 'Uttar Pradesh',
    type: 'Jyotirlinga + City of Moksha', duration: '3-4 Days', bestTime: 'Oct–Mar',
    overview: 'Varanasi is humanity\'s oldest continuously inhabited city, and Kashi Vishwanath is its beating spiritual heart. Hindus believe dying here grants moksha — liberation from the cycle of rebirth. The new corridor has made temple access grander and more serene.',
    attractions: ['Kashi Vishwanath Temple', 'Ganga Aarti at Dashashwamedh Ghat', 'Sarnath', 'Manikarnika Ghat', 'Sankat Mochan Hanuman Temple'],
    tip: 'Visit the Ganga Aarti at both dawn and dusk for two completely different, equally magical experiences.',
    color: '#EE9B00', gradient: 'linear-gradient(135deg, #2a1800, #0a1000)',
  },
  {
    id: 4, name: 'Kedarnath', location: 'Rudraprayag, Uttarakhand', state: 'Uttarakhand',
    type: 'Char Dham + Jyotirlinga', duration: '4-5 Days', bestTime: 'May–Jun, Sep–Oct',
    overview: 'At 3,583 metres in the Garhwal Himalayas, Kedarnath stands as one of Hinduism\'s most awe-inspiring shrines. The 14km trek to the temple, the ancient stone structure, and the panoramic Himalayan backdrop create a pilgrimage experience unlike any other on earth.',
    attractions: ['Kedarnath Shrine', 'Bhairavnath Temple', 'Gandhi Sarovar', 'Vasuki Tal Trek', 'Chorabari Lake'],
    tip: 'Helicopter service is available for senior citizens and those with health concerns. Book at least 3 months in advance.',
    color: '#005F73', gradient: 'linear-gradient(135deg, #050a15, #00101a)',
  },
  {
    id: 5, name: 'Badrinath', location: 'Chamoli, Uttarakhand', state: 'Uttarakhand',
    type: 'Char Dham', duration: '3-4 Days', bestTime: 'May–Jun, Sep–Oct',
    overview: 'Lord Vishnu\'s sacred abode in the Garhwal Himalayas at 3,133 metres, Badrinath is one of the most visited pilgrimage sites in India. The temple, flanked by the Nar-Narayan mountain ranges and the Alakananda river, is both architecturally stunning and spiritually electrifying.',
    attractions: ['Badrinath Temple', 'Tapt Kund Hot Springs', 'Mana Village (last Indian village)', 'Vasudhara Falls', 'Bheem Pul'],
    tip: 'Visit Mana village — India\'s last village before the Tibet border — just 3km from Badrinath.',
    color: '#0A9396', gradient: 'linear-gradient(135deg, #050010, #00101a)',
  },
  {
    id: 6, name: 'Rameswaram', location: 'Ramanathapuram, Tamil Nadu', state: 'Tamil Nadu',
    type: 'Char Dham + Jyotirlinga', duration: '3-4 Days', bestTime: 'Oct–Apr',
    overview: 'On Pamban Island connected to mainland India by a dramatic bridge, Rameswaram is where Lord Ram is believed to have worshipped Lord Shiva before crossing to Lanka. Ramanathaswamy Temple has the longest corridor of any temple in India.',
    attractions: ['Ramanathaswamy Temple', '22 Holy Theerthams (sacred wells)', 'Dhanushkodi', 'Adam\'s Bridge viewpoint', 'Pamban Bridge'],
    tip: 'The mandatory 22-theertham ritual involves bathing in all 22 wells within the temple. Dress appropriately.',
    color: '#EE9B00', gradient: 'linear-gradient(135deg, #1a0800, #0a1000)',
  },
  {
    id: 7, name: 'Somnath', location: 'Prabhas Patan, Gujarat', state: 'Gujarat',
    type: 'Jyotirlinga', duration: '2-3 Days', bestTime: 'Oct–Mar',
    overview: 'The first and foremost of the 12 Jyotirlingas, Somnath has been rebuilt seven times after numerous invasions, symbolizing the eternal resilience of faith. The current temple, built in 1951 by Sardar Vallabhbhai Patel, stands magnificently on the Arabian Sea shore.',
    attractions: ['Somnath Temple', 'Bhalka Tirth', 'Triveni Sangam', 'Prabhas Patan Museum', 'Somnath Light & Sound Show'],
    tip: 'The light and sound show at Somnath beach at 7:45 PM is a must-see — it narrates the temple\'s epic history.',
    color: '#005F73', gradient: 'linear-gradient(135deg, #001520, #000a10)',
  },
  {
    id: 8, name: 'Dwarkadhish Temple', location: 'Dwarka, Gujarat', state: 'Gujarat',
    type: 'Char Dham', duration: '2-3 Days', bestTime: 'Oct–Mar',
    overview: 'The ancient city of Dwarka is believed to be the kingdom of Lord Krishna. The 5-storey Dwarkadhish temple, dating back over 2,500 years, stands at the confluence of the Gomti river and the Arabian Sea, making it one of the most picturesque pilgrimage sites in India.',
    attractions: ['Dwarkadhish Temple', 'Rukmini Devi Temple', 'Nageshwar Jyotirlinga', 'Beyt Dwarka Island', 'Gomti Ghat'],
    tip: 'Combine Dwarka, Somnath, and Nageshwar Jyotirlinga in a 5-day Gujarat pilgrimage circuit.',
    color: '#EE9B00', gradient: 'linear-gradient(135deg, #1a1000, #0a0a00)',
  },
  {
    id: 9, name: 'Vaishno Devi', location: 'Katra, Jammu & Kashmir', state: 'J&K',
    type: 'Shakti Peeth', duration: '3-4 Days', bestTime: 'Mar–May, Sep–Nov',
    overview: 'One of the most visited pilgrimage sites in India, Vaishno Devi shrine rests at 5,200 feet in the Trikuta mountains. Over 8 million pilgrims visit annually to seek blessings of Mata Vaishno Devi. The 13km trek through mountain terrain is both a physical and spiritual journey.',
    attractions: ['Vaishno Devi Shrine (Holy Cave)', 'Banganga', 'Charan Paduka', 'Bhairavnath Temple', 'Ardhkuwari Cave'],
    tip: 'Register for yatra at Katra base camp. Pony and palanquin services are available for senior pilgrims.',
    color: '#0A9396', gradient: 'linear-gradient(135deg, #001520, #000a10)',
  },
  {
    id: 10, name: 'Tirupati Balaji', location: 'Tirupati, Andhra Pradesh', state: 'Andhra Pradesh',
    type: 'Vaishnava Shrine', duration: '2-3 Days', bestTime: 'Sep–Feb',
    overview: 'The wealthiest and most visited religious institution in the world, Tirupati Balaji (Venkateswara temple) receives over 100,000 pilgrims daily. The golden gopuram, the sacred head-tonsuring ritual, and the darshan of Lord Venkateswara are experiences that stir the soul.',
    attractions: ['Tirumala Venkateswara Temple', 'Padmavathi Temple (Tiruchanur)', 'ISKCON Temple', 'Sri Kapileswara Swamy Temple', 'Chandragiri Fort'],
    tip: 'Book darshan tickets through TTD official website at least 1 month ahead. Special entry Darshan (₹300) is recommended.',
    color: '#EE9B00', gradient: 'linear-gradient(135deg, #1a0500, #0a0800)',
  },
  {
    id: 11, name: 'Jagannath Puri', location: 'Puri, Odisha', state: 'Odisha',
    type: 'Char Dham', duration: '3-4 Days', bestTime: 'Oct–Feb',
    overview: 'One of the four sacred Char Dham sites, Jagannath Puri is home to Lord Jagannath, a unique form of Lord Vishnu. The annual Rath Yatra chariot festival, when the deity is taken out on massive chariots, attracts millions of devotees and is one of the largest religious gatherings on earth.',
    attractions: ['Jagannath Temple', 'Puri Beach', 'Rath Yatra (Jul-Aug)', 'Konark Sun Temple', 'Chilika Lake'],
    tip: 'Non-Hindus are not permitted inside Jagannath Temple. Observe from the library terrace opposite the main entrance.',
    color: '#005F73', gradient: 'linear-gradient(135deg, #001015, #000510)',
  },
  {
    id: 12, name: 'Ujjain', location: 'Ujjain, MP', state: 'Madhya Pradesh',
    type: 'Sacred City', duration: '1-2 Days', bestTime: 'Oct–Mar',
    overview: 'One of the seven sacred cities (Sapta Puri) in Hinduism, Ujjain is the city of Mahakal. Host to the Kumbh Mela every 12 years, Ujjain is a living museum of Hindu culture, philosophy, and temple architecture spanning over 2,500 years.',
    attractions: ['Mahakaleshwar Temple', 'Kal Bhairav Temple', 'Ram Ghat', 'Sandipani Ashram', 'Harsiddhi Temple'],
    tip: 'Visit during Kartik month (Oct-Nov) to witness the spectacular lamps and fairs that light up the entire city.',
    color: '#EE9B00', gradient: 'linear-gradient(135deg, #1a0800, #0a0a00)',
  },
  {
    id: 13, name: 'Haridwar', location: 'Haridwar, Uttarakhand', state: 'Uttarakhand',
    type: 'Sacred City + Gateway', duration: '2-3 Days', bestTime: 'Feb–Nov',
    overview: 'The Gateway to the Gods, Haridwar is where the sacred Ganga descends from the Himalayas to the plains. The Har Ki Pauri ghat hosts India\'s most famous Ganga Aarti every evening — a breathtaking ceremony where thousands of lamps float on the holy river.',
    attractions: ['Har Ki Pauri', 'Ganga Aarti at Sunset', 'Mansa Devi Temple', 'Chandi Devi Temple', 'Daksha Mahadev Temple'],
    tip: 'Haridwar is the ideal starting point for Char Dham Yatra. Plan 2 days here before proceeding to the mountains.',
    color: '#0A9396', gradient: 'linear-gradient(135deg, #001520, #001010)',
  },
  {
    id: 14, name: 'Rishikesh', location: 'Rishikesh, Uttarakhand', state: 'Uttarakhand',
    type: 'Yoga Capital + Sacred', duration: '2-3 Days', bestTime: 'Feb–Nov',
    overview: 'The Yoga Capital of the World, Rishikesh is where the Ganga emerges from the mountain foothills. Spiritual seekers, yoga practitioners, and pilgrims have been drawn here for centuries. The iconic Laxman Jhula bridge, Triveni Ghat aarti, and ashram stays make for a multidimensional sacred experience.',
    attractions: ['Laxman Jhula', 'Ram Jhula', 'Triveni Ghat Aarti', 'Neelkanth Mahadev Temple', 'Parmarth Niketan Ashram'],
    tip: 'Rishikesh is alcohol and non-vegetarian free. Attend the morning and evening Ganga Aarti at Triveni Ghat — both are deeply moving.',
    color: '#005F73', gradient: 'linear-gradient(135deg, #001015, #000a10)',
  },
  {
    id: 15, name: 'Ayodhya Ram Mandir', location: 'Ayodhya, UP', state: 'Uttar Pradesh',
    type: 'Ram Mandir', duration: '2-3 Days', bestTime: 'Oct–Mar',
    overview: 'The birthplace of Lord Ram, Ayodhya witnessed the consecration of the grand new Ram Mandir in January 2024 — one of the most momentous events in modern Hindu history. The magnificent temple complex on Ram Janmabhoomi now stands as a beacon of devotion attracting millions of pilgrims each year.',
    attractions: ['Ram Janmabhoomi Mandir', 'Hanuman Garhi', 'Kanak Bhavan', 'Saryu Ghat Aarti', 'Dashrath Mahal'],
    tip: 'The new Ram Mandir has implemented timed entry slots. Book your darshan slot online through the official Ram Mandir website.',
    color: '#EE9B00', gradient: 'linear-gradient(135deg, #1a0800, #0a1000)',
  },
  {
    id: 16, name: 'Mathura Vrindavan', location: 'Mathura, UP', state: 'Uttar Pradesh',
    type: 'Krishna Dham', duration: '2-3 Days', bestTime: 'Oct–Mar',
    overview: 'The twin cities of Mathura (Lord Krishna\'s birthplace) and Vrindavan (where he spent his childhood) form the heart of Vaishnava pilgrimage. From the Krishna Janmabhoomi to the serene forests of Vrindavan, this region breathes Krishna at every step. Holi celebrations here are legendary.',
    attractions: ['Krishna Janmabhoomi Temple', 'Vrindavan Banke Bihari Temple', 'ISKCON Vrindavan', 'Prem Mandir', 'Govardhan Hill Parikrama'],
    tip: 'Visit during Janmashtami (Aug) or Holi (Mar) for an unforgettable festival experience that is truly one-of-a-kind.',
    color: '#0A9396', gradient: 'linear-gradient(135deg, #001520, #001010)',
  },
  {
    id: 17, name: 'Shirdi Sai Baba', location: 'Shirdi, Maharashtra', state: 'Maharashtra',
    type: 'Sai Baba Shrine', duration: '2-3 Days', bestTime: 'Oct–Mar',
    overview: 'Shirdi, the abode of Sai Baba, attracts over 25,000 devotees daily who come to receive blessings at the Samadhi Mandir where the saint rests. Sai Baba\'s message of love, faith, and service transcends all religions, making Shirdi one of the most inclusive pilgrimage destinations in India.',
    attractions: ['Sai Baba Samadhi Mandir', 'Dwarkamai Mosque', 'Chavadi', 'Lendi Baug', 'Shani Shingnapur (nearby)'],
    tip: 'Online advance booking is available for VIP darshan. The free prasad seva offers langar for all visitors.',
    color: '#EE9B00', gradient: 'linear-gradient(135deg, #1a1000, #0a0800)',
  },
  {
    id: 18, name: 'Srisailam Temple', location: 'Srisailam, Andhra Pradesh', state: 'Andhra Pradesh',
    type: 'Jyotirlinga + Shakti Peeth', duration: '2-3 Days', bestTime: 'Oct–Mar',
    overview: 'Srisailam is unique in being both a Jyotirlinga (Mallikarjuna) and a Shakti Peeth (Bhramaramba). Set amidst lush forest on the banks of the Krishna river in the Nallamala Hills, this sacred complex is one of the most powerful spiritual destinations in South India.',
    attractions: ['Mallikarjuna Swamy Temple', 'Bhramaramba Devi Temple', 'Krishna River Viewpoint', 'Akkamahadevi Caves', 'Patalaganga Ghat'],
    tip: 'The forest setting makes Srisailam one of India\'s most scenic pilgrimage sites. The ropeway to the temple offers stunning views.',
    color: '#005F73', gradient: 'linear-gradient(135deg, #001015, #000a05)',
  },
  {
    id: 19, name: 'Trimbakeshwar', location: 'Nashik, Maharashtra', state: 'Maharashtra',
    type: 'Jyotirlinga', duration: '1-2 Days', bestTime: 'Oct–Mar',
    overview: 'The only Jyotirlinga with a three-faced lingam representing the Hindu Trinity (Brahma, Vishnu, Mahesh), Trimbakeshwar is located near Nashik where the Godavari river originates. It is also one of the four cities hosting the Kumbh Mela.',
    attractions: ['Trimbakeshwar Jyotirlinga Temple', 'Brahmagiri Hill (Godavari Origin)', 'Mukti Dham Nashik', 'Ramkund Ghat (Nashik)', 'Pandava Leni Caves'],
    tip: 'Combine with Nashik (Kumbh Mela city) and Shirdi for a complete Maharashtra pilgrimage in 4-5 days.',
    color: '#0A9396', gradient: 'linear-gradient(135deg, #001520, #001010)',
  },
  {
    id: 20, name: 'Amarnath', location: 'Anantnag, J&K', state: 'Jammu & Kashmir',
    type: 'Shiva Shrine', duration: '5-7 Days', bestTime: 'Jul–Aug',
    overview: 'The holiest of Shiva shrines, Amarnath cave at 3,888 metres houses a natural ice Shivling that waxes and wanes with the moon. The arduous yet spiritually electrifying trek through Himalayan wilderness is considered the ultimate pilgrimage for Shiva devotees.',
    attractions: ['Amarnath Cave & Ice Shivling', 'Sheshnag Lake', 'Panchatarni', 'Baltal Base Camp', 'Pahalgam Valley'],
    tip: 'Helicopter service from Baltal and Pahalgam is available. Medical fitness certificate is mandatory for the Amarnath Yatra.',
    color: '#EE9B00', gradient: 'linear-gradient(135deg, #0a0f1a, #050a10)',
  },
]

export default function DestinationsClient() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('All')

  const types = ['All', 'Jyotirlinga', 'Char Dham', 'Shakti Peeth', 'Sacred City']
  const filtered = filter === 'All' ? destinations : destinations.filter(d => d.type.includes(filter))
  const selectedDest = destinations.find(d => d.id === selected)

  return (
    <section className="pb-20" style={{ background: '#0D1117' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {types.map((t) => (
            <button key={t} onClick={() => setFilter(t)}
              className="px-5 py-2 rounded-full font-outfit text-sm transition-all duration-200"
              style={{
                background: filter === t ? 'linear-gradient(135deg, #0A9396, #005F73)' : 'rgba(255,249,244,0.05)',
                color: filter === t ? 'white' : 'rgba(255,249,244,0.5)',
                border: filter === t ? 'none' : '1px solid rgba(255,249,244,0.08)',
                fontWeight: 600, cursor: 'pointer',
              }}>
              {t}
            </button>
          ))}
        </div>

        {/* Destinations grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {filtered.map((dest, i) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              onClick={() => setSelected(selected === dest.id ? null : dest.id)}
              className="relative overflow-hidden rounded-2xl cursor-pointer group"
              style={{
                background: dest.gradient,
                border: `1px solid ${selected === dest.id ? dest.color + '60' : 'rgba(255,249,244,0.06)'}`,
                minHeight: '180px',
                transition: 'all 0.3s ease',
              }}>
              <motion.div
                className="p-5 h-full flex flex-col justify-between"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}>
                <div>
                  <div className="text-xs px-2.5 py-1 rounded-full font-outfit inline-block mb-3"
                    style={{ background: `${dest.color}22`, color: dest.color, fontWeight: 700 }}>
                    {dest.type}
                  </div>
                  <h3 className="font-outfit text-lg leading-tight mb-1" style={{ color: '#FFF9F4', fontWeight: 800 }}>
                    {dest.name}
                  </h3>
                  <div className="flex items-center gap-1.5 font-inter text-xs" style={{ color: 'rgba(255,249,244,0.4)' }}>
                    <FiMapPin size={11} style={{ color: dest.color }} />{dest.location}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex gap-3">
                    <span className="flex items-center gap-1 font-inter text-xs" style={{ color: 'rgba(255,249,244,0.4)' }}>
                      <FiClock size={10} />{dest.duration}
                    </span>
                    <span className="flex items-center gap-1 font-inter text-xs" style={{ color: 'rgba(255,249,244,0.4)' }}>
                      <FiCalendar size={10} />{dest.bestTime}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: selected === dest.id ? 90 : 0 }}
                    className="w-6 h-6 flex items-center justify-center rounded-full"
                    style={{ background: `${dest.color}22` }}>
                    <FiArrowRight size={12} style={{ color: dest.color }} />
                  </motion.div>
                </div>
              </motion.div>

              {/* Selected indicator */}
              {selected === dest.id && (
                <motion.div layoutId="dest-selected"
                  className="absolute inset-x-0 bottom-0 h-0.5"
                  style={{ background: dest.color }} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Expanded detail panel */}
        <AnimatePresence>
          {selectedDest && (
            <motion.div
              key={selectedDest.id}
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 10, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden mb-8">
              <div className="p-8 md:p-10 rounded-2xl"
                style={{ background: selectedDest.gradient, border: `1px solid ${selectedDest.color}40` }}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="font-outfit text-xs px-3 py-1 rounded-full"
                          style={{ background: `${selectedDest.color}22`, color: selectedDest.color, fontWeight: 700 }}>
                          {selectedDest.type}
                        </span>
                        <h3 className="font-outfit mt-3 mb-1" style={{ color: '#FFF9F4', fontWeight: 900, fontSize: '1.5rem' }}>
                          {selectedDest.name}
                        </h3>
                        <div className="flex items-center gap-1.5 font-inter text-sm" style={{ color: 'rgba(255,249,244,0.5)' }}>
                          <FiMapPin size={13} style={{ color: selectedDest.color }} />{selectedDest.location}
                        </div>
                      </div>
                    </div>
                    <p className="font-jakarta leading-relaxed mb-6" style={{ color: 'rgba(255,249,244,0.65)' }}>
                      {selectedDest.overview}
                    </p>
                    <div className="p-4 rounded-xl" style={{ background: 'rgba(255,249,244,0.04)', border: '1px solid rgba(255,249,244,0.08)' }}>
                      <div className="font-outfit text-xs mb-2 tracking-widest uppercase" style={{ color: selectedDest.color, fontWeight: 700 }}>
                        Travel Tip
                      </div>
                      <p className="font-jakarta text-sm" style={{ color: 'rgba(255,249,244,0.6)' }}>
                        {selectedDest.tip}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-6 mb-6">
                      <div>
                        <div className="font-inter text-xs mb-1 uppercase tracking-wide" style={{ color: 'rgba(255,249,244,0.35)' }}>Duration</div>
                        <div className="font-outfit" style={{ color: selectedDest.color, fontWeight: 700 }}>{selectedDest.duration}</div>
                      </div>
                      <div>
                        <div className="font-inter text-xs mb-1 uppercase tracking-wide" style={{ color: 'rgba(255,249,244,0.35)' }}>Best Time</div>
                        <div className="font-outfit" style={{ color: selectedDest.color, fontWeight: 700 }}>{selectedDest.bestTime}</div>
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="font-outfit text-xs mb-3 tracking-widest uppercase" style={{ color: 'rgba(255,249,244,0.35)', fontWeight: 700 }}>
                        Key Attractions
                      </div>
                      <ul className="space-y-2">
                        {selectedDest.attractions.map((a) => (
                          <li key={a} className="flex items-center gap-2.5 font-jakarta text-sm"
                            style={{ color: 'rgba(255,249,244,0.6)' }}>
                            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: selectedDest.color }} />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href="/packages"
                      className="btn-sun w-full py-3 rounded-xl font-outfit flex items-center justify-center gap-2"
                      style={{ fontWeight: 700, textDecoration: 'none' }}>
                      View Tour Packages <FiArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}