"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { MapPlace } from "@/lib/places";
import { IconArrowUpRight, IconPin } from "./Icons";
import { ease } from "./motion";

/** Google Maps embebido (sin API key). Una ubicación por mapa. */
export function MapFrame({ place, zoom = 16, className = "" }: { place: MapPlace; zoom?: number; className?: string }) {
  const src = `https://www.google.com/maps?q=${place.coords[0]},${place.coords[1]}&z=${zoom}&hl=es&output=embed`;
  return (
    <div className={`relative h-full min-h-[360px] w-full bg-navy/5 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.iframe
          key={place.id}
          title={`Mapa: ${place.name}`}
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 h-full w-full border-0"
        />
      </AnimatePresence>
      <a
        href={place.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white py-2 pl-4 pr-2 text-xs font-bold text-navy shadow-lg transition hover:bg-orange hover:text-white"
      >
        <IconPin className="size-4 text-orange group-hover:text-white" />
        Abrir en Google Maps
        <span className="grid size-6 place-items-center rounded-full bg-navy text-white transition group-hover:rotate-45 group-hover:bg-white group-hover:text-orange">
          <IconArrowUpRight className="size-3.5" />
        </span>
      </a>
    </div>
  );
}

/** Mapa con selector de ubicaciones (oficina + proyectos) */
export default function PlacesMap({ places, zoom = 15, className = "" }: { places: MapPlace[]; zoom?: number; className?: string }) {
  const [active, setActive] = useState(0);
  const place = places[active];

  return (
    <div className={`grid overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-navy/10 ring-1 ring-navy/5 lg:grid-cols-[320px_1fr] ${className}`}>
      <ul className="flex gap-2 overflow-x-auto p-3 lg:flex-col lg:overflow-visible lg:p-4" role="tablist" aria-label="Ubicaciones">
        {places.map((pl, i) => {
          const on = i === active;
          return (
            <li key={pl.id} className="shrink-0 lg:shrink">
              <button
                role="tab"
                aria-selected={on}
                onClick={() => setActive(i)}
                className={`relative flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${on ? "text-white" : "hover:bg-sand"}`}
              >
                {on && <motion.span layoutId="place-pill" className="absolute inset-0 rounded-2xl bg-navy" transition={{ duration: 0.45, ease }} />}
                <span className={`relative grid size-9 shrink-0 place-items-center rounded-xl ${on ? "bg-orange text-white" : "bg-orange/10 text-orange"}`}>
                  <IconPin className="size-4" />
                </span>
                <span className="relative min-w-0">
                  <span className="block truncate font-display text-sm font-extrabold">{pl.name}</span>
                  <span className={`block truncate text-xs ${on ? "text-white/70" : "text-navy/60"}`}>{pl.subtitle}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <MapFrame place={place} zoom={zoom} className="min-h-[420px] lg:min-h-[560px]" />
    </div>
  );
}
