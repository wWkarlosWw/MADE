"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { IconArrow, IconClose, IconExpand } from "./Icons";
import { ease } from "./motion";

/** Galería del proyecto con flechas y vista ampliada (borrador "Imágenes del proyecto") */
export default function ProjectGallery({ images, name }: { images: string[]; name: string }) {
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [open, setOpen] = useState(false);

  const go = useCallback(
    (d: number) => {
      setDir(d);
      setI((n) => (n + d + images.length) % images.length);
    },
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go]);

  const slide = (cls: string, priority = false) => (
    <AnimatePresence initial={false} custom={dir} mode="popLayout">
      <motion.div
        key={images[i]}
        custom={dir}
        initial={{ opacity: 0, x: dir * 60, scale: 1.04 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        exit={{ opacity: 0, x: dir * -60, scale: 0.98 }}
        transition={{ duration: 0.6, ease }}
        className={`absolute inset-0 ${cls}`}
      >
        <Image src={images[i]} alt={`${name} — imagen ${i + 1} de ${images.length}`} fill sizes="(min-width: 1024px) 60vw, 100vw" preload={priority} className="object-cover" />
      </motion.div>
    </AnimatePresence>
  );

  const arrows = (cls = "") => (
    <>
      <button onClick={() => go(-1)} aria-label="Imagen anterior" className={`absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow-lg backdrop-blur transition hover:bg-orange hover:text-white ${cls}`}>
        <IconArrow className="size-5 rotate-180" />
      </button>
      <button onClick={() => go(1)} aria-label="Imagen siguiente" className={`absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy shadow-lg backdrop-blur transition hover:bg-orange hover:text-white ${cls}`}>
        <IconArrow className="size-5" />
      </button>
    </>
  );

  return (
    <>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-navy/5 sm:aspect-[16/11]">
        {slide("", true)}
        {images.length > 1 && arrows()}
        <button onClick={() => setOpen(true)} aria-label="Ampliar imagen" className="absolute right-3 top-3 grid size-11 place-items-center rounded-xl bg-orange text-white shadow-lg transition hover:scale-105">
          <IconExpand className="size-5" />
        </button>
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((_, k) => (
            <button key={k} onClick={() => { setDir(k > i ? 1 : -1); setI(k); }} aria-label={`Ver imagen ${k + 1}`} className={`h-1.5 rounded-full transition-all ${k === i ? "w-6 bg-orange" : "w-1.5 bg-white/80"}`} />
          ))}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-5">
        {images.map((src, k) => (
          <button key={src} onClick={() => { setDir(k > i ? 1 : -1); setI(k); }} className={`relative aspect-[4/3] overflow-hidden rounded-xl transition ${k === i ? "ring-2 ring-orange ring-offset-2" : "opacity-70 hover:opacity-100"}`} aria-label={`Miniatura ${k + 1}`}>
            <Image src={src} alt="" fill sizes="120px" className="object-cover" />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-navy-900/95 p-4 backdrop-blur-sm sm:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={`Galería de ${name}`}
            onClick={() => setOpen(false)}
          >
            <button onClick={() => setOpen(false)} aria-label="Cerrar" className="absolute right-4 top-4 grid size-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-orange">
              <IconClose className="size-6" />
            </button>
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, ease }}
              className="relative aspect-[16/10] w-full max-w-6xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {slide("")}
              {images.length > 1 && arrows("sm:size-14")}
            </motion.div>
            <p className="absolute bottom-5 text-sm font-semibold text-white/70">{i + 1} / {images.length}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
