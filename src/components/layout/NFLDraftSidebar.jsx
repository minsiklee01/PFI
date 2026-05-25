import { NavLink } from 'react-router-dom'

const SIDEBAR_LINKS = [
  { label: 'Big Board', to: '/nfl-draft/big-board' },
  { label: 'Mock Drafts', to: '/nfl-draft/mocks' },
  { label: 'Interviews', to: '/nfl-draft/interviews' },
]

export default function NFLDraftSidebar() {
  return (
    <aside className="w-44 shrink-0">
      <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3 px-1">
        NFL Draft
      </p>
      <nav className="flex flex-col gap-0.5">
        {SIDEBAR_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/nfl-draft/mocks'}
            className={({ isActive }) =>
              `px-3 py-2 rounded text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-amber-400 text-gray-900 font-bold'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
