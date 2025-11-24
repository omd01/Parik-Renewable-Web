'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import { ArrowUpRight, Target, Eye, Heart, Shield, Zap, Users, Globe } from 'lucide-react'

export default function About() {
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
              EST. 2010
            </span>
            <h1 className="text-6xl md:text-[10rem] leading-[0.85] font-bold tracking-tighter text-zinc-900 mb-12">
              WHO<br />WE ARE
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <p className="text-2xl md:text-4xl font-light leading-tight text-zinc-800">
                Parikh Renewable is engineering the future of sustainable energy with precision, integrity, and innovation.
              </p>
              <div className="space-y-6 text-zinc-500 font-light">
                <p>
                  We are a leading Solar Rooftop EPC company delivering end-to-end clean energy solutions. Our mission is to accelerate the adoption of renewable energy across industrial, commercial, and residential sectors in India.
                </p>
                <p>
                  With over a decade of experience, we combine technical expertise with a commitment to quality, ensuring every project delivers maximum efficiency and long-term value.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BENTO GRID - VISION & VALUES */}
      <section className="px-4 py-20">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[350px]">

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-[#193354] rounded-3xl p-10 text-white flex flex-col justify-between group"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white/10 rounded-full backdrop-blur-md">
                  <Eye className="w-8 h-8 text-[#F0B448]" />
                </div>
                <span className="font-mono text-xs text-white/50 uppercase tracking-widest">VISION</span>
              </div>
              <div>
                <h3 className="text-4xl md:text-6xl font-bold mb-6">Global Leader in Clean Energy</h3>
                <p className="text-white/70 max-w-xl text-lg font-light">
                  To become India’s most trusted and technologically advanced rooftop solar company, setting benchmarks for quality and sustainability.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#F0B448] rounded-3xl p-10 text-[#193354] flex flex-col justify-between group"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-[#193354]/10 rounded-full">
                  <Target className="w-8 h-8 text-[#193354]" />
                </div>
                <span className="font-mono text-xs text-[#193354]/50 uppercase tracking-widest">MISSION</span>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-4">Accelerate Adoption</h3>
                <p className="text-[#193354]/80 font-medium">
                  Through high-quality engineering, safe execution, and performance-driven systems.
                </p>
              </div>
            </motion.div>

            {/* Image Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="row-span-2 relative rounded-3xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[url('/solar-engineers-meeting.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              <div className="absolute bottom-8 left-8">
                <span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full font-mono text-xs font-bold text-zinc-900">
                  OUR TEAM
                </span>
              </div>
            </motion.div>

            {/* Values Grid (Nested) */}
            <div className="md:col-span-2 row-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Integrity", icon: Shield, desc: "Ethical, transparent operations." },
                { title: "Excellence", icon: Zap, desc: "Best-in-class engineering." },
                { title: "Commitment", icon: Heart, desc: "Tailored client solutions." },
                { title: "Sustainability", icon: Globe, desc: "Promoting green energy." }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-8 border border-zinc-200 flex flex-col justify-between hover:border-[#193354] transition-colors group"
                >
                  <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center group-hover:bg-[#193354] transition-colors">
                    <value.icon className="w-6 h-6 text-zinc-900 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900 mb-2">{value.title}</h4>
                    <p className="text-zinc-500 text-sm">{value.desc}</p>
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
              <span className="font-mono text-[10px] md:text-xs text-zinc-600">© 2025</span>
              <span className="font-mono text-[10px] md:text-xs text-zinc-600">PRIVACY POLICY</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
