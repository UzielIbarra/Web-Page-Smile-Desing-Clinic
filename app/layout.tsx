import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

// Configuración de la fuente principal
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smile Design Clinic",
  description: "Odontología estética de alto nivel por el Dr. Chrystian Mejía",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} font-system-pro bg-[#0a0a0a] antialiased text-sdc-body`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}