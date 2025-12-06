
interface CalculatorCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
}

export default function CalculatorCard({ title, description, icon, href }: CalculatorCardProps) {
    return (
        <a
            href={href}
            className="group block p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md hover:border-accent/50 transition-all duration-300"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-background rounded-lg text-2xl group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <div className="text-accent group-hover:translate-x-1 transition-transform duration-300">
                    ➜
                </div>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {title}
            </h3>
            <p className="text-secondary-text text-sm">
                {description}
            </p>
        </a>
    );
}
