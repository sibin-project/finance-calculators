import type { Metadata } from "next";
import LoanCalculator from "./LoanCalculator";

export const metadata: Metadata = {
    title: "Loan Interest Calculator - Home, Car, and Personal Loan EMI",
    description: "Calculate EMIs and Interest for Home Loans, Car Loans, and Personal Loans. Simple tool to plan your loan repayment schedule.",
    keywords: ["loan calculator", "EMI calculator", "home loan interest", "car loan EMI", "personal loan calculator India", "interest rate calculator"],
    openGraph: {
        title: "Loan Interest Calculator - EMI & Interest Calculation",
        description: "Quickly calculate your projected EMI and total interest payable for any type of loan.",
    }
};

export default function Page() {
    return <LoanCalculator />;
}
