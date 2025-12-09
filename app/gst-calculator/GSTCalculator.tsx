"use strict";
"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function GSTCalculator() {
    const [amount, setAmount] = useState<number | "">("");
    const [gstRate, setGstRate] = useState<number>(18);
    const [customRate, setCustomRate] = useState<number | "">("");
    const [operation, setOperation] = useState<"add" | "remove">("add");
    const [result, setResult] = useState<{
        netAmount: number;
        gstAmount: number;
        totalAmount: number;
    } | null>(null);

    useEffect(() => {
        calculateGST();
    }, [amount, gstRate, customRate, operation]);

    const calculateGST = () => {
        const principal = Number(amount);
        const rate = customRate !== "" ? Number(customRate) : gstRate;

        if (!principal || isNaN(principal) || principal < 0) {
            setResult(null);
            return;
        }

        let gstAmt = 0;
        let totalAmt = 0;
        let netAmt = principal;

        if (operation === "add") {
            gstAmt = (principal * rate) / 100;
            totalAmt = principal + gstAmt;
        } else {
            // Remove GST: Total = Principal + GST
            // Principal = Total / (1 + rate/100)
            totalAmt = principal;
            netAmt = principal / (1 + rate / 100);
            gstAmt = totalAmt - netAmt;
        }

        setResult({
            netAmount: netAmt,
            gstAmount: gstAmt,
            totalAmount: totalAmt,
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
                            GST Calculator
                        </h1>
                        <p className="mt-2 text-lg text-secondary-text">
                            Easily calculate GST inclusive and exclusive amounts.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Calculator Form */}
                        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                            <h2 className="text-xl font-semibold text-foreground mb-6">
                                Calculate GST
                            </h2>

                            <div className="space-y-6">
                                {/* Amount Input */}
                                <div>
                                    <label
                                        htmlFor="amount"
                                        className="block text-sm font-medium text-foreground mb-2"
                                    >
                                        Amount (₹)
                                    </label>
                                    <input
                                        type="number"
                                        id="amount"
                                        value={amount}
                                        onChange={(e) =>
                                            setAmount(e.target.value === "" ? "" : Number(e.target.value))
                                        }
                                        placeholder="Enter amount"
                                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    />
                                </div>

                                {/* GST Rate Selection */}
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        GST Rate (%)
                                    </label>
                                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
                                        {[5, 12, 18, 28].map((rate) => (
                                            <button
                                                key={rate}
                                                onClick={() => {
                                                    setGstRate(rate);
                                                    setCustomRate("");
                                                }}
                                                className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${gstRate === rate && customRate === ""
                                                    ? "bg-primary text-white border-primary"
                                                    : "bg-background text-foreground border-border hover:border-accent"
                                                    }`}
                                            >
                                                {rate}%
                                            </button>
                                        ))}
                                        <input
                                            type="number"
                                            placeholder="Custom"
                                            value={customRate}
                                            onChange={(e) => {
                                                setCustomRate(e.target.value === "" ? "" : Number(e.target.value));
                                                if (e.target.value !== "") setGstRate(0);
                                            }}
                                            className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors w-full text-center outline-none ${customRate !== ""
                                                ? "border-primary ring-1 ring-primary"
                                                : "border-border bg-background"
                                                }`}
                                        />
                                    </div>
                                </div>

                                {/* Operation Selection */}
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        Calculation Type
                                    </label>
                                    <div className="flex gap-4">
                                        <button
                                            onClick={() => setOperation("add")}
                                            className={`flex-1 py-2 px-4 rounded-lg border font-medium transition-all ${operation === "add"
                                                ? "bg-primary text-white border-primary"
                                                : "bg-background text-foreground border-border hover:bg-gray-50"
                                                }`}
                                        >
                                            Add GST (Exclusive)
                                        </button>
                                        <button
                                            onClick={() => setOperation("remove")}
                                            className={`flex-1 py-2 px-4 rounded-lg border font-medium transition-all ${operation === "remove"
                                                ? "bg-primary text-white border-primary"
                                                : "bg-background text-foreground border-border hover:bg-gray-50"
                                                }`}
                                        >
                                            Remove GST (Inclusive)
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Results Section */}
                        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 h-full flex flex-col justify-center">
                            <h2 className="text-xl font-semibold text-foreground mb-6">
                                Result
                            </h2>
                            {result ? (
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-border">
                                        <span className="text-secondary-text">Net Amount</span>
                                        <span className="text-xl font-bold text-foreground">
                                            ₹{result.netAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm border border-border">
                                        <span className="text-secondary-text">GST Amount ({customRate || gstRate}%)</span>
                                        <span className="text-xl font-bold text-accent">
                                            ₹{result.gstAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                                        </span>
                                    </div>

                                    <hr className="border-dashed border-gray-300 my-4" />

                                    <div className="flex justify-between items-center p-4 bg-primary text-white rounded-lg shadow-md">
                                        <span className="font-medium">Total Amount</span>
                                        <span className="text-2xl font-bold">
                                            ₹{result.totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center text-secondary-text py-10">
                                    <span className="text-4xl block mb-2">👋</span>
                                    Enter amount and rate to see results
                                </div>
                            )}
                        </div>
                    </div>




                    {/* Info/SEO Content */}
                    <div className="mt-8 bg-white p-8 rounded-xl border border-border shadow-sm">
                        <h3 className="text-2xl font-bold text-foreground mb-4">How to calculate GST?</h3>
                        <p className="text-secondary-text mb-4">
                            GST (Goods and Services Tax) can be calculated using two simple formulas depending on whether you want to add GST to a net price or remove GST from a total price.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mt-6">
                            <div>
                                <h4 className="text-lg font-semibold text-primary mb-2">Add GST Formula</h4>
                                <p className="text-secondary-text mb-2">Used when price excludes GST.</p>
                                <code className="block bg-gray-50 p-3 rounded-lg text-sm text-gray-800">
                                    GST Amount = (Price × GST%) / 100 <br />
                                    Total = Price + GST Amount
                                </code>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold text-primary mb-2">Remove GST Formula</h4>
                                <p className="text-secondary-text mb-2">Used when price includes GST.</p>
                                <code className="block bg-gray-50 p-3 rounded-lg text-sm text-gray-800">
                                    Original Price = Total / (1 + GST%/100) <br />
                                    GST Amount = Total - Original Price
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
