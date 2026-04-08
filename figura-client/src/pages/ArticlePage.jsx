import Button from '../components/Button';
import heroImage from '../assets/vl-shirt.jpg';

export default function ArticlePage() {
  const collections = [
    {
      id: 1,
      title: "Summer Collection 2024",
      category: "New Release",
      excerpt: "Experience the hottest summer trends with our exclusive 2024 streetwear collection.",
      icon: ""
    },
    {
      id: 2,
      title: "Urban Lifestyle Series",
      category: "Signature",
      excerpt: "Bold designs inspired by city culture and street energy. Express your individuality.",
      icon: ""
    },
    {
      id: 3,
      title: "Limited Edition Drop",
      category: "Exclusive",
      excerpt: "Rare pieces that define the VLONE movement. Only available for a limited time.",
      icon: ""
    }
  ];

  return (
    <div className="bg-black w-full min-h-screen m-0 p-0 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-32 w-full m-0 p-0">
        <div className="px-4 md:px-20 py-16 mx-auto max-w-7xl">
          <p className="text-cyan-500 font-bold uppercase tracking-widest mb-6 text-sm md:text-base">COLLECTIONS</p>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white mb-4">VLONE Collections</h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-semibold">Discover the latest streetwear drops and exclusive pieces</p>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="px-0 py-32 bg-black w-full m-0">
        <div className="px-4 md:px-20 mx-auto max-w-7xl">
          <div className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-2xl p-24 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <p className="text-cyan-100 font-semibold uppercase tracking-widest mb-8 text-xl">Featured Drop</p>
              <h2 className="text-6xl font-black mb-8 leading-tight">2024 Rebellion Collection</h2>
              <p className="text-2xl text-gray-100 mb-12 leading-relaxed">Our most provocative collection yet. Bold statements, premium quality, and the VLONE attitude that defines the movement.</p>
              <Button className="px-10 py-5 bg-black text-cyan-400 rounded-full font-black text-xl hover:bg-gray-900">Shop Now</Button>
            </div>
            <div className="rounded-2xl h-96 overflow-hidden border-4 border-cyan-400">
              <img
                src={heroImage}
                alt="VLONE featured collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="px-0 py-32 bg-gray-900 w-full m-0">
        <div className="px-4 md:px-20 mx-auto max-w-7xl">
          <h2 className="text-6xl font-black text-white mb-16">Latest Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {collections.map((collection) => (
              <div key={collection.id} className="bg-black rounded-2xl overflow-hidden border border-cyan-500 hover:shadow-2xl transition hover:border-cyan-300">
                <div className="bg-gradient-to-br from-purple-600 to-cyan-500 h-56 flex items-center justify-center">
                  <span className="text-8xl">{collection.icon}</span>
                </div>
                <div className="p-8">
                  <p className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-3">{collection.category}</p>
                  <h3 className="text-2xl font-bold text-white mb-4">{collection.title}</h3>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">{collection.excerpt}</p>
                  <button className="text-cyan-500 font-bold hover:text-cyan-300 text-lg">Shop Collection →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-0 py-32 bg-black w-full m-0">
        <div className="px-4 md:px-20 mx-auto max-w-7xl">
          <h2 className="text-6xl font-black text-white mb-16 text-center">Shop by Style</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "T-Shirts", count: 48 },
              { name: "Hoodies", count: 32 },
              { name: "Jackets", count: 24 },
              { name: "Accessories", count: 56 }
            ].map((category, idx) => (
              <button key={idx} className="bg-gray-900 hover:bg-gray-800 border border-cyan-500 rounded-2xl p-8 text-center transition hover:border-cyan-300 hover:shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">{category.name}</h3>
                <p className="text-4xl font-black text-cyan-500">{category.count}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-0 py-32 w-full m-0">
        <div className="px-4 md:px-20 text-center mx-auto max-w-7xl">
          <h2 className="text-6xl font-black mb-8">Stay In The Loop</h2>
          <p className="text-2xl text-gray-100 mb-12 font-semibold">Get notified about new drops, exclusive releases, and VLONE news.</p>
          <div className="flex gap-4 max-w-2xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-8 py-4 rounded-full bg-black text-white placeholder-gray-400 focus:outline-none focus:bg-gray-900 text-lg font-semibold"
            />
            <Button className="px-10 py-4 bg-black text-cyan-400 rounded-full font-black text-lg hover:bg-gray-900">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}