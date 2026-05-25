import { useState } from 'react'
import { players } from '../../data/players'

const POSITIONS = ['All', 'QB', 'RB', 'WR', 'TE', 'OT', 'IOL', 'ED', 'DL', 'LB', 'CB', 'S', 'ST']

function PlayerCard({ player }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors text-left"
      >
        <span className="text-sm text-gray-400 w-6 shrink-0">{player.rank}</span>
        <span className="font-semibold text-gray-900 flex-1">{player.name}</span>
        <span className="text-xs font-medium px-2 py-0.5 bg-gray-100 text-gray-700 rounded">
          {player.position}
        </span>
        <span className="text-sm text-gray-500">{player.college}</span>
        <span className="text-gray-400 ml-2">{expanded ? '▲' : '▼'}</span>
      </button>

      {expanded && (
        <div className="px-5 pb-5 border-t border-gray-100">
          <div className="grid grid-cols-4 gap-4 py-4">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Height</p>
              <p className="text-lg font-semibold text-gray-900">{player.height}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Weight</p>
              <p className="text-lg font-semibold text-gray-900">{player.weight}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Year</p>
              <p className="text-lg font-semibold text-gray-900">{player.year}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">Age</p>
              <p className="text-lg font-semibold text-gray-900">{player.age}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{player.summary}</p>
          <a
            href={player.articleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            Read Full Article ↗
          </a>
        </div>
      )}
    </div>
  )
}

export default function BigBoard() {
  const [activePosition, setActivePosition] = useState('All')

  const filtered =
    activePosition === 'All'
      ? players
      : players.filter((p) => p.position === activePosition)

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-5">Big Board</h1>

      {/* Position filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {POSITIONS.map((pos) => (
          <button
            key={pos}
            onClick={() => setActivePosition(pos)}
            className={`px-3 py-1 rounded-full text-sm font-medium border transition-colors ${
              activePosition === pos
                ? 'bg-gray-900 text-white border-gray-900'
                : 'border-gray-300 text-gray-600 hover:border-gray-500'
            }`}
          >
            {pos}
          </button>
        ))}
      </div>

      {/* Player list */}
      <div className="flex flex-col gap-2">
        {filtered.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  )
}
