import Button from '../components/Button';

export default function AboutPage() {
  return (
    <div className="bg-primary w-full min-h-screen m-0 p-0 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 py-32 w-full m-0 p-0">
        <div className="px-4 md:px-20 py-16 mx-auto max-w-7xl">
          <p className="text-accent font-bold uppercase tracking-widest mb-6">ABOUT VLONE</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-heading mb-6">About VLONE</h1>
              <p className="text-lg md:text-xl text-primary leading-relaxed">VLONE is more than clothing. It's a lifestyle, a movement, and a statement. We create premium streetwear for those who dare to be different.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-orange-400 h-72 md:h-96 lg:h-screen flex items-center justify-center">
              <span className="text-9xl"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-0 py-32 bg-surface w-full m-0">
        <div className="px-4 md:px-20 mx-auto max-w-7xl">
          <p className="text-accent font-bold uppercase tracking-widest mb-6">OUR STORY</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-heading mb-8">Our Mission</h2>
              <p className="text-md md:text-xl text-primary mb-6 leading-relaxed">At VLONE, we believe that fashion is a form of rebellion. Our mission is to create authentic, high-quality streetwear that empowers individuals to express their unique identity and stand out from the crowd.</p>
              <p className="text-md md:text-xl text-primary leading-relaxed">We're committed to crafting pieces that tell a story and inspire confidence in everyone who wears them.</p>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-orange-400 rounded-lg h-72 md:h-96 flex items-center justify-center">
              <span className="text-9xl"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-0 py-32 bg-primary w-full m-0">
        <div className="px-4 md:px-20 mx-auto max-w-7xl">
          <p className="text-accent font-bold uppercase tracking-widest mb-6 text-center">OUR VALUES</p>
          <h2 className="text-6xl font-black text-heading mb-16 text-center">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-surface rounded-2xl p-10 border border-accent hover-border-accent transition">
              <h3 className="text-2xl font-bold text-heading mb-4">Authenticity</h3>
              <p className="text-primary text-lg leading-relaxed">We create pieces that are genuine and true to our brand identity. No compromises, no selling out. VLONE keeps it real.</p>
            </div>
            <div className="bg-surface rounded-2xl p-10 border border-accent hover-border-accent transition">
              <h3 className="text-2xl font-bold text-heading mb-4">Quality</h3>
              <p className="text-primary text-lg leading-relaxed">Premium materials, exceptional craftsmanship, and attention to detail define every piece we create. Excellence is non-negotiable.</p>
            </div>
            <div className="bg-surface rounded-2xl p-10 border border-accent hover-border-accent transition">
              <h3 className="text-2xl font-bold text-heading mb-4">Rebellion</h3>
              <p className="text-primary text-lg leading-relaxed">We celebrate those who challenge the status quo. VLONE is for the bold, the fearless, and the independent thinkers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-0 py-32 bg-surface w-full m-0">
        <div className="px-4 md:px-20 mx-auto max-w-7xl">
          <p className="text-accent font-bold uppercase tracking-widest mb-6 text-center">OUR TEAM</p>
          <h2 className="text-6xl font-black text-heading mb-16 text-center">Meet The Crew</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="bg-primary rounded-2xl p-8 text-center border border-accent hover-border-accent transition">
                <div className="bg-gradient-accent w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-heading text-5xl">
                  
                </div>
                <h3 className="text-xl font-bold text-heading mb-2">Team Member {member}</h3>
                <p className="text-accent font-semibold">Fashion Creative</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-cta text-heading px-0 py-32 w-full m-0">
        <div className="px-4 md:px-20 mx-auto max-w-7xl">
          <h2 className="text-6xl font-black mb-8">Want to Join The Crew?</h2>
          <p className="text-3xl mb-12 text-primary font-semibold leading-relaxed">We're always looking for passionate individuals who share our vision and values. Be part of the VLONE movement.</p>
          <Button className="px-14 py-6 bg-primary text-accent rounded-full font-black text-xl hover:bg-surface-dark">Join Us</Button>
        </div>
      </section>
    </div>
  );
}