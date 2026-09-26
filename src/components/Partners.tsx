import { partners } from "@/lib/site";
import { Stagger, StaggerItem } from "./motion";
import { Container, Section, SectionHeader } from "./ui";

/** Partners (borrador Sobre nosotros). Reemplazar el círculo con el logo real de cada partner */
export default function Partners() {
  return (
    <Section className="bg-sand">
      <Container>
        <SectionHeader
          eyebrow="Partners"
          title="Aliados que suman valor a cada proyecto"
          text="Trabajamos con marcas que comparten nuestro compromiso con la calidad y ofrecen beneficios exclusivos a nuestros clientes."
        />
        <Stagger className="mt-14 flex flex-wrap gap-6" stagger={0.15}>
          {partners.map((p) => (
            <StaggerItem key={p.name} className="group flex w-full flex-col items-center rounded-3xl bg-white p-8 text-center ring-1 ring-navy/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy/5 sm:w-64">
              <span className="grid size-32 place-items-center rounded-full border-4 border-navy bg-navy font-display text-xl font-black uppercase leading-tight text-white transition duration-500 group-hover:border-orange">
                {p.name}
              </span>
              <p className="mt-5 font-display text-lg font-extrabold">{p.name}</p>
              <p className="text-sm text-navy/60">{p.tagline}</p>
              <a href={p.href} className="mt-5 rounded-full bg-orange px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-navy">
                {p.cta}
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
