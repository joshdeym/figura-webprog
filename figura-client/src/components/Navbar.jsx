import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import vloneLogo from "../assets/vlone.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-900 border-b border-gray-800 shadow-xl w-full m-0 p-0">
      <div className="px-6 md:px-20 py-4 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img src={vloneLogo} alt="VLONE Logo" className="h-10 md:h-12 w-auto" />
          </Link>

          <button
            className="md:hidden text-cyan-400 p-2 rounded-md border border-cyan-500"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isOpen ? '✕' : '☰'}
          </button>

          {/* Navigation Links */}
          <ul className="hidden md:flex gap-8 items-center">
            <li>
              <Link 
                to="/" 
                className={`font-bold uppercase tracking-wider transition duration-300 ${
                  isActive('/') 
                    ? 'text-cyan-400 border-b-2 border-cyan-400 pb-2' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`font-bold uppercase tracking-wider transition duration-300 ${
                  isActive('/about') 
                    ? 'text-cyan-400 border-b-2 border-cyan-400 pb-2' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/articles" 
                className={`font-bold uppercase tracking-wider transition duration-300 ${
                  isActive('/articles') 
                    ? 'text-cyan-400 border-b-2 border-cyan-400 pb-2' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Articles
              </Link>
            </li>
          </ul>
        </div>

        {isOpen && (
          <div className="md:hidden mt-3 border-t border-gray-700 pt-4">
            <ul className="flex flex-col gap-3 text-lg">
              <li>
                <Link to="/" className="block px-2 py-2 text-gray-100 bg-gray-800 rounded-lg">Home</Link>
              </li>
              <li>
                <Link to="/about" className="block px-2 py-2 text-gray-100 bg-gray-800 rounded-lg">About</Link>
              </li>
              <li>
                <Link to="/articles" className="block px-2 py-2 text-gray-100 bg-gray-800 rounded-lg">Articles</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;