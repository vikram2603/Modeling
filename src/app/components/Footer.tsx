export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-xl tracking-widest mb-4">ALEXANDRA</h2>
          <p className="text-gray-400 text-sm">
            A modern fashion portfolio blending elegance, creativity, and visual storytelling.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-sm tracking-widest mb-4 text-gray-500">NAVIGATION</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-sm tracking-widest mb-4 text-gray-500">CONTACT</h3>
          <p className="text-gray-400 text-sm">alexandra@email.com</p>
          <p className="text-gray-400 text-sm">+91 9876543210</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-gray-500 text-xs mt-10">
        © 2026 Alexandra Portfolio. All rights reserved.
      </div>
    </footer>
  );
}