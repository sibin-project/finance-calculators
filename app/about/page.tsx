import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-background font-sans">
            <Navbar />

            <main className="flex-grow">
                {/* Header */}
                <div className="bg-primary text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">About Us</h1>
                        <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
                            Empowering your financial decisions with precision, simplicity, and speed.
                        </p>
                    </div>
                </div>

                {/* Story / Mission Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="prose prose-lg mx-auto text-secondary-text">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
                            <p className="mb-6">
                                Welcome to <strong>SmartMoney Calc</strong>, your go-to destination for accurate and easy-to-use financial tools.
                                Whether you're planning investments, calculating taxes, or estimating loan EMIs, we believe that financial clarity shouldn't be complicated.
                            </p>
                            <p className="mb-6">
                                Our team consists of finance enthusiasts and developers dedicated to building utilities that demystify complex formulas.
                                We constantly update our algorithms to reflect the latest government policies and market trends.
                            </p>

                            <h2 className="text-3xl font-bold text-foreground mb-6 mt-12">Our Mission</h2>
                            <p>
                                To provide free, accessible, and reliable financial calculators to everyone—students, professionals, and business owners alike.
                                We aim to help you make informed decisions about your money without the hassle of spreadsheets or manual math.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-16 bg-primary/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-foreground">Why Choose SmartMoney Calc?</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
                                <div className="text-4xl mb-4">🚀</div>
                                <h3 className="text-xl font-bold text-foreground mb-2">Fast & Accurate</h3>
                                <p className="text-secondary-text">Instant results based on verified financial formulas.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
                                <div className="text-4xl mb-4">🔒</div>
                                <h3 className="text-xl font-bold text-foreground mb-2">Privacy Focused</h3>
                                <p className="text-secondary-text">Calculations are done efficiently; we respect your data privacy.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
                                <div className="text-4xl mb-4">📱</div>
                                <h3 className="text-xl font-bold text-foreground mb-2">Mobile Friendly</h3>
                                <p className="text-secondary-text">Optimized for seamless use on phones, tablets, and desktops.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
