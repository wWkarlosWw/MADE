"use client";

import Image from "next/image";
import { useState } from "react";
import { Stagger, StaggerItem } from "./motion";
import { Container, Section, SectionHeader } from "./ui";

// Nombres de arquitectos y marketing pendientes: reemplazar "name" cuando estén confirmados
const team = [
  { name: "Sergio Aguirre Goitia", role: "Socio fundador", img: "/team/SergioAguirreGoitiaDueno.webp" },
  { name: "Carlos Eduardo Montalvo", role: "Socio fundador", img: "/team/CarlosEduardoMontalvo-dueno2.webp" },
  { name: "Arquitecta", role: "Diseño arquitectónico", img: "/team/arquitacta.webp" },
  { name: "Arquitecto", role: "Diseño y supervisión", img: "/team/arquitecto.webp" },
  { name: "Marketing", role: "Comercialización y ventas", img: "/team/marketing.webp" },
];

export default function Team() {
  const [active, setActive] = useState(0);

  return (
    <Section id="equipo" className="bg-white">
      <Container>
        <SectionHeader
          eyebrow="Las personas detrás de MADE"
          title="Nuestro equipo"
          text="Profesionales en arquitectura, ingeniería, gestión y comercialización que trabajan con un mismo propósito: crear espacios seguros, cómodos y funcionales para todos."
        />
        <Stagger className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5" stagger={0.1}>
          {team.map((m, i) => {
            const on = active === i;
            return (
              <StaggerItem key={m.img}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group relative block aspect-[3/4] w-full overflow-hidden rounded-3xl bg-[#e9e9e9] text-left"
                  aria-label={`${m.name}, ${m.role}`}
                >
                  <Image src={m.img} alt={m.name} fill sizes="(min-width: 1024px) 20vw, 50vw" className={`object-cover object-top grayscale transition duration-700 ${on ? "scale-105" : "group-hover:scale-105"}`} />
                  {/* naranja con transparencia al seleccionar */}
                  <span className={`absolute inset-0 bg-orange mix-blend-multiply transition-opacity duration-500 ${on ? "opacity-80" : "opacity-0"}`} />
                  <span className={`absolute inset-x-3 bottom-3 rounded-2xl bg-white/95 p-3 backdrop-blur transition duration-500 ${on ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"}`}>
                    <span className="block font-display text-sm font-extrabold leading-tight text-navy sm:text-base">{m.name}</span>
                    <span className="mt-0.5 block text-xs text-navy/60">{m.role}</span>
                  </span>
                </button>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
