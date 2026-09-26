"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SplitHeading, ease } from "./motion";
import { Container } from "./ui";

type Props = {
  title: string;
  text: string;
  image: string;
  alt: string;
  crumbs?: { label: string; href: string }[];
};

/** Cabecera de páginas interiores (Sobre nosotros, Proyectos, Contacto) */
export default function PageHero({ title, text, image, alt, crumbs = [] }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden rounded-b-[2rem] bg-navy-900 text-white sm:rounded-b-[3rem]">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-20">
        <Image src={image} alt={alt} fill preload sizes="100vw" quality={90} className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-900/75 via-navy-900/35 to-navy-900/90" />
      <Container className="flex min-h-[62vh] flex-col justify-end pb-14 pt-40 sm:min-h-[68vh] sm:pb-20">
        {crumbs.length > 0 && (
          <motion.nav
            aria-label="Migas de pan"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease }}
            className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70"
          >
            <Link href="/" className="hover:text-white">Inicio</Link>
            {crumbs.map((c) => (
              <span key={c.href} className="flex items-center gap-2">
                <span className="text-orange">/</span>
                <Link href={c.href} className="hover:text-white">{c.label}</Link>
              </span>
            ))}
          </motion.nav>
        )}
        <SplitHeading as="h1" text={title} delay={0.3} className="max-w-4xl font-display text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl" />
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.9, ease }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          {text}
        </motion.p>
      </Container>
    </section>
  );
}
