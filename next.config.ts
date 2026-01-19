import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuro la salida estática para GitHub Pages
  output: 'export',
  // Cambia '/data/' por el nombre de tu repositorio en GitHub
  basePath: process.env.NODE_ENV === 'production' ? '/data' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
