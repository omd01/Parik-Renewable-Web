'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Globe, ShieldCheck, Users, Truck, Zap, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export default function ElectricServices() {
    return (
        <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#193354] selection:text-white w-full max-w-[100vw] overflow-x-hidden">
            <Header />

            {/* 1. HERO SECTION (Editorial Look) */}
            <section className="relative pt-32 pb-20 px-4 min-h-screen flex flex-col justify-center">
                <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Fix 2: Mobile Overflow & Fluid Typography */}
                        <h1 className="text-[12vw] md:text-[5vw] font-bold tracking-tighter leading-[0.85] mb-8 break-words hyphens-auto">
                            ENGINEERING<br />EXCELLENCE<br /><span className="text-zinc-400">IN POWER.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-600 max-w-xl leading-relaxed font-light">
                            Cutting-edge solutions for power transmission, distribution, and industrial infrastructure.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative h-[60vh] lg:h-[80vh] rounded-[3rem] overflow-hidden"
                    >
                        {/* Using the generated hero image */}
                        <Image
                            src="/electric_transmission_hero_1764418389990.png"
                            alt="High Voltage Transmission"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                </div>
            </section>

            {/* 2. MISSION BENTO GRID */}
            <section className="px-4 py-20 bg-zinc-50">
                <div className="max-w-[1800px] mx-auto">
                    <div className="mb-12">
                        <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">// Our Mission</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {/* Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl min-h-[300px] flex flex-col justify-between group hover:shadow-xl transition-all duration-500"
                        >
                            <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center group-hover:bg-[#193354] group-hover:text-white transition-colors">
                                <Zap className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="font-mono text-xs text-zinc-400 mb-2 block">01</span>
                                <h3 className="text-2xl font-bold leading-tight">Innovative & Sustainable Solutions</h3>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 rounded-3xl min-h-[300px] flex flex-col justify-between group hover:shadow-xl transition-all duration-500"
                        >
                            <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center group-hover:bg-[#193354] group-hover:text-white transition-colors">
                                <Globe className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="font-mono text-xs text-zinc-400 mb-2 block">02</span>
                                <h3 className="text-2xl font-bold leading-tight">Global Standards & Compliance</h3>
                            </div>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 rounded-3xl min-h-[300px] flex flex-col justify-between group hover:shadow-xl transition-all duration-500"
                        >
                            <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center group-hover:bg-[#193354] group-hover:text-white transition-colors">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="font-mono text-xs text-zinc-400 mb-2 block">03</span>
                                <h3 className="text-2xl font-bold leading-tight">Customer-Centric Approach</h3>
                            </div>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-8 rounded-3xl min-h-[300px] flex flex-col justify-between group hover:shadow-xl transition-all duration-500"
                        >
                            <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center group-hover:bg-[#193354] group-hover:text-white transition-colors">
                                <Truck className="w-6 h-6" />
                            </div>
                            <div>
                                <span className="font-mono text-xs text-zinc-400 mb-2 block">04</span>
                                <h3 className="text-2xl font-bold leading-tight">Reliable Supply Chain</h3>
                            </div>
                        </motion.div>

                        {/* 3. EXPERIENCE FEATURE CARD (Spans 2 cols) */}
                        {/* Fix 1: Flex Column on Mobile, Gap, Padding, Flex-1 text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="md:col-span-2 bg-zinc-900 text-white p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group"
                        >
                            {/* Background Image Overlay */}
                            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                                <Image
                                    src="/industrial_electrical_panel_1764418404180.png"
                                    alt="Industrial Panel"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative z-10 flex-shrink-0">
                                <span className="text-8xl font-bold tracking-tighter block">10+</span>
                                <span className="font-mono text-sm text-zinc-400 uppercase tracking-widest">Years of Experience</span>
                            </div>
                            <div className="relative z-10 flex-1 max-w-md">
                                <h3 className="text-3xl font-bold mb-4">Industry Leaders</h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    Delivering complex electrical infrastructure projects with precision and safety. We set the benchmark for quality in the renewable sector.
                                </p>
                            </div>
                        </motion.div>

                        {/* Fix 4: Safety First Card Polish */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="md:col-span-2 bg-[#F0B448] p-12 rounded-3xl flex flex-col justify-end relative group min-h-[300px]"
                        >
                            {/* Arrow pinned to top-right */}
                            <div className="absolute top-6 right-6">
                                <ArrowUpRight className="w-8 h-8 text-[#193354] opacity-50 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Icon and Text at bottom left */}
                            <div>
                                <ShieldCheck className="w-12 h-12 text-[#193354] mb-6" />
                                <h3 className="text-4xl font-bold text-[#193354] mb-2">Safety First</h3>
                                <p className="text-[#193354]/80 font-medium">Zero-compromise safety protocols for every project.</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 4. TESTIMONIAL SECTION (Refined) */}
            {/* Fix 3: Full-width Feature Block, bg-zinc-100, py-20 */}
            <section className="py-20 px-4 bg-zinc-100">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="w-20 h-20 bg-white rounded-full p-2 shadow-xl mx-auto mb-8">
                            <div className="w-full h-full bg-zinc-200 rounded-full overflow-hidden relative">
                                {/* Placeholder Avatar */}
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-bold text-xl">RS</div>
                            </div>
                        </div>

                        <blockquote className="font-serif italic text-3xl md:text-5xl text-zinc-800 leading-tight mb-8">
                            &ldquo;Reliable and high-quality products. Parikh Renewable has consistently delivered excellence in our electrical infrastructure upgrades.&rdquo;
                        </blockquote>

                        <div>
                            <cite className="not-italic font-bold text-lg text-zinc-900 block">Rahul Sharma</cite>
                            <span className="text-zinc-500 text-sm font-mono uppercase tracking-widest">Plant Manager, Industrial Corp</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
