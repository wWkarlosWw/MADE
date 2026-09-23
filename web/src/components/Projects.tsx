"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { projects } from "@/lib/projects";
import { MapFrame } from "./GoogleMap";
import { projectPlace } from "@/lib/places";
import ProjectCard from "./ProjectCard";
import { Reveal, SplitHeading, Stagger, StaggerItem, ease } from "./motion";
import { Button, Container, Section, SectionHeader } from "./ui";

function useCountdown(target: string) {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const t = new Date(target).getTime();
    const tick = () => setLeft(Math.max(0, t - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  const s = Math.floor((left ?? 0) / 1000);
  return {
    ready: left !== null,
    parts: [
      { v: Math.floor(s / 86400), l: "Días" },
      { v: Math.floor((s % 86400) / 3600), l: "Horas" },
      { v: Math.floor((s % 3600) / 60), l: "Minutos" },
      { v: s % 60, l: "Segundos" },
    ],
  };
}

function Digit({ value }: { value: number }) {
  const str = String(value).padStart(2, "0");
  return (
    <span className="relative inline-flex h-[1.1em] overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span key={str} initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity: 0 }} transition={{ duration: 0.45, ease }} className="inline-block">
          {str}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/** Bloque Luna Blanca: mapa + cuenta regresiva (borrador de Inicio) */
export function LunaBlancaBanner() {
  const { ready, parts } = useCountdown(site.lunaBlancaLaunch);
  const luna = projects.find((p) => p.slug === "luna-blanca")!;

  return (
    <Reveal className="grid overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/10 lg:grid-cols-2">
      <MapFrame place={projectPlace(luna)} zoom={15} className="min-h-[360px] lg:min-h-[520px]" />
      <div className="relative isolate flex min-h-[440px] flex-col items-center justify-center overflow-hidden px-6 py-16 text-center text-white">
        <Image src={luna.cover} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-orange/85 mix-blend-multiply" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-orange/40 to-orange-600/70" />
        <p className="font-display text-sm font-extrabold uppercase tracking-[0.35em] sm:text-base">Nuevo proyecto</p>
        <SplitHeading text="LUNA BLANCA" className="mt-2 font-display text-5xl font-black tracking-tight sm:text-7xl" />
        <div className="mt-9 grid grid-cols-4 gap-2 sm:gap-4">
          {parts.map((p, i) => (
            <motion.div
              key={p.l}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: 0.3 + i * 0.1 }}
              className="flex flex-col items-center"
            >
              <span className="grid size-16 place-items-center rounded-2xl bg-white font-display text-3xl font-black text-navy shadow-xl sm:size-24 sm:text-5xl">
                {ready ? <Digit value={p.v} /> : "--"}
              </span>
              <span className="mt-2.5 text-[10px] font-bold uppercase tracking-[0.2em] sm:text-xs">{p.l}</span>
            </motion.div>
          ))}
        </div>
        <Link href="/proyectos/luna-blanca" className="mt-10 inline-flex rounded-full bg-navy px-8 py-3.5 font-display font-extrabold tracking-wide transition hover:-translate-y-0.5 hover:bg-white hover:text-navy">
          RESERVA TU LUGAR
        </Link>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <Section id="proyectos" className="bg-sand">
      <Container>
        <SectionHeader
          eyebrow="Proyectos"
          title="Espacios para vivir e invertir"
          text="Residencias, edificios y urbanizaciones que transforman el horizonte de Cochabamba."
          action={<Button href="/proyectos" variant="dark">Ver todos los proyectos</Button>}
        />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-3" stagger={0.12}>
          {projects.slice(0, 3).map((p) => (
            <StaggerItem key={p.slug}>
              <ProjectCard p={p} />
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-16">
          <LunaBlancaBanner />
        </div>
      </Container>
    </Section>
  );
}
