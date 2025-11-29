'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Zap, Battery, ArrowRight, CheckCircle2, BarChart3, Home, Settings, ShieldCheck, TrendingUp } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function OnGridSolar() {
    const [systemCapacity, setSystemCapacity] = useState(5) // Default 5kW
    const [annualProduction, setAnnualProduction] = useState(0)
    const [monthlyProduction, setMonthlyProduction] = useState(0)
    const [annualSavings, setAnnualSavings] = useState(0)

    // Simple calculation logic (approximate values for India)
    // 1kW ~ 4 units/day ~ 1460 units/year
    // Avg tariff ~ ₹8/unit
    useEffect(() => {
        const unitsPerYear = systemCapacity * 1460
        const unitsPerMonth = unitsPerYear / 12
        const savings = unitsPerYear * 8

        setAnnualProduction(Math.round(unitsPerYear))
        setMonthlyProduction(Math.round(unitsPerMonth))
        setAnnualSavings(Math.round(savings))
    }, [systemCapacity])

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
                                ON-GRID <br />
                                <span className="text-zinc-400">SOLAR SYSTEMS</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-600 max-w-xl font-medium">
                                Generate your own power. Feed the excess. Earn credits.
                            </p>
                        </div>
                        <div className="flex-1 relative w-full aspect-square md:aspect-[4/3] bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-100">
                            <Image
                                src="/on_grid_hero.png"
                                alt="On Grid Solar System Diagram"
                                fill
                                className="object-contain p-8"
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
                        "An on-grid system connects directly to the public electricity grid. It allows you to generate real-time electricity and feed excess energy back for credits via Net Metering."
                    </motion.h2>
                </div>
            </section>

            {/* 3. Savings Calculator */}
            <section className="py-24 px-4 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-zinc-100">
                        <div className="bg-zinc-900 p-8 text-white flex justify-between items-center">
                            <h3 className="text-2xl font-bold font-mono flex items-center gap-3">
                                <Settings className="w-6 h-6 text-[#F0B448]" />
                                SAVINGS SIMULATOR
                            </h3>
                            <div className="text-zinc-400 text-sm font-mono">ESTIMATE YOUR IMPACT</div>
                        </div>

                        <div className="p-8 md:p-12 grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <div>
                                    <label className="block text-sm font-bold text-zinc-500 uppercase tracking-wider mb-4">
                                        System Capacity (kW)
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <input
                                            type="range"
                                            min="1"
                                            max="50"
                                            step="1"
                                            value={systemCapacity}
                                            onChange={(e) => setSystemCapacity(parseInt(e.target.value))}
                                            className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#193354]"
                                        />
                                        <span className="text-3xl font-bold text-[#193354] w-20 text-right">{systemCapacity} kW</span>
                                    </div>
                                    <p className="text-zinc-400 text-sm mt-2">Slide to adjust capacity</p>
                                </div>

                                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                    <h4 className="font-bold text-[#193354] mb-2">Did you know?</h4>
                                    <p className="text-sm text-blue-800">
                                        A {systemCapacity}kW system saves approximately {(systemCapacity * 0.8).toFixed(1)} tons of CO2 annually, equivalent to planting {Math.round(systemCapacity * 12)} trees.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                                    <div className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">Annual Production</div>
                                    <div className="text-3xl font-bold text-zinc-900">{annualProduction.toLocaleString()} Units</div>
                                </div>
                                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                                    <div className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">Monthly Production</div>
                                    <div className="text-3xl font-bold text-zinc-900">{monthlyProduction.toLocaleString()} Units</div>
                                </div>
                                <div className="bg-[#193354] p-6 rounded-2xl text-white shadow-lg transform scale-105">
                                    <div className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Est. Annual Savings</div>
                                    <div className="text-4xl font-bold text-[#F0B448]">₹{annualSavings.toLocaleString()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ROI Analysis */}
            <section className="py-24 px-4 md:px-8 bg-zinc-900 text-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">Understand Your ROI.</h2>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Left: Formula */}
                        <div className="space-y-8">
                            <div className="p-8 border border-zinc-700 rounded-3xl bg-zinc-800/50">
                                <h3 className="text-zinc-400 font-mono text-sm mb-4">THE FORMULA</h3>
                                <div className="text-3xl md:text-4xl font-serif">
                                    ROI = <span className="text-[#F0B448]">(Net Profit / Total Investment)</span> × 100
                                </div>
                            </div>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                Solar is not just an expense; it's a high-yield investment. With rising electricity tariffs, your system pays for itself in just a few years, providing free electricity for the rest of its 25-year lifespan.
                            </p>
                        </div>

                        {/* Right: Real World Example */}
                        <div className="relative pl-8 border-l border-zinc-700 space-y-12">
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-[#F0B448] border-4 border-zinc-900"></div>
                                <h4 className="text-xl font-bold mb-2">Investment</h4>
                                <p className="text-zinc-400">₹2.3 Lakhs (Approx for 3kW)</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-zinc-600 border-4 border-zinc-900"></div>
                                <h4 className="text-xl font-bold mb-2">Annual Savings</h4>
                                <p className="text-zinc-400">₹36,000 / year</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-green-500 border-4 border-zinc-900"></div>
                                <h4 className="text-xl font-bold mb-2 text-green-400">Break-even Point</h4>
                                <p className="text-zinc-400">~ 4-5 Years (ROI &gt; 20%)</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-blue-500 border-4 border-zinc-900"></div>
                                <h4 className="text-xl font-bold mb-2 text-blue-400">Free Electricity</h4>
                                <p className="text-zinc-400">Next 20+ Years</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. How It Works */}
            <section className="py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-[#193354]">How It Works</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { step: "01", title: "Capture", desc: "Solar panels convert sunlight into DC electricity.", icon: Sun },
                            { step: "02", title: "Convert", desc: "Inverter converts DC to AC electricity for home use.", icon: Zap },
                            { step: "03", title: "Power", desc: "Electricity powers your appliances directly.", icon: Home },
                            { step: "04", title: "Export", desc: "Excess energy flows back to the grid automatically.", icon: ArrowRight },
                            { step: "05", title: "Import", desc: "Draw power from the grid during night or cloudy days.", icon: ArrowRight },
                            { step: "06", title: "Balance", desc: "Net Meter calculates the difference for your bill.", icon: BarChart3 },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 hover:shadow-lg transition-shadow group"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-4xl font-bold text-zinc-200 group-hover:text-[#F0B448] transition-colors">{item.step}</span>
                                    <item.icon className="w-8 h-8 text-[#193354]" />
                                </div>
                                <h3 className="text-xl font-bold text-[#193354] mb-3">{item.title}</h3>
                                <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Components */}
            <section className="py-24 px-4 md:px-8 bg-zinc-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-[#193354]">System Components</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Solar Panels", desc: "High-efficiency modules to capture sunlight.", icon: Sun },
                            { title: "Inverter", desc: "The brain of the system, converting DC to AC.", icon: Settings },
                            { title: "Net Meter", desc: "Bi-directional meter to track import/export.", icon: TrendingUp },
                            { title: "Grid Connection", desc: "Seamless integration with your utility provider.", icon: Zap },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm">
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

            {/* 7. Net Metering & Benefits */}
            <section className="py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-[#193354]">Applications</h2>
                            <div className="grid gap-4">
                                {[
                                    { title: "Residential", desc: "Homes, Apartments, Villas" },
                                    { title: "Commercial", desc: "Offices, Malls, Hotels" },
                                    { title: "Industrial", desc: "Factories, Warehouses, Plants" },
                                ].map((app, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 border border-zinc-100 rounded-xl hover:bg-zinc-50 transition-colors">
                                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <h4 className="font-bold text-[#193354]">{app.title}</h4>
                                            <p className="text-zinc-500 text-sm">{app.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-[#193354]">Key Benefits</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { title: "Cost Savings", desc: "Reduce bills by up to 90%" },
                                    { title: "Sustainability", desc: "100% Green Energy" },
                                    { title: "Reliability", desc: "Grid as backup" },
                                    { title: "Property Value", desc: "Increases asset value" },
                                ].map((benefit, i) => (
                                    <div key={i} className="bg-[#193354] text-white p-6 rounded-xl">
                                        <ShieldCheck className="w-8 h-8 text-[#F0B448] mb-4" />
                                        <h4 className="font-bold mb-1">{benefit.title}</h4>
                                        <p className="text-blue-200 text-xs">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
