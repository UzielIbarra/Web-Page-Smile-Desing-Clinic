// 1. Importamos la herramienta de Next.js
import Image from "next/image";

export default function FloatingLogo() {
  return (
    <a
      href="https://www.instagram.com/clinic_smile_design/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 size-[60px] sm:size-[68px] md:size-[46px] lg:size-[48px] rounded-full flex items-center justify-center hover:scale-105 transition-all duration-300"
    >
      <div className="relative w-full h-full bg-[#0a0a0a] border border-[#feda75] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(201,168,76,0.2)] hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] overflow-hidden">
        {/* 3. Usamos el componente <Image> correctamente */}
        <Image
          src="/instagram_icon.png" // Asegúrate de que el archivo exista en la carpeta /public
          alt="Instagram"
          fill // Esto llena el contenedor redondo
          quality={100} // Máxima calidad para evitar dentado
          className="object-cover rounded-full" // Mantenemos el suavizado
        />
      </div>
    </a>
  );
}