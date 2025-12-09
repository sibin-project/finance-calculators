"use strict";
"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function SIPCalculator() {
    const [monthlyInvestment, setMonthlyInvestment] = useState<number | "">("");
    const [returnRate, setReturnRate] = useState<number | "">("");
    const [years, setYears] = useState<number | "">("");
    const [result, setResult] = useState<{
        investedAmount: number;
        totalReturn: number;
        wealthGained: number;
    } | null>(null);

    useEffect(() => {
        calculateSIP();
    }, [monthlyInvestment, returnRate, years]);

    const calculateSIP = () => {
        const P = Number(monthlyInvestment); // Monthly Investment
        const R = Number(returnRate); // Annual Expected Return %
        const T = Number(years); // Years

        if (!P || !R || !T || P <= 0 || R <= 0 || T <= 0) {
            setResult(null);
            return;
        }

        // Formula: FV = P * [ (1+i)^n - 1 ] * (1+i) / i
        // where i = monthly rate, n = total months
        const i = R / 12 / 100;
        const n = T * 12;

        const fv = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
        const invested = P * n;
        const gained = fv - invested;

        setResult({
            investedAmount: invested,
            totalReturn: fv,
            wealthGained: gained,
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
                            SIP Calculator
                        </h1>
                        <p className="mt-2 text-lg text-secondary-text">
                            Systematic Investment Plan - Calculate future value of your monthly investments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Calculator Form */}
                        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                            <h2 className="text-xl font-semibold text-foreground mb-6">
                                Investment Details
                            </h2>

                            <div className="space-y-6">
                                {/* Monthly Investment */}
                                <div>
                                    <label
                                        htmlFor="monthlyInvestment"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Monthly Investment (₹)
                                    </label>
                                    <input
                                        type="number"
                                        id="monthlyInvestment"
                                        value={monthlyInvestment}
                                        onChange={(e) =>
                                            setMonthlyInvestment(e.target.value === "" ? "" : Number(e.target.value))
                                        }
                                        placeholder="Ex: 5000"
                                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                {/* Expected Return */}
                                <div>
                                    <label
                                        htmlFor="returnRate"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Expected Return Rate (% p.a)
                                    </label>
                                    <input
                                        type="number"
                                        id="returnRate"
                                        value={returnRate}
                                        onChange={(e) =>
                                            setReturnRate(e.target.value === "" ? "" : Number(e.target.value))
                                        }
                                        placeholder="Ex: 12"
                                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                {/* Years */}
                                <div>
                                    <label
                                        htmlFor="years"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Time Period (Years)
                                    </label>
                                    <input
                                        type="number"
                                        id="years"
                                        value={years}
                                        onChange={(e) =>
                                            setYears(e.target.value === "" ? "" : Number(e.target.value))
                                        }
                                        placeholder="Ex: 10"
                                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Results Section */}
                        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 h-full flex flex-col justify-center">
                            <h2 className="text-xl font-semibold text-foreground mb-6">
                                Projection
                            </h2>
                            {result ? (
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-border">
                                        <span className="text-secondary-text">Invested Amount</span>
                                        <span className="text-xl font-bold text-foreground">
                                            ₹{result.investedAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-border">
                                        <span className="text-secondary-text">Est. Returns</span>
                                        <span className="text-xl font-bold text-success">
                                            ₹{result.wealthGained.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                        </span>
                                    </div>

                                    <hr className="border-dashed border-gray-300 my-4" />

                                    <div className="flex justify-between items-center p-4 bg-primary text-white rounded-lg shadow-md">
                                        <span className="font-medium">Total Wealth</span>
                                        <span className="text-2xl font-bold">
                                            ₹{result.totalReturn.toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                                        </span>
                                    </div>
                                    <p className="text-xs text-secondary-text text-center mt-2">
                                        * Projections are based on assumed rate of return.
                                    </p>
                                </div>
                            ) : (
                                <div className="text-center text-secondary-text py-10">
                                    <span className="text-4xl block mb-2">📈</span>
                                    Enter details to calculate returns
                                </div>
                            )}
                        </div>
                    </div>



                    {/* Info/SEO Content */}
                    <div className="mt-8 bg-white p-8 rounded-xl border border-border shadow-sm">
                        <h3 className="text-2xl font-bold text-foreground mb-4">What is SIP?</h3>
                        <p className="text-secondary-text mb-4">
                            A Systematic Investment Plan (SIP) allows you to invest small amounts of money periodically (typically monthly) into mutual funds. It helps in rupee cost averaging and disciplined investing.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mt-6">
                            <div>
                                <h4 className="text-lg font-semibold text-primary mb-2">Power of Compounding</h4>
                                <p className="text-secondary-text mb-2">
                                    SIPs benefit significantly from compounding. The earlier you start and the longer you stay invested, the more wealth you can create.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-primary mb-2">Benefits</h4>
                                <ul className="list-disc list-inside text-secondary-text space-y-2">
                                    <li>Start with as low as ₹500.</li>
                                    <li>No need to time the market.</li>
                                    <li>Disciplined approach to financial goals.</li>
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
