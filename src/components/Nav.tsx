import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {/* Header */}
      <header
        className="fixed top-0 w-full z-50 bg-red-900/55 backdrop-blur-md border-b border-red-500/50 shadow-lg"
        role="banner"
      >
        <div className="container mx-auto px-4 py-4">
          <nav
            className="flex items-center justify-between"
            role="navigation"
            aria-label="Main navigation"
          >
            <a
              href="/"
              className="flex items-center space-x-3 group"
              aria-label="Student Sahayak - Home"
            >
              <div
                className="p-2 bg-orange-500/20 rounded-lg group-hover:bg-orange-500/30 transition-all duration-300 cursor-pointer"
                onClick={() => navigate("/")}
              >
                <BookOpen className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <span className="text-2xl font-bold text-white font-mono tracking-wider sr-only">
                Student Sahayak
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="/services"
                className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
              >
                Services
              </a>
              <a
                href="/pricing"
                className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
              >
                Pricing
              </a>
              <a
                href="/challenge"
                className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
              >
                Challenge
              </a>
              <a
                href="/revision"
                className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
              >
                Revision
              </a>
              {/* <a
                href="/contact"
                className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
              >
                Contact
              </a> */}
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-110"
                aria-label="Toggle menu"
              >
                <div
                  className={`transition-transform duration-300 ${
                    isMenuOpen ? "rotate-90" : "rotate-0"
                  }`}
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </div>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-red-700/50 animate-fade-in-up">
                <div className="flex flex-col space-y-2 pt-4">
                  <a
                    href="/services"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-3 rounded-lg transition-all duration-300 font-medium transform hover:translate-x-2"
                  >
                    Services
                  </a>
                  <a
                    href="/pricing"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-3 rounded-lg transition-all duration-300 font-medium transform hover:translate-x-2"
                  >
                    Pricing
                  </a>
                  <a
                    href="/challenge"
                    className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
                  >
                    Challenge
                  </a>
                  <a
                    href="/revision"
                    className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 font-medium"
                  >
                    Revision
                  </a>
                  {/* <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-3 rounded-lg transition-all duration-300 font-medium transform hover:translate-x-2"
                  >
                    Contact
                  </a> */}
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Nav;
