"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Logo from "./Logo";
import Socials from "./Socials";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { IconArrowUpRight } from "./Icons";
import { ease } from "./motion";
import { Button, Container } from "./ui";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="inicio" ref={ref} className="relative isolate overflow-hidden rounded-b-[2rem] bg-navy-900 text-white sm:rounded-b-[3rem]">
      {/* Fondo con parallax */}
      <motion.div style={{ scale: bgScale, y: bgY }} className="absolute inset-0 -z-20">
        <Image src="/img/hero.webp" alt="Condominio residencial moderno al atardecer con la cordillera del Tunari de fondo" fill preload sizes="100vw" quality={90} className="object-cover object-[65%_center]" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-900/70 via-navy-900/30 to-navy-900/95" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-900/60 via-transparent to-transparent" />

      {/* Redes — barra vertical */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2, ease }}
        className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 lg:left-6 xl:block"
      >
        <Socials className="flex flex-col gap-3" itemClassName="bg-orange text-white shadow-lg shadow-orange/30 hover:bg-white hover:text-orange" />
        <div className="mx-auto mt-5 h-20 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>

      <Container className="pb-8 pt-28 sm:pb-10 sm:pt-32 lg:pt-36">
        {/* MADE gigante */}
        <motion.div
          style={{ y: logoY, opacity: logoOpacity, "--logo-main": "rgba(255,255,255,0.96)", "--logo-gray": "rgba(255,255,255,0.6)" } as never}
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1.4, ease, delay: 1.2 }}
          className="pointer-events-none mx-auto w-full max-w-6xl select-none"
          aria-hidden
        >
          <Logo showTagline={false} className="w-full drop-shadow-[0_24px_48px_rgba(0,0,0,0.4)]" />
        </motion.div>

        <div className="mt-8 grid items-end gap-10 lg:mt-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7, ease }}
              className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] backdrop-blur"
            >
              <span className="relative flex size-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-orange" />
                <span className="relative size-2 rounded-full bg-orange" />
              </span>
              Desarrolladores inmobiliarios · Cochabamba
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8, ease }}
              className="font-display text-[2.5rem] font-extrabold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Forjamos el futuro de <span className="text-orange">Cochabamba</span>, un proyecto a la vez.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.95, ease }}
              className="mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg"
            >
              Creamos espacios innovadores y sostenibles, pensados desde las personas, que elevan la calidad de vida y superan las
              aspiraciones de clientes e inversionistas.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.1, ease }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Button href="/proyectos" variant="light">Ver proyectos</Button>
              <Button href="/contacto#agenda" variant="outline" arrow={false} className="text-white">Agenda tu visita</Button>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 60, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.1, delay: 2, ease }}>
            <Link
              href="/proyectos/luna-blanca"
              className="group ml-auto flex max-w-sm items-center gap-4 rounded-[1.75rem] border border-white/15 bg-navy/60 p-3 pr-5 shadow-2xl shadow-black/30 backdrop-blur-xl transition hover:border-orange/60"
            >
              <span className="relative size-24 shrink-0 overflow-hidden rounded-2xl">
                <Image src="/img/luna-blanca.webp" alt="" fill sizes="96px" className="object-cover transition duration-700 group-hover:scale-110" />
              </span>
              <span className="min-w-0">
                <span className="inline-block rounded-full bg-orange px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">En preventa</span>
                <span className="mt-1.5 block font-display text-xl font-extrabold">Luna Blanca</span>
                <span className="block text-sm text-white/70">Nuevo proyecto · Cochabamba</span>
              </span>
              <span className="ml-auto grid size-10 shrink-0 place-items-center rounded-full bg-white text-navy transition group-hover:rotate-45 group-hover:bg-orange group-hover:text-white">
                <IconArrowUpRight className="size-4" />
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2.3, ease }} className="mt-12">
          <SearchBar />
        </motion.div>

        <Socials className="mt-8 flex justify-center gap-3 xl:hidden" itemClassName="bg-orange text-white" />
      </Container>
    </section>
  );
}
