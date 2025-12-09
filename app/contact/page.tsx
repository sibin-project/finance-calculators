"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your message! This is a demo form.");
    };

    return (
        <div className="min-h-screen flex flex-col bg-background font-sans">
            <Navbar />

            <main className="flex-grow">
                {/* Header */}
                <div className="bg-primary text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Contact Us</h1>
                        <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
                            Have questions or suggestions? We'd love to hear from you.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                            <p className="text-secondary-text mb-8 text-lg">
                                Whether you have a feature request, found a bug, or just want to say hi, feel free to reach out.
                            </p>

                            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                                <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full text-primary">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-secondary-text font-medium">Email Us</p>
                                            <p className="text-foreground font-semibold">support@smartmoneycalc.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                            <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                                        placeholder="How can we help you?"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity transform hover:-translate-y-0.5"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
