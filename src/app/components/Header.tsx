import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-black border-b-2 border-black pb-1"
      : "text-gray-500 hover:text-black transition";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <NavLink
            to="/"
            className="text-gray-600 tracking-wider hover:text-black transition"
          >
            ALEXANDRA
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex space-x-8">

            <NavLink to="/about" className={linkClass}>
              ABOUT
            </NavLink>

            <NavLink to="/portfolio" className={linkClass}>
              PORTFOLIO
            </NavLink>

            <NavLink to="/contact" className={linkClass}>
              CONTACT
            </NavLink>

          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE NAV */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">

            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={linkClass}
            >
              ABOUT
            </NavLink>

            <NavLink
              to="/portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className={linkClass}
            >
              PORTFOLIO
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={linkClass}
            >
              CONTACT
            </NavLink>

          </nav>
        )}
      </div>
    </header>
  );
}