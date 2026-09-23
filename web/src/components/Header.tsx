"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { nav } from "@/lib/site";
import Logo from "./Logo";
import { IconClose, IconMenu } from "./Icons";
import { ease } from "./motion";

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease, delay: 1.1 }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl px-3 py-2 transition-all duration-500 sm:px-4 ${
          scrolled || open ? "bg-navy/90 shadow-2xl shadow-navy/30 backdrop-blur-xl" : "bg-transparent"
        }`}
        style={{ "--logo-main": "#fff", "--logo-gray": "#c9c7c8", "--logo-tagline": "#f1550a" } as React.CSSProperties}
      >
        <Link href="/" className="shrink-0 py-1" aria-label="MADE — Inicio">
          <Logo className={`w-auto transition-all duration-500 ${scrolled ? "h-9" : "h-10 sm:h-12"}`} />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/15 bg-white/[0.06] p-1 backdrop-blur-md lg:flex" aria-label="Principal">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${active ? "text-white" : "text-white/75 hover:text-white"}`}
              >
                {active && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/15" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contacto#agenda"
            className="hidden rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange/25 transition hover:-translate-y-0.5 hover:bg-orange-600 sm:inline-flex"
          >
            Agenda tu visita
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid size-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <IconClose className="size-6" /> : <IconMenu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.3, ease }}
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl bg-navy/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
            aria-label="Menú móvil"
          >
            {nav.map((item, i) => (
              <motion.div key={item.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 font-display text-lg font-bold ${isActive(item.href) ? "bg-white/10 text-orange" : "text-white hover:bg-white/10"}`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <Link href="/contacto#agenda" onClick={() => setOpen(false)} className="mt-2 block rounded-xl bg-orange px-4 py-3 text-center font-semibold text-white">
              Agenda tu visita
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
