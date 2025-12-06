import type { Metadata } from "next";
import IncomeTaxCalculator from "./IncomeTaxCalculator";

export const metadata: Metadata = {
    title: "Income Tax Calculator India - Compare Old vs New Regime",
    description: "Calculate Income Tax for FY 2024-25 / AY 2025-26. Compare tax liability under Old and New Tax Regimes to find maximum tax savings.",
    keywords: ["income tax calculator", "tax calculator India", "old vs new tax regime", "tax rebate 87A", "standard deduction", "80C deductions", "FY 2024-25 tax"],
    openGraph: {
        title: "Income Tax Calculator India - Save Tax Online",
        description: "Should you switch to the New Tax Regime? Find out instantly with our comprehensive tax comparison tool.",
    }
};

export default function Page() {
    return <IncomeTaxCalculator />;
}
