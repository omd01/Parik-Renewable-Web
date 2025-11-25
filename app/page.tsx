'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Header from '@/components/Header'
import { ArrowUpRight, Sun, Battery, Zap, ShieldCheck, BarChart3, Leaf, Factory, Settings, HardHat } from 'lucide-react'
import { useRef } from 'react'

export default function Home() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  })

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-[#193354] selection:text-white">
      <Header />

      {/* HERO SECTION */}
      <section className="relative px-4 pt-24 pb-4 h-screen flex flex-col">
        {/* Image Container */}
        <div className="relative w-full h-[75vh] rounded-[2rem] overflow-hidden bg-zinc-900">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80 transition-transform duration-[2s] hover:scale-105"
            style={{ backgroundImage: 'url(/nuno-marques-0GbrjL3vZF4-unsplash.jpg)' }}
          />
          <div className="absolute inset-0 bg-black/20" />

          {/* Overlay Title */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12">
            <div className="flex justify-between items-start">
              <span className="font-mono text-xs text-white/80 tracking-widest border border-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                EST. 2010
              </span>
              <span className="font-mono text-xs text-white/80 tracking-widest border border-white/20 px-3 py-1 rounded-full backdrop-blur-md hidden md:block">
                SOLAR EPC SPECIALISTS
              </span>
            </div>

            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-8xl lg:text-[10rem] leading-[0.85] font-bold text-white tracking-tighter text-center md:text-left"
            >
              PARIKH<br />RENEWABLE
            </motion.h1>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex-1 flex items-center justify-between px-2 mt-4">
          <p className="font-mono text-xs text-zinc-500 max-w-xs hidden md:block">
            DELIVERING END-TO-END CLEAN ENERGY SOLUTIONS FOR INDUSTRIAL & COMMERCIAL SECTORS.
          </p>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#193354] animate-pulse" />
            <span className="font-mono text-xs text-[#193354]">SYSTEMS ONLINE</span>
          </div>
        </div>
      </section>

      {/* MANIFESTO SECTION */}
      <section className="py-32 px-4 bg-white flex justify-center items-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-center max-w-7xl leading-[0.9]"
        >
          WE ARE ENGINEERING THE FUTURE OF INDIAN ENERGY.
        </motion.h2>
      </section>

      {/* IMPACT DASHBOARD (Bento Grid) */}
      <section className="px-4 py-20 bg-zinc-50">
        <div className="max-w-[1800px] mx-auto">
          <div className="mb-12">
            <p className="font-mono text-xs text-zinc-500 mb-2 uppercase tracking-widest">// Live Impact Data</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-auto md:h-auto lg:h-[600px]">
            {/* Card 1: Total Energy Generated */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-zinc-100 rounded-3xl p-8 flex flex-col justify-between group hover:bg-white hover:shadow-xl transition-all duration-500 min-h-[300px]"
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs text-zinc-500 uppercase border border-zinc-200 px-2 py-1 rounded-full">Total Generation</span>
                <Zap className="w-6 h-6 text-[#F0B448]" />
              </div>
              <div>
                <span className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#193354] tracking-tighter">1.2 GW</span>
                <p className="font-mono text-xs text-zinc-500 mt-4">CLEAN ENERGY GENERATED TO DATE</p>
              </div>
            </motion.div>

            {/* Card 2: CO2 Offset */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-zinc-100 rounded-3xl p-8 flex flex-col justify-between group hover:bg-white hover:shadow-xl transition-all duration-500 min-h-[300px]"
            >
              <span className="font-mono text-xs text-zinc-500 uppercase border border-zinc-200 px-2 py-1 rounded-full w-fit">CO2 Offset</span>
              <div className="flex items-end gap-2 h-48 mt-8">
                {[40, 60, 45, 70, 55, 85, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="flex-1 bg-[#193354] rounded-t-sm opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                ))}
              </div>
              <div className="mt-4">
                <span className="text-4xl font-bold text-zinc-900">850k</span>
                <span className="text-sm text-zinc-500 ml-1">Tons</span>
              </div>
            </motion.div>

            {/* Card 3: Happy Clients */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-2 lg:col-span-3 bg-zinc-100 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between group hover:bg-white hover:shadow-xl transition-all duration-500 gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-[#F0B448]/20 rounded-full text-[#F0B448]">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <span className="block text-4xl md:text-5xl font-bold text-zinc-900">500+</span>
                  <span className="font-mono text-xs text-zinc-500 uppercase">Satisfied Industrial Clients</span>
                </div>
              </div>
              <ArrowUpRight className="w-8 h-8 text-zinc-300 group-hover:text-[#193354] transition-colors" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUSTED LANDSCAPE (Infinite Scroll) */}
      <section className="py-20 bg-white overflow-hidden border-y border-zinc-100">
        <div className="max-w-[1800px] mx-auto px-4 mb-8">
          <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest text-center">Trusted by Industry Leaders</p>
        </div>
        <div className="flex relative">
          <motion.div
            className="flex gap-20 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-20 items-center">
                {['TATA MOTORS', 'BAJAJ', 'SIEMENS', 'L&T', 'GODREJ', 'MAHINDRA', 'RELIANCE', 'ADANI'].map((client, j) => (
                  <span key={j} className="text-4xl md:text-6xl font-bold text-zinc-200 select-none">
                    {client}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION (Strict Bento Grid) */}
      <section className="px-4 py-32 bg-zinc-50">
        <div className="max-w-[1800px] mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-zinc-900">OUR EXPERTISE</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto lg:h-[800px]">
            {/* Item 1: EPC (Large) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group min-h-[400px]"
            >
              <div className="absolute inset-0 bg-[url('/solar-installation.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="bg-[#F0B448] text-[#193354] px-3 py-1 rounded-full font-mono text-xs font-bold mb-4 inline-block">
                      CORE SERVICE
                    </span>
                    <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">Turnkey EPC</h3>
                    <p className="text-white/80 max-w-md font-light">
                      End-to-end engineering, procurement, and construction for utility-scale and rooftop solar projects.
                    </p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white group-hover:bg-white group-hover:text-[#193354] transition-all hidden md:block">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Item 2: O&M (Tall) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-1 md:row-span-2 bg-white rounded-3xl p-8 border border-zinc-200 flex flex-col justify-between group hover:border-[#193354] transition-colors min-h-[300px]"
            >
              <div>
                <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#193354] group-hover:text-white transition-colors">
                  <Settings className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-zinc-900 mb-4">O&M Services</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Comprehensive operations and maintenance ensuring maximum plant uptime and performance efficiency.
                </p>
              </div>
              <ul className="space-y-3 mt-8">
                {['Preventive Maintenance', 'Remote Monitoring', 'Cleaning Services', 'Repairs'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-zinc-600">
                    <div className="w-1.5 h-1.5 bg-[#F0B448] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Item 3: Consulting (Dark) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-1 md:row-span-1 bg-zinc-900 rounded-3xl p-8 flex flex-col justify-between group min-h-[250px]"
            >
              <div className="flex justify-between items-start">
                <HardHat className="w-10 h-10 text-white" />
                <ArrowUpRight className="w-6 h-6 text-zinc-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Consulting</h3>
                <p className="text-zinc-400 text-xs">Feasibility studies & regulatory approvals.</p>
              </div>
            </motion.div>

            {/* Item 4: Manufacturing (Light) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-1 md:row-span-1 bg-[#F0B448] rounded-3xl p-8 flex flex-col justify-between group min-h-[250px]"
            >
              <div className="flex justify-between items-start">
                <Factory className="w-10 h-10 text-[#193354]" />
                <ArrowUpRight className="w-6 h-6 text-[#193354]/50 group-hover:text-[#193354] transition-colors" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#193354] mb-2">Manufacturing</h3>
                <p className="text-[#193354]/80 text-xs">High-quality mounting structures.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION (Sticky Scroll) */}
      <section className="bg-white" ref={targetRef}>
        <div className="max-w-[1800px] mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Sticky Title */}
            <div className="md:w-1/3 md:h-screen md:sticky md:top-0 flex items-center p-8 md:p-12 border-r border-zinc-100">
              <div>
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4 block">Selected Works</span>
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-zinc-900 leading-[0.9]">
                  OUR<br />WORK
                </h2>
                <p className="mt-8 text-zinc-500 max-w-xs font-light">
                  Showcasing our expertise in delivering high-performance solar rooftop solutions across various sectors.
                </p>
                <a href="/projects" className="mt-12 inline-flex items-center gap-2 text-sm font-bold border-b border-zinc-900 pb-1 hover:text-[#193354] hover:border-[#193354] transition-colors">
                  VIEW ALL PROJECTS <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Scrolling Projects */}
            <div className="md:w-2/3">
              {[
                { title: "Industrial Solar Plant", loc: "Aurangabad", cap: "500 kW", img: "/placeholder.svg?key=proj1" },
                { title: "Commercial Complex", loc: "Pune", cap: "100 kW", img: "/placeholder.svg?key=proj2" },
                { title: "Factory Warehouse", loc: "Nagpur", cap: "1 MW", img: "/placeholder.svg?key=proj5" },
                { title: "Hospital Rooftop", loc: "Sambhaji Nagar", cap: "200 kW", img: "/placeholder.svg?key=proj6" }
              ].map((project, i) => (
                <div key={i} className="h-auto md:h-screen flex items-center justify-center p-4 md:p-20 border-b border-zinc-100 bg-white">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full aspect-[4/3] md:h-full md:aspect-auto rounded-3xl overflow-hidden group shadow-2xl"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${project.img})` }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                    {/* Floating Case Study Button */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                      <button className="bg-white text-zinc-900 px-8 py-4 rounded-full font-mono text-sm font-bold hover:bg-[#F0B448] transition-colors shadow-xl">
                        VIEW CASE STUDY
                      </button>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="font-mono text-xs text-[#F0B448] mb-2">{project.loc} • {project.cap}</p>
                          <h3 className="text-2xl md:text-5xl font-bold">{project.title}</h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MEGA FOOTER */}
      <footer className="bg-zinc-950 text-white pt-20 md:pt-32 pb-6 px-6 md:px-4 rounded-t-[2rem] md:rounded-t-[3rem] -mt-12 relative z-10">
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
                Parikh Renewable is a leading Solar Rooftop EPC company delivering end-to-end clean energy solutions for industrial, commercial, and residential sectors.
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
              <span className="font-mono text-[10px] md:text-xs text-zinc-600">DESIGNED & DEVELOPED BY <a href="https://talentronaut.in/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-800 transition-colors">TALENTRONAUT TECHNOLOGIES PVT LTD</a></span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
