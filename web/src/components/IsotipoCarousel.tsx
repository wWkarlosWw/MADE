"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ease } from "./motion";

// Piezas del isotipo (viewBox 500 168 846 746)
const LEG = "M904.8,186.9v383a88.5,88.5,0,0,1-17.5,52.7L691.8,884.7A55.4,55.4,0,0,1,647.3,907H519.9a13.1,13.1,0,0,1-11.6-19.3L879.9,180.8a13.2,13.2,0,0,1,11.7-7.1h0A13.2,13.2,0,0,1,904.8,186.9Z";
const TRI = "M938,186.3V585.2a12.5,12.5,0,0,0,12.6,12.6h214.8a12.6,12.6,0,0,0,11.1-18.6L961.7,180.4a12.6,12.6,0,0,0-11.1-6.7h0A12.6,12.6,0,0,0,938,186.3Z";
const BASE = "M950.7,632.1h241.1a12.7,12.7,0,0,1,11.2,6.5l136.6,250.5c4.4,8.1-1.7,17.9-11.3,17.9H1178.2a12.8,12.8,0,0,1-9.6-4.2L941.2,652.4C934,644.5,939.8,632.1,950.7,632.1Z";

type Part = {
  id: string;
  d: string;
  color: string;
  tint: number;
  photos: string[];
  /** Recorte de la imagen (en unidades del viewBox) */
  box: { x: number; y: number; w: number; h: number };
  intro: { x: number; y: number };
  offset: number;
};

const parts: Part[] = [
  {
    id: "leg",
    d: LEG,
    color: "#868485",
    tint: 0.12,
    photos: ["/img/made-edificio.webp", "/img/ft-9.webp", "/img/luna-blanca.webp", "/img/ft-7.webp"],
    box: { x: 430, y: 150, w: 560, h: 780 },
    intro: { x: -120, y: 120 },
    offset: 0,
  },
  {
    id: "tri",
    d: TRI,
    color: "#f1550a",
    tint: 0.55,
    photos: ["/img/ft-2.webp", "/img/ft-4.webp", "/img/ft-1.webp", "/img/obra-md.webp"],
    box: { x: 900, y: 160, w: 320, h: 460 },
    intro: { x: 0, y: -160 },
    offset: 1.4,
  },
  {
    id: "base",
    d: BASE,
    color: "#1d2c43",
    tint: 0.55,
    photos: ["/img/ft-17.webp", "/img/ft-10.webp", "/img/ft-19.webp", "/img/ft-18.webp"],
    box: { x: 900, y: 600, w: 480, h: 340 },
    intro: { x: 200, y: 0 },
    offset: 2.8,
  },
];

const INTERVAL = 4200;

function Piece({ part, index }: { part: Part; index: number }) {
  const [i, setI] = useState(0);
  const { photos, box } = part;

  useEffect(() => {
    let id: ReturnType<typeof setInterval> | undefined;
    const t = setTimeout(() => {
      setI(1 % photos.length);
      id = setInterval(() => setI((n) => (n + 1) % photos.length), INTERVAL);
    }, INTERVAL + part.offset * 1000);
    return () => {
      clearTimeout(t);
      if (id) clearInterval(id);
    };
  }, [photos.length, part.offset]);

  return (
    <motion.g
      initial={{ opacity: 0, ...part.intro }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.3, ease, delay: index * 0.2 }}
    >
      <path d={part.d} fill={part.color} />
      <g clipPath={`url(#clip-${part.id})`}>
        <AnimatePresence initial={false}>
          <motion.image
            key={photos[i]}
            href={photos[i]}
            x={box.x}
            y={box.y}
            width={box.w}
            height={box.h}
            preserveAspectRatio="xMidYMid slice"
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.1, ease: "easeInOut" }, scale: { duration: 5, ease: "linear" } }}
            style={{ transformOrigin: `${box.x + box.w / 2}px ${box.y + box.h / 2}px` }}
          />
        </AnimatePresence>
        {/* velo de color de marca para que la pieza conserve su identidad */}
        <path d={part.d} fill={part.color} style={{ opacity: part.tint, mixBlendMode: "multiply" }} />
      </g>
    </motion.g>
  );
}

/** Isotipo "A" con fotos rotando dentro de cada pieza */
export default function IsotipoCarousel({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <div ref={ref} className={className}>
      <svg viewBox="500 168 846 746" className="w-full overflow-visible" role="img" aria-label="Isotipo de MADE con fotografías de nuestros proyectos">
        <defs>
          {parts.map((p) => (
            <clipPath key={p.id} id={`clip-${p.id}`}>
              <path d={p.d} />
            </clipPath>
          ))}
        </defs>
        <motion.g style={{ y: y2 }}>
          <Piece part={parts[0]} index={0} />
        </motion.g>
        <motion.g style={{ y: y1 }}>
          <Piece part={parts[1]} index={1} />
        </motion.g>
        <motion.g style={{ y: y2 }}>
          <Piece part={parts[2]} index={2} />
        </motion.g>
      </svg>
    </div>
  );
}
