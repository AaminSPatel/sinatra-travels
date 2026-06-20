'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { travelConfig } from '@/config/travelConfig'
import { Calendar, Users, MapPin, DollarSign, ChevronRight } from 'lucide-react'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    packageId: '',
    numberOfPeople: '',
    startDate: '',
    photography: false,
    specialRequests: '',
  })

  const [submittedData, setSubmittedData] = useState(null)
  const [selectedPackage, setSelectedPackage] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === 'checkbox' ? checked : value
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }))

    if (name === 'packageId') {
      const pkg = travelConfig.packages.find((p) => p.id === parseInt(value))
      setSelectedPackage(pkg)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedData(formData)
    // In real scenario, you'd send this to a backend
    console.log('Booking submitted:', formData)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmittedData(null)
      setFormData({
        name: '',
        email: '',
        phone: '',
        packageId: '',
        numberOfPeople: '',
        startDate: '',
        photography: false,
        specialRequests: '',
      })
      setSelectedPackage(null)
    }, 5000)
  }

  const calculateTotal = () => {
    if (!selectedPackage || !formData.numberOfPeople) return 0
    const packagePrice = parseInt(
      selectedPackage.price.replace(/[^0-9]/g, '')
    )
    const photoPrice = formData.photography
      ? parseInt(
          travelConfig.photographyPackage.price.replace(/[^0-9]/g, '')
        )
      : 0
    const total =
      packagePrice + photoPrice * parseInt(formData.numberOfPeople)
    return total
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        className="py-16 px-4 text-center text-white"
        style={{
          background:
            'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
        }}
      >
        <h1 className="text-5xl font-bold mb-4">Book Your Adventure</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">
          Reserve your spot for an unforgettable monsoon experience. Quick,
          easy, and secure booking process.
        </p>
      </section>

      {/* Booking Section */}
      <section className="py-20 px-4 flex-grow">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              {submittedData ? (
                <div
                  className="p-12 rounded-lg text-center animate-scale-in"
                  style={{
                    backgroundColor: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                  }}
                >
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-3xl font-bold mb-4">Booking Confirmed!</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Thank you for choosing MonsoonWanderer! Your booking has been
                    received.
                  </p>
                  <div
                    className="p-6 rounded-lg mb-6"
                    style={{
                      backgroundColor: 'var(--primary-foreground)',
                      color: 'var(--primary)',
                    }}
                  >
                    <p className="font-semibold">Booking Details:</p>
                    <p className="mt-2">Name: {submittedData.name}</p>
                    <p>Email: {submittedData.email}</p>
                    <p>
                      Package:{' '}
                      {selectedPackage?.name || 'To be confirmed'}
                    </p>
                    <p>Travelers: {submittedData.numberOfPeople}</p>
                    <p className="mt-4 text-lg font-bold">
                      Total: ₹{calculateTotal()}
                    </p>
                  </div>
                  <p className="opacity-90">
                    We will send you a confirmation email shortly with all the
                    details and payment instructions. Contact us for any queries!
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 p-8 rounded-lg shadow-lg"
                  style={{ backgroundColor: 'var(--card)' }}
                >
                  {/* Personal Information */}
                  <div>
                    <h3
                      className="text-xl font-bold mb-4"
                      style={{ color: 'var(--primary)' }}
                    >
                      Your Information
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label
                          className="block text-sm font-semibold mb-2"
                          style={{ color: 'var(--primary)' }}
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                          style={{
                            borderColor: 'var(--border)',
                            backgroundColor: 'var(--input)',
                            color: 'var(--foreground)',
                          }}
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            className="block text-sm font-semibold mb-2"
                            style={{ color: 'var(--primary)' }}
                          >
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                            style={{
                              borderColor: 'var(--border)',
                              backgroundColor: 'var(--input)',
                              color: 'var(--foreground)',
                            }}
                            placeholder="john@example.com"
                          />
                        </div>

                        <div>
                          <label
                            className="block text-sm font-semibold mb-2"
                            style={{ color: 'var(--primary)' }}
                          >
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                            style={{
                              borderColor: 'var(--border)',
                              backgroundColor: 'var(--input)',
                              color: 'var(--foreground)',
                            }}
                            placeholder="+91 XXXXX-XXXXX"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Package Selection */}
                  <div className="border-t pt-6" style={{ borderColor: 'var(--border)' }}>
                    <h3
                      className="text-xl font-bold mb-4"
                      style={{ color: 'var(--primary)' }}
                    >
                      Choose Your Package
                    </h3>
                    <div>
                      <label
                        className="block text-sm font-semibold mb-2"
                        style={{ color: 'var(--primary)' }}
                      >
                        Select Package *
                      </label>
                      <select
                        name="packageId"
                        value={formData.packageId}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                        style={{
                          borderColor: 'var(--border)',
                          backgroundColor: 'var(--input)',
                          color: 'var(--foreground)',
                        }}
                      >
                        <option value="">-- Select a Package --</option>
                        {travelConfig.packages.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {pkg.name} - {pkg.price} ({pkg.duration})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Trip Details */}
                  <div className="border-t pt-6" style={{ borderColor: 'var(--border)' }}>
                    <h3
                      className="text-xl font-bold mb-4"
                      style={{ color: 'var(--primary)' }}
                    >
                      Trip Details
                    </h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label
                            className="block text-sm font-semibold mb-2"
                            style={{ color: 'var(--primary)' }}
                          >
                            Number of Travelers *
                          </label>
                          <input
                            type="number"
                            name="numberOfPeople"
                            value={formData.numberOfPeople}
                            onChange={handleChange}
                            required
                            min="1"
                            max="50"
                            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                            style={{
                              borderColor: 'var(--border)',
                              backgroundColor: 'var(--input)',
                              color: 'var(--foreground)',
                            }}
                            placeholder="2"
                          />
                        </div>

                        <div>
                          <label
                            className="block text-sm font-semibold mb-2"
                            style={{ color: 'var(--primary)' }}
                          >
                            Preferred Start Date
                          </label>
                          <input
                            type="date"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2"
                            style={{
                              borderColor: 'var(--border)',
                              backgroundColor: 'var(--input)',
                              color: 'var(--foreground)',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Add-ons */}
                  <div className="border-t pt-6" style={{ borderColor: 'var(--border)' }}>
                    <h3
                      className="text-xl font-bold mb-4"
                      style={{ color: 'var(--primary)' }}
                    >
                      Add-ons
                    </h3>
                    <label className="flex items-center gap-3 p-4 rounded-lg cursor-pointer"
                      style={{
                        backgroundColor: 'var(--muted)',
                        opacity: 0.7,
                      }}
                    >
                      <input
                        type="checkbox"
                        name="photography"
                        checked={formData.photography}
                        onChange={handleChange}
                        className="w-5 h-5"
                      />
                      <div>
                        <p
                          className="font-semibold"
                          style={{ color: 'var(--primary)' }}
                        >
                          Professional Photography Service
                        </p>
                        <p
                          className="text-sm"
                          style={{ color: 'var(--muted-foreground)' }}
                        >
                          {travelConfig.photographyPackage.price} per traveler
                        </p>
                      </div>
                    </label>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label
                      className="block text-sm font-semibold mb-2"
                      style={{ color: 'var(--primary)' }}
                    >
                      Special Requests
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 resize-none"
                      style={{
                        borderColor: 'var(--border)',
                        backgroundColor: 'var(--input)',
                        color: 'var(--foreground)',
                      }}
                      placeholder="Any special dietary needs, accessibility requirements, or preferences?"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-lg font-bold text-lg transition-all hover:shadow-lg flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: 'var(--primary)',
                      color: 'var(--primary-foreground)',
                    }}
                  >
                    Complete Booking <ChevronRight size={20} />
                  </button>
                </form>
              )}
            </div>

            {/* Booking Summary */}
            <div className="lg:col-span-1">
              <div
                className="rounded-lg shadow-lg p-6 sticky top-24"
                style={{ backgroundColor: 'var(--card)' }}
              >
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: 'var(--primary)' }}
                >
                  Booking Summary
                </h3>

                {selectedPackage ? (
                  <div className="space-y-6">
                    {/* Package Details */}
                    <div>
                      <img
                        src={selectedPackage.image}
                        alt={selectedPackage.name}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                      />
                      <h4
                        className="font-bold text-lg"
                        style={{ color: 'var(--primary)' }}
                      >
                        {selectedPackage.name}
                      </h4>
                      <p
                        className="text-sm mt-1"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        {selectedPackage.duration}
                      </p>
                    </div>

                    {/* Details */}
                    <div
                      className="space-y-3 p-4 rounded-lg"
                      style={{
                        backgroundColor: 'var(--muted)',
                        opacity: 0.7,
                      }}
                    >
                      <div className="flex justify-between items-center">
                        <span
                          className="text-sm"
                          style={{ color: 'var(--muted-foreground)' }}
                        >
                          Package Price
                        </span>
                        <span
                          className="font-semibold"
                          style={{ color: 'var(--primary)' }}
                        >
                          {selectedPackage.price}
                        </span>
                      </div>

                      {formData.numberOfPeople && (
                        <div className="flex justify-between items-center">
                          <span
                            className="text-sm"
                            style={{ color: 'var(--muted-foreground)' }}
                          >
                            Travelers ({formData.numberOfPeople})
                          </span>
                          <span
                            className="font-semibold"
                            style={{ color: 'var(--primary)' }}
                          >
                            x{formData.numberOfPeople}
                          </span>
                        </div>
                      )}

                      {formData.photography && (
                        <div className="flex justify-between items-center">
                          <span
                            className="text-sm"
                            style={{ color: 'var(--muted-foreground)' }}
                          >
                            Photography
                          </span>
                          <span
                            className="font-semibold"
                            style={{ color: 'var(--accent)' }}
                          >
                            +{travelConfig.photographyPackage.price}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Total */}
                    <div
                      className="border-t pt-4"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      <div className="flex justify-between items-center">
                        <span
                          className="font-bold text-lg"
                          style={{ color: 'var(--primary)' }}
                        >
                          Estimated Total
                        </span>
                        <span
                          className="text-2xl font-bold"
                          style={{ color: 'var(--accent)' }}
                        >
                          ₹{calculateTotal()}
                        </span>
                      </div>
                      <p
                        className="text-xs mt-2"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        Final amount may vary based on group size and additional
                        services
                      </p>
                    </div>

                    {/* Info */}
                    <div
                      className="p-4 rounded-lg"
                      style={{
                        backgroundColor: 'var(--muted)',
                        opacity: 0.5,
                      }}
                    >
                      <p
                        className="text-xs"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        ✓ Flexible cancellation up to 7 days before
                      </p>
                      <p
                        className="text-xs mt-2"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        ✓ 24/7 customer support
                      </p>
                      <p
                        className="text-xs mt-2"
                        style={{ color: 'var(--muted-foreground)' }}
                      >
                        ✓ Secure payment processing
                      </p>
                    </div>
                  </div>
                ) : (
                  <div
                    className="text-center py-8"
                    style={{ backgroundColor: 'var(--muted)', opacity: 0.5 }}
                  >
                    <p style={{ color: 'var(--muted-foreground)' }}>
                      Select a package to see pricing and details
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section
        className="py-12 px-4 border-t"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div
                className="text-4xl mb-2"
                style={{ color: 'var(--primary)' }}
              >
                500+
              </div>
              <p style={{ color: 'var(--muted-foreground)' }}>
                Happy Adventurers
              </p>
            </div>
            <div>
              <div
                className="text-4xl mb-2"
                style={{ color: 'var(--primary)' }}
              >
                ⭐ 4.9/5
              </div>
              <p style={{ color: 'var(--muted-foreground)' }}>
                Customer Rating
              </p>
            </div>
            <div>
              <div
                className="text-4xl mb-2"
                style={{ color: 'var(--primary)' }}
              >
                11
              </div>
              <p style={{ color: 'var(--muted-foreground)' }}>
                Beautiful Destinations
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
