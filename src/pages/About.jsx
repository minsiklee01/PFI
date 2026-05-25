const TEAM = [
  {
    name: 'Justin Jaksa',
    role: 'Founder & Lead Scout',
    bio: 'Former D3 player turned film obsessive. Has been charting prospects since 2019 and publishes the annual PFI Mock Draft series.',
  },
]

const VALUES = [
  {
    title: 'Film First',
    body:
      'Every ranking, grade, and opinion starts with the tape. We do not let statistics override what the film shows.',
  },
  {
    title: 'Independent',
    body:
      'No corporate ownership, no team partnerships, no conflicts of interest. Our takes are ours alone.',
  },
  {
    title: 'Transparent Process',
    body:
      'We show our work. Methodology, criteria, and update logs are always available so you can understand how we arrived at our conclusions.',
  },
]

export default function About() {
  return (
    <div>
      <div className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-black text-white mb-3">About PFI</h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            Pro Football Intelligence is an independent football media outlet built on film study,
            honest analysis, and a genuine love of the game.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-14">
        {/* Mission */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xs font-black uppercase tracking-widest text-gray-900">Mission</h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <p className="text-gray-600 text-base leading-relaxed">
            PFI was built out of frustration with surface-level football coverage. Too many outlets
            chase clicks with hot takes and recycled statistics. We do the opposite — slow down,
            watch the film, and write about what we actually see. Our goal is to produce the kind of
            analysis that makes you a smarter football fan.
          </p>
        </div>

        {/* Values */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xs font-black uppercase tracking-widest text-gray-900">
              What We Stand For
            </h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="border border-gray-200 rounded-lg p-5">
                <div className="w-2 h-2 bg-amber-400 rounded-full mb-4" />
                <h3 className="font-black text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xs font-black uppercase tracking-widest text-gray-900">Team</h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="flex flex-col gap-4">
            {TEAM.map((person) => (
              <div key={person.name} className="border border-gray-200 rounded-lg p-6 flex gap-5 items-start">
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                  <span className="text-lg font-black text-gray-400">
                    {person.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="font-black text-gray-900">{person.name}</h3>
                  <p className="text-xs text-amber-500 font-bold uppercase tracking-wide mb-2">
                    {person.role}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gray-950 rounded-xl p-8">
          <h2 className="text-xl font-black text-white mb-2">Get in Touch</h2>
          <p className="text-gray-400 text-sm mb-1">
            Pitches, feedback, partnership inquiries — we read everything.
          </p>
          <a
            href="mailto:contact@pfi.com"
            className="text-amber-400 font-bold text-sm hover:text-amber-300 transition-colors"
          >
            contact@pfi.com
          </a>
        </div>
      </div>
    </div>
  )
}
