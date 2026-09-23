import Image from "next/image";
import { Reveal } from "./motion";
import { Button } from "./ui";

/** Llamado a la acción de cierre (sin formulario): lleva al único formulario en /contacto */
export default function CtaBand() {
  return (
    <section className="px-3 sm:px-5">
      <Reveal className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-navy text-white sm:rounded-[2.5rem]">
        <Image src="/img/hero-md.webp" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
        <div className="flex flex-col gap-8 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:p-16">
          <div className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-orange">¿No es suficiente?</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-5xl">
              Hablemos de tu <span className="text-orange">próximo espacio</span>
            </h2>
            <p className="mt-4 text-white/70">Agenda una visita, consulta por un proyecto u ofrécenos tu terreno. Te respondemos a la brevedad.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/contacto#agenda">Agenda tu visita</Button>
            <Button href="/proyectos" variant="light" arrow={false}>Ver proyectos</Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
