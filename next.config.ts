import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Derivados más anchos para heroes full-bleed en pantallas 2x (evita upscale borroso).
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 2560, 3840],
    qualities: [75, 85, 95, 100],
    // Si defines localPatterns, debe cubrir todas las rutas locales que usa <Image>.
    // Sin `search`: permite también query tipo ?v= para cualquier archivo en /public.
    localPatterns: [{ pathname: "/**" }],
  },
};

export default nextConfig;
