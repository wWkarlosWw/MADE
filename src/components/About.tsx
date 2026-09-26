"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { IconCheck, IconShield, IconSpark, IconUser } from "./Icons";
import { Reveal, Stagger, StaggerItem, ease } from "./motion";
import { Button, Container, Eyebrow, Heading, Section } from "./ui";

const principles = [
  "Compromiso con la calidad",
  "Transparencia en cada proyecto",
  "Innovación constante",
  "Responsabilidad social y ambiental",
  "Orientación al cliente",
];

const cards = [
  { Icon: IconShield, title: "Misión", text: "Brindar proyectos inmobiliarios innovadores, sostenibles y de calidad que aporten al crecimiento y modernización de Cochabamba." },
  { Icon: IconSpark, title: "Visión", text: "Ser la empresa líder en desarrollo inmobiliario en Cochabamba, reconocida por nuestra excelencia e innovación." },
  { Icon: IconUser, title: "Pensado desde las personas", text: "Comprendemos tu estilo de vida y tus objetivos para diseñar espacios que realmente aportan valor." },
];

/** Líneas naranjas que se dibujan (borrador "ANIMADO") */
export function AnimatedLines({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-1.5 ${className}`} aria-hidden>
      {[1, 0.78, 0.5].map((w, i) => (
        <motion.span
          key={i}
          className="block h-1 origin-left rounded-full bg-orange"
          style={{ width: `${w * 100}%` }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease, delay: 0.25 + i * 0.15 }}
        />
      ))}
    </div>
  );
}

export default function About({ full = false }: { full?: boolean }) {
  return (
    <Section id="nosotros" className="bg-white">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.15fr_0.9fr] lg:gap-8">
        <div className="flex flex-col">
          <Eyebrow>{full ? "Quiénes somos" : "Sobre nosotros"}</Eyebrow>
          <Heading>{full ? "Una desarrolladora pensada desde las personas" : "Quiénes somos"}</Heading>
          <AnimatedLines className="mt-5 max-w-xs" />
          <Reveal delay={0.1}>
            <p className="mt-7 leading-relaxed text-navy/75">
              MADE es una desarrolladora inmobiliaria que crea proyectos pensados desde las personas. Nos enfocamos en comprender a
              nuestros clientes, su estilo de vida y sus objetivos, para diseñar, construir y entregar espacios que realmente aportan
              valor.
            </p>
            {full && (
              <p className="mt-4 leading-relaxed text-navy/75">
                Forjamos el futuro de Cochabamba con proyectos que no solo transforman el horizonte, sino que también elevan la calidad de
                vida. Hemos participado en el desarrollo de proyectos clave: desde elegantes residencias hasta modernos complejos comerciales.
              </p>
            )}
          </Reveal>
          <Stagger className="mt-7 space-y-2.5" stagger={0.08}>
            {principles.map((p) => (
              <StaggerItem key={p} className="flex items-center gap-3 text-sm font-medium">
                <span className="grid size-6 place-items-center rounded-full bg-orange/10 text-orange">
                  <IconCheck className="size-3.5" />
                </span>
                {p}
              </StaggerItem>
            ))}
          </Stagger>
          {!full && (
            <Reveal delay={0.2} className="mt-9">
              <Button href="/nosotros" variant="dark">Acerca de nuestro equipo</Button>
            </Reveal>
          )}
        </div>

        <motion.div
          initial={{ clipPath: "inset(10% 10% 10% 10% round 2rem)", opacity: 0 }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0% round 2rem)", opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.3, ease }}
          className="group relative min-h-[420px] overflow-hidden rounded-[2rem] lg:min-h-full"
        >
          <Image src="/img/ft-7.webp" alt="Equipo de MADE supervisando una obra" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover transition duration-[1.6s] group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md">
            <p className="font-display text-lg font-extrabold">Supervisión en cada etapa</p>
            <p className="mt-1 text-sm text-white/80">De la planificación a la entrega, con comunicación clara y abierta.</p>
          </div>
        </motion.div>

        <Stagger className="grid gap-4" stagger={0.15}>
          {cards.map(({ Icon, title, text }) => (
            <StaggerItem key={title} className="group rounded-3xl border border-navy/10 bg-sand p-6 transition duration-500 hover:-translate-y-1 hover:border-orange/40 hover:bg-white hover:shadow-xl hover:shadow-navy/5">
              <span className="grid size-12 place-items-center rounded-2xl border border-navy/15 text-navy transition duration-500 group-hover:border-orange group-hover:bg-orange group-hover:text-white">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-extrabold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
