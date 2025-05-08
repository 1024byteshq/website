import { useState, useEffect, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";

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
    <div className="min-h-screen flex flex-col relative bg-black/90">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[30px] z-0"></div>

      {!isHomePage && (
        <header className="fixed w-full bg-black/30 backdrop-blur-sm z-50 border-b border-white/10">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold text-white">
                1024
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link
                  to="/about"
                  className="nav-link text-white hover:text-[#a0ff6a]/80"
                >
                  About
                </Link>
                {/* <Link to="/rd" className="nav-link">
                  R&D
                </Link> */}
                <Link
                  to="/product-tools"
                  className="nav-link text-white hover:text-[#a0ff6a]/80"
                >
                  Product and Tools
                </Link>

                {/* <Link
                  to="/node"
                  className="nav-link text-white hover:text-[#a0ff6a]/80"
                >
                  Node
                </Link> */}
                {/* <Link
                  to="/community"
                  className="nav-link text-white hover:text-white/80"
                >
                  Community
                </Link> */}
                {/* <Link
                  to="/contact"
                  className="nav-link text-white hover:text-white/80"
                >
                  Contact
                </Link> */}
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-around">
                  <span
                    className={`block w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}
                  />
                  <span
                    className={`block w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`block w-full h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
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
                <Link
                  to="/about"
                  className="block nav-link text-white hover:text-[#a0ff6a]/80"
                >
                  About
                </Link>
                {/* <Link to="/rd" className="block nav-link">
                  R&D
                </Link> */}
                <Link
                  to="/product-tools"
                  className="block nav-link text-white hover:text-[#a0ff6a]/80"
                >
                  Product and Tools
                </Link>
                {/* <Link to="/community" className="block nav-link">
                  Community
                </Link> */}
                {/* <Link
                  to="/node"
                  className="block nav-link text-white hover:text-[#a0ff6a]/80"
                >
                  Node
                </Link> */}
                {/* <Link to="/contact" className="block nav-link">
                  Contact
                </Link> */}
              </div>
            </div>
          </nav>
        </header>
      )}

      <main className="flex-grow relative z-10">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
