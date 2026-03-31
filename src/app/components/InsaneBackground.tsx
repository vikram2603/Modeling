import { useEffect, useState } from "react";

export function InsaneBackground() {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* 🔥 ANIMATED GRADIENT */}
      <div className="absolute inset-0 animate-gradient bg-[linear-gradient(120deg,#000000,#050505,#0a0a0a,#000000)]" />

      {/* 🎯 MOUSE SPOTLIGHT */}
      <div
        className="absolute inset-0 transition duration-200"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />

      {/* ✨ FLOATING ORBS */}
      <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] top-10 left-10 animate-float" />
      <div className="absolute w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] bottom-20 right-20 animate-float delay-2000" />

      {/* 🎬 VIGNETTE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.9))]" />

      {/* 🎨 NOISE */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

    </div>
  );
}