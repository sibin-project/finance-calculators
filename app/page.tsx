import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalculatorCard from "@/components/CalculatorCard";
import FAQ from "@/components/FAQ";


export default function Home() {
  const calculators = [
    {
      title: "SIP Calculator",
      description: "Calculate returns on your monthly Systematic Investment Plan (SIP) investments.",
      icon: "📊",
      href: "/sip-calculator",
      tag: "Investment",
      tagColor: "bg-green-100 text-green-700",
      features: [
        "Projected returns on investment",
        "Inflation-adjusted wealth gain",
        "Visualize growth with charts"
      ]
    },
    {
      title: "Salary Calculator",
      description: "Estimate your in-hand salary after deductions like PF, Tax, and Insurance.",
      icon: "💼",
      href: "/salary-calculator",
      tag: "Income",
      tagColor: "bg-purple-100 text-purple-700",
      features: [
        "In-hand salary breakdown",
        "PF & Professional Tax calculation",
        "Annual CTC to monthly pay"
      ]
    },
    {
      title: "GST Calculator",
      description: "Easily calculate GST tax for goods and services with exclusive/inclusive rates.",
      icon: "₹",
      href: "/gst-calculator",
      tag: "Tax",
      tagColor: "bg-primary/10 text-primary",
      features: [
        "Inclusive & Exclusive GST",
        "Custom tax percentage support",
        "Instant tax breakdown"
      ]
    },
    {
      title: "Home Loan EMI",
      description: "Calculate your monthly EMI and total interest payable for home loans.",
      icon: "🏠",
      href: "/loan-interest?type=home",
      tag: "Loans",
      tagColor: "bg-orange-100 text-orange-700",
      features: [
        "Monthly EMI estimation",
        "Total interest payout check",
        "Amortization schedule preview"
      ]
    },
    {
      title: "Car Loan EMI",
      description: "Plan your dream car purchase with accurate EMI and interest calculations.",
      icon: "🚗",
      href: "/loan-interest?type=car",
      tag: "Vehicle",
      tagColor: "bg-yellow-100 text-yellow-700",
      features: [
        "Down payment adjustment",
        "Flexible loan tenure options",
        "Interest rate comparison"
      ]
    },
    {
      title: "Income Tax Calculator",
      description: "Compare tax moves under Old vs New Regime for the financial year.",
      icon: "🏛️",
      href: "/income-tax-calculator",
      tag: "Government",
      tagColor: "bg-red-100 text-red-700",
      features: [
        "Old vs New Regime comparison",
        "Deductions & Exemptions",
        "Surcharge & Cess calculation"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-foreground tracking-tight mb-8">
              <span className="text-primary">SmartMoney</span> Calc
            </h1>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-secondary-text mb-12 leading-relaxed">
              Access a wide range of accurate and easy-to-use calculators for all your financial, utility, and educational needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#calculators" className="bg-primary text-white hover:opacity-90 px-8 py-3.5 rounded-full font-bold text-lg transition-transform hover:-translate-y-1 shadow-lg hover:shadow-primary/30">
                Explore Calculators →
              </a>
              <a href="/about" className="bg-white text-primary border-2 border-primary hover:bg-primary/5 px-8 py-3.5 rounded-full font-bold text-lg transition-transform hover:-translate-y-1">
                About Us
              </a>
            </div>

            <div className="mt-16 text-primary animate-bounce">
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>


        {/* Calculator Grid Section */}
        <section id="calculators" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Calculators</h2>
              <p className="text-lg text-secondary-text max-w-2xl mx-auto">
                Our most popular and useful calculators to help you with financial planning, education, and more.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {calculators.map((calc, index) => (
                <CalculatorCard
                  key={index}
                  title={calc.title}
                  description={calc.description}
                  icon={calc.icon}
                  href={calc.href}
                  tag={calc.tag}
                  tagColor={calc.tagColor}
                  features={calc.features}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculator Categories</h2>
            <p className="text-secondary-text mb-12">Explore our wide range of calculators designed to help you make informed financial decisions.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* Category 1 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-2 rounded-lg text-primary">
                    💲
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Banking & Finance</h3>
                </div>
                <p className="text-sm text-gray-500 mb-4">SBI Annuity, EMI, and more</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• SBI Annuity Deposit Scheme</li>
                  <li>• Monthly Income Calculator</li>
                  <li>• Royal Enfield Hunter 350 EMI</li>
                </ul>
              </div>

              {/* Category 2 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                    ⚡
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Utility Bills</h3>
                </div>
                <p className="text-sm text-gray-500 mb-4">Electricity and utility calculators</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• TNEB Calculator 2025</li>
                  <li>• KSEB Bill Estimator</li>
                  <li>• Electricity Consumption</li>
                </ul>
              </div>

              {/* Category 3 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                    📊
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Salary & Income</h3>
                </div>
                <p className="text-sm text-gray-500 mb-4">Pay commission and salary tools</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 8th Pay Commission Calculator</li>
                  <li>• Pay Matrix Calculator</li>
                  <li>• Basic & Gross Pay Hike</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
