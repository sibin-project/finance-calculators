"use strict";
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdUnit from "@/components/AdUnit";

function LoanCalculatorContent() {
    const searchParams = useSearchParams();
    const type = searchParams.get("type") || "default";

    const loanTypes: Record<string, { title: string; description: string; icon: string }> = {
        home: {
            title: "Home Loan Interest Calculator",
            description: "Calculate your monthly EMIs and total interest cost for your new home.",
            icon: "🏠"
        },
        personal: {
            title: "Personal Loan Interest Calculator",
            description: "Plan your personal expenses with precise EMI checks.",
            icon: "💰"
        },
        car: {
            title: "Car Loan Interest Calculator",
            description: "Find the best loan options for your dream car.",
            icon: "🚗"
        },
        default: {
            title: "Loan Interest Calculator",
            description: "Calculate EMIs for Home, Car, and Personal Loans.",
            icon: "🔢"
        }
    };

    const currentType = loanTypes[type] || loanTypes.default;

    const [amount, setAmount] = useState<number | "">("");
    const [interestRate, setInterestRate] = useState<number | "">("");
    const [tenure, setTenure] = useState<number | "">("");
    const [result, setResult] = useState<{
        emi: number;
        totalInterest: number;
        totalAmount: number;
    } | null>(null);

    useEffect(() => {
        calculateLoan();
    }, [amount, interestRate, tenure]);

    const calculateLoan = () => {
        const P = Number(amount);
        const R = Number(interestRate);
        const N = Number(tenure);

        if (!P || !R || !N || P <= 0 || R <= 0 || N <= 0) {
            setResult(null);
            return;
        }

        const monthlyRate = R / 12 / 100;
        const months = N * 12;

        const emiRaw = (P * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

        const totalAmountRaw = emiRaw * months;
        const totalInterestRaw = totalAmountRaw - P;

        setResult({
            emi: emiRaw,
            totalInterest: totalInterestRaw,
            totalAmount: totalAmountRaw,
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-background font-sans">
            <Navbar />

            <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-bold text-foreground sm:text-4xl flex items-center justify-center gap-3">
                            <span className="text-4xl">{currentType.icon}</span> {currentType.title}
                        </h1>
                        <p className="mt-2 text-lg text-secondary-text">
                            {currentType.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Calculator Form */}
                        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                            <h2 className="text-xl font-semibold text-foreground mb-6">
                                Loan Details
                            </h2>

                            <div className="space-y-6">
                                {/* Loan Amount */}
                                <div>
                                    <label
                                        htmlFor="amount"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Loan Amount (₹)
                                    </label>
                                    <input
                                        type="number"
                                        id="amount"
                                        value={amount}
                                        onChange={(e) =>
                                            setAmount(e.target.value === "" ? "" : Number(e.target.value))
                                        }
                                        placeholder="Enter loan amount"
                                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                {/* Interest Rate */}
                                <div>
                                    <label
                                        htmlFor="rate"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Interest Rate (% p.a)
                                    </label>
                                    <input
                                        type="number"
                                        id="rate"
                                        value={interestRate}
                                        onChange={(e) =>
                                            setInterestRate(e.target.value === "" ? "" : Number(e.target.value))
                                        }
                                        placeholder="Ex: 8.5"
                                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                {/* Tenure */}
                                <div>
                                    <label
                                        htmlFor="tenure"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Loan Tenure (Years)
                                    </label>
                                    <input
                                        type="number"
                                        id="tenure"
                                        value={tenure}
                                        onChange={(e) =>
                                            setTenure(e.target.value === "" ? "" : Number(e.target.value))
                                        }
                                        placeholder="Ex: 20"
                                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Results Section */}
                        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 h-full flex flex-col justify-center">
                            <h2 className="text-xl font-semibold text-foreground mb-6">
                                Repayment Details
                            </h2>
                            {result ? (
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-border">
                                        <span className="text-secondary-text">Monthly EMI</span>
                                        <span className="text-xl font-bold text-primary">
                                            ₹{result.emi.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-border">
                                        <span className="text-secondary-text">Principal Amount</span>
                                        <span className="text-xl font-bold text-foreground">
                                            ₹{Number(amount).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-border">
                                        <span className="text-secondary-text">Total Interest</span>
                                        <span className="text-xl font-bold text-accent">
                                            ₹{result.totalInterest.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                        </span>
                                    </div>

                                    <hr className="border-dashed border-gray-300 my-4" />

                                    <div className="flex justify-between items-center p-4 bg-primary text-white rounded-lg shadow-md">
                                        <span className="font-medium">Total Amount Payable</span>
                                        <span className="text-2xl font-bold">
                                            ₹{result.totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center text-secondary-text py-10">
                                    <span className="text-4xl block mb-2">🏠</span>
                                    Enter details to calculate EMI
                                </div>
                            )}
                        </div>
                    </div>


                    {/* Ad Space */}
                    <AdUnit />

                    {/* Info/SEO Content */}
                    <div className="mt-8 bg-white p-8 rounded-xl border border-border shadow-sm">
                        <h3 className="text-2xl font-bold text-foreground mb-4">Understanding Loans</h3>
                        <p className="text-secondary-text mb-4">
                            Whether it's for a home, car, or personal needs, understanding your EMI is crucial. This calculator helps you plan your repayment effectively.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mt-6">
                            <div>
                                <h4 className="text-lg font-semibold text-primary mb-2">EMI Formula</h4>
                                <p className="text-secondary-text mb-2">The standard formula for calculating EMI is:</p>
                                <code className="block bg-gray-50 p-3 rounded-lg text-sm text-gray-800">
                                    E = P x R x (1+R)^N / [(1+R)^N-1]
                                </code>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-primary mb-2">Smart Repayment Tips</h4>
                                <ul className="list-disc list-inside text-secondary-text space-y-2">
                                    <li>Choose a tenure that balances EMI affordability with total interest cost.</li>
                                    <li>Consider prepaying part of the loan when you have surplus funds.</li>
                                    <li>Check if your interest rate is fixed or floating.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default function LoanCalculator() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LoanCalculatorContent />
        </Suspense>
    );
}
