"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

/** Botón "Agenda tu visita" fijo a la derecha, con animación de latido */
export default function FloatingCta() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setShow(v > 700));

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="/contacto#agenda"
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="fixed bottom-5 right-0 z-40 sm:bottom-auto sm:top-1/2"
          aria-label="Agenda tu visita y trabaja con nosotros"
        >
          <span className="relative block animate-heartbeat">
            <span className="absolute inset-0 animate-ping-slow rounded-l-full bg-orange/60" />
            <span className="relative block rounded-l-full bg-orange py-3 pl-6 pr-5 text-white shadow-2xl shadow-orange/40">
              <span className="block font-display text-sm font-extrabold uppercase leading-tight sm:text-base">Agenda tu visita</span>
              <span className="block text-[10px] font-semibold uppercase tracking-wider text-white/85">y trabaja con nosotros</span>
            </span>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
