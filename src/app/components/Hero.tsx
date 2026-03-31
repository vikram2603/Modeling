import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // 🎯 MOUSE PARALLAX
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">

      {/* 🎥 BACKGROUND (CINEMATIC ZOOM) */}
      <motion.div
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{
            x: mouse.x,
            y: mouse.y,
          }}
          transition={{ type: "spring", stiffness: 20 }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1618908623278-dfcf55e6f687?q=80&w=1080"
            alt="Fashion model portrait"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 🎬 CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/70" />
      </motion.div>

      {/* 🎯 CONTENT */}
      <div className="relative h-full flex items-center justify-center text-white px-4">
        <div className="text-center">

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 60, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light"
          >
            ALEXANDRA
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-sm md:text-lg tracking-[0.5em] text-gray-300"
          >
            MODEL · NEW YORK
          </motion.p>

        </div>
      </div>

      {/* 🔥 SCROLL INDICATOR (FLOATING) */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[2px] h-14 bg-white/40 relative overflow-hidden rounded-full">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="absolute w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>

    </section>
  );
}