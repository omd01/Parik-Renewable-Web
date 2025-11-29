'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Battery, Zap, Settings, ShieldCheck, Leaf, Anchor, Wifi, Tractor, Building2, Home } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function OffGridSolar() {
    const [systemCapacity, setSystemCapacity] = useState(5) // Default 5kW
    const [annualProduction, setAnnualProduction] = useState(0)
    const [annualSavings, setAnnualSavings] = useState(0)
    const [batteryBackup, setBatteryBackup] = useState(0)

    // Simple calculation logic
    useEffect(() => {
        const unitsPerYear = systemCapacity * 1460
        const savings = unitsPerYear * 8 // Approx tariff
        // Rough estimate: 1kW system ~ 2kWh battery storage for 4-5 hours backup
        // Scaling linearly for simplicity in this demo
        const backupHours = 8 + (systemCapacity * 0.2)

        setAnnualProduction(Math.round(unitsPerYear))
        setAnnualSavings(Math.round(savings))
        setBatteryBackup(Math.min(Math.round(backupHours), 24)) // Cap at 24h for realism
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
                                OFF-GRID <br />
                                <span className="text-zinc-400">SOLAR SYSTEMS</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-600 max-w-xl font-medium">
                                Power your world without limits. Total energy independence for remote and backup applications.
                            </p>
                        </div>
                        <div className="flex-1 relative w-full aspect-square md:aspect-[4/3] bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-100">
                            <Image
                                src="/off_grid_hero.png"
                                alt="Off Grid Solar System Diagram"
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
                        "An off-grid system operates independently of the public grid. It generates power via solar panels and stores it in batteries for use at night or during outages."
                    </motion.h2>
                </div>
            </section>

            {/* 3. Savings & ROI Calculator */}
            <section className="py-24 px-4 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-zinc-100">
                        <div className="bg-zinc-900 p-8 text-white flex justify-between items-center">
                            <h3 className="text-2xl font-bold font-mono flex items-center gap-3">
                                <Battery className="w-6 h-6 text-[#F0B448]" />
                                INDEPENDENCE CALCULATOR
                            </h3>
                            <div className="text-zinc-400 text-sm font-mono">OFF-GRID SIMULATOR</div>
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
                                            max="20"
                                            step="1"
                                            value={systemCapacity}
                                            onChange={(e) => setSystemCapacity(parseInt(e.target.value))}
                                            className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-[#193354]"
                                        />
                                        <span className="text-3xl font-bold text-[#193354] w-20 text-right">{systemCapacity} kW</span>
                                    </div>
                                    <p className="text-zinc-400 text-sm mt-2">Slide to adjust capacity</p>
                                </div>

                                <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
                                    <h4 className="font-bold text-[#193354] mb-2">Energy Freedom</h4>
                                    <p className="text-sm text-green-800">
                                        With a {systemCapacity}kW off-grid system, you can power essential loads completely independently, immune to grid failures and rising costs.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                                    <div className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">Annual Production</div>
                                    <div className="text-3xl font-bold text-zinc-900">{annualProduction.toLocaleString()} Units</div>
                                </div>
                                <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                                    <div className="text-zinc-500 text-xs font-bold uppercase tracking-wider mb-1">Annual Savings</div>
                                    <div className="text-3xl font-bold text-zinc-900">₹{annualSavings.toLocaleString()}</div>
                                </div>
                                <div className="bg-[#193354] p-6 rounded-2xl text-white shadow-lg transform scale-105">
                                    <div className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Est. Battery Backup</div>
                                    <div className="text-4xl font-bold text-[#F0B448]">{batteryBackup} - {batteryBackup + 2} Hours</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Key Components */}
            <section className="py-24 px-4 md:px-8 bg-zinc-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-[#193354]">System Components</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {[
                            { title: "Solar Panels", desc: "Capture sunlight to DC.", icon: Sun },
                            { title: "Battery Bank", desc: "Stores excess energy for night use.", icon: Battery },
                            { title: "Charge Controller", desc: "Regulates voltage, prevents overcharging.", icon: Settings },
                            { title: "Off-Grid Inverter", desc: "Converts stored DC to AC power.", icon: Zap },
                            { title: "Backup Generator", desc: "Emergency power for low-sunlight periods.", icon: Anchor },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-[#193354]">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-lg mb-2 leading-tight">{item.title}</h3>
                                <p className="text-zinc-500 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. How It Works */}
            <section className="py-24 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-[#193354] text-center">How It Works</h2>

                    <div className="space-y-8">
                        {[
                            { step: "01", title: "Capture", desc: "Solar panels generate DC electricity from sunlight.", icon: Sun },
                            { step: "02", title: "Regulate", desc: "Charge controller manages the flow of electricity to batteries.", icon: Settings },
                            { step: "03", title: "Store", desc: "Energy fills the battery bank for later use.", icon: Battery },
                            { step: "04", title: "Convert", desc: "Inverter changes DC from batteries/panels to AC.", icon: Zap },
                            { step: "05", title: "Power", desc: "Electricity runs your home or facility.", icon: Home },
                            { step: "06", title: "Backup", desc: "Generator kicks in automatically if batteries run low.", icon: Anchor },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-6 p-6 bg-zinc-50 rounded-2xl border border-zinc-100"
                            >
                                <div className="text-3xl font-bold text-zinc-200 w-12">{item.step}</div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-[#193354]">{item.title}</h3>
                                    <p className="text-zinc-600">{item.desc}</p>
                                </div>
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-zinc-100 text-[#193354]">
                                    <item.icon className="w-6 h-6" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Applications */}
            <section className="py-24 px-4 md:px-8 bg-zinc-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">Ideal Applications</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: "Remote Cabins", desc: "Perfect for locations with no grid access.", icon: Home },
                            { title: "Agriculture", desc: "Power pumps & irrigation systems anywhere.", icon: Tractor },
                            { title: "Urban Backup", desc: "Ensure reliability during frequent outages.", icon: Building2 },
                            { title: "Sustainable Living", desc: "Achieve zero carbon footprint living.", icon: Leaf },
                        ].map((app, i) => (
                            <div key={i} className="flex items-start gap-6 p-8 bg-zinc-800/50 rounded-3xl border border-zinc-700 hover:bg-zinc-800 transition-colors">
                                <app.icon className="w-10 h-10 text-[#F0B448] flex-shrink-0" />
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{app.title}</h3>
                                    <p className="text-zinc-400">{app.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Benefits & Maintenance */}
            <section className="py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-[#193354]">Key Benefits</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { title: "Independence", desc: "No reliance on utility grid" },
                                    { title: "Reliability", desc: "Power during blackouts" },
                                    { title: "Cost Savings", desc: "No monthly electricity bills" },
                                    { title: "Eco-Friendly", desc: "100% renewable energy" },
                                ].map((benefit, i) => (
                                    <div key={i} className="bg-[#193354] text-white p-6 rounded-xl">
                                        <ShieldCheck className="w-8 h-8 text-[#F0B448] mb-4" />
                                        <h4 className="font-bold mb-1">{benefit.title}</h4>
                                        <p className="text-blue-200 text-xs">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
                            <h2 className="text-3xl font-bold mb-6 text-[#193354]">Smart Maintenance</h2>
                            <p className="text-zinc-600 mb-8">
                                Modern off-grid systems are smarter than ever. We provide tools to keep your system running at peak performance.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-zinc-100">
                                    <Wifi className="w-6 h-6 text-[#193354]" />
                                    <div>
                                        <h4 className="font-bold text-[#193354]">Remote Monitoring App</h4>
                                        <p className="text-sm text-zinc-500">Track production & battery levels from your phone.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-zinc-100">
                                    <Battery className="w-6 h-6 text-[#193354]" />
                                    <div>
                                        <h4 className="font-bold text-[#193354]">Battery Health Checks</h4>
                                        <p className="text-sm text-zinc-500">Automated alerts for maintenance needs.</p>
                                    </div>
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
