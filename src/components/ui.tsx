import Link from "next/link";
import type { ReactNode } from "react";
import { IconArrowUpRight } from "./Icons";
import { Reveal, SplitHeading } from "./motion";

/** Contenedor y ritmo vertical comunes a todas las secciones */
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`}>{children}</div>;
}

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-20 sm:py-28 lg:py-32 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <Reveal y={12}>
      <p className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-orange ${className}`}>
        <span className="h-px w-8 bg-orange" aria-hidden />
        {children}
      </p>
    </Reveal>
  );
}

export function Heading({ children, className = "", as = "h2" }: { children: string; className?: string; as?: "h1" | "h2" | "h3" }) {
  return (
    <SplitHeading
      as={as}
      text={children}
      className={`mt-4 font-display text-[2rem] font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl ${className}`}
    />
  );
}

export function SectionHeader({ eyebrow, title, text, action, light = false }: { eyebrow: string; title: string; text?: string; action?: ReactNode; light?: boolean }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading className={`max-w-2xl ${light ? "text-white" : ""}`}>{title}</Heading>
      </div>
      <div className="flex flex-col gap-5 lg:items-end lg:text-right">
        {text && (
          <Reveal delay={0.15}>
            <p className={`max-w-md text-base leading-relaxed ${light ? "text-white/70" : "text-navy/70"}`}>{text}</p>
          </Reveal>
        )}
        {action && <Reveal delay={0.2}>{action}</Reveal>}
      </div>
    </div>
  );
}

type BtnProps = { href: string; children: ReactNode; variant?: "primary" | "dark" | "light" | "outline"; className?: string; arrow?: boolean };

export function Button({ href, children, variant = "primary", className = "", arrow = true }: BtnProps) {
  const base = "group inline-flex items-center gap-3 rounded-full py-2 pl-6 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5";
  const styles = {
    primary: "bg-orange text-white shadow-lg shadow-orange/25 hover:bg-orange-600",
    dark: "bg-navy text-white hover:bg-orange",
    light: "bg-white text-navy hover:bg-orange hover:text-white",
    outline: "border border-current text-current hover:bg-white/10",
  }[variant];
  const circle = {
    primary: "bg-white/20 group-hover:bg-white group-hover:text-orange",
    dark: "bg-white/15 group-hover:bg-white group-hover:text-orange",
    light: "bg-navy text-white group-hover:bg-white group-hover:text-orange",
    outline: "bg-current/10",
  }[variant];
  const Comp = href.startsWith("/") ? Link : "a";
  return (
    <Comp href={href} className={`${base} ${styles} ${arrow ? "pr-2" : "pr-6"} ${className}`}>
      {children}
      {arrow && (
        <span className={`grid size-8 place-items-center rounded-full transition-all duration-300 group-hover:rotate-45 ${circle}`}>
          <IconArrowUpRight className="size-4" />
        </span>
      )}
    </Comp>
  );
}
