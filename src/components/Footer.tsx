import Link from "next/link";
import { nav, site } from "@/lib/site";
import Logo from "./Logo";
import Socials from "./Socials";
import { IconMail, IconPhone, IconPin } from "./Icons";

export default function Footer() {
  return (
    <footer className="px-3 pb-3 pt-3 sm:px-5 sm:pb-5">
      <div className="bg-pattern-light relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-navy-900 px-6 pb-8 pt-14 text-white sm:rounded-[2.5rem] sm:px-12 sm:pt-16">
        <div className="relative grid gap-12 md:grid-cols-[1.4fr_0.8fr_1fr]">
          <div style={{ "--logo-main": "#fff", "--logo-gray": "#c9c7c8" } as React.CSSProperties}>
            <Logo className="h-16 w-auto sm:h-20" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Proyectos inmobiliarios innovadores, sostenibles y de calidad que aportan al crecimiento y modernización de Cochabamba.
            </p>
            <Socials className="mt-7 flex gap-3" itemClassName="bg-white/10 text-white hover:bg-orange" />
          </div>

          <div>
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.25em] text-orange">Navegación</p>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-white/70 transition hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/proyectos/luna-blanca" className="text-white/70 transition hover:text-white">
                  Luna Blanca
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-xs font-extrabold uppercase tracking-[0.25em] text-orange">Contacto</p>
            <ul className="mt-5 space-y-3.5 text-sm text-white/70">
              <li className="flex gap-3"><IconPin className="size-5 shrink-0 text-orange" /> {site.address}</li>
              <li className="flex gap-3"><IconPhone className="size-5 shrink-0 text-orange" /> {site.phone}</li>
              <li className="flex gap-3"><IconMail className="size-5 shrink-0 text-orange" /> {site.email}</li>
            </ul>
          </div>
        </div>

        <div className="relative mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <p>{site.city}</p>
        </div>
      </div>
    </footer>
  );
}
