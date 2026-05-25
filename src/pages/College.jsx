const STORIES = [
  {
    tag: 'Spring Ball',
    title: 'Spring Game Standouts: Five Names to Know Before the Draft',
    summary:
      'Under-the-radar prospects who put the film world on notice during spring practices and scrimmages.',
    date: 'Apr 10, 2026',
  },
  {
    tag: 'Recruiting',
    title: "2027 Class Rankings: Early Leaders in the Nation's Top Recruiting Battle",
    summary:
      'A look at which programs are positioned best to land the elite 2027 recruits as the early signing period approaches.',
    date: 'Apr 3, 2026',
  },
  {
    tag: 'Transfer Portal',
    title: 'Transfer Portal Winners and Losers: Spring Edition',
    summary:
      'Which Power 4 programs upgraded their rosters — and which ones are still looking for answers at key positions?',
    date: 'Mar 25, 2026',
  },
]

export default function College() {
  return (
    <div>
      <div className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-black text-white mb-2">College Football</h1>
          <p className="text-gray-400 text-base">
            Recruiting, transfer portal, and college football analysis.
          </p>
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
              <p className="text-xs text-green-600 font-bold uppercase tracking-wide mb-2">
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
