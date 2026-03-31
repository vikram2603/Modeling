import { Mail, Instagram, MapPin } from "lucide-react";

export function Contact() {
  return (
    <div className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto w-full">
        <h1>
          Contact
        </h1>

        {/* TITLE */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl tracking-widest font-light mb-4 text-black">
            GET IN TOUCH
          </h1>
          <p className="text-gray-500">
            Available for bookings and collaborations
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* EMAIL */}
          <div className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition">
            <div className="flex justify-center">
              <Mail className="w-8 h-8 text-gray-700" />
            </div>

            <h3 className="text-xs tracking-widest text-gray-400">EMAIL</h3>

            <a
              href="mailto:contact@alexandra.com"
              className="block text-lg text-gray-900 hover:text-gray-500 transition"
            >
              contact@alexandra.com
            </a>
          </div>

          {/* INSTAGRAM */}
          <div className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition">
            <div className="flex justify-center">
              <Instagram className="w-8 h-8 text-gray-700" />
            </div>

            <h3 className="text-xs tracking-widest text-gray-400">
              INSTAGRAM
            </h3>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg text-gray-900 hover:text-gray-500 transition"
            >
              @alexandra_model
            </a>
          </div>

          {/* LOCATION */}
          <div className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition">
            <div className="flex justify-center">
              <MapPin className="w-8 h-8 text-gray-700" />
            </div>

            <h3 className="text-xs tracking-widest text-gray-400">
              LOCATION
            </h3>

            <p className="text-lg text-gray-900">New York, NY</p>
          </div>
        </div>

        {/* FOOTER TEXT */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-400">
            Represented by Elite Model Management
          </p>
        </div>
      </div>
    </div>
  );
}