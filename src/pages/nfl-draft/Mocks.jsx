import { Link } from 'react-router-dom'
import { mocks } from '../../data/mocks'

export default function Mocks() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Justin's Mock Drafts</h1>
      <p className="text-gray-500 mb-6 text-sm">All versions of Justin Jaksa's NFL Draft projections.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {mocks.map((mock) => (
          <Link
            key={mock.id}
            to={`/nfl-draft/mocks/${mock.id}`}
            className="border border-gray-200 rounded-lg p-5 hover:border-gray-400 hover:shadow-sm transition-all"
          >
            <p className="text-xs text-gray-400 mb-1">{mock.publishedAt}</p>
            <h2 className="text-lg font-bold text-gray-900 mb-2">Mock {mock.version}</h2>
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">{mock.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
