"use client";

import { useState } from "react";
import { IconArrow, IconChevron } from "./Icons";

const needs = ["Proyectos en venta", "Inmuebles en alquiler", "Ofrecer terreno"];
const types = ["Departamento", "Casa", "Oficina", "Local comercial"];
const stages = ["En preventa", "En construcción", "Finalizado"];

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="relative block">
      <span className="sr-only">{label}</span>
      <select defaultValue="" className="w-full cursor-pointer appearance-none rounded-full bg-white py-3 pl-5 pr-11 text-sm font-semibold text-navy outline-none transition focus:ring-4 focus:ring-orange/30">
        <option value="" disabled>
          {label}
        </option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <IconChevron className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-navy/60" />
    </label>
  );
}

export default function SearchBar() {
  const [picked, setPicked] = useState<string[]>([]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-navy/85 p-4 backdrop-blur-xl sm:p-5 lg:grid-cols-[1fr_1fr_auto_auto] lg:items-center lg:gap-6 lg:rounded-full lg:pl-6"
    >
      <Select label="¿Qué necesitas?" options={needs} />
      <Select label="Tipo de propiedad" options={types} />
      <fieldset className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <legend className="float-left mr-2 font-display text-sm font-extrabold uppercase tracking-wider">Etapa</legend>
        {stages.map((s) => {
          const on = picked.includes(s);
          return (
            <label key={s} className="flex cursor-pointer items-center gap-2 text-sm text-white/85">
              <input
                type="checkbox"
                className="peer sr-only"
                checked={on}
                onChange={() => setPicked((p) => (on ? p.filter((x) => x !== s) : [...p, s]))}
              />
              <span className="grid size-5 place-items-center rounded-md border-2 border-white/60 transition peer-checked:border-orange peer-checked:bg-orange peer-focus-visible:ring-4 peer-focus-visible:ring-orange/40">
                <span className={`size-2 rounded-sm bg-white transition ${on ? "scale-100" : "scale-0"}`} />
              </span>
              {s}
            </label>
          );
        })}
      </fieldset>
      <button type="submit" className="group inline-flex items-center justify-center gap-2 rounded-full bg-orange px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
        Buscar
        <IconArrow className="size-4 transition group-hover:translate-x-1" />
      </button>
    </form>
  );
}
