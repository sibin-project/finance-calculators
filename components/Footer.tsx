
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
            </div>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <span className="text-2xl font-bold text-primary">SmartMoney<span className="text-accent"> Calc</span></span>
                        <p className="mt-2 text-sm text-secondary-text">
                            Making financial calculations simple and accessible for everyone.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <Link href="/blog" className="text-sm text-secondary-text hover:text-primary transition-colors">
                            Blog
                        </Link>
                        <Link href="/about" className="text-sm text-secondary-text hover:text-primary transition-colors">
                            About
                        </Link>
                        <Link href="/contact" className="text-sm text-secondary-text hover:text-primary transition-colors">
                            Contact
                        </Link>
                        <Link href="/privacy-policy" className="text-sm text-secondary-text hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
                <div className="mt-8 border-t border-border pt-8 text-center">
                    <p className="text-sm text-secondary-text">
                        &copy; {new Date().getFullYear()} SmartMoney Calc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
