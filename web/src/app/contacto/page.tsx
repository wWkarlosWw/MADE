import type { Metadata } from "next";
import { MotionConfig } from "motion/react";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import VisitForm from "@/components/VisitForm";
import { MapFrame } from "@/components/GoogleMap";
import { officePlace } from "@/lib/places";
import Socials from "@/components/Socials";
import Register from "@/components/Register";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/motion";
import { Container, Eyebrow, Heading, Section } from "@/components/ui";
import { IconMail, IconPhone, IconPin } from "@/components/Icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto | MADE Desarrolladores Inmobiliarios",
  description: "Escríbenos o agenda tu visita. Trabaja con MADE en tu próximo proyecto inmobiliario en Cochabamba.",
};

export default function ContactoPage() {
  const info = [
    { Icon: IconPin, label: "Oficina", value: site.address, href: site.office.mapsUrl },
    { Icon: IconPhone, label: "Teléfono", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { Icon: IconMail, label: "Correo", value: site.email, href: `mailto:${site.email}` },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <PageHero
          title="Trabaja con nosotros"
          text="¿Te gustaría hablar sobre tu próximo proyecto? ¿Te interesan las oportunidades profesionales? Sea como sea, siempre estaremos encantados de saber de ti."
          image="/img/ft-3.webp"
          alt="Cierre de acuerdo con MADE"
          crumbs={[{ label: "Contacto", href: "/contacto" }]}
        />

        <Section className="bg-sand">
          <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <Eyebrow>Contacto</Eyebrow>
              <Heading as="h2">Escríbenos</Heading>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-xl leading-relaxed text-navy/70">
                  Cuéntanos sobre tu proyecto, tu terreno o la inversión que tienes en mente. Un asesor de MADE te responderá a la brevedad.
                </p>
              </Reveal>
              <Reveal delay={0.2} className="mt-10">
                <ContactForm />
              </Reveal>
            </div>

            <div className="space-y-5">
              <Reveal delay={0.2} className="scroll-mt-28">
                <VisitForm />
              </Reveal>
              <Reveal delay={0.3} className="rounded-[2rem] bg-white p-7 ring-1 ring-navy/5">
                <ul className="space-y-5">
                  {info.map(({ Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-orange/10 text-orange">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-brand">{label}</p>
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-semibold text-navy transition hover:text-orange">
                          {value}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 border-t border-navy/10 pt-6">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-brand">Síguenos</p>
                  <Socials className="flex gap-3" itemClassName="bg-navy text-white hover:bg-orange" />
                </div>
              </Reveal>
            </div>
          </Container>
        </Section>

        <section className="bg-white">
          <Container className="py-20 sm:py-28">
            <Eyebrow>Dónde estamos</Eyebrow>
            <Heading>Visítanos en nuestra oficina</Heading>
          </Container>
          <div className="h-[420px] sm:h-[520px]">
            <MapFrame place={officePlace} zoom={17} />
          </div>
        </section>

        <Register />
      </main>
      <Footer />
    </MotionConfig>
  );
}
