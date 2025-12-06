"use strict";
"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdUnit from "@/components/AdUnit";

export default function ProfitCalculator() {
    const [costPrice, setCostPrice] = useState<number | "">("");
    const [sellingPrice, setSellingPrice] = useState<number | "">("");
    const [quantity, setQuantity] = useState<number>(1);

    const [result, setResult] = useState<{
        status: "Profit" | "Loss" | "No Profit No Loss";
        amount: number; // Absolute amount
        percentage: number;
        totalCost: number;
        totalRevenue: number;
    } | null>(null);

    useEffect(() => {
        calculateProfitLoss();
    }, [costPrice, sellingPrice, quantity]);

    const calculateProfitLoss = () => {
        const cpUnit = Number(costPrice);
        const spUnit = Number(sellingPrice);
        const qty = Number(quantity) || 1;

        if (!cpUnit || !spUnit || cpUnit <= 0 || spUnit <= 0) {
            setResult(null);
            return;
        }

        const totalCP = cpUnit * qty;
        const totalSP = spUnit * qty;

        let status: "Profit" | "Loss" | "No Profit No Loss" = "No Profit No Loss";
        let amount = 0;
        let percentage = 0;

        if (totalSP > totalCP) {
            status = "Profit";
            amount = totalSP - totalCP;
            percentage = (amount / totalCP) * 100;
        } else if (totalCP > totalSP) {
            status = "Loss";
            amount = totalCP - totalSP;
            percentage = (amount / totalCP) * 100;
        } else {
            status = "No Profit No Loss";
            amount = 0;
            percentage = 0;
        }

        setResult({
            status,
            amount,
            percentage,
            totalCost: totalCP,
            totalRevenue: totalSP
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
                            Profit & Loss Calculator
                        </h1>
                        <p className="mt-2 text-lg text-secondary-text">
                            Calculate Profit or Loss margin on your sales.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Calculator Form */}
                        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                            <h2 className="text-xl font-semibold text-foreground mb-6">
                                Product Details
                            </h2>

                            <div className="space-y-6">
                                {/* Cost Price */}
                                <div>
                                    <label
                                        htmlFor="costPrice"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Cost Price (Per Unit)
                                    </label>
                                    <input
                                        type="number"
                                        id="costPrice"
                                        value={costPrice}
                                        onChange={(e) =>
                                            setCostPrice(e.target.value === "" ? "" : Number(e.target.value))
                                        }
                                        placeholder="Ex: 500"
                                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                {/* Selling Price */}
                                <div>
                                    <label
                                        htmlFor="sellingPrice"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Selling Price (Per Unit)
                                    </label>
                                    <input
                                        type="number"
                                        id="sellingPrice"
                                        value={sellingPrice}
                                        onChange={(e) =>
                                            setSellingPrice(e.target.value === "" ? "" : Number(e.target.value))
                                        }
                                        placeholder="Ex: 650"
                                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                {/* Quantity */}
                                <div>
                                    <label
                                        htmlFor="quantity"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Quantity
                                    </label>
                                    <input
                                        type="number"
                                        id="quantity"
                                        value={quantity}
                                        onChange={(e) =>
                                            setQuantity(Number(e.target.value))
                                        }
                                        placeholder="Ex: 100"
                                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Results Section */}
                        <div className={`border rounded-xl p-6 h-full flex flex-col justify-center transition-colors duration-300 ${result?.status === "Profit" ? "bg-green-50 border-green-200" :
                            result?.status === "Loss" ? "bg-red-50 border-red-200" :
                                "bg-gray-50 border-border"
                            }`}>
                            <h2 className="text-xl font-semibold text-foreground mb-6">
                                Analysis
                            </h2>
                            {result ? (
                                <div className="space-y-6">
                                    <div className="text-center">
                                        <span className={`text-sm font-bold uppercase tracking-wide px-3 py-1 rounded-full ${result.status === "Profit" ? "bg-green-200 text-green-800" :
                                            result.status === "Loss" ? "bg-red-200 text-red-800" :
                                                "bg-gray-200 text-gray-800"
                                            }`}>
                                            {result.status}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-border">
                                        <span className="text-secondary-text">
                                            {result.status === "Loss" ? "Net Loss" : "Net Profit"}
                                        </span>
                                        <span className={`text-2xl font-bold ${result.status === "Profit" ? "text-green-600" :
                                            result.status === "Loss" ? "text-red-600" : "text-gray-600"
                                            }`}>
                                            ₹{result.amount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-border">
                                        <span className="text-secondary-text">Percentage</span>
                                        <span className="text-xl font-bold text-foreground">
                                            {result.percentage.toFixed(2)}%
                                        </span>
                                    </div>

                                    <hr className="border-dashed border-gray-300 my-4" />

                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-secondary-text">Total Cost</p>
                                            <p className="font-semibold">₹{result.totalCost.toLocaleString('en-IN')}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-secondary-text">Total Revenue</p>
                                            <p className="font-semibold">₹{result.totalRevenue.toLocaleString('en-IN')}</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center text-secondary-text py-10">
                                    <span className="text-4xl block mb-2">📊</span>
                                    Enter price details to calculate
                                </div>
                            )}
                        </div>
                    </div>


                    {/* Ad Space */}
                    <AdUnit />

                    {/* Info/SEO Content */}
                    <div className="mt-8 bg-white p-8 rounded-xl border border-border shadow-sm">
                        <h3 className="text-2xl font-bold text-foreground mb-4">How to Calculate Profit & Loss?</h3>
                        <p className="text-secondary-text mb-4">
                            Profit and Loss calculations are fundamental to any business. Understand the health of your sales with these simple formulas.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mt-6">
                            <div>
                                <h4 className="text-lg font-semibold text-primary mb-2">Formulas</h4>
                                <ul className="text-sm text-secondary-text space-y-3">
                                    <li className="bg-gray-50 p-2 rounded"><strong>Profit</strong> = Selling Price - Cost Price</li>
                                    <li className="bg-gray-50 p-2 rounded"><strong>Loss</strong> = Cost Price - Selling Price</li>
                                    <li className="bg-gray-50 p-2 rounded"><strong>Profit %</strong> = (Profit / Cost Price) × 100</li>
                                    <li className="bg-gray-50 p-2 rounded"><strong>Loss %</strong> = (Loss / Cost Price) × 100</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-primary mb-2">Key Terms</h4>
                                <ul className="list-disc list-inside text-secondary-text space-y-2">
                                    <li><strong>Cost Price (CP):</strong> The price at which goods are purchased.</li>
                                    <li><strong>Selling Price (SP):</strong> The price at which goods are sold.</li>
                                    <li><strong>Margin:</strong> The difference between SP and CP.</li>
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
