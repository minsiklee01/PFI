// Placeholder YouTube video IDs — replace with real ones
const videos = [
  { id: 'v1', youtubeId: 'dQw4w9WgXcQ', headline: 'Fernando Mendoza Pre-Draft Interview' },
  { id: 'v2', youtubeId: 'dQw4w9WgXcQ', headline: 'Reuben Bain Jr. — Combine Media Day' },
]

const articles = [
  { id: 'a1', title: 'Mendoza discusses NFL readiness', date: '2025-03-15', summary: 'In a sit-down interview, Indiana QB Fernando Mendoza talks about his preparation for the draft process.' },
]

function YouTubeEmbed({ youtubeId, headline }) {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-200">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={headline}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p className="px-4 py-3 text-sm font-medium text-gray-800">{headline}</p>
    </div>
  )
}

export default function Interviews() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Interviews</h1>

      {/* Videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {videos.map((v) => (
          <YouTubeEmbed key={v.id} youtubeId={v.youtubeId} headline={v.headline} />
        ))}
      </div>

      {/* Articles */}
      <div className="flex flex-col gap-3">
        {articles.map((a) => (
          <div key={a.id} className="border border-gray-200 rounded-lg px-5 py-4">
            <p className="text-xs text-gray-400 mb-1">{a.date}</p>
            <h2 className="font-semibold text-gray-900 mb-1">{a.title}</h2>
            <p className="text-sm text-gray-500">{a.summary}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
