"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { IconArrow } from "./Icons";
import { SplitHeading, ease } from "./motion";
import { Container, Eyebrow, Heading, Section } from "./ui";

const steps = [
  { icon: "/brand/icon-escuchar.svg", title: "Escuchar", text: "Entendemos a cada cliente: su estilo de vida, sus necesidades y sus objetivos." },
  { icon: "/brand/icon-sueno.svg", title: "Soñar", text: "Transformamos esas ideas en proyectos innovadores, funcionales y sostenibles." },
  { icon: "/brand/icon-crear.svg", title: "Crear", text: "Diseñamos, construimos y entregamos espacios que realmente aportan valor." },
];

export default function WhatWeDo({ banner = true }: { banner?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <Section className="bg-sand">
      <Container>
        {banner && (
          <div ref={ref} className="relative mb-20 h-[360px] overflow-hidden rounded-[2rem] sm:mb-28 sm:h-[500px]">
            <motion.div style={{ y }} className="absolute -inset-y-[14%] inset-x-0">
              <Image src="/img/ft-17.webp" alt="Reunión de planificación del equipo MADE" fill sizes="100vw" className="object-cover grayscale" />
            </motion.div>
            <div className="absolute inset-0 bg-navy/30" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-7 sm:p-12">
              <SplitHeading text="Construimos el futuro urbano de Cochabamba" className="max-w-2xl font-display text-3xl font-extrabold leading-tight text-white sm:text-5xl" />
            </div>
          </div>
        )}

        <div className="text-center">
          <Eyebrow className="justify-center">Nuestra forma de trabajar</Eyebrow>
          <Heading>Lo que hacemos</Heading>
        </div>

        <div className="mt-16 grid items-start gap-12 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="contents">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease, delay: i * 0.25 }}
                className="group flex flex-col items-center text-center"
              >
                <div className="relative grid size-36 place-items-center rounded-full bg-white shadow-lg shadow-navy/5 transition duration-500 group-hover:-translate-y-2 group-hover:shadow-orange/20">
                  <span className="absolute inset-0 rounded-full border-2 border-dashed border-orange/30 transition duration-[2s] group-hover:rotate-180" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.icon} alt="" className="h-[4.5rem] w-[4.5rem] object-contain transition duration-500 group-hover:scale-110" />
                </div>
                <h3 className="mt-7 font-display text-2xl font-extrabold uppercase tracking-wide text-orange">{s.title}</h3>
                <p className="mt-3 max-w-[17rem] text-sm leading-relaxed text-navy/70">{s.text}</p>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 + i * 0.25 }} className="hidden pt-16 text-gray-brand md:block" aria-hidden>
                  <IconArrow className="size-8" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
