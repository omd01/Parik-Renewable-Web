'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Anchor, Layers, Cable, Box, Construction, Building2, Factory, Home, CheckCircle2, AlertTriangle } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function BOSMaterialsPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#F0B448] selection:text-[#193354] overflow-x-hidden">
            <Header />

            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col md:flex-row items-center gap-12"
                    >
                        <div className="flex-1 z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-orange-200">
                                <AlertTriangle className="w-3 h-3" />
                                Safety Critical
                            </div>
                            <h1 className="text-[12vw] md:text-[7vw] leading-[0.9] font-bold tracking-tighter text-[#193354] mb-6">
                                BALANCE OF <br />
                                <span className="text-zinc-400">SYSTEM (BOS)</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-600 max-w-xl font-medium">
                                The critical infrastructure connecting your energy. Cables, structures, and safety systems engineered for 25+ years of performance.
                            </p>
                        </div>
                        <div className="flex-1 relative w-full aspect-square md:aspect-[4/3] bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-100">
                            <Image
                                src="/bos_hero.png"
                                alt="Solar BOS Materials"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. The Definition */}
            <section className="py-24 px-4 md:px-8 bg-zinc-50">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-serif leading-tight text-[#193354]"
                    >
                        "BOS refers to all components of a photovoltaic system other than the panels and inverters. It is the 'skeleton' and 'veins' of the solar plant, covering wiring, mounting, switches, and safety gear."
                    </motion.h2>
                </div>
            </section>

            {/* 3. The Product Catalog */}
            <section className="py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-[#193354] flex items-center gap-3">
                        <Layers className="w-8 h-8 text-orange-500" />
                        Core Components
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                        {/* Card 1: Mounting Structures (Large) */}
                        <div className="md:col-span-2 md:row-span-2 bg-zinc-900 text-white p-8 rounded-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
                                        <Anchor className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">Mounting Structures</h3>
                                    <p className="text-zinc-400 text-lg max-w-md">
                                        Hot-dip galvanized steel & aluminium rails. Wind-load tested to withstand cyclones and ensure panel stability for decades.
                                    </p>
                                </div>
                                <div className="mt-8 flex gap-4">
                                    <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">Galvanized Steel</div>
                                    <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-sm">Anodized Aluminium</div>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: DC/AC Cables */}
                        <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                                <Cable className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-[#193354] mb-2">DC/AC Cables</h3>
                            <p className="text-zinc-600 text-sm">
                                UV-resistant, XLPE insulated solar cables designed for minimal transmission loss.
                            </p>
                        </div>

                        {/* Card 3: Junction Boxes */}
                        <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                                <Box className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-[#193354] mb-2">Junction Boxes</h3>
                            <p className="text-zinc-600 text-sm">
                                IP65 rated protection with surge arresters (ACDB/DCDB) to isolate faults.
                            </p>
                        </div>

                        {/* Card 4: Earthing & Lightning */}
                        <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-[#193354] mb-2">Earthing & Lightning</h3>
                            <p className="text-zinc-600 text-sm">
                                Copper bonded rods and early streamer emission (ESE) arresters for safety.
                            </p>
                        </div>

                        {/* Card 5: Accessories */}
                        <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                                <Construction className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-[#193354] mb-2">Accessories</h3>
                            <p className="text-zinc-600 text-sm">
                                MC4 connectors, cable trays, and walkways for organized installation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. How It Works (Circuit Flow) */}
            <section className="py-24 px-4 md:px-8 bg-zinc-900 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">The Connection Flow</h2>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-zinc-800 -translate-y-1/2 hidden md:block"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { step: "01", title: "Support", desc: "Structure holds panels securely.", icon: Anchor },
                                { step: "02", title: "Connect", desc: "Cables carry DC current safely.", icon: Cable },
                                { step: "03", title: "Protect", desc: "DCDB isolates electrical surges.", icon: ShieldCheck },
                                { step: "04", title: "Distribute", desc: "ACDB manages grid output.", icon: Zap },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 text-center group hover:border-orange-500/50 transition-colors"
                                >
                                    <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mx-auto mb-6 border border-zinc-700 group-hover:border-orange-500 transition-colors">
                                        <item.icon className="w-8 h-8 text-zinc-400 group-hover:text-orange-500 transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-zinc-400 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Applications */}
            <section className="py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center text-[#193354]">Applications</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Residential", desc: "Aesthetic, lightweight aluminium structures.", icon: Home },
                            { title: "Commercial", desc: "Heavy-duty walkways and cable trays.", icon: Building2 },
                            { title: "Utility Scale", desc: "Ground-mount pile foundations.", icon: Factory },
                        ].map((app, i) => (
                            <div key={i} className="p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:bg-white hover:shadow-lg transition-all">
                                <app.icon className="w-12 h-12 text-[#193354] mb-6" />
                                <h3 className="text-2xl font-bold text-[#193354] mb-3">{app.title}</h3>
                                <p className="text-zinc-600">{app.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Benefits (Safety Theme) */}
            <section className="py-24 px-4 md:px-8 bg-orange-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-8 text-[#193354]">Why Quality BOS Matters</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <AlertTriangle className="w-6 h-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#193354] mb-1">Fire Safety</h4>
                                        <p className="text-zinc-700">Inferior cables are the #1 cause of solar fires. We use certified fire-retardant materials.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <ShieldCheck className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#193354] mb-1">System Longevity</h4>
                                        <p className="text-zinc-700">Structures designed to withstand rust and cyclones for 25 years.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Zap className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[#193354] mb-1">Generation Efficiency</h4>
                                        <p className="text-zinc-700">Low-resistance copper reduces transmission loss.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-lg">
                            <h3 className="text-2xl font-bold text-[#193354] mb-4">Maintenance & Support</h3>
                            <p className="text-zinc-600 mb-6">
                                BOS components require annual tightening and visual inspection for corrosion. Our team provides thermal imaging checks for loose connections.
                            </p>
                            <div className="flex items-center gap-2 text-orange-600 font-bold">
                                <CheckCircle2 className="w-5 h-5" />
                                Annual Safety Audits Included
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
