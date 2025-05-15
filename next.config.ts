import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dominio da Imagem
 images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**'
      },
    ],
  },
};

export default nextConfig;
