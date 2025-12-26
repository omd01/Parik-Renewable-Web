import React from 'react';
import { CheckCircle2, ShieldCheck, Factory, Zap, Award, MapPin, Phone, Mail, Building2 } from 'lucide-react';

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
    proposalBy: string;
}

interface QuotationTemplateProps {
    data: QuotationData;
    className?: string;
}

export const QuotationTemplate = React.forwardRef<HTMLDivElement, QuotationTemplateProps>(({ data, className }, ref) => {
    // Calculations for the template
    const capacity = parseFloat(data.capacity) || 0;
    const yearlyGen = Math.round(capacity * 1440);
    const tariff = 12;
    const yearlySavings = yearlyGen * tariff;
    const systemCost = parseFloat(data.totalCost.replace(/,/g, '')) || 0;
    const grandCost = parseFloat(data.grandTotal.replace(/,/g, '')) || 0;
    const gstAmount = grandCost - systemCost;
    const paybackYears = yearlySavings > 0 ? (grandCost / yearlySavings).toFixed(1) : "0";
    const twentyFiveYearSavings = yearlySavings * 25;

    // Panel logic: Assume 540Wp panels
    const panelWattage = 540;
    const panelQty = Math.ceil((capacity * 1000) / panelWattage);

    return (
        // FIX: Ensure width matches A4 exactly (210mm) and handle overflow
        <div ref={ref} className={`w-[210mm] bg-white text-zinc-900 font-sans leading-normal ${className || ''}`}>

            {/* --- PAGE 1: COVER --- */}
            <div className="h-[297mm] relative flex flex-col page-break-after-always overflow-hidden bg-zinc-900 text-white print-color-adjust-exact">
                {/* Full Height Hero Content */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950 z-0"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

                <div className="relative z-10 p-12 h-full flex flex-col justify-between">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="text-6xl font-extrabold tracking-tighter leading-none mb-2">PARIKH<br /><span className="text-zinc-500">RENEWABLE</span></h1>
                            <div className="h-2 w-32 bg-yellow-500 mt-6 rounded-full"></div>
                        </div>
                        <div className="border border-white/10 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full">
                            <span className="text-sm font-mono text-yellow-500 tracking-wider">REF: PR-{new Date().getFullYear()}-{Math.floor(Math.random() * 1000)}</span>
                        </div>
                    </div>

                    {/* Centerpiece */}
                    <div className="flex-1 flex flex-col justify-center">
                        <span className="bg-yellow-500 text-black px-4 py-2 text-sm font-bold uppercase tracking-widest self-start mb-6 rounded-sm">Premium Solar Proposal</span>
                        <h2 className="text-8xl font-bold leading-none tracking-tight">SOLAR<br />ENERGY<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">REVOLUTION.</span></h2>
                    </div>

                    {/* Footer / Client Info */}
                    <div className="border-t border-white/10 pt-8 grid grid-cols-2 gap-12">
                        <div>
                            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Prepared Exclusively For</p>
                            <p className="text-3xl font-bold text-white">{data.clientName}</p>
                            <p className="text-zinc-400 mt-1">{data.clientAddress}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">System Specification</p>
                            <p className="text-4xl font-mono text-yellow-500 font-bold">{data.capacity} kW</p>
                            <p className="text-zinc-400 mt-1 capitalize">{data.systemType} Power System</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- PAGE 2: INTRODUCTION --- */}
            <div className="h-[297mm] relative flex flex-col p-12 page-break-after-always bg-white">
                <div className="flex justify-between items-center mb-8 border-b border-zinc-200 pb-8">
                    <span className="text-xl font-bold tracking-tight text-zinc-900">INTRODUCTION</span>
                    <span className="font-mono text-xs text-zinc-400">PAGE 02</span>
                </div>

                <div className="flex-1">
                    <h3 className="text-5xl font-bold text-[#193354] mb-12 tracking-tight leading-tight">POWERING YOUR<br />SUSTAINABLE FUTURE.</h3>

                    <div className="text-sm leading-7 text-zinc-600 text-justify max-w-none space-y-4">
                        <p className="font-medium text-zinc-900 text-lg mb-6">Dear {data.clientName},</p>
                        <p>
                            Thank you for considering <strong>Parikh Renewable</strong> as your energy partner. In a world where energy independence is becoming increasingly vital, your decision to transition to solar power is both forward-thinking and financially prudent.
                        </p>
                        <p>
                            We have designed this proposal specifically for your premises at <strong>{data.clientAddress}</strong>.
                            Our engineering team has analyzed your requirements to ensure that the <strong>{data.capacity} kW {data.systemType}</strong> system we are proposing delivers maximum efficiency and long-term reliability.
                        </p>
                        <p>
                            Parikh Renewable prides itself on using only Tier-1 components and adhering to the strictest safety standards.
                            This document outlines the technical specifications, financial benefits, and our comprehensive quality assurance plan.
                        </p>
                        <p>
                            We look forward to embarking on this journey with you.
                        </p>
                    </div>
                </div>

                <div className="mt-auto">
                    <div className="w-48 h-24 mb-4 relative">
                        <img
                            src="/stamp.jpeg"
                            alt="Company Stamp"
                            className=" w-32 h-32 absolute -top-6 right-[1.7rem] rotate-12 pointer-events-none"
                        />

                    </div>
                    <p className="text-2xl font-bold text-zinc-900">{data.proposalBy}</p>
                    <p className="text-sm text-zinc-500 uppercase tracking-widest font-mono mt-1">{data.proposalBy === 'Aditya Suresh Parikh' ? 'Founder & CEO' : 'Authorized Signatory'}</p>

                    <div className="mt-8 pt-8 border-t border-zinc-100 flex justify-between text-xs text-zinc-400 font-mono">
                        <span>PARIKH RENEWABLE PRIVATE LIMITED</span>
                        <span>PROPOSAL REF: PR-{new Date().getFullYear()}</span>
                    </div>
                </div>
            </div>

            {/* --- PAGE 3: SPECS & FINANCIALS --- */}
            <div className="h-[297mm] relative flex flex-col p-12 page-break-after-always">
                <div className="flex justify-between items-center mb-8 border-b border-zinc-200 pb-4">
                    <span className="text-xl font-bold tracking-tight text-zinc-900">SYSTEM & FINANCIALS</span>
                    <span className="font-mono text-xs text-zinc-400">PAGE 03</span>
                </div>

                {/* System Config Table */}
                <div className="mb-8">
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-black rounded-full"></span> 01 / System Configuration
                    </h4>
                    <div className="border border-zinc-200 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                            <thead className="bg-zinc-100 text-zinc-700 font-bold uppercase text-[10px] print-color-adjust-exact">
                                <tr>
                                    <th className="p-3 text-left pl-6">Component</th>
                                    <th className="p-3 text-left">Specification</th>
                                    <th className="p-3 text-left">Brand / Make</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-100">
                                <tr>
                                    <td className="p-3 pl-6 font-medium">Solar Modules</td>
                                    <td className="p-3 text-zinc-600">Mono Perc Half-Cut ({panelQty} Panels)</td>
                                    <td className="p-3 font-bold">{data.panelBrand}</td>
                                </tr>
                                <tr>
                                    <td className="p-3 pl-6 font-medium">Inverter</td>
                                    <td className="p-3 text-zinc-600">{data.capacity} kW (Dual MPPT)</td>
                                    <td className="p-3 font-bold">{data.inverterBrand}</td>
                                </tr>
                                <tr>
                                    <td className="p-3 pl-6 font-medium">Structure</td>
                                    <td className="p-3 text-zinc-600">Hot-Dip Galvanized (Wind Tested)</td>
                                    <td className="p-3 font-bold">Parikh Standard</td>
                                </tr>
                                <tr>
                                    <td className="p-3 pl-6 font-medium">Cables</td>
                                    <td className="p-3 text-zinc-600">4sqmm DC UV Protected</td>
                                    <td className="p-3 font-bold">Polycab / KEI</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Visual ROI Chart */}
                <div className="mb-6 flex-1 flex flex-col justify-center">
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-black rounded-full"></span> 02 / Lifetime Financial Trajectory
                    </h4>
                    <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-8 print-color-adjust-exact flex flex-col items-center">

                        {/* CSS Bar Chart */}
                        <div className="flex items-end justify-between gap-8 h-40 w-full max-w-lg mb-8">
                            {/* Year 1 */}
                            <div className="flex flex-col items-center gap-2 flex-1 group">
                                <div className="w-full rounded-t transition-all border border-zinc-400 bg-zinc-300 print:bg-zinc-300 print:border-zinc-500"
                                    style={{ height: '15px', backgroundColor: '#d4d4d8', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}></div>
                                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Year 1</div>
                            </div>

                            {/* ROI */}
                            <div className="flex flex-col items-center gap-2 flex-1 group">
                                <div className="w-full rounded-t relative border border-blue-600 bg-blue-500 print:bg-blue-500 print:border-blue-700 hover:opacity-90 transition-opacity"
                                    style={{ height: '40px', backgroundColor: '#3b82f6', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-blue-600 whitespace-nowrap bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">~{paybackYears} Yrs</div>
                                </div>
                                <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">ROI</div>
                            </div>

                            {/* Year 10 */}
                            <div className="flex flex-col items-center gap-2 flex-1 group">
                                <div className="w-full rounded-t border border-zinc-500 bg-zinc-400 print:bg-zinc-400 print:border-zinc-600"
                                    style={{ height: '80px', backgroundColor: '#a1a1aa', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}></div>
                                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Year 10</div>
                            </div>

                            {/* Year 25 */}
                            <div className="flex flex-col items-center gap-2 flex-1 group">
                                <div className="w-full rounded-t border border-green-600 bg-green-500 print:bg-green-500 print:border-green-700 shadow-sm"
                                    style={{ height: '140px', backgroundColor: '#22c55e', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}></div>
                                <div className="text-[10px] font-bold text-green-600 uppercase tracking-wider">Year 25</div>
                            </div>
                        </div>

                        {/* Moved Est. Savings Below */}
                        <div className="text-center bg-white border border-zinc-100 rounded-lg px-8 py-4 shadow-sm">
                            <p className="text-[10px] font-mono uppercase text-zinc-400 tracking-widest mb-1">Est. Lifetime Savings (25Y)</p>
                            <p className="text-4xl font-bold text-green-600 tracking-tight">₹ {twentyFiveYearSavings.toLocaleString()}</p>
                            <p className="text-[10px] text-zinc-400 mt-2 max-w-xs mx-auto leading-relaxed">
                                Projected savings based on current tariff rates and estimated generation over the system's 25-year performance warranty period.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Commercial Offer */}
                <div className="mt-auto">
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-black rounded-full"></span> 03 / Commercial Offer
                    </h4>
                    <div className="flex gap-6 items-stretch">
                        <div className="flex-1 border border-zinc-200 rounded-xl p-6 bg-white">
                            <div className="flex justify-between mb-2 text-sm text-zinc-600"><span>System Basic Cost</span><span className="font-mono">₹ {systemCost.toLocaleString()}</span></div>
                            <div className="flex justify-between mb-4 text-sm text-zinc-600 border-b border-zinc-100 pb-2"><span>GST (13.8%)</span><span className="font-mono">₹ {gstAmount.toLocaleString()}</span></div>
                            <div className="flex justify-between items-center"><span className="font-bold text-lg">Total Investment</span><span className="font-bold text-2xl font-mono text-zinc-900">₹ {data.grandTotal}</span></div>
                        </div>
                        <div className="w-1/3 bg-zinc-900 text-white rounded-xl p-6 flex flex-col justify-center text-center print-color-adjust-exact">
                            <span className="text-[10px] uppercase text-zinc-400 tracking-widest mb-1">Booking Amount</span>
                            <span className="text-2xl font-bold text-yellow-500 font-mono">₹ 20,000</span>
                            <span className="text-[10px] text-zinc-500 mt-2">Refundable as per terms</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- PAGE 4: QUALITY & STRUCTURE --- */}
            <div className="h-[297mm] relative flex flex-col p-12 page-break-after-always">
                <div className="flex justify-between items-center mb-8 border-b border-zinc-200 pb-4">
                    <span className="text-xl font-bold tracking-tight text-zinc-900">QUALITY & STRUCTURE</span>
                    <span className="font-mono text-xs text-zinc-400">PAGE 04</span>
                </div>
                <img src="/rooftop.png" alt="Quality & Structure" className="w-full h-auto mb-12 rounded-xl" />
                {/* Structural Cards */}
                <div className="mb-12">
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-black rounded-full"></span> 04 / Structural Advantages
                    </h4>
                    <div className="grid grid-cols-2 gap-4 mb-5">
                        <div className="border border-zinc-200 rounded-xl p-6 bg-white shadow-sm">
                            <h5 className="font-bold text-lg mb-4 flex items-center gap-2 text-zinc-900">
                                <Factory className="w-5 h-5 text-yellow-500" />
                                Pre-Fab Benefits
                            </h5>
                            <ul className="text-sm text-zinc-600 space-y-3 font-medium">
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Ready-made installation, MNRE approved.</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> <strong>No cutting or welding</strong> on-site.</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> No extra drilling (Protects roof).</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> Long-term corrosion protection.</li>
                            </ul>
                        </div>

                        <div className="bg-zinc-900 text-white rounded-xl p-6 shadow-md print-color-adjust-exact">
                            <h5 className="font-bold text-lg mb-4 flex items-center gap-2 text-white">
                                <ShieldCheck className="w-5 h-5 text-yellow-500" />
                                Functional Solution
                            </h5>
                            <ul className="text-sm text-zinc-300 space-y-3 font-medium">
                                <li className="flex gap-2"><Zap className="w-4 h-4 text-yellow-500 shrink-0" /> Passed all <strong>load & stress tests</strong>.</li>
                                <li className="flex gap-2"><Zap className="w-4 h-4 text-yellow-500 shrink-0" /> Safe against high wind pressure.</li>
                                <li className="flex gap-2"><Zap className="w-4 h-4 text-yellow-500 shrink-0" /> Adjustable height up to <strong>6 Feet</strong>.</li>
                                <li className="flex gap-2"><Zap className="w-4 h-4 text-yellow-500 shrink-0" /> Faster & Safer installation.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 ">
                        <div className="border border-zinc-200 rounded-xl p-6  bg-white shadow-sm">
                            <h5 className="font-bold text-lg mb-4 flex items-center gap-2 text-zinc-900">
                                <Factory className="w-5 h-5 text-yellow-500" />
                                प्री-फॅब फायदे
                            </h5>
                            <ul className="text-sm text-zinc-600 space-y-3 font-medium">
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> रेडीमेड इंस्टॉलेशन, MNRE मंजूर.</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> साईटवर <strong>कापणे किंवा वेल्डिंग नाही</strong>.</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> अतिरिक्त ड्रिलिंग नाही (छताचे रक्षण करते).</li>
                                <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" /> दीर्घकालीन गंज संरक्षण.</li>
                            </ul>
                        </div>

                        <div className="bg-zinc-900 text-white rounded-xl p-6 shadow-md print-color-adjust-exact">
                            <h5 className="font-bold text-lg mb-4 flex items-center gap-2 text-white">
                                <ShieldCheck className="w-5 h-5 text-yellow-500" />
                                कार्यक्षम उपाय
                            </h5>
                            <ul className="text-sm text-zinc-300 space-y-3 font-medium">
                                <li className="flex gap-2"><Zap className="w-4 h-4 text-yellow-500 shrink-0" /> सर्व <strong>लोड आणि स्ट्रेस चाचण्या</strong> उत्तीर्ण.</li>
                                <li className="flex gap-2"><Zap className="w-4 h-4 text-yellow-500 shrink-0" /> उच्च वाऱ्याच्या दाबापासून सुरक्षित.</li>
                                <li className="flex gap-2"><Zap className="w-4 h-4 text-yellow-500 shrink-0" /> <strong>6 फुटांपर्यंत</strong> उंची समायोजित करता येते.</li>
                                <li className="flex gap-2"><Zap className="w-4 h-4 text-yellow-500 shrink-0" /> जलद आणि सुरक्षित इंस्टॉलेशन.</li>
                            </ul>
                        </div>
                    </div>
                </div>





            </div>

            {/* --- PAGE 5: QUALITY ASSURANCE --- */}
            <div className="h-[297mm] relative flex flex-col p-12 page-break-after-always">
                <div className="flex justify-between items-center mb-1 border-b border-zinc-200 pb-4">
                    <span className="text-xl font-bold tracking-tight text-zinc-900">QUALITY ASSURANCE</span>
                    <span className="font-mono text-xs text-zinc-400">PAGE 05</span>
                </div>

                {/* Quality Assurance Plan */}
                <div className="mb-12 mt-6">
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-black rounded-full"></span> 05 / Quality Assurance Plan
                    </h4>
                    <div className="border border-zinc-200 rounded-xl overflow-hidden ring-1 ring-zinc-200">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-zinc-100 text-zinc-700 font-bold uppercase text-[10px] tracking-wider border-b border-zinc-200">
                                <tr>
                                    <th className="p-3 w-12 text-center border-r border-zinc-200">S/N</th>
                                    <th className="p-3 border-r border-zinc-200">Item Description</th>
                                    <th className="p-3 border-r border-zinc-200">Make & Model</th>
                                    <th className="p-3">Quality Checks</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-zinc-200 bg-zinc-50/50">
                                {[
                                    { sn: '1', item: 'Solar Panels', make: data.panelBrand, check: 'Mono Half-Cut Cell Solar Panel Technology' },
                                    { sn: '2', item: `${data.capacity} KW ${data.systemType} Solar Inverter`, make: data.inverterBrand, check: `${data.capacity} kw Inverter Dual MPPT Technology` },
                                    { sn: '3', item: 'Module Mounting Structure', make: 'Solar Mount', check: 'Galvanized Structure' },
                                    { sn: '4', item: 'Module Fixing Clamps', make: 'Nespro', check: 'Aluminium Anodized' },
                                    { sn: '5', item: 'DC & AC SPD', make: 'FEEO/Panasonic', check: 'Type - 2' },
                                    { sn: '6', item: 'Solar DC Cable', make: 'Polycab', check: 'XLPE, UV Protected' },
                                    { sn: '7', item: 'AC Cable', make: 'Polycab', check: 'FRLS, PVC Insulated' },
                                    { sn: '8', item: 'Earthway products', make: 'True Power', check: 'Maintenance Free Chemical Earthing' },
                                    { sn: '9', item: 'Lightning Arrestor', make: 'True Power', check: 'Solid Rod Copper Bonded Conventional Type' },
                                    { sn: '10', item: 'Fastener - Nut Bolts', make: 'APL', check: 'SS 304' },
                                ].map((row) => (
                                    <tr key={row.sn} className="hover:bg-zinc-50 transition-colors">
                                        <td className="p-2 text-center font-mono text-zinc-500 border-r border-zinc-200">{row.sn}</td>
                                        <td className="p-2 font-bold text-zinc-800 border-r border-zinc-200">{row.item}</td>
                                        <td className="p-2 text-zinc-700 border-r border-zinc-200 font-medium">{row.make}</td>
                                        <td className="p-2 text-zinc-600 italic">{row.check}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Specialization Badges */}
                <div className="mb-12">
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-black rounded-full"></span> 06 / We Are Specialized In
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                        {['Productive Quality', 'Compact Design', 'Customer Centric', 'Cost Effective', 'Long Term Care', '24/7 Support'].map((tag) => (
                            <div key={tag} className="border border-zinc-200 rounded-lg p-3 text-center bg-zinc-50">
                                <Award className="w-4 h-4 mx-auto mb-2 text-yellow-500" />
                                <span className="text-[10px] font-bold uppercase text-zinc-700">{tag}</span>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Partner Logos */}
                <div className="">
                    <p className="text-center text-[10px] font-mono uppercase text-zinc-400 mb-6 tracking-widest">Our Technology Partners</p>
                    <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 px-6">
                        <img src="/waree.png" alt="Waaree" className="h-10 w-auto object-contain" />
                        <img src="/tata-power.png" alt="Tata Power" className="h-10 w-auto object-contain" />
                        <img src="/growatt.png" alt="Growatt" className="h-10 w-auto object-contain" />
                        <img src="/polycab.png" alt="Polycab" className="h-10 w-auto object-contain" />
                        <img src="/L&T.png" alt="L&T" className="h-10 w-auto object-contain" />
                    </div>
                </div>
            </div>

            {/* --- PAGE 6: TERMS & CONTACT --- */}
            <div className="h-[297mm] relative flex flex-col p-12 page-break-after-always">
                <div className="flex justify-between items-center mb-8 border-b border-zinc-200 pb-4">
                    <span className="text-xl font-bold tracking-tight text-zinc-900">TERMS & CONTACT</span>
                    <span className="font-mono text-xs text-zinc-400">PAGE 06</span>
                </div>

                {/* Terms & Subsidy */}
                <div className="flex-1">
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-black rounded-full"></span> Terms & Conditions
                    </h4>
                    <div className="space-y-4 text-sm text-zinc-600 leading-relaxed font-mono mb-8">
                        <p>1. Prices quoted are valid for a period of 15 days from the date of proposal.</p>
                        <p>2. Payment Terms: <strong>50% Advance</strong>, <strong>30% Before Dispatch</strong>, <strong>20% After Installation</strong>.</p>
                        <p>3. Warranty: 25 Years Performance (Panels), 10 Years Manufacturer (Inverter).</p>
                        <p>4. Delivery: Project execution within 15-20 days of advance payment receipt.</p>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg print-color-adjust-exact">
                        <div className="flex items-center gap-2 mb-2">
                            <Award className="w-4 h-4 text-yellow-700" />
                            <h5 className="font-bold text-yellow-800 text-sm">MNRE Subsidy Note (PM-KUSUM)</h5>
                        </div>
                        <div className="flex justify-between text-sm text-yellow-900/80 font-mono">
                            <span>1-3 kW: ₹30k - ₹78k</span>
                            <span>&gt;3 kW: Fixed ₹78,000</span>
                        </div>
                    </div>
                </div>

                {/* Approval */}
                <div className="mt-6 mb-8 border-2 border-dashed border-zinc-300 rounded-xl p-6">
                    <p className="text-[10px] uppercase text-zinc-400 tracking-widest mb-6 text-center">Project Acceptance</p>
                    <div className="flex justify-between items-end gap-12">
                        <div className="w-full text-center">
                            <div className="border-b border-zinc-900 mb-2"></div>
                            <p className="text-xs font-bold">Client Signature</p>
                        </div>
                        <div className="w-full text-center">
                            <div className="border-b border-zinc-900 mb-2"></div>
                            <p className="text-xs font-bold">Parikh Renewable</p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                {/* Footer */}
                <div className="bg-zinc-950 text-white p-8 -mx-12 -mb-12 print-color-adjust-exact">
                    <div className="flex justify-between items-end">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold mb-1">PARIKH RENEWABLE</h2>
                            <p className="text-xs text-zinc-400 flex items-center gap-2 font-mono"><Mail className="w-3 h-3" /> support@parikhrenewable.com</p>
                            <p className="text-xs text-zinc-400 flex items-center gap-2 font-mono"><Phone className="w-3 h-3" /> +91 70833 66625</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-mono uppercase text-zinc-500 mb-1">Headquarters</p>
                            <p className="text-xs text-zinc-300 leading-relaxed">
                                Office No. 401, D Tower, Freedom Tower,<br />
                                Akashwani Chowk, Chhatrapati Sambhaji Nagar - 431005
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* In-Component Print Styles Fallback */}
            <style>{`
                @media print {
                    @page { size: A4; margin: 0; }
                    body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
                    .page-break-after-always { page-break-after: always; }
                }
            `}</style>
        </div>
    );
});

QuotationTemplate.displayName = 'QuotationTemplate';