import { useParams, Link } from 'react-router-dom'
import { mocks } from '../../data/mocks'

export default function MockArticle() {
  const { id } = useParams()
  const mock = mocks.find((m) => m.id === id)

  if (!mock) {
    return (
      <div className="py-12 text-center text-gray-500">
        Mock not found.{' '}
        <Link to="/nfl-draft/mocks" className="text-blue-600 hover:underline">
          Back to Mocks
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/nfl-draft/mocks" className="text-sm text-gray-400 hover:text-gray-600 mb-4 inline-block">
        ← All Mocks
      </Link>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{mock.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{mock.summary}</p>

      <div className="flex flex-col gap-2">
        {mock.picks.map((pick) => (
          <div key={pick.pick} className="border border-gray-200 rounded-lg px-5 py-4 flex items-center gap-4">
            <span className="text-sm text-gray-400 w-6 shrink-0">{pick.pick}.</span>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">
                {pick.name}{' '}
                <span className="text-xs font-medium px-2 py-0.5 bg-gray-100 text-gray-700 rounded ml-1">
                  {pick.position}
                </span>
              </p>
              {pick.why && <p className="text-sm text-gray-500 mt-1">{pick.why}</p>}
            </div>
            <span className="text-sm text-gray-500 shrink-0">{pick.team}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
