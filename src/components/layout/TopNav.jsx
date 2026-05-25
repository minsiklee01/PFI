import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'NFL', to: '/nfl' },
  { label: 'NFL Draft', to: '/nfl-draft/big-board', prefix: '/nfl-draft' },
  { label: 'College', to: '/college' },
  { label: 'Fantasy', to: '/fantasy' },
  { label: 'Analytics', to: '/analytics' },
  { label: 'Merch', to: '/merch' },
  { label: 'About Us', to: '/about' },
]

export default function TopNav() {
  const location = useLocation()

  return (
    <header className="bg-gray-950 sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-14 gap-8">
          <Link to="/" className="font-black text-xl text-amber-400 tracking-tight shrink-0">
            PFI
          </Link>
          <nav className="flex items-center gap-0.5 overflow-x-auto scrollbar-none">
            {NAV_ITEMS.map((item) => {
              const active = item.prefix
                ? location.pathname.startsWith(item.prefix)
                : location.pathname === item.to
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-1.5 rounded text-sm font-medium whitespace-nowrap transition-colors ${
                    active
                      ? 'text-amber-400 bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
