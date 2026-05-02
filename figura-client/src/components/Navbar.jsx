import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import vloneLogo from "../assets/vlone logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    path === "/dashboard"
      ? location.pathname.startsWith("/dashboard")
      : location.pathname === path;

  return (
    <nav className="bg-surface border-b border-accent shadow-xl w-full m-0 p-0">
      <div className="px-6 md:px-20 py-4 w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img src={vloneLogo} alt="VLONE Logo" className="h-10 md:h-12 w-auto" />
          </Link>

          <button
            className="md:hidden text-accent p-2 rounded-md border border-accent"
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
                    ? 'text-accent border-b-2 border-accent pb-2' 
                    : 'text-primary hover:text-heading'
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
                    ? 'text-accent border-b-2 border-accent pb-2' 
                    : 'text-primary hover:text-heading'
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
                    ? 'text-accent border-b-2 border-accent pb-2' 
                    : 'text-primary hover:text-heading'
                }`}
              >
                Articles
              </Link>
            </li>
            <li>
              <Link
                to="/auth/signin"
                className="inline-flex w-28 items-center justify-center rounded-full border border-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent transition hover:bg-accent hover:text-black"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/auth/signup"
                className="inline-flex w-28 items-center justify-center rounded-full border border-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-accent transition hover:bg-accent hover:text-black"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {isOpen && (
          <div className="md:hidden mt-3 border-t border-accent pt-4">
            <ul className="flex flex-col gap-3 text-lg">
              <li>
                <Link to="/" className="block px-2 py-2 text-heading bg-surface rounded-lg">Home</Link>
              </li>
              <li>
                <Link to="/about" className="block px-2 py-2 text-heading bg-surface rounded-lg">About</Link>
              </li>
              <li>
                <Link to="/articles" className="block px-2 py-2 text-heading bg-surface rounded-lg">Articles</Link>
              </li>
              <li>
                <Link to="/auth/signin" className="block w-28 px-3 py-2 text-center text-accent border border-accent rounded-lg">Sign In</Link>
              </li>
              <li>
                <Link to="/auth/signup" className="block w-28 px-3 py-2 text-center text-accent border border-accent rounded-lg">Sign Up</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;