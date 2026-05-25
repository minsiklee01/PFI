import { Link, useLocation } from 'react-router-dom'

const STORIES = [
  {
    tag: 'Free Agency',
    title: "Offseason Grades: Ranking Every Team's Free Agency Haul",
    summary:
      "We break down every team's offseason moves and hand out letter grades based on need, value, and long-term fit.",
    date: 'Apr 8, 2026',
  },
  {
    tag: 'Quarterback',
    title: 'Top 10 QB Situations Heading Into 2026',
    summary:
      'Which franchises have their signal-callers set up for success this season? We rank every starting situation.',
    date: 'Apr 5, 2026',
  },
  {
    tag: 'Free Agency',
    title: 'Salary Cap Casualties: The Best Players Still Available',
    summary:
      'Late free agency gems who could still sign before training camp — and the teams that should be calling.',
    date: 'Apr 2, 2026',
  },
  {
    tag: 'Film Room',
    title: "Decoding the Chiefs' New Offensive System Under Mahomes",
    summary:
      "A schematic breakdown of Kansas City's evolved offense and what it means for their skill position players.",
    date: 'Mar 28, 2026',
  },
]

const TABS = [
  { label: 'Latest', href: '/nfl' },
  { label: 'Grades', href: '/nfl/grades' },
]

export default function NFL() {
  const { pathname } = useLocation()

  return (
    <div>
      <div className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-black text-white mb-2">NFL</h1>
          <p className="text-gray-400 text-base">
            News, analysis, and coverage of the National Football League.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 flex gap-1 border-t border-gray-800">
          {TABS.map(tab => (
            <Link
              key={tab.href}
              to={tab.href}
              className={`px-4 py-3 text-sm font-semibold border-b-2 transition-colors ${
                pathname === tab.href
                  ? 'border-yellow-400 text-white'
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-900">Latest</h2>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="flex flex-col gap-4">
          {STORIES.map((story, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 hover:shadow-sm transition-all cursor-pointer"
            >
              <p className="text-xs text-red-500 font-bold uppercase tracking-wide mb-2">
                {story.tag}
              </p>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{story.summary}</p>
              <p className="text-xs text-gray-400 mt-3">{story.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
