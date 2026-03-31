import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useNavigate } from "react-router-dom";
import { FadeIn } from "./FadeIn";
import { useRef } from "react";

const portfolioImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1670132718453-70321d9ecf20?q=80&w=1080",
    category: "Editorial",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1762430815620-fcca603c240c?q=80&w=1080",
    category: "Runway",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1758613654186-6ce234bf94ab?q=80&w=1080",
    category: "Studio",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1654460274151-9c8826f43175?q=80&w=1080",
    category: "Outdoor",
  },
];

// unique categories
const categories = Array.from(
  new Map(portfolioImages.map((item) => [item.category, item])).values()
);

export function Portfolio() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <FadeIn>
          <div className="pt-25 pb-10 text-center">
  <h2 className="text-7xl md:text-6xl tracking-widest font-light text-black">
    PORTFOLIO
  </h2>
</div>
        </FadeIn>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((item) => (
            <TiltCard
              key={item.category}
              image={item.src}
              title={item.category}
              onClick={() =>
                navigate(`/portfolio/${item.category.toLowerCase()}`)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* 🔥 ULTRA PREMIUM TILT CARD */
function TiltCard({
  image,
  title,
  onClick,
}: {
  image: string;
  title: string;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 8;
    const rotateY = (x / rect.width - 0.5) * 8;

    if (ref.current) {
      ref.current.style.transform = `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.04)
      `;
    }
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(1200px) rotateX(0) rotateY(0) scale(1)";
    }
  };

  return (
    <FadeIn>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        onClick={onClick}
        className="relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer 
        transition duration-500 group will-change-transform"
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        {/* IMAGE WRAPPER (FIX BORDER BUG 🔥) */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover 
            transition duration-700 group-hover:scale-110"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden 
        bg-gradient-to-t from-black/70 via-black/20 to-transparent 
        opacity-60 group-hover:opacity-90 transition duration-500" />

        {/* TEXT */}
        <div className="absolute bottom-6 left-6">
          <h3 className="text-white text-2xl tracking-[0.2em] font-light 
          translate-y-6 opacity-0 
          group-hover:translate-y-0 group-hover:opacity-100 
          transition duration-500">
            {title}
          </h3>
        </div>

        {/* GLOW */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 
        transition duration-500 bg-white/5 backdrop-blur-[2px]" />

        {/* SHADOW DEPTH (NEW 🔥) */}
        <div className="absolute inset-0 rounded-3xl shadow-xl opacity-0 
        group-hover:opacity-100 transition duration-500" />
      </div>
    </FadeIn>
  );
}