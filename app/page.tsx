'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Header from '@/components/Header'

export default function Home() {
  const [activeTab, setActiveTab] = useState('personal')

  const containerRef = useRef(null)
  const plantHealthRef = useRef(null)
  const solarRef = useRef(null)
  const waterRef = useRef(null)
  const awardsSectionRef = useRef(null)
  const featuredProjectRef = useRef(null)
  const productsRef = useRef(null)
  const footerRef = useRef(null)

  const { scrollYProgress: plantProgress } = useScroll({
    target: plantHealthRef,
    offset: ["start center", "end center"]
  })
  const plantRotate = useTransform(plantProgress, [0, 1], [0, 360])
  const plantScale = useTransform(plantProgress, [0, 0.5, 1], [0.8, 1.1, 1])
  const plantOpacity = useTransform(plantProgress, [0, 0.5, 1], [0.6, 1, 0.8])

  const { scrollYProgress: solarProgress } = useScroll({
    target: solarRef,
    offset: ["start 100%", "end 80%"]
  })
  const solarY = useTransform(solarProgress, [0, 1], [100, 0])
  const solarOpacity = useTransform(solarProgress, [0, 1], [0, 1])

  const { scrollYProgress: waterProgress } = useScroll({
    target: waterRef,
    offset: ["start 100%", "end 80%"]
  })
  const waterY = useTransform(waterProgress, [0, 1], [100, 0])
  const waterOpacity = useTransform(waterProgress, [0, 1], [0, 1])

  const { scrollYProgress: awardsProgress } = useScroll({
    target: awardsSectionRef,
    offset: ["start 80%", "end 20%"]
  })
  const awardsX = useTransform(awardsProgress, [0, 1], [-100, 0])
  const awardsHeadingOpacity = useTransform(awardsProgress, [0, 1], [0, 1])

  const { scrollYProgress: featureProgress } = useScroll({
    target: featuredProjectRef,
    offset: ["start center", "end center"]
  })
  const featureScale = useTransform(featureProgress, [0, 1], [0.8, 1])
  const featureOpacity = useTransform(featureProgress, [0, 1], [0.6, 1])

  const { scrollYProgress: productsProgress } = useScroll({
    target: productsRef,
    offset: ["start 80%", "end 20%"]
  })
  const productsY = useTransform(productsProgress, [0, 1], [50, 0])

  const { scrollYProgress: footerProgress } = useScroll({
    target: footerRef,
    offset: ["start 96%", "end 100%"]
  })
  const footerOpacity = useTransform(footerProgress, [0.9, 1], [0.9, 1])

  return (
    <main className="min-h-screen bg-white">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen w-full pt-20 overflow-hidden bg-gradient-to-b from-[#193354] via-[#1a3d5e] to-[#2a4d6e]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(/hero-bg.png)'
          }}
        />

        {/* Main Title */}
        <motion.div
          className="absolute top-32 left-0 right-0 z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <div className="max-w-7xl mx-auto px-8 w-full">
            <h1 className="lg:text-[100px] font-bold text-white tracking-tighter leading-none text-6xl mb-6">
              Powering India with <br />
              <span className="text-[#F0B448]">Clean Rooftop Solar Energy</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl font-light">
              Specialists in Solar Rooftop EPC | Supporting Services: Civil, Electrical & Material Trading Manufacturing.
            </p>
          </div>
        </motion.div>

        {/* Left Sidebar Navigation */}
        <motion.div
          className="absolute left-8 bottom-1/3 text-white z-20 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <nav className="space-y-4">
            <a href="#introduction" className="flex items-center gap-3 group">
              <span className="text-lg font-light hover:font-medium transition hover:text-[#F0B448]">Intro</span>
              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition text-[#F0B448]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a href="#vision" className="flex items-center gap-3 group">
              <span className="text-lg font-light hover:font-medium transition hover:text-[#F0B448]">Vision</span>
              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition text-[#F0B448]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a href="#expertise" className="flex items-center gap-3 group">
              <span className="text-lg font-light hover:font-medium transition hover:text-[#F0B448]">Expertise</span>
              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition text-[#F0B448]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </nav>
        </motion.div>

        {/* Bottom Left Description */}
        <motion.div
          className="absolute left-8 bottom-24 text-white max-w-sm z-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm leading-relaxed font-light border-l-2 border-[#F0B448] pl-4">
            Parikh Renewable Private Limited is a leading Solar Rooftop EPC company delivering end-to-end clean energy solutions.
          </p>
        </motion.div>

        {/* Bottom Right Buttons */}
        <motion.div
          className="absolute right-8 bottom-8 flex gap-3 z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="/contact"
            className="px-6 py-2 bg-[#F0B448] text-[#193354] rounded-full text-sm font-bold hover:bg-white transition shadow-lg"
          >
            Get Started
          </a>
          <a
            href="/projects"
            className="px-6 py-2 bg-gradient-to-b from-[#193354] to-[#1a3d5e] bg-opacity-20 text-white rounded-full text-sm font-medium hover:bg-opacity-30 transition backdrop-blur-sm"
          >
            View Projects
          </a>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="bg-white">
        {/* Company Introduction Section */}
        <div id="introduction" className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <div className="text-sm uppercase tracking-widest text-[#F0B448] font-bold mb-4">
              / COMPANY INTRODUCTION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#193354]">
              Leading Solar Rooftop EPC <br />
              <span className="text-gray-400">delivering end-to-end clean energy solutions.</span>
            </h2>
          </motion.div>

          {/* Team Section with About Badge */}
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            {/* About Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#193354] rounded-full bg-white">
              <div className="w-2 h-2 bg-[#F0B448] rounded-full"></div>
              <span className="text-sm font-medium text-[#193354]">ABOUT PARIKH</span>
            </div>

            {/* Description */}
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed text-lg">
                With a strong engineering foundation and a commitment to sustainable energy, we provide reliable, efficient and long-lasting rooftop solar installations. Along with solar EPC, we also offer supporting services such as civil works, electrical contracting, and manufacturing.
              </p>
            </div>
          </motion.div>

          {/* Vision & Mission Heading */}
          <motion.div
            id="vision"
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <h3 className="text-4xl md:text-5xl font-bold leading-tight text-[#193354]">
              Vision, Mission & <span className="text-[#F0B448]">Core Values</span>
            </h3>
          </motion.div>

          {/* Three Core Values Cards */}
          <div className="grid md:grid-cols-3 gap-6" ref={containerRef}>
            {/* Card 1 - Vision (Blue) */}
            <motion.div
              ref={plantHealthRef}
              className="bg-gradient-to-br from-[#193354] to-[#2a4d6e] rounded-3xl p-8 text-white relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <div className="flex justify-between items-start mb-8 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-2xl font-bold leading-tight">Our<br />Vision</h4>
                </motion.div>
                <motion.div
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center"
                  style={{
                    rotateZ: plantRotate,
                    scale: plantScale,
                    opacity: plantOpacity
                  }}
                >
                  <svg className="w-6 h-6 text-[#F0B448]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <p className="text-blue-100 text-sm leading-relaxed">
                  To become India’s most trusted and technologically advanced rooftop solar company delivering sustainable energy solutions for every sector.
                </p>
              </motion.div>
            </motion.div>

            {/* Card 2 - Mission (Light Blue) */}
            <motion.div
              ref={solarRef}
              className="bg-gradient-to-br from-[#65778B] to-[#8fa3b9] rounded-3xl p-8 text-white flex flex-col justify-between"
              style={{ y: solarY, opacity: solarOpacity }}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-blue-100 mb-2">OUR MISSION</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                    </svg>
                  </div>
                </div>
                <p className="text-lg font-medium leading-relaxed">
                  To accelerate clean energy adoption through high-quality engineering, safe execution and performance-driven solar rooftop systems.
                </p>
              </div>
            </motion.div>

            {/* Card 3 - Core Values (Yellow) */}
            <motion.div
              ref={waterRef}
              className="bg-gradient-to-br from-[#F0B448] to-[#f5c875] rounded-3xl p-8 text-[#193354] flex flex-col justify-between"
              style={{ y: waterY, opacity: waterOpacity }}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-xs uppercase tracking-widest font-semibold text-[#193354]/70">CORE VALUES</p>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#193354]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                </div>
                <ul className="space-y-2 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#193354] rounded-full"></span> Integrity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#193354] rounded-full"></span> Engineering Excellence
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#193354] rounded-full"></span> Customer Commitment
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#193354] rounded-full"></span> Safety & Sustainability
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Why Solar Rooftop Section */}
        <div className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-200">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <h3 className="text-4xl md:text-5xl font-bold leading-tight text-[#193354]">
              Why <span className="text-[#F0B448]">Solar Rooftop?</span>
            </h3>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Savings */}
            <motion.div
              className="bg-gradient-to-br from-[#193354] to-[#1a3d5e] rounded-3xl p-8 text-white"
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <h3 className="text-3xl font-bold mb-2">Reduce</h3>
              <h3 className="text-3xl font-bold mb-8 text-[#F0B448]">Bills</h3>
              <p className="text-blue-200 text-sm mb-8">Electricity savings</p>
              <p className="text-5xl font-bold">60-90<span className="text-xl">%</span></p>
            </motion.div>

            {/* Card 2 - Lifespan */}
            <motion.div
              className="bg-gradient-to-br from-[#65778B] to-[#7a8fa3] rounded-3xl p-8 text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <div className="absolute top-4 right-4">
                <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z" />
                  </svg>
                </div>
              </div>
              <p className="text-blue-100 text-xs uppercase tracking-widest font-semibold mb-12">
                LONG LIFESPAN
              </p>
              <div className="h-32 flex items-center justify-center">
                <div className="text-4xl font-bold">25+ Years</div>
              </div>
            </motion.div>

            {/* Card 3 - ROI */}
            <motion.div
              className="bg-gradient-to-br from-[#F0B448] to-[#f0c270] rounded-3xl p-8 text-[#193354]"
              initial={{ opacity: 0, y: 50, rotate: 5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <div className="absolute top-4 right-4">
                <svg className="w-6 h-6 text-[#193354]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                </svg>
              </div>
              <p className="text-[#193354] text-xs uppercase tracking-widest font-semibold mb-4">
                INVESTMENT
              </p>
              <p className="text-[#1a3d5e] text-sm mb-4">Return on Investment</p>
              <p className="text-4xl font-bold text-[#193354]">Fast</p>
              <p className="text-[#1a3d5e] text-sm mt-2">payback period.</p>
            </motion.div>
          </div>
        </div>

        {/* Our Expertise Section (formerly Awards Timeline) */}
        <section id="expertise" className="bg-white py-20 border-t border-gray-200" ref={awardsSectionRef}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              {/* Left Timeline Sidebar */}
              <motion.div
                className="md:w-1/4"
                style={{ x: awardsX, opacity: awardsHeadingOpacity }}
              >
                <div className="sticky top-32">
                  {/* Decorative Icon */}
                  <motion.div
                    className="mb-8"
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: 360 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <svg className="w-8 h-8 text-[#F0B448]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </motion.div>

                  <h3 className="text-4xl md:text-5xl font-bold text-[#193354] mb-2">
                    Our<br />Expertise
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                    SOLAR ROOFTOP EPC
                  </p>
                </div>
              </motion.div>

              {/* Right Content */}
              <div className="md:w-3/4 space-y-8 pb-8 border-b border-gray-200">
                {/* Badge Section */}
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full bg-white">
                    <div className="w-2 h-2 bg-[#F0B448] rounded-full"></div>
                    <span className="text-sm font-medium text-[#193354]">TURNKEY SOLUTIONS</span>
                  </div>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#193354]">
                    Comprehensive <span className="text-[#F0B448]">Solar Rooftop</span> <br />
                    <span className="text-gray-400">services from concept to commissioning.</span>
                  </h2>
                </motion.div>

                {/* Service Card 01 - Engineering */}
                <motion.div
                  className="flex items-start gap-8 pb-8 border-b border-gray-200 group cursor-pointer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <div className="flex-shrink-0">
                    <p className="text-2xl font-light text-[#193354]">01</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">
                      DESIGN & ENGINEERING
                    </p>
                    <h4 className="text-3xl font-bold text-[#193354]">Detailed Engineering</h4>
                    <p className="text-gray-600 mt-2">Structural layout, electrical engineering, shadow analysis, and energy generation simulation.</p>
                  </div>
                  <div className="flex-shrink-0 pt-2">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-[#F0B448] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L1 10m6-6l6 6" />
                    </svg>
                  </div>
                </motion.div>

                {/* Service Card 02 - Installation */}
                <motion.div
                  className="pb-8 border-b border-gray-200"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <div className="flex items-start gap-8 mb-6">
                    <div className="flex-shrink-0">
                      <p className="text-2xl font-light text-[#193354]">02</p>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">
                        EXECUTION
                      </p>
                      <h4 className="text-3xl font-bold text-[#193354]">Installation & Commissioning</h4>
                    </div>
                    <div className="flex-shrink-0 pt-2">
                      <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L1 10m6-6l6 6" />
                      </svg>
                    </div>
                  </div>

                  {/* Installation Details Grid */}
                  <motion.div
                    className="ml-8 bg-gray-50 p-6 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  >
                    <div className="grid grid-cols-3 gap-6 items-start mb-6">
                      {/* Quality Card */}
                      <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-10 h-10 rounded-full bg-[#193354] flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L1 21h22L12 2zm0 3.45l8.27 14.3H3.73L12 5.45zM11 16h2v2h-2v-2zm0-8h2v6h-2V8z" />
                            </svg>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 mb-1">Quality Assurance</p>
                        <p className="text-sm font-semibold text-[#193354]">High-grade Materials</p>
                      </div>

                      {/* Safety Metrics */}
                      <div className="col-span-1">
                        <p className="text-lg font-light text-gray-600 mb-2">Safety</p>
                        <p className="text-3xl font-bold text-[#193354]">100<span className="text-lg text-gray-400">%</span></p>
                        <p className="text-xs text-gray-600">Compliance</p>
                      </div>

                      {/* Monitoring Metric */}
                      <div className="col-span-1">
                        <p className="text-sm text-gray-600 mb-2">Monitoring</p>
                        <p className="text-3xl font-bold text-[#193354]">IoT<span className="text-lg text-gray-400"></span></p>
                        <p className="text-xs text-gray-600 mt-1">Tracking</p>
                      </div>
                    </div>

                    {/* Description Text */}
                    <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                      Customised module mounting structures, high-quality inverter and panel integration, load-bearing and safety analysis.
                    </p>

                    {/* Discover More Button */}
                    <a href="/services" className="inline-block bg-[#193354] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[#F0B448] hover:text-[#193354] transition">
                      Learn More
                    </a>
                  </motion.div>
                </motion.div>

                {/* Service Card 03 - Maintenance */}
                <motion.div
                  className="flex items-start gap-8 group cursor-pointer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <div className="flex-shrink-0">
                    <p className="text-2xl font-light text-[#193354]">03</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">
                      SUPPORT
                    </p>
                    <h4 className="text-3xl font-bold text-[#193354]">Maintenance & Service</h4>
                    <p className="text-gray-600 mt-2">Performance monitoring systems, annual maintenance, and service packages.</p>
                  </div>
                  <div className="flex-shrink-0 pt-2">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-[#F0B448] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L1 10m6-6l6 6" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Project Section (Our Process) */}
        <motion.section
          className="relative bg-gradient-to-b from-[#193354] via-[#2a4d6e] to-[#3b5d8f] rounded-3xl mx-6 my-12 overflow-hidden py-24"
          ref={featuredProjectRef}
          style={{ scale: featureScale, opacity: featureOpacity }}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(/solar-installation.png)',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          />

          <div className="max-w-7xl mx-auto px-12 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Top Labels */}
                <div className="flex flex-col gap-8 mb-12">
                  <div>
                    <p className="text-[#F0B448] text-xs uppercase tracking-widest font-semibold mb-2">
                      / EXECUTION PROCESS
                    </p>
                  </div>
                </div>

                {/* Process Steps Card */}
                <motion.div
                  className="bg-white rounded-2xl p-8 max-w-md mb-12 shadow-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-bold text-[#193354] mb-6">8-Step Execution</h4>
                  <ul className="space-y-3">
                    {[
                      "Site Visit & Load Analysis",
                      "Solar Designing & Simulation",
                      "Structural Layout & Engineering",
                      "Procurement of Materials",
                      "Rooftop Installation & Wiring",
                      "Testing & Commissioning",
                      "Net-Metering Documentation",
                      "Handover & Training"
                    ].map((step, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                        <span className="w-6 h-6 rounded-full bg-[#193354] text-white flex items-center justify-center text-xs flex-shrink-0">{i + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Explore More Link */}
                <motion.div
                  className="flex items-center gap-2 text-white text-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#F0B448]"></div>
                  <a href="/services" className="hover:text-[#F0B448] transition font-medium">View Full Process</a>
                </motion.div>
              </motion.div>

              {/* Right Content */}
              <motion.div
                className="flex flex-col gap-12"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Badge */}
                <div className="text-right">
                  <p className="text-white text-xs uppercase tracking-widest font-semibold">
                    / SEAMLESS INTEGRATION
                  </p>
                </div>

                {/* Main Heading */}
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                    From site visit to <span className="text-[#F0B448]">system handover</span>
                  </h3>
                </div>

                {/* Description */}
                <p className="text-white text-opacity-90 text-sm leading-relaxed max-w-lg">
                  Our streamlined process ensures efficient execution, safety compliance, and timely delivery of your solar rooftop project.
                </p>

                {/* Illustration Placeholder */}
                <div className="flex justify-center items-center">
                  <div className="relative w-full h-64 bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <p className="text-white font-medium">Process Flow Visualization</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Rooftop Solutions Offered Section */}
        <section className="bg-white py-20" ref={productsRef}>
          <motion.div
            className="max-w-7xl mx-auto px-6"
            style={{ y: productsY }}
          >
            <motion.p
              className="text-xs uppercase tracking-widest text-[#F0B448] font-semibold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              ROOFTOP SOLUTIONS
            </motion.p>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-12 leading-tight text-[#193354]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              Tailored solar solutions for <br />
              <span className="text-gray-400">every sector and scale.</span>
            </motion.h2>

            {/* Product Cards */}
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { title: 'Industrial', desc: '1 kW to multi-MW', border: '#193354' },
                { title: 'Commercial', desc: 'Malls, Offices', border: '#F0B448' },
                { title: 'Residential', desc: 'On-grid, Hybrid', border: '#193354' },
                { title: 'Institutional', desc: 'Schools, NGOs', border: '#F0B448' },
                { title: 'Battery Storage', desc: 'Backup Systems', border: '#193354' },
                { title: 'Net Metering', desc: 'Grid Integration', border: '#F0B448' },
              ].map((product, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-50 rounded-2xl overflow-hidden h-64 hover:shadow-xl transition group relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-[#193354] group-hover:to-[#2a4d6e] transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                    <h3 className="text-lg font-bold text-[#193354] group-hover:text-white transition-colors mb-2">{product.title}</h3>
                    <p className="text-sm text-gray-600 group-hover:text-blue-100 transition-colors">{product.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: product.border }}></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </section>

      {/* FOOTER SECTION */}
      <motion.footer
        className="bg-[#193354] text-white py-20"
        ref={footerRef}
        style={{ opacity: footerOpacity }}
      >
        {/* Top Navigation Bar in Footer */}
        <div className="max-w-7xl mx-auto px-8 mb-20 pb-12 border-b border-[#65778B]">
          <div className="flex items-center justify-between mb-8">
            {/* Left Logo and Time Info */}
            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
                <img src="/icon.png" alt="Parikh Renewable Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-white text-sm font-medium">PARIKH RENEWABLE</span>
            </motion.div>

            {/* Center Navigation */}
            <motion.nav
              className="hidden md:flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <a href="/" className="px-4 py-2 text-white text-sm hover:text-[#F0B448] transition border border-white border-opacity-20 rounded-full">
                Home
              </a>
              <a href="/about" className="px-4 py-2 text-white text-sm hover:text-[#F0B448] transition border border-white border-opacity-20 rounded-full">
                About
              </a>
              <a href="/services" className="px-4 py-2 text-white text-sm hover:text-[#F0B448] transition border border-white border-opacity-20 rounded-full">
                Services
              </a>
              <a href="/projects" className="px-4 py-2 text-white text-sm hover:text-[#F0B448] transition border border-white border-opacity-20 rounded-full">
                Projects
              </a>
              <a href="/contact" className="px-4 py-2 text-white text-sm hover:text-[#F0B448] transition border border-white border-opacity-20 rounded-full">
                Contact
              </a>
            </motion.nav>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {/* Left Column - Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-white">Powering India with</span><br />
                <span className="text-[#F0B448]">Clean Energy.</span>
              </h2>
              <p className="text-xs text-gray-400 mt-12">©2025 Parikh Renewable Private Limited</p>
            </motion.div>

            {/* Center Column - Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">LOCATION</p>
                <p className="text-sm text-white leading-relaxed">
                  Office No. 401, D Tower, Freedom Tower,<br />
                  Akashwani Chowk, Sambhaji Nagar, 431005
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">CONTACT</p>
                <p className="text-sm text-white">+91 7083366625</p>
              </div>
            </motion.div>

            {/* Right Column - More Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">EMAIL</p>
                <p className="text-sm text-white">Support@parikhrenewable.com</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-2">WEBSITE</p>
                <p className="text-sm text-white">www.parikhrenewable.com</p>
              </div>
            </motion.div>
          </div>

          {/* Large Company Name */}
          <motion.div
            className="mb-20 py-12 border-t border-b border-[#65778B]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter text-center">
              PARIKH RENEWABLE
            </h1>
          </motion.div>

          {/* Bottom Footer */}
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-white text-sm">
              <span className="text-gray-400">/</span> Back to Top
            </div>
            <motion.button
              className="w-10 h-10 rounded-full border border-white border-opacity-30 flex items-center justify-center hover:border-opacity-100 hover:bg-white hover:bg-opacity-10 transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </motion.footer>
    </main>
  )
}
