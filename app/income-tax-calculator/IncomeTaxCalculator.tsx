"use strict";
"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function IncomeTaxCalculator() {
    // Income State
    const [grossIncome, setGrossIncome] = useState<number | "">("");
    const [otherIncome, setOtherIncome] = useState<number | "">("");

    // Deductions State
    const [basicDeduction80C, setBasicDeduction80C] = useState<number | "">(""); // Max 1.5L
    const [mediClaim80D, setMediClaim80D] = useState<number | "">("");
    const [hraExemption, setHraExemption] = useState<number | "">("");
    const [nps80CCD, setNps80CCD] = useState<number | "">(""); // Max 50k

    const [result, setResult] = useState<{
        oldRegime: { tax: number; cess: number; total: number };
        newRegime: { tax: number; cess: number; total: number };
        recommendation: "Old Regime" | "New Regime" | "Both are equal";
        savings: number;
    } | null>(null);

    useEffect(() => {
        calculateTax();
    }, [grossIncome, otherIncome, basicDeduction80C, mediClaim80D, hraExemption, nps80CCD]);

    const calculateTax = () => {
        const income = Number(grossIncome) + Number(otherIncome);
        if (!income || income <= 0) {
            setResult(null);
            return;
        }

        // --- OLD REGIME ---
        // Deductions: 50k Std + 80C + 80D + HRA + NPS
        const totalDeductions = 50000 + Math.min(Number(basicDeduction80C), 150000) + Number(mediClaim80D) + Number(hraExemption) + Math.min(Number(nps80CCD), 50000);
        let taxableOldIncome = income - totalDeductions;
        if (taxableOldIncome < 0) taxableOldIncome = 0;

        let taxOld = 0;
        if (taxableOldIncome > 250000) {
            taxOld += Math.min(taxableOldIncome - 250000, 250000) * 0.05;
        }
        if (taxableOldIncome > 500000) {
            taxOld += Math.min(taxableOldIncome - 500000, 500000) * 0.20;
        }
        if (taxableOldIncome > 1000000) {
            taxOld += (taxableOldIncome - 1000000) * 0.30;
        }

        // Rebate 87A Old Regime
        if (taxableOldIncome <= 500000) taxOld = 0;

        taxOld += taxOld * 0.04;
        const totalOld = Math.round(taxOld);

        // --- NEW REGIME ---
        // Deductions: Only 75k Std
        let taxableNewIncome = income - 75000;
        if (taxableNewIncome < 0) taxableNewIncome = 0;

        let taxNew = 0;
        if (taxableNewIncome > 300000) {
            taxNew += Math.min(taxableNewIncome - 300000, 400000) * 0.05;
        }
        if (taxableNewIncome > 700000) {
            taxNew += Math.min(taxableNewIncome - 700000, 300000) * 0.10;
        }
        if (taxableNewIncome > 1000000) {
            taxNew += Math.min(taxableNewIncome - 1000000, 200000) * 0.15;
        }
        if (taxableNewIncome > 1200000) {
            taxNew += Math.min(taxableNewIncome - 1200000, 300000) * 0.20;
        }
        if (taxableNewIncome > 1500000) {
            taxNew += (taxableNewIncome - 1500000) * 0.30;
        }

        // Rebate 87A New Regime
        // Note: New regime rebate is generally up to 7L, making tax 0.
        // The prompt formula has slabs 0-3, 3-7. If income is 7L:
        // 0-3: 0
        // 3-7: 4L*5% = 20000.
        // Rebate u/s 87A makes it 0.
        if (taxableNewIncome <= 700000) taxNew = 0;

        taxNew += taxNew * 0.04;
        const totalNew = Math.round(taxNew);

        // --- COMPARISON ---
        let rec: "Old Regime" | "New Regime" | "Both are equal" = "Both are equal";
        let save = 0;

        if (totalOld < totalNew) {
            rec = "Old Regime";
            save = totalNew - totalOld;
        } else if (totalNew < totalOld) {
            rec = "New Regime";
            save = totalOld - totalNew;
        }

        setResult({
            oldRegime: { tax: totalOld, cess: 0, total: totalOld },
            newRegime: { tax: totalNew, cess: 0, total: totalNew },
            recommendation: rec,
            savings: save
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-background font-sans">
            <Navbar />

            <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
                            Income Tax Calculator (India)
                        </h1>
                        <p className="mt-2 text-lg text-secondary-text">
                            Compare Old vs New Regime for FY 2024-25 / AY 2025-26
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Input Form */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                                <h2 className="text-xl font-semibold text-foreground mb-6">
                                    Income Source
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Annual Gross Income (₹)</label>
                                        <input
                                            type="number"
                                            value={grossIncome}
                                            onChange={(e) => setGrossIncome(Number(e.target.value))}
                                            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                                            placeholder="e.g. 1500000"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Other Income (₹)</label>
                                        <input
                                            type="number"
                                            value={otherIncome}
                                            onChange={(e) => setOtherIncome(Number(e.target.value))}
                                            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                                            placeholder="Interest, Rental, etc."
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                                <h2 className="text-xl font-semibold text-foreground mb-4">
                                    Deductions (Old Regime)
                                </h2>
                                <p className="text-xs text-secondary-text mb-6">Only applicable for Old Tax Regime comparison.</p>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Section 80C (Max 1.5L)</label>
                                        <input
                                            type="number"
                                            value={basicDeduction80C}
                                            onChange={(e) => setBasicDeduction80C(Number(e.target.value))}
                                            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                                            placeholder="PPF, ELSS, LIC, EPF"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Section 80D (Medical)</label>
                                        <input
                                            type="number"
                                            value={mediClaim80D}
                                            onChange={(e) => setMediClaim80D(Number(e.target.value))}
                                            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                                            placeholder="Health Insurance Premium"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">HRA Exemption</label>
                                        <input
                                            type="number"
                                            value={hraExemption}
                                            onChange={(e) => setHraExemption(Number(e.target.value))}
                                            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                                            placeholder="Calculated HRA exempt amount"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">NPS (80CCD(1B))</label>
                                        <input
                                            type="number"
                                            value={nps80CCD}
                                            onChange={(e) => setNps80CCD(Number(e.target.value))}
                                            className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground"
                                            placeholder="Additional 50k"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Results Display */}
                        <div className="lg:col-span-7">
                            {result ? (
                                <div className="space-y-6 sticky top-24">
                                    {/* Recommendation Card */}
                                    <div className={`p-6 rounded-xl border-2 text-center ${result.recommendation === "New Regime" ? "bg-green-50/50 border-green-200" :
                                        result.recommendation === "Old Regime" ? "bg-blue-50/50 border-blue-200" : "bg-gray-50 border-gray-200"
                                        }`}>
                                        <h3 className="text-lg font-medium text-secondary-text uppercase tracking-wide">Recommendation</h3>
                                        <p className="text-3xl font-bold mt-2 text-foreground">
                                            Switch to {result.recommendation}
                                        </p>
                                        {result.savings > 0 && (
                                            <p className="text-success font-semibold mt-2">
                                                You save ₹{result.savings.toLocaleString('en-IN')}
                                            </p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Old Regime Card */}
                                        <div className="bg-card border border-border p-6 rounded-xl relative overflow-hidden">
                                            {result.recommendation === "Old Regime" && <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-3 py-1 rounded-bl-lg">Winner</div>}
                                            <h3 className="text-lg font-semibold text-foreground mb-4">Old Regime</h3>
                                            <div className="space-y-3 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-secondary-text">Standard Ded.</span>
                                                    <span>₹50,000</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-secondary-text">Deductions Claimed</span>
                                                    <span>₹{(50000 + Math.min(Number(basicDeduction80C), 150000) + Number(mediClaim80D) + Number(hraExemption) + Math.min(Number(nps80CCD), 50000)).toLocaleString('en-IN')}</span>
                                                </div>
                                                <div className="border-t border-dashed my-2"></div>
                                                <div className="flex justify-between font-semibold text-lg">
                                                    <span>Total Tax</span>
                                                    <span>₹{result.oldRegime.total.toLocaleString('en-IN')}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* New Regime Card */}
                                        <div className="bg-card border border-border p-6 rounded-xl relative overflow-hidden">
                                            {result.recommendation === "New Regime" && <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-3 py-1 rounded-bl-lg">Winner</div>}
                                            <h3 className="text-lg font-semibold text-foreground mb-4">New Regime</h3>
                                            <div className="space-y-3 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-secondary-text">Standard Ded.</span>
                                                    <span>₹75,000</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-secondary-text">Deductions</span>
                                                    <span>₹0 (Not Applicable)</span>
                                                </div>
                                                <div className="border-t border-dashed my-2"></div>
                                                <div className="flex justify-between font-semibold text-lg">
                                                    <span>Total Tax</span>
                                                    <span>₹{result.newRegime.total.toLocaleString('en-IN')}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center p-12 bg-gray-50/50 rounded-xl border border-dashed border-gray-300">
                                    <span className="text-6xl mb-4">🏛️</span>
                                    <h3 className="text-xl font-bold text-foreground">Ready to Calculate</h3>
                                    <p className="text-secondary-text text-center max-w-sm mt-2">
                                        Enter your gross income and details to see a tax comparison.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>




                    {/* SEO Content Section */}
                    <div className="mt-8">
                        <div className="prose prose-blue max-w-none">
                            <h2 className="text-2xl font-bold mb-4">Income Tax Calculator 2025: Choosing the Right Regime</h2>
                            <p className="text-secondary-text mb-4">
                                The tax landscape in India has changed significantly with improvements to the New Tax Regime in Budget 2024-25. Deciding between the Old and New regime depends entirely on the deductions you can claim.
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mt-6">
                                <div>
                                    <h3 className="text-lg font-bold mb-2">New Regime Benefits</h3>
                                    <ul className="list-disc list-inside text-secondary-text space-y-1">
                                        <li>Lower tax rates for income up to ₹15 Lakhs.</li>
                                        <li>Standard Deduction increased to ₹75,000.</li>
                                        <li>Simpler process: No need to submit investment proofs.</li>
                                        <li>Tax-free income up to ₹7.75 Lakhs (Income ₹7L + Std Ded).</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2">Old Regime Benefits</h3>
                                    <ul className="list-disc list-inside text-secondary-text space-y-1">
                                        <li>Beneficial if you have high HRA, Loan Interest, or 80C investments.</li>
                                        <li>Allows carry forward of losses in some cases.</li>
                                        <li>Section 80C (1.5L) + 80D (Mediclsim) + 80CCD (NPS) + HRA.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
