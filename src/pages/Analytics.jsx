const PIECES = [
  {
    tag: 'Receiving',
    title: 'Receiver Route-Running Rankings: Who Separates at the Top?',
    summary:
      'Using separation rate, target share, and yards after catch to identify the league\'s true route-running elite.',
    date: 'Apr 12, 2026',
    highlight: true,
  },
  {
    tag: 'Offensive Line',
    title: 'Pass Protection Rankings: Identifying the Elite Offensive Lines',
    summary:
      'A film-backed look at which offensive lines are genuinely elite versus those benefiting from scheme or easy schedules.',
    date: 'Apr 7, 2026',
    highlight: false,
  },
  {
    tag: 'Quarterback',
    title: 'Beyond Completion Percentage: True Accuracy Rankings for Every NFL Starter',
    summary:
      'We strip out drops, throwaways, and spikes to measure who is actually throwing the ball accurately.',
    date: 'Mar 30, 2026',
    highlight: false,
  },
  {
    tag: 'Defense',
    title: 'Coverage Shell Tendencies: Which Defenses Are Most Predictable?',
    summary:
      'Charting pre-snap alignment tendencies across all 32 defenses to find the most and least deceptive units.',
    date: 'Mar 22, 2026',
    highlight: false,
  },
]

const METRICS = [
  { label: 'Players Charted', value: '2,400+' },
  { label: 'Games Analyzed', value: '285' },
  { label: 'Data Points', value: '1.2M+' },
  { label: 'Seasons Covered', value: '5' },
]

export default function Analytics() {
  return (
    <div>
      <div className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-black text-white mb-2">Analytics</h1>
          <p className="text-gray-400 text-base">
            Film-backed data and proprietary metrics that go beyond the box score.
          </p>
        </div>

        {/* Stat strip */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {METRICS.map((m) => (
              <div key={m.label}>
                <p className="text-2xl font-black text-amber-400">{m.value}</p>
                <p className="text-xs text-gray-500 mt-0.5 uppercase tracking-wide">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-900">
            Research & Analysis
          </h2>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="flex flex-col gap-4">
          {PIECES.map((piece, i) => (
            <div
              key={i}
              className={`border rounded-lg p-6 hover:shadow-sm transition-all cursor-pointer ${
                piece.highlight
                  ? 'border-amber-200 bg-amber-50 hover:border-amber-400'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <p className="text-xs text-blue-500 font-bold uppercase tracking-wide">
                  {piece.tag}
                </p>
                {piece.highlight && (
                  <span className="text-xs bg-amber-400 text-gray-900 font-bold px-2 py-0.5 rounded">
                    Featured
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{piece.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{piece.summary}</p>
              <p className="text-xs text-gray-400 mt-3">{piece.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
