import Button from '../../components/Button';
import streetImage from '../../assets/vlone4.jpg';
import globalCommunityImage from '../../assets/vlone8.jpg';
import premiumQualityImage from '../../assets/vlone9.jpg';
import streetCultureImage from '../../assets/vlone10.jpg';

export default function HomePage() {
  return (
    <div className="bg-primary w-full min-h-screen m-0 p-0 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-32 w-full m-0 p-0">
        <div className="px-4 md:px-20 py-16 mx-auto max-w-7xl">
          <p className="text-accent font-bold uppercase tracking-widest mb-6">VLONE COLLECTION</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-heading mb-6 md:mb-8 leading-tight">VLONE Street Wear</h1>
              <p className="text-lg md:text-xl lg:text-2xl text-primary mb-6 md:mb-8 leading-relaxed font-semibold">Experience premium quality streetwear designed for the bold and fearless. VLONE represents independence, rebellion, and authentic street culture.</p>
            </div>
            <div className="relative rounded-xl overflow-hidden border-4 border-accent">
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
      <section className="px-0 py-32 bg-surface w-full m-0">
        <div className="px-4 md:px-20 mx-auto max-w-7xl">
          <div className="mb-14 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-heading mb-4">Why Choose VLONE</h2>
            <p className="text-lg md:text-2xl text-accent font-semibold">Premium quality meets authentic street culture</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
            <div className="bg-surface rounded-2xl overflow-hidden border border-accent hover:shadow-2xl transition hover-border-accent">
              <div className="w-full h-64 overflow-hidden">
                <img src={globalCommunityImage} alt="Global Community" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-heading">Global Community</h3>
              </div>
            </div>

            <div className="bg-surface rounded-2xl overflow-hidden border border-accent hover:shadow-2xl transition hover-border-accent">
              <div className="w-full h-64 overflow-hidden">
                <img src={premiumQualityImage} alt="Premium Quality" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-heading">Premium Quality</h3>
              </div>
            </div>

            <div className="bg-surface rounded-2xl overflow-hidden border border-accent hover:shadow-2xl transition hover-border-accent">
              <div className="w-full h-64 overflow-hidden">
                <img src={streetCultureImage} alt="Street Culture" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-heading">Street Culture</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-heading px-0 py-32 w-full m-0">
        <div className="px-4 md:px-20 mx-auto max-w-7xl">
          <p className="text-accent font-bold uppercase tracking-widest mb-8">OUR IMPACT</p>
          <h2 className="text-6xl font-black mb-16">VLONE By The Numbers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            <div>
              <h3 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 text-accent">50K+</h3>
              <p className="text-lg md:text-xl text-primary font-semibold">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 text-accent">100+</h3>
              <p className="text-lg md:text-xl text-primary font-semibold">Collections</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 text-accent">15</h3>
              <p className="text-lg md:text-xl text-primary font-semibold">Countries</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-6xl lg:text-8xl font-black mb-4 text-accent">1M+</h3>
              <p className="text-lg md:text-xl text-primary font-semibold">Social Followers</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-cta text-heading px-0 py-32 w-full m-0">
        <div className="px-4 md:px-20 mx-auto max-w-7xl">
          <h2 className="text-6xl font-black mb-8">Join The VLONE Movement</h2>
          <p className="text-3xl mb-12 text-primary font-semibold leading-relaxed">Explore our latest collection and express your individuality through authentic street fashion.</p>
          <Button className="px-14 py-6 bg-primary text-accent rounded-full font-black text-xl hover:bg-surface-dark">Shop Collection Now</Button>
        </div>
      </section>
    </div>
  );
}