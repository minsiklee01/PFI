import { Link } from 'react-router-dom'

const FEATURED = {
  category: 'NFL Draft',
  categoryHref: '/nfl-draft/big-board',
  title: "Justin Jaksa's 2025 NFL Draft 5.0: Full First-Round Projections",
  summary:
    'Our most comprehensive mock draft yet covers every first-round pick with detailed analysis, team needs breakdowns, and post-combine risers.',
  date: 'April 13, 2026',
  href: '/nfl-draft/mocks/mock-5',
}

const RECENT = [
  {
    category: 'Analytics',
    title: 'Receiver Route-Running Rankings: Who Separates at the Top?',
    date: 'Apr 12',
    href: '/analytics',
  },
  {
    category: 'NFL Draft',
    title: 'Big Board 1.0: Top 150 Prospects Ranked and Scouted',
    date: 'Apr 11',
    href: '/nfl-draft/big-board',
  },
  {
    category: 'College',
    title: 'Spring Game Standouts: Five Names to Know Before the Draft',
    date: 'Apr 10',
    href: '/college',
  },
  {
    category: 'Fantasy',
    title: 'Best Ball ADP Risers and Fallers Following Free Agency',
    date: 'Apr 9',
    href: '/fantasy',
  },
  {
    category: 'NFL',
    title: "Offseason Grades: Ranking Every Team's Free Agency Haul",
    date: 'Apr 8',
    href: '/nfl',
  },
  {
    category: 'Analytics',
    title: 'Pass Protection Rankings: Identifying the Elite Offensive Lines',
    date: 'Apr 7',
    href: '/analytics',
  },
]

const CATEGORY_STYLES = {
  'NFL Draft': 'text-amber-500',
  Analytics: 'text-blue-500',
  College: 'text-green-600',
  Fantasy: 'text-purple-500',
  NFL: 'text-red-500',
}

const QUICK_LINKS = [
  { label: 'Big Board', href: '/nfl-draft/big-board' },
  { label: 'Mock Drafts', href: '/nfl-draft/mocks' },
  { label: 'Interviews', href: '/nfl-draft/interviews' },
  { label: 'Fantasy', href: '/fantasy' },
  { label: 'Analytics', href: '/analytics' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <Link
            to={FEATURED.categoryHref}
            className="inline-block text-amber-400 text-xs font-bold uppercase tracking-widest mb-4 hover:text-amber-300 transition-colors"
          >
            {FEATURED.category}
          </Link>
          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight max-w-3xl mb-5">
            {FEATURED.title}
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
            {FEATURED.summary}
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              to={FEATURED.href}
              className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 font-bold text-sm px-6 py-3 rounded hover:bg-amber-300 transition-colors"
            >
              Read Now →
            </Link>
            <span className="text-gray-600 text-sm">{FEATURED.date}</span>
          </div>
        </div>

        {/* Quick nav strip */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 h-11 flex items-center gap-6 overflow-x-auto">
            <span className="text-gray-600 text-xs font-bold uppercase tracking-widest shrink-0">
              Quick Links
            </span>
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-gray-400 text-sm font-medium hover:text-white whitespace-nowrap transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Latest stories */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-900">
            Latest Stories
          </h2>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {RECENT.map((article, i) => (
            <Link
              key={i}
              to={article.href}
              className="group border border-gray-200 rounded-lg p-5 hover:border-gray-400 hover:shadow-md transition-all"
            >
              <p
                className={`text-xs font-bold uppercase tracking-wide mb-2 ${
                  CATEGORY_STYLES[article.category] || 'text-gray-400'
                }`}
              >
                {article.category}
              </p>
              <h3 className="font-bold text-gray-900 leading-snug group-hover:text-gray-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-xs text-gray-400 mt-3">{article.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
