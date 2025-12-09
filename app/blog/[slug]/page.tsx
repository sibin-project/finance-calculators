import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "../blogData";
import { notFound } from "next/navigation";
import Link from "next/link";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// In Next.js 15+, params is a Promise.
// We must await it before accessing properties.

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col bg-background font-sans">
            <Navbar />

            <main className="flex-grow bg-white">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Breadcrumb */}
                    <div className="mb-8 text-sm text-secondary-text">
                        <Link href="/blog" className="hover:text-primary">Blog</Link>
                        <span className="mx-2">/</span>
                        <span className="text-foreground">{post.title}</span>
                    </div>

                    {/* Header */}
                    <header className="mb-10">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-3 py-1 text-sm font-semibold bg-blue-100 text-blue-700 rounded-full">
                                {post.category}
                            </span>
                            <span className="text-sm text-secondary-text">
                                {post.date} • By {post.author}
                            </span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                            {post.title}
                        </h1>
                    </header>

                    {/* Content */}
                    {/* Content */}
                    <div
                        className="blog-content text-lg text-secondary-text leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Back Button */}
                    <div className="mt-12 pt-8 border-t border-border">
                        <Link href="/blog" className="inline-flex items-center text-primary font-semibold hover:underline">
                            ← Back to all articles
                        </Link>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
