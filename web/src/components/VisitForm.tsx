"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { IconCheck } from "./Icons";

const input =
  "w-full rounded-full border border-white/10 bg-white px-5 py-3 text-sm text-navy placeholder:text-navy/45 outline-none transition focus:border-orange focus:ring-4 focus:ring-orange/25";

export default function VisitForm() {
  const [sent, setSent] = useState(false);

  return (
    <div id="agenda" className="relative scroll-mt-28 overflow-hidden rounded-[2rem] border border-white/10 bg-navy/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-orange/30 blur-3xl" />
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[340px] flex-col items-center justify-center text-center"
          >
            <span className="grid size-16 place-items-center rounded-full bg-orange text-white">
              <IconCheck className="size-8" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-extrabold">¡Visita agendada!</h3>
            <p className="mt-2 max-w-xs text-sm text-white/70">Nuestro equipo te contactará para confirmar la fecha y hora de tu visita.</p>
            <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-orange underline-offset-4 hover:underline">
              Agendar otra visita
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -10 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="relative space-y-3"
          >
            <h2 className="mb-5 text-center font-display text-3xl font-extrabold">Agenda tu visita</h2>
            <label className="sr-only" htmlFor="v-name">Nombre y apellido</label>
            <input id="v-name" required className={input} placeholder="Introduce tu nombre y apellido" autoComplete="name" />
            <label className="sr-only" htmlFor="v-mail">Correo electrónico</label>
            <input id="v-mail" type="email" required className={input} placeholder="Correo electrónico" autoComplete="email" />
            <div className="flex overflow-hidden rounded-full bg-white focus-within:ring-4 focus-within:ring-orange/25">
              <span className="grid place-items-center border-r border-navy/10 pl-5 pr-3 text-sm font-semibold text-navy/70">+591</span>
              <label className="sr-only" htmlFor="v-phone">Teléfono</label>
              <input id="v-phone" type="tel" required inputMode="tel" className="w-full bg-transparent px-3 py-3 text-sm text-navy outline-none placeholder:text-navy/45" placeholder="Teléfono / WhatsApp" />
            </div>
            <label className="block px-2 pt-1 text-xs font-medium text-white/60" htmlFor="v-date">Fecha y hora de la visita</label>
            <input id="v-date" type="datetime-local" required className={input} />
            <div className="pt-3 text-center">
              <button type="submit" className="rounded-full bg-orange px-12 py-3.5 font-display font-extrabold tracking-wide text-white shadow-lg shadow-orange/30 transition hover:-translate-y-0.5 hover:bg-orange-600 active:translate-y-0">
                ENVIAR
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
