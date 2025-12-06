import type { Metadata } from "next";
import SalaryCalculator from "./SalaryCalculator";

export const metadata: Metadata = {
    title: "Salary Calculator India - CTC to In-Hand Salary",
    description: "Calculate your monthly in-hand salary from Annual CTC. Understand deductions like PF, Professional Tax, and basic salary components.",
    keywords: ["salary calculator", "in-hand salary", "CTC to inhand", "take home salary calculator", "PF calculator India", "salary breakdown"],
    openGraph: {
        title: "Salary Calculator - Know Your Take Home Pay",
        description: "Convert your Annual CTC to monthly in-hand salary instantly. Detailed breakdown of deductions and allowances.",
    }
};

export default function Page() {
    return <SalaryCalculator />;
}
