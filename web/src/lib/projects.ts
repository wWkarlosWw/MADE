/**
 * Proyectos de MADE.
 * ⚠ Las coordenadas, descripciones y datos de "Edificio MADE" y "Obra Norte" son
 * de ejemplo: reemplazar con la información real de cada proyecto.
 */
export type Stage = "En preventa" | "En construcción" | "Finalizado";

export type Project = {
  slug: string;
  name: string;
  stage: Stage;
  kind: string;
  place: string;
  cover: string;
  images: string[];
  coords: [number, number];
  summary: string;
  description: string;
  location: string;
  client: string;
  team: string;
  units: { name: string; text: string; image: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "luna-blanca",
    name: "Luna Blanca",
    stage: "En preventa",
    kind: "Condominio residencial",
    place: "Cochabamba",
    cover: "/img/luna-blanca.webp",
    images: ["/img/luna-blanca.webp", "/img/made-edificio.webp", "/img/obra-md.webp"],
    coords: [-17.4062, -66.1385],
    summary: "Condominio de departamentos y locales comerciales con diseño contemporáneo, áreas verdes y acabados de primera.",
    description:
      "Luna Blanca es un condominio pensado desde las personas: departamentos luminosos, locales comerciales en planta baja y espacios comunes que fomentan la vida en comunidad. Diseño contemporáneo, materiales de calidad y eficiencia energética en cada detalle.",
    location: "Zona de alto crecimiento con acceso a vías principales, comercio, colegios y servicios de salud.",
    client: "Familias jóvenes e inversionistas que buscan un inmueble de alta plusvalía en Cochabamba.",
    team: "Arquitectura, ingeniería y construcción a cargo del equipo MADE, con supervisión permanente en obra.",
    units: [
      { name: "Departamento", text: "Unidades de 1, 2 y 3 dormitorios con balcón, cocina integrada y parqueo.", image: "/img/ft-17.webp" },
      { name: "Local comercial", text: "Locales en planta baja con frente a avenida, ideales para negocio o inversión.", image: "/img/ft-3.webp" },
    ],
    featured: true,
  },
  {
    slug: "edificio-made",
    name: "Edificio MADE",
    stage: "En construcción",
    kind: "Departamentos",
    place: "Cochabamba",
    cover: "/img/made-edificio.webp",
    images: ["/img/made-edificio.webp", "/img/obra-md.webp"],
    coords: [-17.3781, -66.1702],
    summary: "Edificio residencial de departamentos con terraza común y estacionamiento subterráneo.",
    description: "Edificio residencial de mediana altura con departamentos de 2 y 3 dormitorios, terraza común y estacionamiento subterráneo.",
    location: "Zona residencial consolidada, a minutos del centro de la ciudad.",
    client: "Familias que buscan un hogar moderno y bien ubicado.",
    team: "Equipo MADE.",
    units: [{ name: "Departamento", text: "Departamentos de 2 y 3 dormitorios.", image: "/img/ft-18.webp" }],
  },
  {
    slug: "obra-norte",
    name: "Obra Norte",
    stage: "En construcción",
    kind: "Residencial",
    place: "Cochabamba",
    cover: "/img/obra-md.webp",
    images: ["/img/obra-md.webp", "/img/ft-9.webp", "/img/ft-10.webp"],
    coords: [-17.3612, -66.1489],
    summary: "Proyecto residencial en ejecución en la zona norte de la ciudad.",
    description: "Proyecto residencial en ejecución en la zona norte de Cochabamba.",
    location: "Zona norte de Cochabamba.",
    client: "Familias e inversionistas.",
    team: "Equipo MADE.",
    units: [{ name: "Casa", text: "Viviendas unifamiliares con jardín.", image: "/img/ft-9.webp" }],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
