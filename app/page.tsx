import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalculatorCard from "@/components/CalculatorCard";
import FAQ from "@/components/FAQ";
import AdUnit from "@/components/AdUnit";

export default function Home() {
  const calculators = [
    {
      title: "GST Calculator",
      description: "Calculate GST amount and final price effortlessly.",
      icon: "📊",
      href: "/gst-calculator"
    },
    {
      title: "Home Loan Interest",
      description: "Estimate your monthly EMIs and total interest payable.",
      icon: "🏠",
      href: "/loan-interest?type=home"
    },
    {
      title: "Personal Loan Interest",
      description: "Plan your personal expenses with precise EMI checks.",
      icon: "💰",
      href: "/loan-interest?type=personal"
    },
    {
      title: "Car Loan Calculator",
      description: "Find the best loan options for your dream car.",
      icon: "🚗",
      href: "/loan-interest?type=car"
    },
    {
      title: "SIP Calculator",
      description: "Calculate future returns on your monthly investments.",
      icon: "🚀",
      href: "/sip-calculator"
    },
    {
      title: "Salary Calculator",
      description: "Calculate In-hand salary from Annual CTC.",
      icon: "💼",
      href: "/salary-calculator"
    },
    {
      title: "Income Tax Calculator",
      description: "Compare Old vs New Regime tax liability.",
      icon: "🏛️",
      href: "/income-tax-calculator"
    },
    {
      title: "Profit Calculator",
      description: "Analyze profit margins and business growth potential.",
      icon: "📈",
      href: "/profit-calculator"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary tracking-tight mb-6">
            Master Your Finances with <br className="hidden sm:block" />
            <span className="text-accent">Precision Tools</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-secondary-text mb-10">
            Simplifying complex financial decisions with our suite of easy-to-use calculators. From loans to taxes, we've got you covered.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#calculators" className="bg-primary text-white hover:bg-primary/90 px-8 py-3 rounded-full font-semibold transition-transform hover:-translate-y-1">
              Explore Calculators
            </a>
          </div>
        </section>


        <div className="container mx-auto px-4 max-w-4xl">
          <AdUnit label="Sponsored" />
        </div>

        {/* Calculator Grid Section */}
        <section id="calculators" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">Our Calculators</h2>
              <p className="mt-2 text-secondary-text">Choose a tool to get started</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {calculators.map((calc, index) => (
                <CalculatorCard
                  key={index}
                  title={calc.title}
                  description={calc.description}
                  icon={calc.icon}
                  href={calc.href}
                />
              ))}
            </div>

            <div className="mt-12">
              <AdUnit format="horizontal" />
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
