'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#193354] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/solar-panels-blue-sky.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#F0B448] text-sm uppercase tracking-widest font-semibold mb-4">WHO WE ARE</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">About Parikh Renewable</h1>
            <p className="text-xl text-blue-100 max-w-3xl font-light leading-relaxed">
              Parikh Renewable Private Limited is a leading Solar Rooftop EPC company delivering end-to-end clean energy solutions across industrial, commercial, residential and institutional sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#193354] mb-6">Powering a Sustainable Future</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                With a strong engineering foundation and a commitment to sustainable energy, we provide reliable, efficient and long-lasting rooftop solar installations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Along with solar EPC, we also offer supporting services such as civil works, electrical contracting, and manufacturing, ensuring complete technical control and project quality.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src="/solar-engineers-meeting.jpg"
                alt="Team Meeting"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              className="bg-[#193354] rounded-3xl p-10 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#F0B448] rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#193354]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100 leading-relaxed">
                To become India’s most trusted and technologically advanced rooftop solar company delivering sustainable energy solutions for every sector.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#F0B448] rounded-3xl p-10 text-[#193354]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-[#193354] rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-[#193354]/80 leading-relaxed font-medium">
                To accelerate clean energy adoption through high-quality engineering, safe execution and performance-driven solar rooftop systems.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#193354] mb-10 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { title: "Integrity", desc: "Ethical, transparent and responsible operations." },
                { title: "Engineering Excellence", desc: "Best-in-class design, materials and installation quality." },
                { title: "Customer Commitment", desc: "Solutions tailored to client energy needs and savings goals." },
                { title: "Safety", desc: "Strict adherence to rooftop safety protocols." },
                { title: "Sustainability", desc: "Promoting long-term green energy adoption." }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-[#193354] mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.desc}</p>
                </motion.div>
              ))}
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
