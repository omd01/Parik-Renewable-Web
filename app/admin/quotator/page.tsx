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
        panelBrand: 'Waaree 540Wp Mono Perc',
        inverterBrand: 'Growatt / Solis',
        batteryBrand: '',
        pricePerWatt: '45',
        totalCost: '0',
        gst: 'Included',
        grandTotal: '0'
    });

    // Session Log for Excel Export
    const [sessionLog, setSessionLog] = useState<QuotationData[]>([]);

    const componentRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: `Quotation_${formData.clientName}_${formData.date}`,
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
                const total = cap * 1000 * price; // kW * 1000 * price/watt
                newData.totalCost = total.toLocaleString('en-IN');
                newData.grandTotal = total.toLocaleString('en-IN');
            }

            return newData;
        });
    };

    const addToSessionLog = () => {
        setSessionLog(prev => [...prev, formData]);
        alert('Quotation logged to session history!');
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
                    <div className="w-8 h-8 bg-[#193354] rounded-lg flex items-center justify-center text-white font-bold">P</div>
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
                        <select name="panelBrand" value={formData.panelBrand} onChange={handleInputChange} className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm">
                            <option>Waaree 540Wp Mono Perc</option>
                            <option>Tata Power Solar</option>
                            <option>Adani Solar</option>
                            <option>Canadian Solar</option>
                        </select>
                        <input name="inverterBrand" placeholder="Inverter Brand" value={formData.inverterBrand} onChange={handleInputChange} className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm" />
                        {formData.systemType !== 'On-Grid' && (
                            <input name="batteryBrand" placeholder="Battery Specs" value={formData.batteryBrand} onChange={handleInputChange} className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm" />
                        )}
                    </div>

                    {/* Section 4: Commercials */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-500 border-b border-zinc-100 pb-2">Commercials</h3>
                        <div className="relative">
                            <input name="pricePerWatt" type="number" placeholder="Price/Watt" value={formData.pricePerWatt} onChange={handleInputChange} className="w-full p-3 bg-zinc-50 border border-zinc-200 rounded-lg text-sm pl-8" />
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
            <div className="flex-1 bg-zinc-100 p-8 md:p-16 overflow-y-auto h-screen flex justify-center">
                <div className="scale-[0.6] md:scale-[0.8] origin-top shadow-2xl">
                    <div className="bg-white w-[210mm] min-h-[297mm] shadow-lg pointer-events-none">
                        <QuotationTemplate data={formData} className="block" />
                    </div>
                </div>
            </div>

            {/* HIDDEN PRINT COMPONENT */}
            <div style={{ display: 'none' }}>
                <QuotationTemplate ref={componentRef} data={formData} />
            </div>

        </div>
    );
}
