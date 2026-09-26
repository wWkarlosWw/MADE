import type { Metadata } from "next";
import { Figtree, Nunito } from "next/font/google";
import "./globals.css";

// Nunito ≈ Arial Rounded MT Bold (títulos) · Figtree ≈ Acumin (texto)
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MADE Desarrolladores Inmobiliarios | Cochabamba",
  description:
    "Desarrolladora inmobiliaria en Cochabamba. Proyectos residenciales, comerciales y urbanizaciones innovadoras, sostenibles y de calidad, pensados desde las personas.",
  icons: { icon: "/brand/isotipo.svg" },
  openGraph: {
    title: "MADE Desarrolladores Inmobiliarios",
    description: "Forjamos el futuro de Cochabamba, un proyecto a la vez.",
    images: ["/img/made-edificio.webp"],
    locale: "es_BO",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${nunito.variable} ${figtree.variable} antialiased`}>
      <body className="min-h-full overflow-x-clip">{children}</body>
    </html>
  );
}
