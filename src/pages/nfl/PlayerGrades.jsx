import { useState } from 'react'
import grades from '../../data/playerGrades.json'

const POSITIONS = ['All', 'QB', 'RB', 'WR', 'TE', 'OC', 'OG', 'OT', 'DT', 'EDGE', 'LB', 'CB', 'SAF']

export default function PlayerGrades() {
  const [position, setPosition] = useState('All')
  const [sortDir, setSortDir] = useState('desc')

  const filtered = grades
    .filter(p => position === 'All' || p.position === position)
    .sort((a, b) => sortDir === 'desc' ? b.grade - a.grade : a.grade - b.grade)

  return (
    <div>
      <div className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-black text-white mb-2">PFI Player Grades</h1>
          <p className="text-gray-400 text-base">2025 season grades across all positions.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {POSITIONS.map(pos => (
            <button
              key={pos}
              onClick={() => setPosition(pos)}
              className={`px-3 py-1 text-sm font-semibold rounded border transition-colors ${
                position === pos
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-gray-500'
              }`}
            >
              {pos}
            </button>
          ))}
        </div>

        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-left text-xs uppercase tracking-wider text-gray-500">
              <th className="py-3 pr-4 font-semibold">Rank</th>
              <th className="py-3 pr-4 font-semibold">Player</th>
              <th className="py-3 pr-4 font-semibold">Position</th>
              <th className="py-3 pr-4 font-semibold">Team</th>
              <th className="py-3 pr-4 font-semibold">Season</th>
              <th
                className="py-3 font-semibold cursor-pointer select-none hover:text-gray-900"
                onClick={() => setSortDir(d => d === 'desc' ? 'asc' : 'desc')}
              >
                PFI Grade {sortDir === 'desc' ? '↓' : '↑'}
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((player, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 pr-4 text-gray-400">{i + 1}</td>
                <td className="py-3 pr-4 font-semibold text-gray-900">{player.player}</td>
                <td className="py-3 pr-4">
                  <span className="px-2 py-0.5 text-xs font-bold bg-gray-100 text-gray-700 rounded">
                    {player.position}
                  </span>
                </td>
                <td className="py-3 pr-4 text-gray-700">{player.team}</td>
                <td className="py-3 pr-4 text-gray-500">{player.season}</td>
                <td className="py-3 font-bold text-gray-900">{player.grade.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-xs text-gray-400 mt-4">{filtered.length} players</p>
      </div>
    </div>
  )
}
