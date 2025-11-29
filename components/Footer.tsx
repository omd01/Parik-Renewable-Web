'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-white pt-20 md:pt-32 pb-6 px-6 md:px-4 rounded-t-[2rem] md:rounded-t-[3rem] -mt-12 relative z-10">
            <div className="max-w-[1800px] mx-auto">
                <div className="flex flex-col items-center text-center mb-20 md:mb-32">
                    <h2 className="text-5xl md:text-[10rem] font-bold tracking-tighter leading-[0.9] md:leading-[0.8] mb-8 md:mb-12">
                        READY TO<br /><span className="text-zinc-800">START?</span>
                    </h2>
                    <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-6 bg-[#F0B448] text-[#193354] rounded-full text-lg md:text-xl font-bold overflow-hidden transition-transform hover:scale-105">
                        <span className="relative z-10 flex items-center gap-2 md:gap-3">
                            GET A QUOTE <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                        </span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 md:mb-20 border-t border-zinc-900 pt-12 md:pt-20 p-0 md:p-12">
                    <div className="col-span-1 md:col-span-2">
                        <p className="text-zinc-500 max-w-md text-base md:text-lg font-light leading-relaxed">
                            Parikh Renewable is a leading Solar Rooftop EPC company delivering end-to-end clean energy solutions for industrial, commercial, and residential sectors.
                        </p>
                    </div>

                    {/* Mobile Grid for Contact & Links */}
                    <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Links</h4>
                            <ul className="space-y-2">
                                {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-zinc-300 hover:text-white transition-colors text-sm">
                                            {item}
                                        </Link>
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
                        <span className="font-mono text-[10px] md:text-xs text-zinc-600">© 2025 PRIVACY POLICY</span>
                        <span className="font-mono text-[10px] md:text-xs text-zinc-600">DESIGNED & DEVELOPED BY <a href="https://talentronaut.in/" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-800 transition-colors">TALENTRONAUT TECHNOLOGIES PVT LTD</a></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
