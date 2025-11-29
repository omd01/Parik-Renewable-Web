'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Header from '@/components/Header'
import { ArrowUpRight, MapPin, Zap } from 'lucide-react'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const projects = [
    {
      title: "Industrial Solar Plant",
      category: "Industrial",
      capacity: "500 kW",
      location: "Aurangabad",
      image: "/Industrial-Solar-Plant.png",
      desc: "High-efficiency module installation for heavy machinery power requirements."
    },
    {
      title: "Commercial Complex",
      category: "Commercial",
      capacity: "100 kW",
      location: "Pune",
      image: "/Commercial-Complex.png",
      desc: "Rooftop solution maximizing space utilization for a shopping complex."
    },
    {
      title: "Residential Villa",
      category: "Residential",
      capacity: "10 kW",
      location: "Nashik",
      image: "/Residential-Villa.png",
      desc: "Aesthetic integration of solar panels for a luxury villa."
    },
    {
      title: "School Campus",
      category: "Institutional",
      capacity: "50 kW",
      location: "Mumbai",
      image: "/School-Campus.png",
      desc: "Educational institution powered by clean energy."
    },
    {
      title: "Factory Warehouse",
      category: "Industrial",
      capacity: "1 MW",
      location: "Nagpur",
      image: "/Factory-Warehouse.png",
      desc: "Large-scale industrial rooftop project."
    },
    {
      title: "Hospital Rooftop",
      category: "Institutional",
      capacity: "200 kW",
      location: "Sambhaji Nagar",
      image: "/Hospital-Rooftop.png",
      desc: "Reliable power backup and savings for a healthcare facility."
    }
  ]

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter)

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
              PORTFOLIO
            </span>
            <h1 className="text-6xl md:text-[10rem] leading-[0.85] font-bold tracking-tighter text-zinc-900 mb-12">
              OUR<br />WORK
            </h1>
          </motion.div>
        </div>
      </section>

      {/* STICKY SCROLL PROJECTS */}
      <section className="px-4 pb-20">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12">

            {/* Sticky Filter Sidebar */}
            <div className="md:w-1/4">
              <div className="md:sticky md:top-32 mb-8 md:mb-0">
                <h3 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-6">FILTER BY SECTOR</h3>
                <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-4 md:gap-2 pb-4 md:pb-0 scrollbar-hide">
                  {['All', 'Industrial', 'Commercial', 'Residential', 'Institutional'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`text-lg md:text-2xl font-bold transition-colors whitespace-nowrap ${filter === cat
                        ? 'text-[#193354]'
                        : 'text-zinc-300 hover:text-zinc-500'
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects List */}
            <div className="md:w-3/4 space-y-12 md:space-y-32">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="group"
                >
                  <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden mb-8 bg-zinc-200">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                    <div className="absolute top-6 right-6">
                      <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full font-mono text-xs font-bold text-zinc-900">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div>
                      <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">{project.title}</h2>
                      <p className="text-zinc-500 max-w-xl text-lg font-light">{project.desc}</p>
                    </div>
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-zinc-100 rounded-full">
                          <Zap className="w-4 h-4 text-[#F0B448]" />
                        </div>
                        <span className="font-mono text-sm font-bold text-zinc-700">{project.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-zinc-100 rounded-full">
                          <MapPin className="w-4 h-4 text-[#193354]" />
                        </div>
                        <span className="font-mono text-sm font-bold text-zinc-700">{project.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEGA FOOTER */}
      <footer className="bg-zinc-950 text-white pt-20 md:pt-32 pb-6 px-6 md:px-4 rounded-t-[2rem] md:rounded-t-[3rem] mt-20">
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col items-center text-center mb-20 md:mb-32">
            <h2 className="text-5xl md:text-[10rem] font-bold tracking-tighter leading-[0.9] md:leading-[0.8] mb-8 md:mb-12">
              READY TO<br /><span className="text-zinc-800">START?</span>
            </h2>
            <a href="/contact" className="group relative inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-6 bg-[#F0B448] text-[#193354] rounded-full text-lg md:text-xl font-bold overflow-hidden transition-transform hover:scale-105">
              <span className="relative z-10 flex items-center gap-2 md:gap-3">
                GET A QUOTE <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 md:mb-20 border-t border-zinc-900 pt-12 md:pt-20 p-0 md:p-12">
            <div className="col-span-1 md:col-span-2">
              <p className="text-zinc-500 max-w-md text-base md:text-lg font-light leading-relaxed">
                Parikh Renewable is a leading Solar Rooftop EPC company delivering end-to-end clean energy solutions.
              </p>
            </div>

            {/* Mobile Grid for Contact & Links */}
            <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Links</h4>
                <ul className="space-y-2">
                  {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-zinc-300 hover:text-white transition-colors text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Contact</h4>
                <p className="text-zinc-300 font-light text-sm">
                  Office No. 401, D Tower,<br />
                  Freedom Tower, Akashwani Chowk,<br />
                  Sambhaji Nagar, 431005
                </p>
                <p className="text-zinc-300 font-mono text-sm">+91 7083366625</p>
                <p className="text-zinc-300 font-mono text-[10px] md:text-sm break-all">Support@parikhrenewable.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-8 flex flex-col justify-end items-center mt-12 md:mt-20">
            <h1 className="w-full text-center text-[12vw] md:text-[13vw] lg:text-[14vw] leading-none font-bold tracking-tighter text-white/10 select-none">
              PARIKH RENEWABLE
            </h1>
            <div className="flex gap-4 md:gap-8 pb-4 md:pb-8 mt-4">
              <span className="font-mono text-[10px] md:text-xs text-zinc-600">© 2025 PRIVACY POLICY</span>
              <span className="font-mono text-[10px] md:text-xs text-zinc-600">DESIGNED & DEVELOPED BY <a href="https://talentronaut.in/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-800 transition-colors">TALENTRONAUT TECHNOLOGIES PVT LTD</a></span>  </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
