import { NavLink } from "react-router-dom";

export function Footer() {
  const linkStyle =
    "text-gray-400 hover:text-white transition duration-300 tracking-wide";

  return (
    <footer className="relative bg-black text-white border-t border-white/10 mt-20 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-3 gap-12">

        {/* 💎 BRAND */}
        <div>
          <h2 className="text-2xl tracking-[0.3em] font-light mb-4">
            ALEXANDRA
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            A modern fashion portfolio blending elegance, creativity, and
            visual storytelling.
          </p>
        </div>

        {/* 🔗 NAVIGATION */}
        <div>
          <h3 className="text-xs tracking-[0.3em] mb-6 text-gray-500">
            NAVIGATION
          </h3>

          <ul className="space-y-3">
            <li>
              <NavLink to="/about" className={linkStyle}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/portfolio" className={linkStyle}>
                Portfolio
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={linkStyle}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* 📞 CONTACT */}
        <div>
          <h3 className="text-xs tracking-[0.3em] mb-6 text-gray-500">
            CONTACT
          </h3>

          <p className="text-gray-400 text-sm mb-2">
            alexandra@email.com
          </p>

          <p className="text-gray-400 text-sm">
            +91 9876543210
          </p>
        </div>

      </div>

      {/* 🔥 DIVIDER */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto w-[90%]" />

      {/* 🧠 BOTTOM */}
      <div className="text-center text-gray-500 text-xs py-6 tracking-wider">
        © 2026 Alexandra Portfolio. All rights reserved.
      </div>
    </footer>
  );
}