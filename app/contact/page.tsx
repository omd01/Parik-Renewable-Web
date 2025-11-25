'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from '@/components/Header'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

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
    <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-[#193354] selection:text-white">
      <Header />

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-[1800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest border border-zinc-200 px-3 py-1 rounded-full mb-8 inline-block">
              CONTACT
            </span>
            <h1 className="text-6xl md:text-[10rem] leading-[0.85] font-bold tracking-tighter text-zinc-900 mb-12">
              GET IN<br />TOUCH
            </h1>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="px-4 pb-20">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32">

            {/* Contact Info */}
            <div className="space-y-12 order-2 md:order-1">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-2 bg-zinc-200 rounded-full">
                    <MapPin className="w-5 h-5 text-[#193354]" />
                  </div>
                  Visit Us
                </h3>
                <p className="text-xl md:text-3xl font-light text-zinc-600 leading-relaxed">
                  Office No. 401, D Tower,<br />
                  Freedom Tower, Akashwani Chowk,<br />
                  Sambhaji Nagar, 431005
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-2 bg-zinc-200 rounded-full">
                    <Phone className="w-5 h-5 text-[#193354]" />
                  </div>
                  Call Us
                </h3>
                <p className="text-xl md:text-3xl font-light text-zinc-600">
                  +91 7083366625
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="p-2 bg-zinc-200 rounded-full">
                    <Mail className="w-5 h-5 text-[#193354]" />
                  </div>
                  Email Us
                </h3>
                <p className="text-xl md:text-3xl font-light text-zinc-600">
                  Support@parikhrenewable.com
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-xl border border-zinc-100 order-1 md:order-2"
            >
              <h2 className="text-3xl font-bold text-[#193354] mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2 block">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 h-14 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[#193354] focus:ring-1 focus:ring-[#193354] outline-none transition"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2 block">Phone</label>
                    <input
                      type="tel"
                      className="w-full px-4 h-14 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[#193354] focus:ring-1 focus:ring-[#193354] outline-none transition"
                      placeholder="+91..."
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2 block">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 h-14 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[#193354] focus:ring-1 focus:ring-[#193354] outline-none transition"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2 block">Subject</label>
                  <select
                    className="w-full px-4 h-14 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[#193354] focus:ring-1 focus:ring-[#193354] outline-none transition appearance-none"
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
                  <label className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2 block">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-4 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[#193354] focus:ring-1 focus:ring-[#193354] outline-none transition"
                    placeholder="Tell us about your project..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#193354] text-white font-bold py-5 rounded-xl hover:bg-[#F0B448] hover:text-[#193354] transition duration-300 flex items-center justify-center gap-2"
                >
                  SEND MESSAGE <ArrowUpRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MEGA FOOTER */}
      <footer className="bg-zinc-950 text-white pt-20 md:pt-32 pb-6 px-6 md:px-4 rounded-t-[2rem] md:rounded-t-[3rem] mt-20">
        <div className="max-w-[1800px] mx-auto">
          <div className="border-t border-zinc-900 pt-8 flex flex-col justify-end items-center mt-12 md:mt-20">
            <h1 className="w-full text-center text-[12vw] md:text-[13vw] lg:text-[14vw] leading-none font-bold tracking-tighter text-white/10 select-none">
              PARIKH RENEWABLE
            </h1>
            <div className="flex gap-4 md:gap-8 pb-4 md:pb-8 mt-4">
              <span className="font-mono text-[10px] md:text-xs text-zinc-600">© 2025 PRIVACY POLICY</span>
              <span className="font-mono text-[10px] md:text-xs text-zinc-600">DESIGNED & DEVELOPED BY <a href="https://talentronaut.in/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-800 transition-colors">TALENTRONAUT TECHNOLOGIES PVT LTD</a></span> </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
