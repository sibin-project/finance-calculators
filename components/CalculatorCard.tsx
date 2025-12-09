
interface CalculatorCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    tag?: string;
    tagColor?: string;
    features?: string[];
}

export default function CalculatorCard({ title, description, icon, href, tag, tagColor = "bg-blue-100 text-blue-700", features }: CalculatorCardProps) {
    return (
        <a
            href={href}
            className="group flex flex-col h-full p-6 bg-card border border-border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
        >
            <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-primary/10 text-primary rounded-full text-2xl group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
            </div>

            <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {title}
                </h3>
                {tag && (
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${tagColor} mb-2`}>
                        {tag}
                    </span>
                )}
                <p className="text-secondary-text text-sm leading-relaxed">
                    {description}
                </p>
            </div>

            {features && features.length > 0 && (
                <div className="mb-6 flex-grow">
                    <ul className="space-y-2">
                        {features.slice(0, 3).map((feature, idx) => ( // Limit to 3 bullets
                            <li key={idx} className="flex items-start text-xs text-secondary-text">
                                <span className="mr-2 text-primary">•</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="mt-auto">
                <button className="w-full sm:w-auto px-6 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group-hover:gap-3">
                    Try Now
                    <span className="text-lg">→</span>
                </button>
            </div>
        </a>
    );
}
