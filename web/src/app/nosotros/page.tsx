import type { Metadata } from "next";
import { MotionConfig } from "motion/react";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import WhatWeDo from "@/components/WhatWeDo";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Partners from "@/components/Partners";
import Register from "@/components/Register";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

export const metadata: Metadata = {
  title: "Sobre nosotros | MADE Desarrolladores Inmobiliarios",
  description: "Conoce a MADE: misión, visión, forma de trabajar y el equipo que forja el futuro de Cochabamba.",
};

export default function NosotrosPage() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <PageHero
          title="Sobre nosotros"
          text="Somos una desarrolladora inmobiliaria que crea proyectos pensados desde las personas: innovadores, sostenibles y de calidad."
          image="/img/ft-7.webp"
          alt="Equipo de MADE en una obra"
          crumbs={[{ label: "Sobre nosotros", href: "/nosotros" }]}
        />
        <About full />
        <WhatWeDo banner={false} />
        <Process />
        <Team />
        <Partners />
        <Register />
      </main>
      <Footer />
      <FloatingCta />
    </MotionConfig>
  );
}
