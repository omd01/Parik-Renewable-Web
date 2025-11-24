'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import { ArrowUpRight, Settings, HardHat, Factory, Zap, Battery, Home, Building2, Warehouse } from 'lucide-react'

export default function Services() {
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
              EXPERTISE
            </span>
            <h1 className="text-6xl md:text-[10rem] leading-[0.85] font-bold tracking-tighter text-zinc-900 mb-12">
              WHAT<br />WE DO
            </h1>
            <p className="text-2xl md:text-4xl font-light leading-tight text-zinc-800 max-w-4xl">
              Comprehensive Solar Rooftop EPC solutions and supporting services for industrial, commercial, and residential sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BENTO GRID - SERVICES */}
      <section className="px-4 py-20">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[400px]">

            {/* EPC Card (Large) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('/solar-installation.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-0 left-0 p-12 w-full">
                <span className="bg-[#F0B448] text-[#193354] px-4 py-2 rounded-full font-mono text-xs font-bold mb-6 inline-block">
                  TURNKEY EPC
                </span>
                <h3 className="text-5xl md:text-7xl font-bold text-white mb-6">Solar Rooftop</h3>
                <p className="text-white/80 max-w-xl text-lg font-light">
                  End-to-end engineering, procurement, and construction. From concept to commissioning, we ensure high-quality execution for maximum energy generation.
                </p>
              </div>
            </motion.div>

            {/* O&M Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-10 border border-zinc-200 flex flex-col justify-between group hover:border-[#193354] transition-colors"
            >
              <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center group-hover:bg-[#193354] transition-colors">
                <Settings className="w-8 h-8 text-zinc-900 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">O&M Services</h3>
                <p className="text-zinc-500">
                  Comprehensive maintenance ensuring maximum plant uptime and efficiency.
                </p>
              </div>
            </motion.div>

            {/* Consulting Card (Dark) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-zinc-900 rounded-3xl p-10 flex flex-col justify-between group text-white"
            >
              <div className="flex justify-between items-start">
                <HardHat className="w-10 h-10" />
                <ArrowUpRight className="w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Consulting</h3>
                <p className="text-zinc-400">
                  Feasibility studies, regulatory approvals, and technical advisory.
                </p>
              </div>
            </motion.div>

            {/* Supporting Services Grid */}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Civil Works", icon: Factory, desc: "Foundations & Structures" },
                { title: "Electrical", icon: Zap, desc: "HT/LT Installations" },
                { title: "Trading", icon: Battery, desc: "Panels & Inverters" }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="bg-zinc-100 rounded-3xl p-8 flex items-center gap-6 hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="p-4 bg-white rounded-2xl shadow-sm">
                    <service.icon className="w-6 h-6 text-[#193354]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900">{service.title}</h4>
                    <p className="text-zinc-500 text-sm">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="px-4 py-20 bg-white border-t border-zinc-100">
        <div className="max-w-[1800px] mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900">EXECUTION PROCESS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              "Site Analysis", "Design & Engg", "Procurement", "Installation",
              "Testing", "Net Metering", "Commissioning", "O&M Handover"
            ].map((step, i) => (
              <div key={i} className="relative pl-8 border-l border-zinc-200 py-2">
                <span className="absolute -left-[5px] top-3 w-2.5 h-2.5 bg-[#F0B448] rounded-full" />
                <span className="font-mono text-xs text-zinc-400 mb-1 block">STEP 0{i + 1}</span>
                <h3 className="text-xl font-bold text-zinc-900">{step}</h3>
              </div>
            ))}
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
              <span className="font-mono text-[10px] md:text-xs text-zinc-600">© 2025</span>
              <span className="font-mono text-[10px] md:text-xs text-zinc-600">PRIVACY POLICY</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
