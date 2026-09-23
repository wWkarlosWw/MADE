import Image from "next/image";

const photos = [
  { src: "/img/ft-1.webp", alt: "Revisión de planos con casco MADE" },
  { src: "/img/ft-9.webp", alt: "Equipo MADE en obra" },
  { src: "/img/ft-2.webp", alt: "Casco de seguridad MADE" },
  { src: "/img/ft-18.webp", alt: "Planificación de proyecto en oficina" },
  { src: "/img/ft-4.webp", alt: "Supervisión de obra" },
  { src: "/img/ft-10.webp", alt: "Arquitectos revisando avances de obra" },
  { src: "/img/ft-19.webp", alt: "Reunión técnica del equipo" },
];

/** Carrusel infinito "MADE en obra" (se pausa al pasar el mouse) */
export default function Gallery() {
  return (
    <section aria-label="MADE en obra" className="overflow-hidden bg-sand pb-20 sm:pb-28 lg:pb-32">
      <div className="group flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
        {[...photos, ...photos].map((p, i) => (
          <figure key={i} className="relative h-56 w-80 shrink-0 overflow-hidden rounded-3xl sm:h-72 sm:w-[26rem]" aria-hidden={i >= photos.length}>
            <Image src={p.src} alt={i >= photos.length ? "" : p.alt} fill sizes="420px" className="object-cover transition duration-700 hover:scale-110" />
          </figure>
        ))}
      </div>
    </section>
  );
}
