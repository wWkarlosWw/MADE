"use client";

import { motion, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { IconCalendar, IconDoc, IconExpand, IconKey } from "./Icons";
import { ease } from "./motion";
import { Container, Section, SectionHeader } from "./ui";

const phases = [
  {
    Icon: IconExpand,
    title: "Adquisición y planificación",
    items: [
      ["Búsqueda de predios", "Identificamos terrenos estratégicos con alto potencial de desarrollo."],
      ["Investigación de mercado", "Evaluamos viabilidad y demanda en el mercado cochabambino."],
      ["Trámites y normativas", "Cumplimiento de zonificación y autorizaciones municipales."],
      ["Obtención de permisos", "Gestionamos los permisos de construcción sin contratiempos."],
    ],
  },
  {
    Icon: IconDoc,
    title: "Financiamiento y diseño",
    items: [
      ["Búsqueda de financiación", "Aseguramos el capital mediante inversiones estratégicas."],
      ["Elaboración del proyecto", "Supervisamos arquitectura, ingeniería y construcción."],
      ["Propiedad horizontal", "Aprobación con Catastro y Derechos Reales."],
    ],
  },
  {
    Icon: IconCalendar,
    title: "Ejecución y construcción",
    items: [
      ["Gestión del proceso", "Coordinamos los detalles técnicos y operativos de la obra."],
      ["Control de costos y cronograma", "Dentro del presupuesto y en el tiempo estipulado."],
    ],
  },
  {
    Icon: IconKey,
    title: "Comercialización y entrega",
    items: [
      ["Preparación de contratos", "Documentos legales claros y precisos para tu seguridad."],
      ["Ventas y marketing", "Estrategias efectivas para comercializar cada propiedad."],
      ["Entrega del proyecto", "Entrega satisfactoria a inversionistas y propietarios."],
    ],
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });

  return (
    <Section className="bg-white">
      <Container>
        <SectionHeader eyebrow="Cómo trabajamos" title="Un proceso claro, de principio a fin" text="Cuatro fases con comunicación abierta en cada una, desde la búsqueda del terreno hasta la entrega." />

        <div ref={ref} className="relative mt-14">
          <div className="absolute left-0 right-0 top-[29px] hidden h-0.5 bg-navy/10 lg:block" aria-hidden>
            <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left bg-orange" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {phases.map(({ Icon, title }, i) => (
              <motion.button
                key={title}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease, delay: i * 0.12 }}
                className={`group relative rounded-3xl border p-5 text-left transition duration-500 sm:p-6 ${
                  active === i ? "border-orange bg-orange/5 shadow-xl shadow-orange/10" : "border-navy/10 bg-white hover:border-navy/30"
                }`}
                aria-pressed={active === i}
              >
                <div className="flex items-center justify-between">
                  <span className={`grid size-14 place-items-center rounded-2xl transition duration-500 ${active === i ? "bg-orange text-white" : "bg-sand text-navy"}`}>
                    <Icon className="size-6" />
                  </span>
                  <span className={`font-display text-4xl font-black transition ${active === i ? "text-orange" : "text-navy/10"}`}>0{i + 1}</span>
                </div>
                <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-brand">Fase {i + 1}</p>
                <h3 className="mt-1 font-display text-lg font-extrabold leading-snug">{title}</h3>
              </motion.button>
            ))}
          </div>

          <div className="mt-5 overflow-hidden rounded-3xl bg-navy p-6 text-white sm:p-10">
            <motion.div key={active} initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {phases[active].items.map(([t, d], j) => (
                <motion.div key={t} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }} className="border-l-2 border-orange pl-4">
                  <span className="text-xs font-bold text-orange">0{j + 1}</span>
                  <h4 className="mt-1 font-display text-lg font-extrabold leading-snug">{t}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">{d}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
