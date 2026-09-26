"use client";

import IsotipoCarousel from "./IsotipoCarousel";
import { CountUp, Reveal } from "./motion";
import { Container, Eyebrow, Heading, Section } from "./ui";

const stats = [
  { to: 20, prefix: "+", suffix: "", label: "Años de experiencia" },
  { to: 1000, prefix: "+", suffix: "", label: "Clientes satisfechos" },
  { to: 160, prefix: "+", suffix: "K", label: "m² desarrollados" },
];

export default function Stats() {
  return (
    <Section className="bg-pattern relative overflow-hidden">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
        <div>
          <Eyebrow>MADE en cifras</Eyebrow>
          <Heading className="max-w-lg lg:text-4xl xl:text-[2.75rem]">No solo construimos estructuras, creamos comunidades.</Heading>
          <dl className="mt-12 space-y-7">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.12} className="group flex flex-wrap items-end gap-x-5 gap-y-1 border-b border-navy/10 pb-6">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-6xl font-black leading-none tracking-tight text-navy transition-colors duration-500 group-hover:text-orange sm:text-7xl lg:text-8xl">
                  <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} />
                </dd>
                <span className="pb-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gray-brand">{s.label}</span>
              </Reveal>
            ))}
          </dl>
        </div>
        <IsotipoCarousel className="mx-auto w-full max-w-md lg:max-w-2xl" />
      </Container>
    </Section>
  );
}
