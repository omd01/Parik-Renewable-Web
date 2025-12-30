'use client';

import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import * as XLSX from 'xlsx';
import { QuotationTemplate, QuotationData } from './QuotationTemplate';
import { Lock, FileSpreadsheet, Printer } from 'lucide-react';

export default function QuotatorPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessCode, setAccessCode] = useState('');
    const [error, setError] = useState('');

    // Form State
    const [formData, setFormData] = useState<QuotationData>({
        clientName: '',
        clientAddress: '',
        clientPhone: '',
        date: new Date().toISOString().split('T')[0],
        propertyType: 'Residential',
        capacity: '5',
        systemType: 'On-Grid',
        panelBrand: 'Waaree',
        inverterBrand: 'Waaree',
        inverterNumber: '',
        batteryBrand: '',
        pricePerWatt: '45',
        bookingamount: '',
        totalCost: '0',
        gst: 'Included',
        grandTotal: '0',
        systemCost: '0',
        proposalBy: 'Aditya Suresh Parikh',
        panneloptions: 'Mono Half-Cut Cell',
        dcrOption: 'NONE'
    });

    // Session Log for Excel Export
    const [sessionLog, setSessionLog] = useState<QuotationData[]>([]);

    const componentRef = useRef<HTMLDivElement>(null);

    // FIX: Added pageStyle to remove default browser margins (White Gaps)
    const handlePrint = useReactToPrint({
        contentRef: componentRef,
        documentTitle: `Quotation_${formData.clientName}_${formData.date}`,
        pageStyle: `
            @page {
                size: A4;
                margin: 0mm;
            }
            @media print {
                body {
                    margin: 0;
                    padding: 0;
                    -webkit-print-color-adjust: exact;
                }
                html, body {
                    height: 100%;
                    width: 100%;
                }
            }
        `,
        onAfterPrint: () => {
            // Add to session log after successful print/save
            addToSessionLog();
        }
    });

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (accessCode === 'PARIKH2025') {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Invalid Access Code');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => {
            const newData = { ...prev, [name]: value };

            // Auto-calculate totals if price or capacity changes
            if (name === 'capacity' || name === 'pricePerWatt') {
                const cap = parseFloat(name === 'capacity' ? value : prev.capacity) || 0;
                const price = parseFloat(name === 'pricePerWatt' ? value : prev.pricePerWatt) || 0;
                const total = price;
                const gstamount = total * 0.089;
                const systemCost = total - gstamount;

                newData.systemCost = systemCost.toLocaleString('en-IN', { maximumFractionDigits: 2 });
                newData.totalCost = total.toLocaleString('en-IN', { maximumFractionDigits: 2 });
                newData.grandTotal = total.toLocaleString('en-IN', { maximumFractionDigits: 2 });
            }

            return newData;
        });
    };

    const addToSessionLog = () => {
        setSessionLog(prev => [...prev, formData]);
        // alert('Quotation logged to session history!'); // Optional: removed alert for smoother UX
    };

    const handleExportExcel = () => {
        if (sessionLog.length === 0) {
            alert('No quotations generated in this session yet.');
            return;
        }

        const ws = XLSX.utils.json_to_sheet(sessionLog);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Quotations");
        XLSX.writeFile(wb, `Parikh_Clients_${new Date().toISOString().split('T')[0]}.xlsx`);
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-4">
                <div className="bg-zinc-800 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-zinc-700">
                    <div className="flex justify-center mb-6">
                        <div className="p-4 bg-zinc-700 rounded-full">
                            <Lock className="w-8 h-8 text-[#F0B448]" />
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-white text-center mb-2">Parikh Admin</h1>
                    <p className="text-zinc-400 text-center mb-8">Enter access code to continue</p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            value={accessCode}
                            onChange={(e) => setAccessCode(e.target.value)}
                            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-600 rounded-xl text-white focus:border-[#F0B448] focus:ring-1 focus:ring-[#F0B448] outline-none transition"
                            placeholder="Access Code"
                        />
                        {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                        <button
                            type="submit"
                            className="w-full bg-[#F0B448] text-[#193354] font-bold py-3 rounded-xl hover:bg-white transition-colors"
                        >
                            Unlock Dashboard
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans flex flex-col md:flex-row">

            {/* LEFT: CONTROL PANEL */}
            <div className="w-full md:w-1/3 lg:w-1/4 bg-white border-r border-zinc-200 h-screen overflow-y-auto p-6 shadow-xl z-10">
                <div className="flex items-center gap-3 mb-8">
                    {/* <div className="w-8 h-8 bg-[#193354] rounded-lg flex items-center justify-center text-white font-bold">P</div> */}
                    <img src="/icon.png" alt="" className='w-8 h-8' />
                    <h1 className="font-bold text-lg text-[#193354]">Quotation Engine</h1>
                </div>

                <div className="space-y-8">
                    {/* Section 1: Client Details */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 border-b border-zinc-100 pb-2">Client Details</h3>
                        <input name="clientName" placeholder="Client Name" value={formData.clientName} onChange={handleInputChange} className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm" />
                        <input name="clientAddress" placeholder="Address" value={formData.clientAddress} onChange={handleInputChange} className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm" />
                        <input name="clientPhone" placeholder="Phone" value={formData.clientPhone} onChange={handleInputChange} className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm" />
                        <input name="date" type="date" value={formData.date} onChange={handleInputChange} className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm" />
                    </div>

                    {/* Section 1.5: Proposal Signatory */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 border-b border-zinc-100 pb-2">Proposal By</h3>
                        <select name="proposalBy" value={formData.proposalBy} onChange={handleInputChange} className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm">
                            <option value="Aditya Suresh Parikh">Aditya Suresh Parikh</option>
                            <option value="Chetan Parikh">Chetan Parikh</option>
                        </select>
                    </div>

                    {/* Section 2: Site Metrics */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 border-b border-zinc-100 pb-2">Site Metrics</h3>
                        <div className="grid grid-cols-2 gap-2">
                            <select name="propertyType" value={formData.propertyType} onChange={handleInputChange} className="p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm">
                                <option>Residential</option>
                                <option>Commercial</option>
                                <option>Industrial</option>
                                <option>Institutional</option>
                            </select>
                            <select name="systemType" value={formData.systemType} onChange={handleInputChange} className="p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm">
                                <option>On-Grid</option>
                                <option>Off-Grid</option>
                                <option>Hybrid</option>
                            </select>
                        </div>
                        <div className="relative">
                            <input name="capacity" type="number" placeholder="Capacity" value={formData.capacity} onChange={handleInputChange} className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm pl-12" />
                            <span className="absolute left-3 top-3 text-zinc-400 text-sm">kW</span>
                        </div>
                    </div>

                    {/* Section 3: Hardware */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 border-b border-zinc-100 pb-2">Hardware Specs</h3>
                        <div>
                            <label className="text-xs font-bold text-zinc-500 block mb-1 uppercase tracking-wider">Panel Brand</label>
                            <select name="panelBrand" value={formData.panelBrand} onChange={handleInputChange} className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm">
                                <option value="Waaree">Waaree</option>
                                <option value="Tata">Tata</option>
                                <option value="Luminous">Luminous</option>
                                <option value="Eastman">Eastman</option>
                                <option value="Adani">Adani</option>
                                <option value="Vikram">Vikram</option>
                                <option value="Renew Power">Renew Power</option>
                                <option value="Renewsys">Renewsys</option>
                                <option value="UTL">UTL</option>
                                <option value="Loom Solar">Loom Solar</option>
                                <option value="Goldie">Goldie</option>
                                <option value="Azure Power">Azure Power</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-bold text-zinc-500 block mb-1 uppercase tracking-wider">Solar Panel</label>
                            <select name="panneloptions" value={formData.panneloptions} onChange={handleInputChange} className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm">
                                <option value="Mono Half-Cut Cell">Mono Half-Cut Cell</option>
                                <option value="Bifacial Solar Modules">Bifacial Solar Modules </option>
                                <option value="Bifacial ToP Corn Solar Modules">Bifacial ToP Corn Solar Modules</option>

                            </select>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-zinc-500 block mb-1 uppercase tracking-wider">DCR Requirements</label>
                            <div className="flex gap-4 p-3 bg-zinc-50 border border-zinc-200 rounded-lg">
                                {['NONE', 'DCR', 'NON DCR'].map((option) => (
                                    <label key={option} className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="dcrOption"
                                            value={option}
                                            checked={formData.dcrOption === option}
                                            onChange={handleInputChange}
                                            className="accent-[#F0B448] w-4 h-4"
                                        />
                                        <span className="text-sm font-medium text-zinc-700">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-zinc-500 block mb-1 uppercase tracking-wider">Inverter Brand</label>
                            <select name="inverterBrand" value={formData.inverterBrand} onChange={handleInputChange} className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm">
                                <option value="Waaree">Waaree</option>
                                <option value="Luminous">Luminous</option>
                                <option value="UTL">UTL</option>
                                <option value="Selec">Selec</option>
                                <option value="Sungrow">Sungrow</option>
                                <option value="Eastman">Eastman</option>
                                <option value="Tata">Tata</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-xs font-bold text-zinc-500 block mb-1 uppercase tracking-wider">Inverter Number / Model</label>
                            <input name="inverterNumber" placeholder="Inverter Number / Model" value={formData.inverterNumber} onChange={handleInputChange} className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm mt-2" />
                        </div>
                        {formData.systemType !== 'On-Grid' && (
                            <input name="batteryBrand" placeholder="Battery Specs" value={formData.batteryBrand} onChange={handleInputChange} className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm" />
                        )}
                    </div>

                    {/* Section 4: Booking Amount */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 border-b border-zinc-100 pb-2">Booking Amount</h3>
                        <div className="relative">
                            <input name="bookingamount" type="number" placeholder="Booking Amount" value={formData.bookingamount} onChange={handleInputChange} className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm pl-8" />
                            <span className="absolute left-3 top-3 text-zinc-400 text-sm">₹</span>
                        </div>

                    </div>

                    {/* Section 4: Commercials */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 border-b border-zinc-100 pb-2">Commercials</h3>
                        <div className="relative">
                            <input name="pricePerWatt" type="number" placeholder="Overall Value" value={formData.pricePerWatt} onChange={handleInputChange} className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm pl-8" />
                            <span className="absolute left-3 top-3 text-zinc-400 text-sm">₹</span>
                        </div>
                        <div className="bg-[#193354] text-white p-4 rounded-xl">
                            <p className="text-xs opacity-70 mb-1">GRAND TOTAL</p>
                            <p className="text-2xl font-bold">₹ {formData.grandTotal}</p>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 space-y-3">
                        <button onClick={handlePrint} className="w-full bg-[#F0B448] text-[#193354] font-bold py-3 rounded-xl hover:bg-[#d9a03e] transition-colors flex items-center justify-center gap-2">
                            <Printer className="w-5 h-5" /> Generate PDF
                        </button>
                        <button onClick={handleExportExcel} className="w-full bg-zinc-100 text-zinc-700 font-bold py-3 rounded-xl hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                            <FileSpreadsheet className="w-5 h-5" /> Export Session Log
                        </button>
                    </div>
                </div>
            </div>

            {/* RIGHT: PREVIEW AREA */}
            <div className="flex-1 bg-zinc-200 p-8 overflow-y-auto h-screen flex justify-center items-start">
                <div className="scale-[0.5] md:scale-[0.7] lg:scale-[0.8] mb-[-891mm] md:mb-[-535mm] lg:mb-[-357mm] origin-top shadow-2xl transition-all">
                    {/* Render the template for preview */}
                    <QuotationTemplate data={formData} className="block shadow-lg" />
                </div>
            </div>

            {/* HIDDEN PRINT COMPONENT */}
            <div style={{ display: 'none' }}>
                <QuotationTemplate ref={componentRef} data={formData} />
            </div>

        </div>
    );
}