'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowUpRight, Target, Eye, Heart, Shield, Zap, Users, Globe, MapPin, BadgeCheck, Briefcase, Award, CheckCircle2, TrendingUp, Leaf, DollarSign, Clock, Factory, HardHat } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-[#193354] selection:text-white overflow-x-hidden" ref={containerRef}>
      <Header />

      {/* 1. HERO SECTION (Split Screen) */}
      <section className="min-h-screen flex flex-col md:flex-row pt-24">
        <div className="flex-1 flex flex-col justify-center p-6 md:p-12 lg:p-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[12vw] md:text-[6vw] leading-[0.9] font-bold tracking-tighter text-[#193354] mb-8">
              POWERING<br />
              INDIA WITH<br />
              <span className="text-zinc-400">CLEAN ROOFTOP SOLAR.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 max-w-xl font-medium border-l-4 border-[#F0B448] pl-6">
              Specialists in Solar Rooftop EPC. Civil. Electrical. Manufacturing.
            </p>
          </motion.div>
        </div>
        <div className="flex-1 relative min-h-[50vh] md:min-h-screen bg-zinc-900">
          <Image
            src="https://placehold.co/1920x1080/png?text=Industrial+Solar+Roof"
            alt="Industrial Solar Rooftop"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
        </div>
      </section>

      {/* 2. INTRODUCTION (Editorial) */}
      <section className="py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl leading-tight font-light text-zinc-500"
          >
            Parikh Renewable is a leading Solar Rooftop EPC company delivering <span className="text-zinc-900 font-medium">End-to-End Solutions</span>. Our mission is to accelerate the adoption of <span className="text-zinc-900 font-medium">Sustainable Energy</span> across industrial, commercial, and residential sectors in India. With over a decade of experience, we combine technical expertise with a commitment to quality, ensuring every project delivers maximum efficiency and long-term value.
          </motion.p>
        </div>
      </section>

      {/* 3. CORE VALUES (Mosaic Grid) */}
      <section className="py-24 px-4 md:px-8 bg-zinc-50">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#193354] p-10 rounded-3xl text-white min-h-[300px] flex flex-col justify-between"
            >
              <Eye className="w-10 h-10 text-[#F0B448] mb-6" />
              <div>
                <span className="font-mono text-xs opacity-50 uppercase tracking-widest mb-2 block">VISION</span>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">To become India's most trusted and technologically advanced rooftop solar company.</h3>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-zinc-900 p-10 rounded-3xl text-white min-h-[300px] flex flex-col justify-between"
            >
              <Target className="w-10 h-10 text-[#F0B448] mb-6" />
              <div>
                <span className="font-mono text-xs opacity-50 uppercase tracking-widest mb-2 block">MISSION</span>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">Accelerate clean energy adoption through engineering precision and safety.</h3>
              </div>
            </motion.div>
          </div>

          {/* Values Row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { title: "Integrity", icon: Shield },
              { title: "Excellence", icon: Award },
              { title: "Commitment", icon: Heart },
              { title: "Safety", icon: HardHat },
              { title: "Sustainability", icon: Leaf },
            ].map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="bg-white p-6 rounded-2xl border border-zinc-200 flex flex-col items-center text-center justify-center aspect-square hover:border-[#193354] transition-colors group"
              >
                <val.icon className="w-8 h-8 text-zinc-400 group-hover:text-[#193354] transition-colors mb-3" />
                <span className="font-bold text-zinc-900">{val.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY SOLAR (Marquee) */}
      <section className="py-20 bg-[#F0B448] overflow-hidden">
        <div className="flex relative">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                {[
                  { text: "60-90% BILL REDUCTION", icon: DollarSign },
                  { text: "25+ YEAR LIFESPAN", icon: Clock },
                  { text: "FAST ROI", icon: TrendingUp },
                  { text: "ESG GOALS", icon: Globe },
                  { text: "PROPERTY VALUE INCREASE", icon: TrendingUp },
                ].map((item, j) => (
                  <div key={j} className="flex items-center gap-4">
                    <item.icon className="w-8 h-8 text-[#193354]" />
                    <span className="text-4xl md:text-6xl font-mono font-bold text-[#193354] tracking-tighter">
                      {item.text}
                    </span>
                    <div className="w-4 h-4 bg-[#193354] rounded-full mx-4" />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. EXECUTION PROCESS (Timeline) */}
      <section className="py-32 px-4 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">EXECUTION PROCESS</h2>

          <div className="relative">
            {/* Center Line (Desktop) */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 md:-translate-x-1/2" />

            {[
              { step: "01", title: "Site Visit", desc: "Detailed technical feasibility study." },
              { step: "02", title: "Design", desc: "Custom engineering & shadow analysis." },
              { step: "03", title: "Proposal", desc: "Commercial offer with ROI projection." },
              { step: "04", title: "Procurement", desc: "Sourcing Tier-1 modules & inverters." },
              { step: "05", title: "Installation", desc: "Safety-compliant civil & electrical work." },
              { step: "06", title: "Testing", desc: "Quality checks & commissioning." },
              { step: "07", title: "Net Metering", desc: "Liaison with DISCOM for grid connection." },
              { step: "08", title: "Handover", desc: "System training & documentation." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0.2 }}
                whileInView={{ opacity: 1 }}
                viewport={{ margin: "-20% 0px -20% 0px" }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Content */}
                <div className="flex-1 pl-20 md:pl-0 md:text-right w-full">
                  <div className={`md:px-8 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-zinc-400">{item.desc}</p>
                  </div>
                </div>

                {/* Number Bubble */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center border-4 border-zinc-900 z-10 text-[#F0B448] font-mono font-bold text-xl">
                  {item.step}
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CAPABILITY & COMPLIANCE (Trust Grid) */}
      <section className="py-24 px-4 md:px-8 bg-zinc-50">
        <div className="max-w-[1800px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-[#193354] mb-12">CAPABILITY & COMPLIANCE</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Technology */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-200">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-[#193354]" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Advanced Technology</h3>
              <ul className="space-y-4">
                {["3D Designing & Shadow Analysis", "IoT Remote Monitoring", "Accurate Yield Simulation"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle2 className="w-5 h-5 text-[#F0B448]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Compliance */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-zinc-200">
              <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Safety & Compliance</h3>
              <ul className="space-y-4">
                {["MNRE Approved Components", "DISCOM Compliant Liaison", "Strict Industrial Safety Protocols"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3: Nature of Business */}
            <div className="bg-[#193354] text-white p-8 md:p-12 rounded-3xl">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-[#F0B448]" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Nature of Business</h3>
              <div className="flex flex-wrap gap-3">
                {["Solar Rooftop EPC", "Material Trading", "Electrical Contractor"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">
                    {tag}
                  </span>
                ))}
                <span className="px-4 py-2 bg-[#F0B448] text-[#193354] rounded-full text-sm font-bold">
                  Government Contractor
                </span>
              </div>
            </div>

            {/* Card 4: Legal & Founder */}
            <div className="bg-zinc-100 p-8 md:p-12 rounded-3xl border border-zinc-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-zinc-300 rounded-full overflow-hidden relative">
                    <Image
                      src="https://placehold.co/200x200/png?text=ASP"
                      alt="Aditya Suresh Parikh"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#193354]">Aditya Suresh Parikh</h3>
                    <p className="text-sm text-zinc-500 uppercase tracking-widest">Founder & CEO</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-6 bg-white p-3 rounded-xl border border-zinc-200 w-fit">
                  <BadgeCheck className="w-6 h-6 text-[#F0B448]" />
                  <span className="font-bold text-sm">GEM Approved Vendor</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-zinc-600 border-t border-zinc-200 pt-6">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                  <p><strong className="text-zinc-900">HQ:</strong> Office No. D 401, Freedom Tower, Aurangabad - 431001</p>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-zinc-400 flex-shrink-0" />
                  <p><strong className="text-zinc-900">Branch:</strong> Teacher Colony, Beed - 431122</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
