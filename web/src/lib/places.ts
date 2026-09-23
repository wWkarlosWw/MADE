import { site } from "./site";
import type { Project } from "./projects";

export type MapPlace = { id: string; name: string; subtitle: string; coords: [number, number]; mapsUrl: string; office?: boolean };

export const officePlace: MapPlace = {
  id: "oficina",
  name: "Oficina MADE",
  subtitle: site.address,
  coords: site.office.coords,
  mapsUrl: site.office.mapsUrl,
  office: true,
};

export const projectPlace = (p: Project): MapPlace => ({
  id: p.slug,
  name: p.name,
  subtitle: `${p.stage} · ${p.kind}`,
  coords: p.coords,
  mapsUrl: `https://www.google.com/maps?q=${p.coords[0]},${p.coords[1]}`,
});
