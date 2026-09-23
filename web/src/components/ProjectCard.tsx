import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { IconArrowUpRight, IconPin } from "./Icons";

const stageColor: Record<Project["stage"], string> = {
  "En preventa": "bg-orange text-white",
  "En construcción": "bg-navy text-white",
  Finalizado: "bg-white text-navy",
};

export default function ProjectCard({ p, large = false }: { p: Project; large?: boolean }) {
  return (
    <Link
      href={`/proyectos/${p.slug}`}
      className="group block overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-navy/5 transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy/10"
    >
      <div className={`relative overflow-hidden ${large ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <Image src={p.cover} alt={`Proyecto ${p.name}`} fill sizes={large ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"} className="object-cover transition duration-[1.4s] ease-out group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold shadow ${stageColor[p.stage]}`}>{p.stage}</span>
      </div>
      <div className="flex items-center justify-between gap-3 p-5 sm:p-6">
        <div className="min-w-0">
          <h3 className={`font-display font-extrabold ${large ? "text-2xl" : "text-xl"}`}>{p.name}</h3>
          <p className="mt-1 flex items-center gap-1.5 truncate text-sm text-navy/60">
            <IconPin className="size-4 shrink-0 text-orange" /> {p.place} · {p.kind}
          </p>
        </div>
        <span className="grid size-11 shrink-0 place-items-center rounded-full border border-navy/15 transition duration-500 group-hover:rotate-45 group-hover:border-orange group-hover:bg-orange group-hover:text-white">
          <IconArrowUpRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}
