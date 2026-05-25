import { Routes, Route } from 'react-router-dom'
import TopNav from './components/layout/TopNav'
import Home from './pages/Home'
import NFL from './pages/NFL'
import College from './pages/College'
import Fantasy from './pages/Fantasy'
import Analytics from './pages/Analytics'
import Merch from './pages/Merch'
import About from './pages/About'
import NFLDraftLayout from './pages/nfl-draft/NFLDraftLayout'
import BigBoard from './pages/nfl-draft/BigBoard'
import Mocks from './pages/nfl-draft/Mocks'
import MockArticle from './pages/nfl-draft/MockArticle'
import Interviews from './pages/nfl-draft/Interviews'
import PlayerGrades from './pages/nfl/PlayerGrades'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nfl" element={<NFL />} />
        <Route path="/nfl/grades" element={<PlayerGrades />} />
        <Route path="/college" element={<College />} />
        <Route path="/fantasy" element={<Fantasy />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/about" element={<About />} />
        <Route path="/nfl-draft" element={<NFLDraftLayout />}>
          <Route path="big-board" element={<BigBoard />} />
          <Route path="mocks" element={<Mocks />} />
          <Route path="mocks/:id" element={<MockArticle />} />
          <Route path="interviews" element={<Interviews />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
