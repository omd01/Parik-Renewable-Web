'use client'

import { motion } from 'framer-motion'
import { Droplets, Sun, Zap, Anchor, Sprout, Tractor, Users, Fish, CheckCircle2, XCircle, ArrowRight, Settings } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function WaterPumpsPage() {
    return (
        <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#193354] selection:text-white overflow-x-hidden">
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
                            <h1 className="text-[12vw] md:text-[7vw] leading-[0.9] font-bold tracking-tighter text-[#193354] mb-6">
                                SOLAR WATER <br />
                                <span className="text-zinc-400">SOLUTIONS</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-600 max-w-xl font-medium">
                                Reliable irrigation and water supply for off-grid agriculture. Powered by the sun, funded by subsidies.
                            </p>
                        </div>
                        <div className="flex-1 relative w-full aspect-square md:aspect-[4/3] bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-100">
                            <Image
                                src="/water_pump_hero.png"
                                alt="Solar Water Pump System"
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
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-serif leading-tight text-[#193354]"
                        >
                            "A revolutionary solution for rural water supply. Eliminates reliance on erratic grid electricity and expensive diesel generators."
                        </motion.h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-lg">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                                <Anchor className="w-8 h-8 text-[#193354]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#193354] mb-4">Submersible Pumps</h3>
                            <p className="text-zinc-600 text-lg">
                                Designed for deep borewells and wells. These pumps are submerged underwater and push water to the surface with high efficiency.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-lg">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                                <Droplets className="w-8 h-8 text-[#193354]" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#193354] mb-4">Surface Pumps</h3>
                            <p className="text-zinc-600 text-lg">
                                Ideal for lakes, rivers, and open wells. Installed on dry land, these pumps pull water from nearby sources for irrigation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Cost & Subsidy (PM-KUSUM) */}
            <section className="py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-zinc-900 rounded-3xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F0B448] opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                        <div className="p-12 md:p-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="space-y-6 max-w-2xl">
                                <div className="inline-block px-4 py-1 bg-[#F0B448] text-[#193354] font-bold rounded-full text-sm uppercase tracking-wider">
                                    Government Initiative
                                </div>
                                <h2 className="text-4xl md:text-6xl font-bold text-white">
                                    PM-KUSUM Scheme <br />
                                    <span className="text-[#F0B448]">Authorized.</span>
                                </h2>
                                <p className="text-zinc-400 text-xl">
                                    Financial assistance to install solar pumps at a fraction of the cost. We help you navigate the paperwork and installation.
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center min-w-[300px]">
                                <div className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-2">Subsidy Available</div>
                                <div className="text-6xl font-bold text-white mb-2">90%</div>
                                <div className="text-[#F0B448] font-medium">Up to 90% off on benchmark costs</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Solar vs. Traditional Comparison */}
            <section className="py-24 px-4 md:px-8 bg-zinc-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center text-[#193354]">Why Switch to Solar?</h2>

                    <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
                        {/* Left: The Old Way */}
                        <div className="bg-zinc-200 p-12 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-zinc-700 mb-8 flex items-center gap-3">
                                <XCircle className="w-8 h-8 text-red-500" />
                                Diesel / Grid Pump
                            </h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0"></span>
                                    <div>
                                        <strong className="block text-zinc-800">High Operational Cost</strong>
                                        <span className="text-zinc-600">Expensive diesel fuel and rising electricity bills.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0"></span>
                                    <div>
                                        <strong className="block text-zinc-800">CO2 Emissions</strong>
                                        <span className="text-zinc-600">Pollutes the environment and noisy operation.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-red-500 flex-shrink-0"></span>
                                    <div>
                                        <strong className="block text-zinc-800">High Maintenance</strong>
                                        <span className="text-zinc-600">Frequent repairs and engine servicing required.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Right: The Parikh Way */}
                        <div className="bg-[#193354] p-12 flex flex-col justify-center text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                <CheckCircle2 className="w-8 h-8 text-green-400" />
                                Solar Pump
                            </h3>
                            <ul className="space-y-6 relative z-10">
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-green-400 flex-shrink-0"></span>
                                    <div>
                                        <strong className="block text-white">Zero Fuel Cost</strong>
                                        <span className="text-blue-200">Run your pump for free using sunlight.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-green-400 flex-shrink-0"></span>
                                    <div>
                                        <strong className="block text-white">Eco-Friendly</strong>
                                        <span className="text-blue-200">Zero emissions, silent operation, green energy.</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-green-400 flex-shrink-0"></span>
                                    <div>
                                        <strong className="block text-white">20+ Year Lifespan</strong>
                                        <span className="text-blue-200">Durable system with minimal maintenance needs.</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Key Components */}
            <section className="py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-[#193354]">System Components</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "PV Panels", desc: "High-efficiency harvesting modules.", icon: Sun },
                            { title: "Pump Controller", desc: "Smart flow management & protection.", icon: Settings },
                            { title: "DC/AC Pump", desc: "Submersible or Surface variants.", icon: Droplets },
                            { title: "Mounting Structure", desc: "Galvanized durability against weather.", icon: Anchor },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-[#193354]">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-zinc-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. How It Works */}
            <section className="py-24 px-4 md:px-8 bg-zinc-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-[#193354] text-center">How It Works</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-zinc-200 -z-10"></div>

                        {[
                            { step: "01", title: "Absorb", desc: "Panels capture sunlight.", icon: Sun },
                            { step: "02", title: "Convert", desc: "Energy moves to controller.", icon: Zap },
                            { step: "03", title: "Activate", desc: "Pump draws from source.", icon: Droplets },
                            { step: "04", title: "Transport", desc: "Water flows to fields/tank.", icon: ArrowRight },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-3xl border border-zinc-100 text-center relative"
                            >
                                <div className="w-24 h-24 bg-[#193354] rounded-full flex items-center justify-center mx-auto mb-6 border-8 border-white shadow-lg text-white">
                                    <item.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl font-bold text-[#193354] mb-2">{item.title}</h3>
                                <p className="text-zinc-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Applications */}
            <section className="py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center text-[#193354]">Applications</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Irrigation", desc: "Reliable water for farming.", icon: Sprout },
                            { title: "Livestock", desc: "Watering for cattle & poultry.", icon: Tractor },
                            { title: "Drinking Water", desc: "Community water supply.", icon: Users },
                            { title: "Aquaculture", desc: "Oxygenation for fish farming.", icon: Fish },
                        ].map((app, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-8 bg-zinc-50 rounded-3xl border border-zinc-100 hover:bg-white hover:shadow-lg transition-all">
                                <app.icon className="w-12 h-12 text-[#F0B448] mb-4" />
                                <h3 className="text-xl font-bold text-[#193354] mb-2">{app.title}</h3>
                                <p className="text-zinc-500 text-sm">{app.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
