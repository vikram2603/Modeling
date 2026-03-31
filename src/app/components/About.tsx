import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <div className="min-h-screen flex flex-col justify-start py-20 px-4 sm:px-6 lg:px-8 bg-white">
      
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl tracking-widest font-dark text-black">
              ABOUT ME
            </h1>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a professional model with over 5 years of experience in the
                fashion industry. I've worked with renowned brands and photographers
                across editorial, runway, and commercial projects.
              </p>

              <p>
                My passion for fashion has taken me across the world, from Milan
                to Paris, working on campaigns that celebrate elegance, creativity,
                and diversity.
              </p>
            </div>

            {/* DETAILS */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h3 className="text-xs tracking-widest text-gray-400">HEIGHT</h3>
                <p className="text-lg text-black">5'10" / 178 cm</p>
              </div>

              <div>
                <h3 className="text-xs tracking-widest text-gray-400">BUST</h3>
                <p className="text-lg text-black">32" / 81 cm</p>
              </div>

              <div>
                <h3 className="text-xs tracking-widest text-gray-400">WAIST</h3>
                <p className="text-lg text-black">24" / 61 cm</p>
              </div>

              <div>
                <h3 className="text-xs tracking-widest text-gray-400">HIPS</h3>
                <p className="text-lg text-black">35" / 89 cm</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[500px] md:h-[650px] overflow-hidden rounded-2xl shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1616358278773-e5e4154a336f?q=80&w=1080"
              alt="Model portrait"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

        </div>
      </div>

    </div>
  );
}