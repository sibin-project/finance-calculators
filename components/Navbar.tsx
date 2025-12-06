"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-card border-b border-border sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <span className="text-2xl font-bold text-primary">SmartMoney<span className="text-accent"> Calc</span></span>
                        </Link>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
                        <Link href="/gst-calculator" className="text-foreground hover:text-primary px-2 py-2 rounded-md text-sm font-medium transition-colors">
                            GST
                        </Link>
                        <Link href="/loan-interest" className="text-foreground hover:text-primary px-2 py-2 rounded-md text-sm font-medium transition-colors">
                            Loans
                        </Link>
                        <Link href="/sip-calculator" className="text-foreground hover:text-primary px-2 py-2 rounded-md text-sm font-medium transition-colors">
                            SIP
                        </Link>
                        <Link href="/salary-calculator" className="text-foreground hover:text-primary px-2 py-2 rounded-md text-sm font-medium transition-colors">
                            Salary
                        </Link>
                        <Link href="/income-tax-calculator" className="text-foreground hover:text-primary px-2 py-2 rounded-md text-sm font-medium transition-colors">
                            Income Tax
                        </Link>
                        <Link href="/profit-calculator" className="text-foreground hover:text-primary px-2 py-2 rounded-md text-sm font-medium transition-colors">
                            Profit
                        </Link>
                        <Link href="/#faq" className="text-foreground hover:text-primary px-2 py-2 rounded-md text-sm font-medium transition-colors">
                            FAQ
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-secondary-text hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed */}
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                /* Icon when menu is open */
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="sm:hidden border-t border-border" id="mobile-menu">
                    <div className="pt-2 pb-3 space-y-1 px-4">
                        <Link
                            href="/gst-calculator"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50"
                        >
                            GST
                        </Link>
                        <Link
                            href="/loan-interest"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50"
                        >
                            Loans
                        </Link>
                        <Link
                            href="/sip-calculator"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50"
                        >
                            SIP
                        </Link>
                        <Link
                            href="/salary-calculator"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50"
                        >
                            Salary
                        </Link>
                        <Link
                            href="/income-tax-calculator"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50"
                        >
                            Income Tax
                        </Link>
                        <Link
                            href="/profit-calculator"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50"
                        >
                            Profit
                        </Link>
                        <Link
                            href="/#faq"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary hover:bg-gray-50"
                        >
                            FAQ
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
