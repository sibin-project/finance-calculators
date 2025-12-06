
const faqs = [
    {
        question: "How accurate are these calculators?",
        answer: "Our calculators use standard financial formulas to provide highly accurate estimates. However, actual figures may vary slightly depending on your specific bank's policies and hidden charges."
    },
    {
        question: "Do I need to sign up to use the calculators?",
        answer: "No, all our calculators are completely free to use without any registration or sign-up."
    },
    {
        question: "Can I use these for commercial purposes?",
        answer: "These tools are designed for personal use to help you plan your finances better. For commercial integration, please contact us."
    },
    {
        question: "What is the difference between flat and reducing interest rates?",
        answer: "A flat rate is calculated on the principal amount throughout the tenure, while a reducing rate is calculated only on the outstanding balance, generally making the latter cheaper."
    }
];

export default function FAQ() {
    return (
        <section id="faq" className="py-16 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-lg text-secondary-text">
                        Common questions about our financial tools.
                    </p>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                {faq.question}
                            </h3>
                            <p className="text-secondary-text">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
