'use client'

import { travelConfig } from '@/config/travelConfig'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${travelConfig.contact.whatsapp.replace(/\D/g, '')}?text=Hi! I'm interested in your monsoon packages`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center animate-float"
      style={{
        backgroundColor: '#25D366',
        color: 'white',
      }}
      title="Contact us on WhatsApp"
    >
      <svg
        className="w-7 h-7"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.707 5.403 2.051 7.697L1.885 23.5l8.236-2.158c2.203 1.203 4.682 1.839 7.261 1.839 5.416 0 9.713-4.313 9.713-9.746 0-2.605-.635-5.079-1.824-7.433-1.189-2.354-2.821-4.359-4.804-5.794-1.983-1.435-4.267-2.286-6.714-2.286-2.334 0-4.59.591-6.59 1.695" />
      </svg>
    </a>
  )
}
