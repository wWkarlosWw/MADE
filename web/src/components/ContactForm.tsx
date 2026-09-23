"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { IconArrow, IconCheck } from "./Icons";

const field =
  "w-full rounded-[1.75rem] border border-navy/15 bg-white px-6 py-4 text-base text-navy placeholder:text-navy/45 outline-none transition focus:border-orange focus:ring-4 focus:ring-orange/20";

/** Formulario "Escríbenos" (página Contacto) */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {sent ? (
        <motion.div key="ok" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-5 rounded-[1.75rem] bg-navy p-8 text-white">
          <span className="grid size-14 shrink-0 place-items-center rounded-full bg-orange">
            <IconCheck className="size-7" />
          </span>
          <div>
            <p className="font-display text-2xl font-extrabold">¡Mensaje enviado!</p>
            <p className="mt-1 text-sm text-white/70">Gracias por escribirnos. Te responderemos a la brevedad.</p>
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
          className="grid gap-4 sm:grid-cols-2"
        >
          <input required aria-label="Nombre y apellido" placeholder="Nombre y apellido" autoComplete="name" className={`${field} sm:col-span-2`} />
          <input required type="email" aria-label="Correo electrónico" placeholder="Correo electrónico" autoComplete="email" className={field} />
          <div className="flex overflow-hidden rounded-[1.75rem] border border-navy/15 bg-white focus-within:border-orange focus-within:ring-4 focus-within:ring-orange/20">
            <span className="grid place-items-center border-r border-navy/10 px-5 text-base font-semibold text-navy/60">+591</span>
            <input required type="tel" aria-label="Teléfono" placeholder="Teléfono / WhatsApp" className="w-full bg-transparent px-5 py-4 text-base outline-none placeholder:text-navy/45" />
          </div>
          <textarea required aria-label="Acerca de su proyecto" placeholder="Acerca de su proyecto" rows={5} className={`${field} resize-none sm:col-span-2`} />
          <div className="sm:col-span-2">
            <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-orange px-9 py-4 font-display font-extrabold tracking-wide text-white shadow-lg shadow-orange/25 transition hover:-translate-y-0.5 hover:bg-orange-600">
              ENVIAR
              <IconArrow className="size-4 transition group-hover:translate-x-1" />
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
