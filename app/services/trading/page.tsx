'use client'

import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function MaterialTrading() {
    const products = [
        {
            title: "Solar PV Modules",
            desc: "High-efficiency monocrystalline and polycrystalline panels for utility-scale output."
        },
        {
            title: "Solar Inverters",
            desc: "Grid-tied and hybrid inverters ensuring maximum conversion efficiency."
        },
        {
            title: "Solar Batteries",
            desc: "Advanced energy storage systems for off-grid and hybrid reliability."
        },
        {
            title: "Polycab Cables",
            desc: "Full range of industrial-grade DC and AC cabling solutions."
        },
        {
            title: "L&T Electrical Products",
            desc: "Switchgear, circuit breakers, and automation units from L&T."
        },
        {
            title: "L&T Meters",
            desc: "Precision metering hardware for accurate industrial monitoring."
        },
        {
            title: "Transformers & Conductors",
            desc: "High-voltage distribution transformers and transmission conductors."
        },
        {
            title: "Secure Meters",
            desc: "Smart metering solutions for complex grid integration."
        },
        {
            title: "Industrial Materials",
            desc: "Structural steel, mounting kits, and heavy-duty civil hardware."
        }
    ]

    return (
        <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#193354] selection:text-white w-full max-w-[100vw] overflow-x-hidden">
            <Header />

            {/* 1. HERO SECTION */}
            {/* Fix 3: Added px-6 for mobile padding */}
            <section className="relative pt-32 pb-20 px-6 md:px-4 min-h-[80vh] flex flex-col justify-center w-full max-w-[100vw] overflow-hidden">
                <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full"
                    >
                        {/* Fix 1: Fluid Typography, break-words, hyphens-auto */}
                        <h1 className="text-[11vw] md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 break-words hyphens-auto">
                            THE BACKBONE<br />OF SOLAR<br /><span className="text-zinc-400">INFRASTRUCTURE.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-600 max-w-xl leading-relaxed font-light">
                            Premium procurement and material trading for industrial-scale energy projects. Official partners with industry giants.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative h-[50vh] lg:h-[70vh] rounded-[3rem] overflow-hidden w-full"
                    >
                        <Image
                            src="/material_trading_hero_1764419293459.png"
                            alt="Industrial Warehouse"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                </div>
            </section>

            {/* 2. PARTNER ECOSYSTEM (Trust Bar) */}
            {/* Fix 3: overflow-x-hidden on parent */}
            <section className="py-12 border-y border-zinc-100 bg-zinc-50 overflow-x-hidden w-full">
                <div className="max-w-[1800px] mx-auto px-4 mb-8">
                    {/* Fix 4: Polished Partners Label */}
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 mb-8 text-center">Official Channel Partners</p>
                </div>
                <div className="flex relative w-full">
                    <motion.div
                        className="flex gap-20 whitespace-nowrap"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                    >
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-20 items-center">
                                {['L&T ELECTRICAL & AUTOMATION', 'POLYCAB', 'WAAREE', 'EASTMAN', 'SECURE METERS', 'HAVELLS', 'SCHNEIDER ELECTRIC', 'ABB', 'KEI CABLES'].map((brand, j) => (
                                    <span key={j} className="text-2xl md:text-4xl font-mono font-bold text-zinc-300 select-none">
                                        {brand}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 3. PRODUCT GRID */}
            {/* Fix 3: Added px-6 for mobile padding */}
            <section className="px-6 md:px-4 py-32 bg-white">
                <div className="max-w-[1800px] mx-auto">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-zinc-900">PRODUCT CATALOG</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <ProductCard key={index} product={product} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. BULK ORDER CTA */}
            <section className="px-6 md:px-4 pb-20">
                <div className="max-w-[1800px] mx-auto">
                    <div className="bg-[#193354] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-8">
                                NEED A CUSTOM<br />PROCUREMENT LIST?
                            </h2>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 bg-white text-[#193354] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#F0B448] transition-colors"
                            >
                                REQUEST MATERIAL QUOTE <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Background decoration */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('/material_trading_hero_1764419293459.png')] bg-cover bg-center opacity-10 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

// Extracted Product Card Component for cleaner logic
function ProductCard({ product, index }: { product: any, index: number }) {
    const [imgError, setImgError] = useState(false)

    // Fix 2: Reliable placeholder service
    const imgSrc = `https://placehold.co/600x400/f4f4f5/52525b?text=${product.title.replace(/ /g, '+')}`

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-zinc-50 rounded-3xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500 cursor-default"
        >
            <div className="relative aspect-[4/3] w-full bg-zinc-200">
                {/* Fix 2: Fallback handling and unoptimized for external URL */}
                {!imgError ? (
                    <Image
                        src={imgSrc}
                        alt={product.title}
                        fill
                        unoptimized
                        className="object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-300 text-zinc-500 font-mono text-sm">
                        IMAGE UNAVAILABLE
                    </div>
                )}
            </div>
            <div className="p-8">
                <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-[#193354] transition-colors">
                    {product.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-sm font-light">
                    {product.desc}
                </p>
            </div>
        </motion.div>
    )
}
