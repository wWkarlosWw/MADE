"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { IconArrow, IconCheck } from "./Icons";
import { Reveal } from "./motion";

const field =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-orange focus:bg-white/10 focus:ring-4 focus:ring-orange/20";

export default function Register() {
  const [sent, setSent] = useState(false);

  return (
    <section id="registro" className="px-3 pb-3 sm:px-6">
      <Reveal className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-navy text-white sm:rounded-[2.5rem]">
        <Image src="/img/ft-18.webp" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
        <div className="grid gap-10 p-7 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange">¿No es suficiente?</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Regístrate y entérate de <span className="text-orange">todo</span>
            </h2>
            <p className="mt-4 max-w-md text-white/70">
              Recibe primero los lanzamientos, preventas y descuentos exclusivos. Un asesor de MADE se pondrá en contacto contigo.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div key="ok" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 rounded-2xl bg-white/10 p-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-orange">
                  <IconCheck className="size-6" />
                </span>
                <div>
                  <p className="font-display text-xl font-extrabold">¡Gracias por registrarte!</p>
                  <p className="text-sm text-white/70">Pronto recibirás novedades de nuestros proyectos.</p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                exit={{ opacity: 0, y: -10 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="grid gap-3 sm:grid-cols-2"
              >
                <input required aria-label="Nombre" placeholder="Nombre" className={field} autoComplete="given-name" />
                <input required aria-label="Apellido" placeholder="Apellido" className={field} autoComplete="family-name" />
                <input required type="email" aria-label="Correo electrónico" placeholder="Correo electrónico" className={`${field} sm:col-span-2`} autoComplete="email" />
                <div className="flex overflow-hidden rounded-xl border border-white/15 bg-white/5 focus-within:border-orange focus-within:ring-4 focus-within:ring-orange/20 sm:col-span-2">
                  <span className="grid place-items-center border-r border-white/15 px-4 text-sm font-semibold text-white/70">+591</span>
                  <input required type="tel" aria-label="Teléfono" placeholder="Teléfono / WhatsApp" className="w-full bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/45" />
                </div>
                <select defaultValue="" aria-label="Me interesa" className={`${field} sm:col-span-2 [&>option]:text-navy`}>
                  <option value="" disabled>Me interesa…</option>
                  <option>Proyectos en venta</option>
                  <option>Inmuebles en alquiler</option>
                  <option>Ofrecer terreno</option>
                  <option>Invertir con MADE</option>
                  <option>Trabajar con MADE</option>
                </select>
                <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
                  <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-orange px-8 py-3.5 font-display font-extrabold tracking-wide transition hover:bg-white hover:text-navy">
                    ENVIAR
                    <IconArrow className="size-4 transition group-hover:translate-x-1" />
                  </button>
                  <p className="text-xs text-white/50">Al enviar aceptas ser contactado por MADE.</p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}
