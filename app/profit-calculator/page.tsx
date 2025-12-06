import type { Metadata } from "next";
import ProfitCalculator from "./ProfitCalculator";

export const metadata: Metadata = {
    title: "Profit Margin Calculator - Calculate Profit, Loss & ROI",
    description: "Calculate Profit, Loss, and Margins instantly. Determine your business profitability with our easy-to-use Profit & Loss Calculator.",
    keywords: ["profit calculator", "profit margin calculator", "loss calculator", "business profit calculator", "ROI calculator", "sales margin", "markup calculator"],
    openGraph: {
        title: "Profit & Loss Calculator - Business & Sales Analysis",
        description: "Instantly calculate Profit %, Loss %, and total revenue. Essential tool for retailers, wholesalers, and online sellers.",
    }
};

export default function Page() {
    return <ProfitCalculator />;
}
