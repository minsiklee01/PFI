const PRODUCTS = [
  {
    id: 1,
    name: 'PFI Logo Tee',
    price: '$32',
    tag: 'Bestseller',
    description: 'Classic heavyweight tee with embroidered PFI wordmark.',
    colors: ['Black', 'White', 'Charcoal'],
  },
  {
    id: 2,
    name: 'Draft Day Hoodie',
    price: '$64',
    tag: 'New',
    description: 'Premium fleece pullover. Perfect for draft night.',
    colors: ['Black', 'Navy'],
  },
  {
    id: 3,
    name: 'Analytics Cap',
    price: '$38',
    tag: null,
    description: 'Structured 6-panel cap with PFI patch.',
    colors: ['Black', 'Khaki'],
  },
  {
    id: 4,
    name: 'PFI Draft Board Poster',
    price: '$24',
    tag: 'Limited',
    description: '18x24 premium print of our 2026 Big Board. Numbered edition.',
    colors: null,
  },
]

export default function Merch() {
  return (
    <div>
      <div className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-black text-white mb-2">Merch</h1>
          <p className="text-gray-400 text-base">
            Official PFI gear. Limited runs, quality first.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xs font-black uppercase tracking-widest text-gray-900">Shop</h2>
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">Store coming soon — join the waitlist below</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder image */}
              <div className="bg-gray-100 aspect-square flex items-center justify-center">
                <span className="text-4xl font-black text-gray-300">PFI</span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-gray-900 text-sm">{product.name}</h3>
                  {product.tag && (
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded ${
                        product.tag === 'Bestseller'
                          ? 'bg-amber-100 text-amber-700'
                          : product.tag === 'New'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {product.tag}
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mb-2 leading-relaxed">{product.description}</p>
                {product.colors && (
                  <p className="text-xs text-gray-400 mb-3">{product.colors.join(' · ')}</p>
                )}
                <p className="font-black text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Waitlist */}
        <div className="bg-gray-950 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-black text-white mb-2">Be First in Line</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            The store is launching soon. Drop your email and we'll notify you the moment it's live —
            plus early access to limited drops.
          </p>
          <div className="flex gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/10 text-white placeholder-gray-500 text-sm px-4 py-2.5 rounded border border-gray-700 focus:outline-none focus:border-amber-400"
            />
            <button className="bg-amber-400 text-gray-900 font-bold text-sm px-5 py-2.5 rounded hover:bg-amber-300 transition-colors whitespace-nowrap">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
