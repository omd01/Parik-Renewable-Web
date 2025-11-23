'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from '@/components/Header'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formState)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#193354] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?key=4du06')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#F0B448] text-sm uppercase tracking-widest font-semibold mb-4">GET IN TOUCH</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl font-light leading-relaxed">
              Ready to switch to solar? Contact us for a consultation and quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16">

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#193354] mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#F0B448] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#193354]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#193354] mb-2">Our Office</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Office No. 401, D Tower, Freedom Tower,<br />
                      Akashwani Chowk, Sambhaji Nagar, 431005
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#193354] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#193354] mb-2">Phone</h3>
                    <p className="text-gray-600">+91 7083366625</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#193354] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#193354] mb-2">Email</h3>
                    <p className="text-gray-600">Support@parikhrenewable.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-[#193354] mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#193354] focus:ring-1 focus:ring-[#193354] outline-none transition"
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#193354] focus:ring-1 focus:ring-[#193354] outline-none transition"
                      placeholder="Your Phone"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#193354] focus:ring-1 focus:ring-[#193354] outline-none transition"
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#193354] focus:ring-1 focus:ring-[#193354] outline-none transition"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  >
                    <option value="">Select a Subject</option>
                    <option value="Residential Solar">Residential Solar</option>
                    <option value="Commercial Solar">Commercial Solar</option>
                    <option value="Industrial Solar">Industrial Solar</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#193354] focus:ring-1 focus:ring-[#193354] outline-none transition"
                    placeholder="How can we help you?"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#193354] text-white font-bold py-4 rounded-xl hover:bg-[#F0B448] hover:text-[#193354] transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#193354] text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div>
              <h2 className="text-4xl font-bold leading-tight mb-6">
                Powering India with<br /><span className="text-[#F0B448]">Clean Energy.</span>
              </h2>
              <p className="text-xs text-gray-400">©2025 Parikh Renewable Private Limited</p>
            </div>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">LOCATION</p>
              <p className="text-sm text-white leading-relaxed">
                Office No. 401, D Tower, Freedom Tower,<br />
                Akashwani Chowk, Sambhaji Nagar, 431005
              </p>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mt-6">CONTACT</p>
              <p className="text-sm text-white">+91 7083366625</p>
            </div>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">EMAIL</p>
              <p className="text-sm text-white">Support@parikhrenewable.com</p>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mt-6">WEBSITE</p>
              <p className="text-sm text-white">www.parikhrenewable.com</p>
            </div>
          </div>
          <div className="border-t border-[#65778B] pt-12 text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">PARIKH RENEWABLE</h1>
          </div>
        </div>
      </footer>
    </main>
  )
}
