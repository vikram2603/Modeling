import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import { InsaneBackground } from "./InsaneBackground";

const data: any = {
  editorial: [
    "https://images.unsplash.com/photo-1670132718453-70321d9ecf20?q=80&w=1080",
    "https://images.unsplash.com/photo-1568253130222-5fc7d0173808?q=80&w=1080",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1080",
    "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1080",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1080",
  ],
  runway: [
    "https://images.unsplash.com/photo-1762430815620-fcca603c240c?q=80&w=1080",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1080",
    "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1080",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1080",
    "https://images.unsplash.com/photo-1614942917889-c1f6a8ad933a?q=80&w=1080",
  ],
  studio: [
    "https://images.unsplash.com/photo-1758613654186-6ce234bf94ab?q=80&w=1080",
    "https://images.unsplash.com/photo-1614942917889-c1f6a8ad933a?q=80&w=1080",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1080",
    "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1080",
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1080",
  ],
};

export function CategoryPage() {
  const { category } = useParams();
  const images: string[] = [...(data[category as string] || [])];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  // preload next image
  useEffect(() => {
    if (selectedIndex !== null) {
      const img = new Image();
      img.src = images[(selectedIndex + 1) % images.length];
    }
  }, [selectedIndex]);

  // keyboard navigation 🔥
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedIndex]);

  const nextImage = () =>
    setSelectedIndex((prev) => (prev! + 1) % images.length);

  const prevImage = () =>
    setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true,
  });

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* 🔥 INSANE BACKGROUND */}
      <InsaneBackground />

      {/* 🔥 HERO */}
      <section className="relative pt-28 pb-16 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-extralight tracking-[0.35em] uppercase"
        >
          {category}
        </motion.h1>

        <div className="h-[1px] bg-white/40 mx-auto my-6 w-[120px]" />

        <p className="text-gray-400 text-sm tracking-widest">
          A refined visual narrative blending fashion and creativity
        </p>
      </section>

      {/* 🔥 GRID */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {images.map((img, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedIndex(index)}
              whileHover={{ scale: 1.04 }}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={img}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition" />

              {/* glass button */}
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition">
                <div className="bg-white/10 backdrop-blur-xl px-4 py-2 rounded-xl text-sm">
                  VIEW
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔥 INSANE LIGHTBOX */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-2xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              {...handlers}
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >

              {/* IMAGE CENTER FIX 🔥 */}
              <motion.img
                key={selectedIndex}
                src={images[selectedIndex]}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ transform: `scale(${zoom})` }}
                onDoubleClick={() => setZoom(zoom === 1 ? 2 : 1)}
              />

              {/* CLOSE */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-6 right-6 bg-white/10 backdrop-blur-lg w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20"
              >
                ✕
              </button>

              {/* PREV */}
              <button
                onClick={prevImage}
                className="absolute left-6 text-5xl opacity-40 hover:opacity-100"
              >
                ‹
              </button>

              {/* NEXT */}
              <button
                onClick={nextImage}
                className="absolute right-6 text-5xl opacity-40 hover:opacity-100"
              >
                ›
              </button>

              {/* COUNTER */}
              <div className="absolute bottom-6 text-white/70 text-sm tracking-widest">
                {selectedIndex + 1} / {images.length}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}