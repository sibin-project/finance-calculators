import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { blogPosts } from "./blogData";

export default function BlogList() {
    return (
        <div className="min-h-screen flex flex-col bg-background font-sans">
            <Navbar />

            <main className="flex-grow">
                {/* Header */}
                <div className="bg-primary text-white py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Financial Insights</h1>
                        <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
                            Expert articles, guides, and tips to help you master your money.
                        </p>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                                <article className="bg-white rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                                    <div className="p-6 flex flex-col h-full">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="px-3 py-1 text-xs font-semibold bg-blue-50 text-blue-600 rounded-full">
                                                {post.category}
                                            </span>
                                            <span className="text-xs text-secondary-text">
                                                {post.date}
                                            </span>
                                        </div>

                                        <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="text-secondary-text text-sm mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto flex items-center text-primary font-semibold text-sm">
                                            Read Article
                                            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
