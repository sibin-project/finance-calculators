import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://smartmoney-calc.vercel.app'),
  title: {
    default: "SmartMoney Calc - Free Financial Calculators",
    template: "%s | SmartMoney Calc",
  },
  description: "Free online financial calculators for GST, SIP, Income Tax, Salary, Loans, and Profit. Simplify your financial planning with accurate tools.",
  keywords: [
    "financial calculator",
    "GST calculator India",
    "SIP calculator",
    "Income Tax calculator 2025",
    "new tax regime calculator",
    "salary calculator India",
    "home loan EMI calculator",
    "personal loan calculator",
    "profit margin calculator",
    "finance tools India",
    "SmartMoney Calc"
  ],
  authors: [{ name: "SmartMoney Calc Team" }],
  creator: "SmartMoney Calc",
  publisher: "SmartMoney Calc",
  icons: {
    icon: '/icon.svg',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "SmartMoney Calc - Comprehensive Financial Tools",
    description: "Calculate GST, SIP returns, Income Tax liabilities, Salary breakdowns, and Loan EMIs instantly. Start planning your financial future today.",
    url: "https://smartmoney-calc.vercel.app",
    siteName: "SmartMoney Calc",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartMoney Calc - Financial Tools for Everyone",
    description: "Calculate GST, SIP, Income Tax, and Loans instantly with SmartMoney Calc.",
    creator: "@smartmoneycalc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
