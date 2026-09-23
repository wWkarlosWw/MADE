import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Calidades permitidas: 90 para el hero, 75 para el resto
    qualities: [75, 90],
  },
};

export default nextConfig;
