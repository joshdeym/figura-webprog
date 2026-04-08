import Button from '../components/Button';
import streetImage from '../assets/vlonegraffiti.jpg';
import premiumQualityImage from '../assets/valone.jpg';
import uniqueDesignsImage from '../assets/premiumquality.webp';
import globalCommunityImage from '../assets/streets.webp';

export default function HomePage() {
  return (
    <div className="bg-black w-full min-h-screen m-0 p-0 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-32 w-full m-0 p-0">
        <div className="px-4 md:px-20 py-16 mx-auto max-w-7xl">
          <p className="text-cyan-500 font-bold uppercase tracking-widest mb-6">VLONE COLLECTION</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 md:mb-8 leading-tight">VLONE Street Wear</h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed font-semibold">Experience premium quality streetwear designed for the bold and fearless. VLONE represents independence, rebellion, and authentic street culture.</p>
            </div>
            <div className="relative rounded-xl overflow-hidden border-4 border-cyan-500">
              <img
                src={streetImage}
                alt="VLONE graffiti"
                className="w-auto h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="px-0 py-32 bg-gray-900 w-full m-0">
        <div className="px-4 md:px-20 mx-auto max-w-7xl">
          <div className="mb-14 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">Why Choose VLONE</h2>
            <p className="text-lg md:text-2xl text-cyan-400 font-semibold">Premium quality meets authentic street culture</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
            <div className="bg-black rounded-2xl overflow-hidden border border-cyan-500 hover:shadow-2xl transition hover:border-cyan-300">
              <div className="w-full h-64 overflow-hidden">
                <img src={premiumQualityImage} alt="Premium Quality" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">Premium Quality</h3>
              </div>
            </div>
            <div className="bg-black rounded-2xl overflow-hidden border border-cyan-500 hover:shadow-2xl transition hover:border-cyan-300">
              <div className="w-full h-64 overflow-hidden">
                <img src={uniqueDesignsImage} alt="Unique Designs" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">Unique Designs</h3>
              </div>
            </div>
            <div className="bg-black rounded-2xl overflow-hidden border border-cyan-500 hover:shadow-2xl transition hover:border-cyan-300">
              <div className="w-full h-64 overflow-hidden">
                <img src={globalCommunityImage} alt="Global Community" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">Global Community</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black text-white px-0 py-32 w-full m-0">
        <div className="px-4 md:px-20 mx-auto max-w-7xl">
          <p className="text-cyan-500 font-bold uppercase tracking-widest mb-8">OUR IMPACT</p>
          <h2 className="text-6xl font-black mb-16">VLONE By The Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            <div>
              <h3 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 text-cyan-500">50K+</h3>
              <p className="text-lg md:text-xl text-gray-300 font-semibold">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 text-cyan-500">100+</h3>
              <p className="text-lg md:text-xl text-gray-300 font-semibold">Collections</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 text-cyan-500">15</h3>
              <p className="text-lg md:text-xl text-gray-300 font-semibold">Countries</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 text-cyan-500">1M+</h3>
              <p className="text-lg md:text-xl text-gray-300 font-semibold">Social Followers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white px-0 py-32 w-full m-0">
        <div className="px-4 md:px-20 mx-auto max-w-7xl">
          <h2 className="text-6xl font-black mb-8">Join The VLONE Movement</h2>
          <p className="text-3xl mb-12 text-gray-100 font-semibold leading-relaxed">Explore our latest collection and express your individuality through authentic street fashion.</p>
          <Button className="px-14 py-6 bg-black text-cyan-400 rounded-full font-black text-xl hover:bg-gray-900">Shop Collection Now</Button>
        </div>
      </section>
    </div>
  );
}