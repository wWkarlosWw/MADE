import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MotionConfig } from "motion/react";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ProjectGallery from "@/components/ProjectGallery";
import ProjectCard from "@/components/ProjectCard";
import { MapFrame } from "@/components/GoogleMap";
import { projectPlace } from "@/lib/places";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import { AnimatedLines } from "@/components/About";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Button, Container, Eyebrow, Heading, Section } from "@/components/ui";
import { IconPin } from "@/components/Icons";
import { getProject, projects } from "@/lib/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = getProject((await params).slug);
  if (!p) return {};
  return { title: `${p.name} | MADE Desarrolladores Inmobiliarios`, description: p.summary, openGraph: { images: [p.cover] } };
}

export default async function ProyectoPage({ params }: Params) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const others = projects.filter((x) => x.slug !== slug).slice(0, 3);

  const facts = [
    ["Ubicación", p.location],
    ["Cliente", p.client],
    ["Equipo", p.team],
  ];

  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <PageHero
          title={p.name}
          text={p.summary}
          image={p.cover}
          alt={`Proyecto ${p.name}`}
          crumbs={[
            { label: "Proyectos", href: "/proyectos" },
            { label: p.name, href: `/proyectos/${p.slug}` },
          ]}
        />

        {/* Ficha + galería (borrador detalle Luna Blanca) */}
        <Section className="bg-sand">
          <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <Reveal x={-30} y={0}>
              <div className="rounded-[2rem] bg-white p-7 ring-1 ring-navy/5 sm:p-10">
                <span className="rounded-full bg-orange/10 px-3 py-1 text-xs font-bold text-orange">{p.stage}</span>
                <h2 className="mt-4 font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">{p.name}</h2>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-navy/60">
                  <IconPin className="size-4 text-orange" /> {p.place} · {p.kind}
                </p>
                <AnimatedLines className="mt-5 max-w-[12rem]" />
                <p className="mt-6 leading-relaxed text-navy/75">{p.description}</p>
                <dl className="mt-8 space-y-6">
                  {facts.map(([k, v]) => (
                    <div key={k}>
                      <dt className="font-display text-lg font-extrabold">{k}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-navy/70">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button href="/contacto#agenda">Agenda tu visita</Button>
                  <Button href="/contacto" variant="dark" arrow={false}>Contacto</Button>
                </div>
              </div>
            </Reveal>
            <Reveal x={30} y={0} delay={0.15}>
              <ProjectGallery images={p.images} name={p.name} />
            </Reveal>
          </Container>
        </Section>

        {/* Tipologías (Departamento / Local comercial) */}
        <Section className="bg-white">
          <Container>
            <Eyebrow>Tipologías</Eyebrow>
            <Heading className="max-w-xl">{`Encuentra tu espacio en ${p.name}`}</Heading>
            <Stagger className="mt-12 grid gap-5 lg:grid-cols-2" stagger={0.15}>
              {p.units.map((u) => (
                <StaggerItem key={u.name} className="group grid overflow-hidden rounded-[2rem] bg-navy text-white sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="bg-pattern-light relative flex flex-col justify-center p-8 sm:p-10">
                    <h3 className="relative font-display text-2xl font-extrabold uppercase text-orange">{u.name}</h3>
                    <p className="relative mt-3 text-sm leading-relaxed text-white/75">{u.text}</p>
                    <Link href="/contacto" className="relative mt-7 inline-flex w-fit rounded-full border border-white/40 px-5 py-2 text-xs font-bold uppercase tracking-wider transition hover:border-orange hover:bg-orange">
                      Contacto
                    </Link>
                  </div>
                  <div className="relative min-h-[240px] overflow-hidden">
                    <Image src={u.image} alt={`${u.name} en ${p.name}`} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover transition duration-[1.4s] group-hover:scale-110" />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>

        {/* Mapa del proyecto */}
        <section className="bg-sand">
          <Container>
            <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/10">
              <MapFrame place={projectPlace(p)} zoom={16} className="h-[420px] sm:h-[520px]" />
            </div>
          </Container>
        </section>

        {others.length > 0 && (
          <Section className="bg-sand">
            <Container>
              <Eyebrow>Más proyectos</Eyebrow>
              <Heading>También te puede interesar</Heading>
              <Stagger className="mt-12 grid gap-5 md:grid-cols-3" stagger={0.12}>
                {others.map((o) => (
                  <StaggerItem key={o.slug}>
                    <ProjectCard p={o} />
                  </StaggerItem>
                ))}
              </Stagger>
            </Container>
          </Section>
        )}

        <CtaBand />
      </main>
      <Footer />
      <FloatingCta />
    </MotionConfig>
  );
}
