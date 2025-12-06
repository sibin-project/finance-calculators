import type { Metadata } from "next";
import GSTCalculator from "./GSTCalculator";

export const metadata: Metadata = {
    title: "GST Calculator India - Add or Remove GST Online",
    description: "Calculate GST inclusive and exclusive amounts easily. Supports 5%, 12%, 18%, and 28% tax rates. Best GST calculator for Indian businesses.",
    keywords: ["GST calculator", "GST India", "goods and service tax", "GST inclusive calculator", "GST exclusive calculator"],
    openGraph: {
        title: "GST Calculator India - Online GST Calculation Tool",
        description: "Quickly calculate GST amounts for your products or services. Switch between inclusive and exclusive tax modes instantly.",
    }
};

export default function Page() {
    return <GSTCalculator />;
}
