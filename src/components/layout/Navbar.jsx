import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#research", text: "My Research" },
  { href: "#resources", text: "Resources" },
  { href: "#youtube", text: "YouTube" },
  { href: "#cv", text: "CV" },
  { href: "#publications", text: "Publications" },
];

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="relative text-gray-600 hover:text-[#553772] transition-colors px-1 py-2 group"
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#553772] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100" />
  </a>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif text-gray-900">
              Dr. Muntazir Abidi
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(({ href, text }) => (
              <NavLink key={href} href={href}>
                {text}
              </NavLink>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-[#553772] hover:bg-[#452c5d] text-white rounded-lg transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 px-2 space-y-3">
            {NAV_LINKS.map(({ href, text }) => (
              <NavLink
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {text}
              </NavLink>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-6 py-2.5 bg-[#553772] hover:bg-[#452c5d] text-white rounded-lg text-center transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
