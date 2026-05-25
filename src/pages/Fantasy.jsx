const TOOLS = [
  {
    label: 'ADP Tool',
    description: 'Track average draft position movement across major platforms in real time.',
    soon: true,
  },
  {
    label: 'Waiver Wire Rankings',
    description: 'Week-by-week rankings of the best available players by position.',
    soon: true,
  },
  {
    label: 'Trade Analyzer',
    description: 'Get an instant grade on any trade using our proprietary value model.',
    soon: true,
  },
]

const STORIES = [
  {
    tag: 'Best Ball',
    title: 'Best Ball ADP Risers and Fallers Following Free Agency',
    summary:
      'Free agency reshuffled target shares league-wide. Here are the biggest ADP movers heading into draft season.',
    date: 'Apr 9, 2026',
  },
  {
    tag: 'Dynasty',
    title: 'Dynasty Buy-Low Targets After the 2026 NFL Draft',
    summary:
      'Rookie landing spots that should have dynasty managers buying in at a discount right now.',
    date: 'Apr 4, 2026',
  },
]

export default function Fantasy() {
  return (
    <div>
      <div className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-black text-white mb-2">Fantasy Football</h1>
          <p className="text-gray-400 text-base">
            Rankings, tools, and analysis to win your league.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 space-y-12">
        {/* Tools */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xs font-black uppercase tracking-widest text-gray-900">Tools</h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {TOOLS.map((tool, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-gray-900">{tool.label}</h3>
                  {tool.soon && (
                    <span className="text-xs bg-purple-100 text-purple-600 font-bold px-2 py-0.5 rounded-full">
                      Soon
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Articles */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xs font-black uppercase tracking-widest text-gray-900">Analysis</h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="flex flex-col gap-4">
            {STORIES.map((story, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 hover:shadow-sm transition-all cursor-pointer"
              >
                <p className="text-xs text-purple-500 font-bold uppercase tracking-wide mb-2">
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
    </div>
  )
}
