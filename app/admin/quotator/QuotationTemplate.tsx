import React from 'react';
import { CheckCircle2, BarChart3, ShieldCheck, Factory, Settings } from 'lucide-react';

export interface QuotationData {
    clientName: string;
    clientAddress: string;
    clientPhone: string;
    date: string;
    propertyType: string;
    capacity: string;
    systemType: string;
    panelBrand: string;
    inverterBrand: string;
    batteryBrand?: string;
    pricePerWatt: string;
    totalCost: string;
    gst: string;
    grandTotal: string;
}

interface QuotationTemplateProps {
    data: QuotationData;
    className?: string;
}

export const QuotationTemplate = React.forwardRef<HTMLDivElement, QuotationTemplateProps>(({ data, className }, ref) => {
    return (
        <div ref={ref} className={`w-[210mm] bg-white text-zinc-900 font-sans ${className || 'hidden print:block'}`}>

            {/* PAGE 1: COVER */}
            <div className="h-[297mm] relative flex flex-col page-break-after-always">
                {/* Full Height Hero Image */}
                <div className="absolute inset-0 bg-zinc-900">
                    {/* Placeholder for actual hero image - using a colored div for now to ensure print visibility if image fails */}
                    <div className="absolute inset-0 bg-[url('/Industrial-Solar-Plant.png')] bg-cover bg-center opacity-60 print-color-adjust-exact"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
                </div>

                <div className="relative z-10 flex-1 flex flex-col justify-between p-16 text-white">
                    <div className="flex justify-between items-start">
                        <h1 className="text-4xl font-bold tracking-tighter leading-none">
                            PARIKH<br />RENEWABLE
                        </h1>
                        <div className="text-right">
                            <p className="font-mono text-sm opacity-70">QUOTATION REF</p>
                            <p className="font-bold text-xl">PR-{new Date().getFullYear()}-{Math.floor(Math.random() * 1000)}</p>
                        </div>
                    </div>

                    <div>
                        <div className="inline-block bg-[#F0B448] text-[#193354] px-6 py-2 rounded-full font-bold font-mono text-lg mb-8 print-color-adjust-exact">
                            {data.capacity} kW {data.systemType.toUpperCase()} SYSTEM
                        </div>
                        <h2 className="text-7xl font-bold tracking-tighter leading-tight mb-4">
                            SOLAR<br />PROPOSAL
                        </h2>
                        <p className="text-2xl font-light opacity-90">Prepared for <span className="font-bold">{data.clientName}</span></p>
                    </div>

                    <div className="border-t border-white/20 pt-8 flex justify-between items-end">
                        <div>
                            <p className="font-mono text-sm opacity-70 mb-1">DATE</p>
                            <p className="text-lg">{data.date}</p>
                        </div>
                        <div className="text-right">
                            <p className="font-mono text-sm opacity-70 mb-1">LOCATION</p>
                            <p className="text-lg">{data.clientAddress}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PAGE 2: INTRODUCTION */}
            <div className="h-[297mm] relative flex flex-col p-16 page-break-after-always">
                <div className="flex justify-between items-center mb-16 border-b border-zinc-200 pb-8">
                    <span className="text-2xl font-bold text-[#193354]">PARIKH RENEWABLE</span>
                    <span className="font-mono text-xs text-zinc-400">INTRODUCTION</span>
                </div>

                <div className="flex-1">
                    <h3 className="text-5xl font-bold text-[#193354] mb-12 tracking-tight">POWERING YOUR FUTURE.</h3>

                    <div className="prose prose-lg text-zinc-600 leading-relaxed text-justify max-w-none">
                        <p className="mb-6">
                            Dear <strong>{data.clientName}</strong>,
                        </p>
                        <p className="mb-6">
                            Thank you for considering Parikh Renewable as your partner in the transition to clean, sustainable energy.
                            In an era where energy independence and environmental responsibility are paramount, your decision to explore
                            solar power places you at the forefront of a global shift towards a greener future.
                        </p>
                        <p className="mb-6">
                            At Parikh Renewable, we don't just install solar panels; we engineer energy solutions. With over a decade of
                            experience in the electrical and renewable sector, our team is dedicated to delivering systems that are
                            safe, efficient, and built to last. We understand that every roof is unique, and so is every energy requirement.
                        </p>
                        <p className="mb-6">
                            This proposal outlines a custom-designed {data.systemType} solar system tailored to your specific needs at
                            {data.clientAddress}. We have selected top-tier components from trusted manufacturers like {data.panelBrand}
                            and {data.inverterBrand} to ensure maximum generation and reliability.
                        </p>
                        <p className="mb-8">
                            We look forward to the opportunity to power your property and help you achieve significant savings on your
                            electricity costs while contributing to a cleaner planet.
                        </p>
                    </div>

                    <div className="mt-12">
                        <div className="w-48 h-20 relative mb-4">
                            {/* Signature Image Placeholder - using text for now */}
                            <div className="font-script text-4xl text-[#193354] italic">Aditya Parikh</div>
                        </div>
                        <p className="font-bold text-[#193354] text-lg">Aditya Suresh Parikh</p>
                        <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Founder & CEO</p>
                    </div>
                </div>

                <div className="border-t border-zinc-200 pt-8 flex justify-between text-xs text-zinc-400 font-mono">
                    <span>PARIKH RENEWABLE PRIVATE LIMITED</span>
                    <span>PAGE 02</span>
                </div>
            </div>

            {/* PAGE 3: TECHNICAL & FINANCIAL */}
            <div className="h-[297mm] relative flex flex-col p-16 page-break-after-always">
                <div className="flex justify-between items-center mb-12 border-b border-zinc-200 pb-8">
                    <span className="text-2xl font-bold text-[#193354]">PARIKH RENEWABLE</span>
                    <span className="font-mono text-xs text-zinc-400">SPECIFICATIONS</span>
                </div>

                <div className="grid grid-cols-2 gap-12 mb-12">
                    <div>
                        <h4 className="text-xl font-bold text-[#193354] mb-6 flex items-center gap-2">
                            <Settings className="w-5 h-5" /> SYSTEM CONFIGURATION
                        </h4>
                        <table className="w-full text-sm">
                            <tbody className="divide-y divide-zinc-100">
                                <tr className="bg-zinc-50 print-color-adjust-exact">
                                    <td className="py-3 px-4 font-medium text-zinc-500">System Capacity</td>
                                    <td className="py-3 px-4 font-bold text-zinc-900 text-right">{data.capacity} kW</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 font-medium text-zinc-500">System Type</td>
                                    <td className="py-3 px-4 font-bold text-zinc-900 text-right">{data.systemType}</td>
                                </tr>
                                <tr className="bg-zinc-50 print-color-adjust-exact">
                                    <td className="py-3 px-4 font-medium text-zinc-500">PV Modules</td>
                                    <td className="py-3 px-4 font-bold text-zinc-900 text-right">{data.panelBrand}</td>
                                </tr>
                                <tr>
                                    <td className="py-3 px-4 font-medium text-zinc-500">Inverter</td>
                                    <td className="py-3 px-4 font-bold text-zinc-900 text-right">{data.inverterBrand}</td>
                                </tr>
                                {data.batteryBrand && (
                                    <tr className="bg-zinc-50 print-color-adjust-exact">
                                        <td className="py-3 px-4 font-medium text-zinc-500">Battery Storage</td>
                                        <td className="py-3 px-4 font-bold text-zinc-900 text-right">{data.batteryBrand}</td>
                                    </tr>
                                )}
                                <tr>
                                    <td className="py-3 px-4 font-medium text-zinc-500">Mounting Structure</td>
                                    <td className="py-3 px-4 font-bold text-zinc-900 text-right">Hot Dip Galvanized</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-[#193354] mb-6 flex items-center gap-2">
                            <BarChart3 className="w-5 h-5" /> FINANCIAL SUMMARY
                        </h4>
                        <div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 print-color-adjust-exact">
                            <div className="flex justify-between mb-4">
                                <span className="text-zinc-600">Price per Watt</span>
                                <span className="font-mono font-bold">₹{data.pricePerWatt}</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span className="text-zinc-600">System Cost</span>
                                <span className="font-mono font-bold">₹{data.totalCost}</span>
                            </div>
                            <div className="flex justify-between mb-4 pb-4 border-b border-zinc-200">
                                <span className="text-zinc-600">GST (Included)</span>
                                <span className="font-mono font-bold text-zinc-400">Included</span>
                            </div>
                            <div className="flex justify-between items-end">
                                <span className="text-[#193354] font-bold text-lg">Grand Total</span>
                                <span className="text-[#193354] font-bold text-3xl">₹{data.grandTotal}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ROI Visualization Placeholder */}
                <div className="flex-1 bg-zinc-50 rounded-xl p-8 border border-zinc-100 mb-8 print-color-adjust-exact flex flex-col items-center justify-center">
                    <h4 className="text-lg font-bold text-[#193354] mb-6 self-start">PROJECTED SAVINGS (25 YEARS)</h4>
                    <div className="w-full h-64 flex items-end justify-around gap-4 px-8">
                        {/* Simple CSS Bar Chart */}
                        <div className="w-16 bg-zinc-300 h-[10%] rounded-t-md relative group">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-mono">Year 1</span>
                        </div>
                        <div className="w-16 bg-zinc-400 h-[25%] rounded-t-md relative">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-mono">Year 5</span>
                        </div>
                        <div className="w-16 bg-[#F0B448] h-[50%] rounded-t-md relative opacity-60">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-mono">Year 10</span>
                        </div>
                        <div className="w-16 bg-[#F0B448] h-[100%] rounded-t-md relative">
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-mono font-bold">Year 25</span>
                        </div>
                    </div>
                    <p className="mt-8 text-center text-zinc-500 text-sm max-w-lg">
                        *Estimated savings based on current electricity tariffs and projected solar generation. Actual savings may vary.
                    </p>
                </div>

                <div className="border-t border-zinc-200 pt-8 flex justify-between text-xs text-zinc-400 font-mono">
                    <span>PARIKH RENEWABLE PRIVATE LIMITED</span>
                    <span>PAGE 03</span>
                </div>
            </div>

            {/* PAGE 4: TERMS & APPROVALS */}
            <div className="h-[297mm] relative flex flex-col p-16 page-break-after-always">
                <div className="flex justify-between items-center mb-12 border-b border-zinc-200 pb-8">
                    <span className="text-2xl font-bold text-[#193354]">PARIKH RENEWABLE</span>
                    <span className="font-mono text-xs text-zinc-400">TERMS</span>
                </div>

                <div className="flex-1">
                    <div className="grid grid-cols-1 gap-8 mb-16">
                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center flex-shrink-0 print-color-adjust-exact">
                                <ShieldCheck className="w-6 h-6 text-[#193354]" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-[#193354] mb-2">Warranty</h4>
                                <p className="text-zinc-600 text-sm leading-relaxed">
                                    • 25 Years Performance Warranty on Solar Modules.<br />
                                    • 5-10 Years Warranty on Inverters (as per OEM).<br />
                                    • 5 Years Workmanship Warranty by Parikh Renewable.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center flex-shrink-0 print-color-adjust-exact">
                                <CheckCircle2 className="w-6 h-6 text-[#193354]" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-[#193354] mb-2">Payment Terms</h4>
                                <p className="text-zinc-600 text-sm leading-relaxed">
                                    • 50% Advance along with Work Order.<br />
                                    • 40% Against delivery of major material at site.<br />
                                    • 10% After successful installation and commissioning.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center flex-shrink-0 print-color-adjust-exact">
                                <Factory className="w-6 h-6 text-[#193354]" />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-[#193354] mb-2">Delivery & Installation</h4>
                                <p className="text-zinc-600 text-sm leading-relaxed">
                                    • Material Delivery: 2-3 Weeks from date of advance.<br />
                                    • Installation: 1 Week after site clearance.<br />
                                    • Net Metering: Subject to DISCOM processing timelines.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto border-2 border-zinc-200 border-dashed rounded-xl p-8">
                        <h4 className="text-lg font-bold text-[#193354] mb-12">APPROVAL</h4>
                        <p className="text-sm text-zinc-500 mb-8">
                            By signing below, I <strong>{data.clientName}</strong> approve this quotation and agree to the terms and conditions mentioned above.
                        </p>

                        <div className="flex justify-between items-end mt-16">
                            <div className="border-t border-zinc-400 w-64 pt-2">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">Client Signature</p>
                            </div>
                            <div className="border-t border-zinc-400 w-64 pt-2">
                                <p className="text-xs font-mono uppercase tracking-widest text-zinc-500">Date</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-zinc-200 pt-8 flex justify-between text-xs text-zinc-400 font-mono mt-12">
                    <span>PARIKH RENEWABLE PRIVATE LIMITED</span>
                    <span>PAGE 04</span>
                </div>
            </div>

            <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .page-break-after-always {
            page-break-after: always;
          }
        }
      `}</style>
        </div>
    );
});

QuotationTemplate.displayName = 'QuotationTemplate';
