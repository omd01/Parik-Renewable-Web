'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function SolarBOSMaterials() {
    return (
        <main className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#193354] selection:text-white">
            <Header />
            <div className="pt-32 px-4 min-h-[50vh] flex items-center justify-center">
                <h1 className="text-4xl font-bold text-zinc-300">Solar BOS Materials</h1>
            </div>
            <Footer />
        </main>
    )
}
