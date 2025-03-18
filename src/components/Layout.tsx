import React, { useState, useEffect, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // Close menu when route changes
    setIsMenuOpen(false);

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      {!isHomePage && (
        <header className="fixed w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-primary/10">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold">
                1024
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/about" className="nav-link">
                  About
                </Link>
                <Link to="/services" className="nav-link">
                  Services
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-around">
                  <span
                    className={`block w-full h-0.5 bg-primary transform transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}
                  />
                  <span
                    className={`block w-full h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`block w-full h-0.5 bg-primary transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
                  />
                </div>
              </button>
            </div>

            {/* Mobile Navigation */}
            <div
              className={`md:hidden transition-all duration-300 ease-in-out ${
                isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="py-4 space-y-4">
                <Link to="/" className="block nav-link">
                  Home
                </Link>
                <Link to="/about" className="block nav-link">
                  About
                </Link>
                <Link to="/services" className="block nav-link">
                  Services
                </Link>
                <Link to="/contact" className="block nav-link">
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </header>
      )}

      <main className="flex-grow">
        {children}
        {!isHomePage && (
          <div className="w-full text-center py-8">
            <h1 className="font-orbitron text-6xl font-bold text-primary tracking-wider">
              1024 Bytes
            </h1>
          </div>
        )}
      </main>
    </div>
  );
};

export default Layout;
