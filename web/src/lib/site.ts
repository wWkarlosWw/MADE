/**
 * Configuración central del sitio.
 * Reemplaza los "#" de las redes y los datos de contacto por los reales.
 */
export const site = {
  name: "MADE Desarrolladores Inmobiliarios",
  city: "Cochabamba, Bolivia",
  address: "Av. Libertador Simón Bolívar, Cochabamba",
  phone: "+591 69490888",
  email: "madedesarrolladores@gmail.com",
  /** Las redes con "#" no se muestran. WhatsApp: usar "https://wa.me/59169490888" cuando se quiera activar. */
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61581430181100",
    instagram: "#",
    tiktok: "#",
    whatsapp: "#",
  },
  /** Fecha de lanzamiento de Luna Blanca (cuenta regresiva) */
  lunaBlancaLaunch: "2026-12-15T10:00:00-04:00",
  /** Oficina MADE — https://maps.app.goo.gl/ry3zSbbbGqd9RzUa7 */
  office: {
    coords: [-17.3706791, -66.1647738] as [number, number],
    mapsUrl: "https://maps.app.goo.gl/ry3zSbbbGqd9RzUa7",
  },
};

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "Sobre nosotros", href: "/nosotros" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

/** Partners: cambiar por los logos reales en /public/partners */
export const partners = [
  { name: "Pedrabol", tagline: "Marmolería", cta: "Ver más", href: "#" },
  { name: "Mi Depa", tagline: "Amoblado y decoración", cta: "Descuento", href: "#" },
];
