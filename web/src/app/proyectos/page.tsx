import type { Metadata } from "next";
import { MotionConfig } from "motion/react";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import PlacesMap from "@/components/GoogleMap";
import { officePlace, projectPlace } from "@/lib/places";
import { LunaBlancaBanner } from "@/components/Projects";
import Register from "@/components/Register";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";
import { Stagger, StaggerItem } from "@/components/motion";
import { Container, Section, SectionHeader } from "@/components/ui";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Proyectos | MADE Desarrolladores Inmobiliarios",
  description: "Proyectos residenciales y comerciales de MADE en Cochabamba: en preventa, en construcción y finalizados.",
};

export default function ProyectosPage() {
  const [featured, ...rest] = projects;
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <PageHero
          title="Proyectos"
          text="Desde elegantes residencias hasta modernos complejos comerciales, cada proyecto refleja nuestra dedicación a la modernización y sostenibilidad de Cochabamba."
          image="/img/obra.webp"
          alt="Obra de MADE en construcción"
          crumbs={[{ label: "Proyectos", href: "/proyectos" }]}
        />

        <Section className="bg-sand">
          <Container>
            <SectionHeader eyebrow="Portafolio" title="Nuestros proyectos" text="Filtra por etapa o explora el mapa para encontrar el inmueble ideal para vivir o invertir." />
            <Stagger className="mt-14 grid gap-5 lg:grid-cols-3" stagger={0.12}>
              <StaggerItem className="lg:col-span-2 lg:row-span-2">
                <ProjectCard p={featured} large />
              </StaggerItem>
              {rest.map((p) => (
                <StaggerItem key={p.slug}>
                  <ProjectCard p={p} />
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Section>

        <Section className="bg-white">
          <Container>
            <SectionHeader eyebrow="Ubicaciones" title="Todos los proyectos en el mapa" text="Selecciona nuestra oficina o cualquiera de los proyectos para verlo en Google Maps." />
            <PlacesMap className="mt-12" places={[officePlace, ...projects.map(projectPlace)]} />
          </Container>
        </Section>

        <Section className="bg-sand">
          <Container>
            <LunaBlancaBanner />
          </Container>
        </Section>

        <Register />
      </main>
      <Footer />
      <FloatingCta />
    </MotionConfig>
  );
}
