export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    content: string; // HTML or Markdown string
}

export const blogPosts: BlogPost[] = [
    {
        slug: "identifying-best-sip-plans",
        title: "How to Identify the Best SIP Plans for 2025",
        excerpt: "Discover the key factors to consider when choosing a Systematic Investment Plan (SIP) for long-term wealth creation.",
        date: "December 8, 2025",
        author: "Finance Team",
        category: "Investment",
        content: `
      <p>Systematic Investment Plans (SIPs) have become one of the most popular ways to invest in mutual funds. But with thousands of schemes available, how do you choose the right one?</p>
      
      <h2>1. Define Your Financial Goals</h2>
      <p>Before starting an SIP, be clear about why you are investing. Is it for buying a house, your child's education, or retirement? Your goal will determine the type of fund (equity, debt, or hybrid) you should choose.</p>

      <h2>2. Check Fund Performance</h2>
      <p>While past performance doesn't guarantee future returns, it helps in understanding how the fund has navigated market ups and downs. Look for funds that have consistently beaten their benchmarks over 3-5 years.</p>

      <h2>3. Expense Ratio Matters</h2>
      <p>The expense ratio is the annual fee charged by the fund house. A lower expense ratio means higher take-home returns for you. Direct plans usually have lower expense ratios compared to regular plans.</p>

      <h2>Conclusion</h2>
      <p>Investing in SIPs is a disciplined way to build wealth. Start small, verify the fund manager's track record, and stay consistent.</p>
    `
    },
    {
        slug: "understanding-income-tax-regimes",
        title: "Old vs. New Tax Regime: Which One Should You Pick?",
        excerpt: "A comprehensive comparison of the Old and New Tax Regimes to help you maximize your tax savings this financial year.",
        date: "December 5, 2025",
        author: "Tax Expert",
        category: "Taxation",
        content: `
      <p>The Indian government introduced the New Tax Regime to simplify the tax structure. However, the Old Tax Regime still exists with its plethora of deductions. Which one wins?</p>

      <h2>Key Differences</h2>
      <ul>
        <li><strong>Old Regime:</strong> Higher tax rates but allows exemptions like 80C, HRA, LTA, and Section 24 (Home Loan Interest).</li>
        <li><strong>New Regime:</strong> Lower tax rates but disallows most exemptions and deductions.</li>
      </ul>

      <h2>Who Should Choose What?</h2>
      <p>If you have significant investments in PPF, LIC, and a home loan, the Old Regime might still be beneficial. However, if you prefer liquidity and don't want to lock funds in tax-saving instruments, the New Regime is likely better.</p>

      <p>Use our <a href="/income-tax-calculator" class="text-primary hover:underline">Income Tax Calculator</a> to compare your liability under both regimes.</p>
    `
    },
    {
        slug: "home-loan-prepayment-guide",
        title: "Is Prepaying Your Home Loan a Good Idea?",
        excerpt: "Analyze the pros and cons of prepaying your home loan versus investing that surplus money.",
        date: "November 28, 2025",
        author: "Loan Advisor",
        category: "Loans",
        content: `
      <p>Being debt-free is a dream for many. But financially, does it always make sense to rush into prepaying your home loan?</p>

      <h2>The Case for Prepayment</h2>
      <p>Prepaying reduces your principal amount, which significantly lowers the interest burden over the loan tenure. It also gives you mental peace.</p>

      <h2>The Opportunity Cost</h2>
      <p>If your home loan interest rate is 8.5% but you can earn 12% returns from an equity mutual fund, you might be better off investing the surplus cash instead of prepaying the loan.</p>

      <h2>Conclusion</h2>
      <p>Strike a balance. Use a portion of your bonus or surplus income to make part-payments, while continuing your investments for other goals.</p>
    `
    }
];
