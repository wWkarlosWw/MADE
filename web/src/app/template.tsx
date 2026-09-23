"use client";

import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import Logo from "@/components/Logo";
import { ease } from "@/components/motion";

/**
 * Transición entre páginas (borrador "Transición"): cortina azul con el logo
 * que se retira al montar cada página. template.tsx se vuelve a montar en cada navegación.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Cada página empieza arriba (scroll instantáneo, sin el "smooth" global),
  // salvo que la URL traiga un ancla (#agenda, etc.).
  useLayoutEffect(() => {
    if (window.location.hash) return;
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = prev;
  }, [pathname]);

  return (
    <>
      <motion.div
        aria-hidden
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.9, ease, delay: 0.55 }}
        className="pointer-events-none fixed inset-0 z-[100] grid place-items-center bg-navy"
        style={{ "--logo-main": "#fff", "--logo-gray": "#c9c7c8" } as React.CSSProperties}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 1.05] }}
          transition={{ duration: 0.8, times: [0, 0.3, 0.75, 1] }}
        >
          <Logo className="h-14 w-auto sm:h-20" />
        </motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}>
        {children}
      </motion.div>
    </>
  );
}
