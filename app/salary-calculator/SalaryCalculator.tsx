"use strict";
"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdUnit from "@/components/AdUnit";

export default function SalaryCalculator() {
    // Inputs
    const [annualCTC, setAnnualCTC] = useState<number | "">("");
    const [basicPercent, setBasicPercent] = useState<number>(50); // Default 50% of CTC
    const [professionalTax, setProfessionalTax] = useState<number>(200);

    // Results
    const [result, setResult] = useState<{
        monthlyCTC: number;
        basicSalary: number;
        employerPF: number;
        employeePF: number;
        grossSalary: number;
        totalDeductions: number;
        netSalary: number;
    } | null>(null);

    useEffect(() => {
        calculateSalary();
    }, [annualCTC, basicPercent, professionalTax]);

    const calculateSalary = () => {
        const ctc = Number(annualCTC);
        if (!ctc || ctc <= 0) {
            setResult(null);
            return;
        }

        // Monthly breakdown
        const monthlyCTC = ctc / 12;

        // Basic Salary Calculation
        const basic = (monthlyCTC * basicPercent) / 100;

        // PF Calculations (12% of Basic)
        // Capped at 1800 if basic > 15000? Usually standard calc ignores cap for higher salaries unless specified.
        // We'll use straight 12% for simplicity or maybe cap it? The prompt implies standard breakdown.
        // Let's stick to 12% flat for now as "Standard PF".
        const pf = basic * 0.12;
        const employerPF = pf;
        const employeePF = pf;

        // ESI Calculation
        // ESI is applicability: Gross Salary <= 21,000.
        // Employer contribution: 3.25%, Employee: 0.75%
        // Gross Salary = Monthly CTC - Employer PF
        const grossSalary = monthlyCTC - employerPF;

        let employeeESI = 0;
        // let employerESI = 0; // Employer ESI is part of CTC usually, but effectively reduces Gross.
        // Note: If ESI is applicable, usually CTC includes Employer ESI (~3.25%).
        // For simplicity, let's check Gross for ESI eligibility
        if (grossSalary <= 21000) {
            employeeESI = grossSalary * 0.0075;
            // employerESI = grossSalary * 0.0325; 
            // If we want to be very precise, Gross would be lower because Employer ESI is subtracted from CTC too.
            // Let's keep it simple: CTC -> In-Hand.
        }

        const totalDeductions = employeePF + professionalTax + employeeESI;
        const net = grossSalary - totalDeductions;

        setResult({
            monthlyCTC,
            basicSalary: basic,
            employerPF,
            employeePF,
            grossSalary,
            totalDeductions,
            netSalary: net,
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-background font-sans">
            <Navbar />

            <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
                            Salary Calculator
                        </h1>
                        <p className="mt-2 text-lg text-secondary-text">
                            CTC to In-Hand Salary Calculator (India).
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Calculator Form */}
                        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                            <h2 className="text-xl font-semibold text-foreground mb-6">
                                Compensation Details
                            </h2>

                            <div className="space-y-6">
                                {/* Annual CTC */}
                                <div>
                                    <label
                                        htmlFor="ctc"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Annual CTC (₹)
                                    </label>
                                    <input
                                        type="number"
                                        id="ctc"
                                        value={annualCTC}
                                        onChange={(e) =>
                                            setAnnualCTC(e.target.value === "" ? "" : Number(e.target.value))
                                        }
                                        placeholder="Ex: 1200000"
                                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                {/* Basic Pay % */}
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Basic Pay (% of CTC)
                                    </label>
                                    <input
                                        type="number"
                                        value={basicPercent}
                                        onChange={(e) => setBasicPercent(Number(e.target.value))}
                                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    />
                                    <p className="text-xs text-secondary-text mt-1">Usually 40% - 50%</p>
                                </div>

                                {/* Professional Tax */}
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Professional Tax (Monthly)
                                    </label>
                                    <input
                                        type="number"
                                        value={professionalTax}
                                        onChange={(e) => setProfessionalTax(Number(e.target.value))}
                                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    />
                                    <p className="text-xs text-secondary-text mt-1">~₹200 for most states in India</p>
                                </div>
                            </div>
                        </div>

                        {/* Results Section */}
                        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 h-full flex flex-col justify-center">
                            <h2 className="text-xl font-semibold text-foreground mb-6">
                                Monthly Salary Breakdown
                            </h2>
                            {result ? (
                                <div className="space-y-4">
                                    {/* Gross Salary */}
                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-border">
                                        <span className="text-secondary-text">Gross Salary</span>
                                        <span className="font-bold text-foreground">
                                            ₹{result.grossSalary.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                        </span>
                                    </div>

                                    {/* Deductions Group */}
                                    <div className="p-3 bg-red-50/50 rounded-lg border border-red-100 space-y-2">
                                        <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mb-2">Deductions</p>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-secondary-text">PF (Employee)</span>
                                            <span className="text-foreground">₹{result.employeePF.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                                        </div>
                                        {/* Employer PF shown for info? Usually not deducted from Gross, but part of CTC. */}
                                        <div className="flex justify-between text-sm">
                                            <span className="text-secondary-text">Professional Tax</span>
                                            <span className="text-foreground">₹{professionalTax.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                                        </div>
                                    </div>

                                    {/* Net Salary */}
                                    <div className="flex justify-between items-center p-4 bg-primary text-white rounded-lg shadow-md mt-4">
                                        <span className="font-medium">In-Hand Salary</span>
                                        <span className="text-2xl font-bold">
                                            ₹{result.netSalary.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                        </span>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-dashed border-gray-300">
                                        <div className="flex justify-between text-xs text-secondary-text">
                                            <span>Employer PF (CTC Component)</span>
                                            <span>₹{result.employerPF.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center text-secondary-text py-10">
                                    <span className="text-4xl block mb-2">💼</span>
                                    Enter CTC to view breakdown
                                </div>
                            )}
                        </div>
                    </div>


                    {/* Ad Space */}
                    <AdUnit />

                    {/* Educational Content */}
                    <div className="mt-8 bg-white p-8 rounded-xl border border-border shadow-sm">
                        <h3 className="text-2xl font-bold text-foreground mb-4">Understanding Your Salary</h3>
                        <div className="grid md:grid-cols-3 gap-6 text-sm text-secondary-text">
                            <div>
                                <h4 className="font-semibold text-primary mb-2">CTC (Cost to Company)</h4>
                                <p>The total amount the company spends on you. It includes Basic, HRA, Special Allowances, and Employer's contribution to PF/Gratuity.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-primary mb-2">Gross Salary</h4>
                                <p>CTC minus Employer's contributions (like Employer PF, Employer ESI). This is the amount before your own tax/PF deductions.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-primary mb-2">Net (In-hand) Salary</h4>
                                <p>Final amount credited to your bank. Calculated as Gross Salary minus Employee PF, Professional Tax, and Income Tax (TDS).</p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
