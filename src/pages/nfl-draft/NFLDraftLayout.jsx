import { Outlet } from 'react-router-dom'
import NFLDraftSidebar from '../../components/layout/NFLDraftSidebar'

export default function NFLDraftLayout() {
  return (
    <div>
      <div className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-black text-white mb-2">NFL Draft</h1>
          <p className="text-gray-400 text-base">
            Prospect rankings, mock drafts, and pre-draft interviews.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-10">
        <NFLDraftSidebar />
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
