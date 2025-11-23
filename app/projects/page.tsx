'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from '@/components/Header'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const projects = [
    {
      title: "Industrial Solar Plant",
      category: "Industrial",
      capacity: "500 kW",
      location: "Aurangabad",
      image: "/placeholder.svg?key=proj1"
    },
    {
      title: "Commercial Complex Rooftop",
      category: "Commercial",
      capacity: "100 kW",
      location: "Pune",
      image: "/placeholder.svg?key=proj2"
    },
    {
      title: "Residential Villa System",
      category: "Residential",
      capacity: "10 kW",
      location: "Nashik",
      image: "/placeholder.svg?key=proj3"
    },
    {
      title: "School Campus Solar",
      category: "Institutional",
      capacity: "50 kW",
      location: "Mumbai",
      image: "/placeholder.svg?key=proj4"
    },
    {
      title: "Factory Warehouse",
      category: "Industrial",
      capacity: "1 MW",
      location: "Nagpur",
      image: "/placeholder.svg?key=proj5"
    },
    {
      title: "Hospital Rooftop",
      category: "Institutional",
      capacity: "200 kW",
      location: "Sambhaji Nagar",
      image: "/placeholder.svg?key=proj6"
    }
  ]

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <main className="min-h-screen bg-white">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[#193354] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?key=3cu95')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#F0B448] text-sm uppercase tracking-widest font-semibold mb-4">OUR WORK</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">Featured Projects</h1>
            <p className="text-xl text-blue-100 max-w-3xl font-light leading-relaxed">
              Showcasing our expertise in delivering high-performance solar rooftop solutions across various sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {['All', 'Industrial', 'Commercial', 'Residential', 'Institutional'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${filter === cat
                    ? 'bg-[#193354] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#193354]">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#193354] mb-2">{project.title}</h3>
                  <div className="flex justify-between items-center text-sm text-gray-600 mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#F0B448]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>{project.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#F0B448]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
