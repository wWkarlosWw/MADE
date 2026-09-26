"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { IconArrow, IconCheck, IconChevron } from "./Icons";

const field =
  "w-full rounded-2xl border border-navy/15 bg-white px-5 py-3.5 text-base text-navy placeholder:text-navy/45 outline-none transition focus:border-orange focus:ring-4 focus:ring-orange/20";

const interests = ["Agendar una visita", "Proyectos en venta", "Inmuebles en alquiler", "Ofrecer terreno", "Invertir con MADE", "Trabajar con MADE"];

/** Único formulario de contacto del sitio (página /contacto, ancla #agenda) */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [interest, setInterest] = useState("");

  return (
    <div id="agenda" className="scroll-mt-28">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div key="ok" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-5 rounded-[1.75rem] bg-navy p-8 text-white">
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-orange">
              <IconCheck className="size-7" />
            </span>
            <div>
              <p className="font-display text-2xl font-extrabold">¡Mensaje enviado!</p>
              <p className="mt-1 text-sm text-white/70">Gracias por escribirnos. Un asesor de MADE te contactará a la brevedad.</p>
              <button onClick={() => setSent(false)} className="mt-3 text-sm font-semibold text-orange hover:underline">
                Enviar otro mensaje
              </button>
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
            <div className="flex overflow-hidden rounded-2xl border border-navy/15 bg-white focus-within:border-orange focus-within:ring-4 focus-within:ring-orange/20">
              <span className="grid place-items-center border-r border-navy/10 px-4 text-base font-semibold text-navy/60">+591</span>
              <input required type="tel" inputMode="tel" aria-label="Teléfono" placeholder="Teléfono / WhatsApp" className="w-full bg-transparent px-4 py-3.5 text-base outline-none placeholder:text-navy/45" />
            </div>
            <label className="relative block">
              <span className="sr-only">Me interesa</span>
              <select required value={interest} onChange={(e) => setInterest(e.target.value)} className={`${field} cursor-pointer appearance-none pr-11 ${interest ? "" : "text-navy/45"}`}>
                <option value="" disabled>Me interesa…</option>
                {interests.map((o) => (
                  <option key={o} className="text-navy">{o}</option>
                ))}
              </select>
              <IconChevron className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-navy/50" />
            </label>
            <label className="block">
              <span className="sr-only">Fecha y hora de visita (opcional)</span>
              <input type="datetime-local" aria-label="Fecha y hora de visita (opcional)" className={`${field} text-navy/70`} />
              <span className="mt-1.5 block px-2 text-xs text-navy/50">Fecha de visita (opcional)</span>
            </label>
            <textarea aria-label="Mensaje" placeholder="Cuéntanos sobre tu proyecto (opcional)" rows={4} className={`${field} resize-none sm:col-span-2`} />
            <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
              <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-orange px-9 py-4 font-display font-extrabold tracking-wide text-white shadow-lg shadow-orange/25 transition hover:-translate-y-0.5 hover:bg-orange-600">
                ENVIAR
                <IconArrow className="size-4 transition group-hover:translate-x-1" />
              </button>
              <p className="text-xs text-navy/50">Al enviar aceptas ser contactado por MADE.</p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
