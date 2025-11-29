'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Zap, ShieldCheck, Settings, Factory, Train, Server, Droplet, Wind, ChevronDown, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function ElectricServices() {
    return (
        <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#193354] selection:text-white w-full max-w-[100vw] overflow-x-hidden">
            <Header />

            {/* 1. HERO SECTION (The "Grid" Aesthetic) */}
            <section className="relative pt-32 pb-20 px-4 min-h-screen flex flex-col justify-center bg-zinc-50">
                <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-[12vw] md:text-[5vw] font-bold tracking-tighter leading-[0.85] mb-8 break-words hyphens-auto text-[#193354]">
                            POWERING<br />THE FUTURE OF<br /><span className="text-zinc-400">TRANSMISSION.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-600 max-w-xl leading-relaxed font-light border-l-4 border-[#F0B448] pl-6">
                            Redefining power distribution infrastructure with state-of-the-art technology and ISO 9001:2015 certified precision.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative h-[50vh] lg:h-[70vh] rounded-[3rem] overflow-hidden border border-zinc-200"
                    >
                        <Image
                            src="/High-Voltage-Transmission-Towers.png"
                            alt="High-Voltage Transmission Towers"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                </div>
            </section>

            {/* 2. THE "IMPACT" STATS BAR */}
            <section className="bg-[#193354] text-white py-12 border-y border-zinc-800">
                <div className="max-w-[1800px] mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-zinc-700">
                        {[
                            { val: "20+", label: "Projects Completed" },
                            { val: "50+", label: "Qualified Staff" },
                            { val: "ISO 9001", label: "Certified Quality" }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center justify-center text-center p-4">
                                <span className="text-5xl md:text-6xl font-bold text-[#F0B448] mb-2">{stat.val}</span>
                                <span className="font-mono text-sm tracking-widest uppercase text-zinc-400">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CORE SERVICES (The "Hardware" Bento Grid) */}
            <section className="px-4 py-24 bg-white">
                <div className="max-w-[1800px] mx-auto">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-[#193354] mb-4">CORE SERVICES</h2>
                        <p className="text-zinc-500 max-w-2xl text-lg">Engineered for resilience and efficiency.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Switchyard Hardware",
                                desc: "High-voltage fittings designed for durability and efficient electrical connections.",
                                icon: Zap,
                                bg: "bg-zinc-50"
                            },
                            {
                                title: "LV Switchgear",
                                desc: "Safe power distribution systems designed for maximum protection and control.",
                                icon: Settings,
                                bg: "bg-zinc-100"
                            },
                            {
                                title: "Electrical Automation",
                                desc: "Intelligent monitoring and automated control panels for precise power management.",
                                icon: Server,
                                bg: "bg-zinc-50"
                            }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`${service.bg} p-8 md:p-12 rounded-3xl flex flex-col justify-between min-h-[350px] group hover:shadow-xl transition-all duration-500 border border-zinc-100`}
                            >
                                <div>
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#193354] group-hover:text-white transition-colors">
                                        <service.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-[#193354] mb-4">{service.title}</h3>
                                    <p className="text-zinc-600 leading-relaxed">{service.desc}</p>
                                </div>
                                <div className="mt-8 pt-8 border-t border-zinc-200/50 flex justify-between items-center">
                                    <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">Learn More</span>
                                    <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-[#F0B448] transition-colors" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. INDUSTRIES SERVED (The "Sector" Marquee) */}
            <section className="py-20 bg-[#F0B448] overflow-hidden">
                <div className="flex relative">
                    <motion.div
                        className="flex gap-16 whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                    >
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-16 items-center">
                                {[
                                    { name: "OIL & GAS", icon: Droplet },
                                    { name: "RENEWABLE ENERGY", icon: Wind },
                                    { name: "DATA CENTERS", icon: Server },
                                    { name: "ELECTRICAL INFRASTRUCTURE", icon: Zap },
                                    { name: "METRO RAIL PROJECTS", icon: Train }
                                ].map((sector, j) => (
                                    <div key={j} className="flex items-center gap-4">
                                        <sector.icon className="w-8 h-8 text-[#193354]" />
                                        <span className="text-4xl md:text-6xl font-bold text-[#193354] tracking-tighter">
                                            {sector.name}
                                        </span>
                                        <div className="w-3 h-3 bg-[#193354] rounded-full mx-4" />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 5. PROJECT SHOWCASE (The "Application" Grid) */}
            <section className="py-24 px-4 bg-zinc-900 text-white">
                <div className="max-w-[1800px] mx-auto">
                    <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold mb-4">PROJECT APPLICATIONS</h2>
                            <p className="text-zinc-400 max-w-xl">From urban infrastructure to remote industrial sites.</p>
                        </div>
                        <button className="px-8 py-4 border border-zinc-700 rounded-full hover:bg-white hover:text-zinc-900 transition-colors font-mono text-sm uppercase tracking-widest">
                            View Full Portfolio
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { title: "EHV Switchyards", sub: "Extra High Voltage", img: "/EHV-Switchyards.png" },
                            { title: "DG Systems", sub: "Diesel Generator/Backup", img: "/DG-Systems.png" },
                            { title: "Metro Electrical Works", sub: "Urban Infrastructure", img: "/Metro-Electrical-Works.png" },
                            { title: "Transmission Lines", sub: "Grid Connectivity", img: "/Transmission-Lines.png" }
                        ].map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative aspect-video rounded-3xl overflow-hidden bg-zinc-800"
                            >
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                    <span className="text-[#F0B448] font-mono text-xs uppercase tracking-widest mb-2">{project.sub}</span>
                                    <h3 className="text-3xl font-bold">{project.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQ SECTION (The Accordion) */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-[#193354] mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {[
                            { q: "What industries do you serve?", a: "We serve a wide range of sectors including Oil & Gas, Solar, Wind Energy, Data Centers, and Public Infrastructure projects like Metro Rails." },
                            { q: "Do you provide customized solutions?", a: "Yes, we specialize in tailoring components and systems to meet specific infrastructure needs and site conditions." },
                            { q: "Are your products certified?", a: "Absolutely. We adhere to ISO 9001:2015 standards and ensure all our hardware and systems meet rigorous safety and quality benchmarks." }
                        ].map((faq, i) => (
                            <FAQItem key={i} question={faq.q} answer={faq.a} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-zinc-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-[#193354] transition-colors"
            >
                <span className="text-lg font-medium">{question}</span>
                <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-zinc-500 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
