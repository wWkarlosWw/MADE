"use client";

import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconBrush, IconBuilding, IconChart, IconHome, IconTree } from "./Icons";
import { Stagger, StaggerItem } from "./motion";
import { Container, Section, SectionHeader } from "./ui";

const services = [
  { Icon: IconHome, title: "Proyectos residenciales", text: "Desarrollamos hogares que inspiran, con diseño funcional y materiales de calidad." },
  { Icon: IconBuilding, title: "Edificios comerciales y oficinas", text: "Espacios modernos que impulsan el crecimiento empresarial." },
  { Icon: IconTree, title: "Urbanizaciones", text: "Comunidades planificadas, sostenibles y armoniosas con su entorno." },
  { Icon: IconChart, title: "Asesoramiento en inversiones", text: "Gestión y asesoría para que tu inversión inmobiliaria rinda con seguridad." },
  { Icon: IconBrush, title: "Remodelación de espacios", text: "Renovamos y revalorizamos espacios existentes con criterio de diseño." },
];

export default function Services() {
  return (
    <Section id="servicios" className="relative overflow-hidden bg-navy text-white">
      <div className="bg-pattern-light absolute inset-0" aria-hidden />
      <Container className="relative">
        <SectionHeader
          light
          eyebrow="Servicios integrales"
          title="Todo tu proyecto, en un solo equipo"
          text="Desde la búsqueda del terreno hasta la entrega de llaves, acompañamos cada etapa del desarrollo inmobiliario."
        />
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
          {services.map(({ Icon, title, text }) => (
            <StaggerItem key={title}>
              <Link href="/contacto" className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-orange sm:p-8">
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-orange transition-transform duration-500 ease-out group-hover:scale-y-100" />
                <span className="relative grid size-14 place-items-center rounded-2xl border border-white/20 text-orange transition duration-500 group-hover:border-white/40 group-hover:text-white">
                  <Icon className="size-7" />
                </span>
                <h3 className="relative mt-8 font-display text-xl font-extrabold">{title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/70 transition group-hover:text-white/90">{text}</p>
                <span className="relative mt-7 grid size-10 place-items-center self-end rounded-full bg-white/10 transition duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-orange">
                  <IconArrowUpRight className="size-4" />
                </span>
              </Link>
            </StaggerItem>
          ))}
          <StaggerItem className="relative min-h-[280px] overflow-hidden rounded-3xl">
            <Image src="/img/ft-3.webp" alt="Cierre de acuerdo con un cliente de MADE" fill sizes="(min-width: 1024px) 33vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
            <p className="absolute bottom-7 left-7 right-7 font-display text-2xl font-extrabold leading-tight">
              Tu socio de confianza en cada <span className="text-orange">inversión</span>.
            </p>
          </StaggerItem>
        </Stagger>
      </Container>
    </Section>
  );
}
