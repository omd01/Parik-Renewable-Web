'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Navigation */}
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#193354] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?key=2bu84')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#F0B448] text-sm uppercase tracking-widest font-semibold mb-4">WHAT WE DO</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl font-light leading-relaxed">
              Comprehensive Solar Rooftop EPC solutions and supporting services for industrial, commercial, and residential sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">

          {/* Solar Rooftop EPC */}
          <div className="mb-24">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#193354] mb-4">Solar Rooftop EPC</h2>
              <p className="text-gray-600 max-w-2xl">
                We provide turnkey solutions from concept to commissioning, ensuring high-quality engineering and execution.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Industrial Rooftop", desc: "1 kW to multi-MW scale systems for factories and warehouses." },
                { title: "Commercial Rooftop", desc: "Efficient solar solutions for shops, malls, and office buildings." },
                { title: "Residential Solar", desc: "On-grid, hybrid, and off-grid systems for homes." },
                { title: "Institutional Rooftop", desc: "Sustainable energy for schools, colleges, and NGOs." },
                { title: "Battery Storage", desc: "Advanced battery-based solar storage systems for backup." },
                { title: "Net Metering", desc: "Seamless net-metered and open-access solar integration." }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition border border-gray-100 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-[#193354] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#F0B448] transition-colors">
                    <svg className="w-6 h-6 text-white group-hover:text-[#193354] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#193354] mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Supporting Services */}
          <div className="mb-24">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#193354] mb-4">Supporting Services</h2>
              <p className="text-gray-600 max-w-2xl">
                Ensuring complete project reliability, safety and performance with our specialized supporting services.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Civil Works",
                  desc: "Foundations, RCC work, fabrication and rooftop structure reinforcement.",
                  icon: (
                    <svg className="w-6 h-6 text-white group-hover:text-[#193354]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                {
                  title: "Electrical Contracting",
                  desc: "HT/LT installations, industrial wiring, safety audits and panel installation.",
                  icon: (
                    <svg className="w-6 h-6 text-white group-hover:text-[#193354]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Material Trading",
                  desc: "Solar panels, inverters, cables, L&T products and secure products.",
                  icon: (
                    <svg className="w-6 h-6 text-white group-hover:text-[#193354]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  )
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  className="bg-[#193354] rounded-2xl p-8 text-white hover:bg-[#1a3d5e] transition group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#F0B448] transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div>
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#193354] mb-4">Execution Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our streamlined 8-step process ensures efficient execution and timely delivery.
              </p>
            </motion.div>

            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {[
                  "Site Visit & Analysis",
                  "Design & Simulation",
                  "Engineering & Layout",
                  "Procurement",
                  "Installation",
                  "Testing",
                  "Net-Metering",
                  "Handover"
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-[#F0B448] rounded-full flex items-center justify-center text-[#193354] font-bold text-sm mx-auto mb-4">
                      {i + 1}
                    </div>
                    <p className="font-semibold text-[#193354] text-sm">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
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
