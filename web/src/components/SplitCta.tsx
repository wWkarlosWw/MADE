"use client";

import Image from "next/image";
import { IconArrowUpRight, IconCheck } from "./Icons";
import { Reveal } from "./motion";

const blocks = [
  {
    tag: "Ofrece tu terreno",
    title: "¿Tienes un terreno? Desarrollémoslo juntos",
    text: "Evaluamos su potencial, gestionamos trámites y permisos, y lo convertimos en un proyecto de alto valor.",
    points: ["Evaluación de viabilidad", "Trámites y permisos", "Modelos de asociación"],
    cta: "Ofrecer terreno",
    img: "/img/ft-10.webp",
    alt: "Arquitectos de MADE evaluando un terreno",
  },
  {
    tag: "Invierte con MADE",
    title: "Invierte en el crecimiento de Cochabamba",
    text: "Te asesoramos en inversiones inmobiliarias con transparencia en cada etapa, desde la planificación hasta la entrega.",
    points: ["Proyectos en preventa", "Control de costos y cronograma", "Contratos claros y seguros"],
    cta: "Quiero invertir",
    img: "/img/ft-19.webp",
    alt: "Asesoría de inversión del equipo MADE",
  },
];

export default function SplitCta() {
  return (
    <section className="bg-white pb-20 sm:pb-28 lg:pb-32">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-8 lg:grid-cols-2">
        {blocks.map((b, i) => (
          <Reveal key={b.tag} delay={i * 0.15} className="group grid overflow-hidden rounded-[2rem] bg-sand sm:grid-cols-2">
            <div className="flex flex-col p-7 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange">{b.tag}</p>
              <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight">{b.title}</h3>
              <p className="mt-3 text-sm text-navy/70">{b.text}</p>
              <ul className="mt-5 space-y-2">
                {b.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <IconCheck className="size-4 text-orange" /> {p}
                  </li>
                ))}
              </ul>
              <a href="/contacto" className="mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-navy py-2 pl-5 pr-2 text-sm font-semibold text-white transition hover:bg-orange">
                {b.cta}
                <span className="grid size-8 place-items-center rounded-full bg-white/15 transition group-hover:rotate-45">
                  <IconArrowUpRight className="size-4" />
                </span>
              </a>
            </div>
            <div className="relative min-h-[240px] overflow-hidden">
              <Image src={b.img} alt={b.alt} fill sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover transition duration-[1.4s] group-hover:scale-110" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
