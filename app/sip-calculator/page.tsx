import type { Metadata } from "next";
import SIPCalculator from "./SIPCalculator";

export const metadata: Metadata = {
    title: "SIP Calculator - Mutual Fund Returns Calculator",
    description: "Estimate future returns on your monthly Mutual Fund SIP investments. Calculate expected wealth gain with inflation-beating estimates.",
    keywords: ["SIP calculator", "mutual fund calculator", "investment calculator", "SIP return calculator", "systematic investment plan"],
    openGraph: {
        title: "SIP Calculator - Plan Your Wealth Creation",
        description: "Visualize the power of compounding with our free SIP calculator. See how small investments grow over time.",
    }
};

export default function Page() {
    return <SIPCalculator />;
}
