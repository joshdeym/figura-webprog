import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-surface border-t border-accent mt-20 w-full">
      <div className="px-4 md:px-20 py-16 mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-black text-heading mb-4">VLONE</h3>
            <p className="text-primary text-sm leading-relaxed mb-6">
              Premium streetwear for the bold and fearless. Express your individuality through authentic street fashion.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-primary border border-accent rounded-full flex items-center justify-center hover:bg-accent hover:text-heading transition">
                <span className="text-accent hover:text-heading">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary border border-accent rounded-full flex items-center justify-center hover:bg-accent hover:text-heading transition">
                <span className="text-accent hover:text-heading">IG</span>
              </a>
              <a href="#" className="w-10 h-10 bg-primary border border-accent rounded-full flex items-center justify-center hover:bg-accent hover:text-heading transition">
                <span className="text-accent hover:text-heading">TK</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-bold text-heading mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary hover:text-accent transition text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary hover:text-accent transition text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-primary hover:text-accent transition text-sm">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* VLONE Background */}
          <div>
            <h4 className="text-lg font-bold text-heading mb-6">VLONE Background</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-primary text-sm">Founded in Harlem street culture</span>
              </li>
              <li>
                <span className="text-primary text-sm">Built around the A$AP Mob mindset</span>
              </li>
              <li>
                <span className="text-primary text-sm">Known for bold visuals and rebellion</span>
              </li>
              <li>
                <span className="text-primary text-sm">Designed for independent thinkers</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-heading mb-6">Stay Updated</h4>
            <p className="text-primary text-sm mb-4">
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-primary border border-accent text-heading placeholder-primary focus:outline-none focus:border-accent"
              />
              <button className="px-4 py-2 bg-accent text-heading font-bold hover:opacity-80 transition">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary text-xs md:text-sm">
            <p>&copy; 2024 VLONE. All rights reserved. | Made with 🔥 for street culture</p>
          </div>
          <div className="flex gap-6 text-primary text-xs md:text-sm">
            <a href="#" className="hover:text-accent transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
