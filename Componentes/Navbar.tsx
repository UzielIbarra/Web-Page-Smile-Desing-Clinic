import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-3 px-6 md:px-16 lg:px-20 py-4 md:py-[18px] border-b border-[rgba(201,168,76,0.12)] bg-[#0a0a0a]/82 backdrop-blur-xl backdrop-saturate-150 shadow-[0_12px_40px_rgba(0,0,0,0.45)] supports-[backdrop-filter]:bg-[#0a0a0a]/72">
      <div className="flex items-center min-w-0">
        <Image
          src="/logo.png"
          alt="Logo Smile Design"
          width={56}
          height={56}
          quality={100}
          className="object-cover rounded-full border border-[rgba(201,168,76,0.35)] shadow-[0_0_14px_rgba(201,168,76,0.18)] shrink-0 size-[50px] sm:size-[54px] md:size-[44px] lg:size-[46px]"
        />

        <div className="w-px h-9 sm:h-10 md:h-[38px] lg:h-10 bg-[rgba(250,248,244,0.08)] mx-3 sm:mx-4 md:mx-4 lg:mx-5 shrink-0" />

        <div className="font-system-pro flex flex-col justify-center leading-tight min-w-0 gap-0.5">
          <span className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium tracking-[0.2em] uppercase text-sdc-cream">
            Smile
          </span>
          <span className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-semibold tracking-[0.16em] uppercase text-sdc-gold-soft">
            Design Clinic
          </span>
        </div>
      </div>

      <div className="hidden md:flex justify-center items-center gap-x-7 lg:gap-x-10 font-system-pro md:px-6">
        <a
          href="#servicios"
          className="text-[15px] lg:text-[16px] font-semibold tracking-[0.14em] uppercase text-sdc-muted transition-colors duration-300 whitespace-nowrap hover:text-sdc-gold-soft"
        >
          Servicios
        </a>
        <a
          href="#resultados"
          className="text-[15px] lg:text-[16px] font-semibold tracking-[0.14em] uppercase text-sdc-muted transition-colors duration-300 whitespace-nowrap hover:text-sdc-gold-soft"
        >
          Resultados
        </a>
        <a
          href="#doctor"
          className="text-[15px] lg:text-[16px] font-semibold tracking-[0.14em] uppercase text-sdc-muted transition-colors duration-300 whitespace-nowrap hover:text-sdc-gold-soft"
        >
          El Dr.
        </a>
        <a
          href="#testimonios"
          className="text-[15px] lg:text-[16px] font-semibold tracking-[0.14em] uppercase text-sdc-muted transition-colors duration-300 whitespace-nowrap hover:text-sdc-gold-soft"
        >
          Testimonios
        </a>
      </div>

      <button
        type="button"
        className="font-system-pro justify-self-end md:justify-self-auto shrink-0 bg-sdc-gold text-[#0a0a0a] text-[11px] md:text-[13px] lg:text-[14px] tracking-[0.14em] uppercase py-2.5 px-5 md:px-[22px] rounded-lg font-semibold transition-colors duration-300 hover:bg-[#dcc174] shadow-[0_6px_20px_rgba(201,168,76,0.22)]"
      >
        Agendar cita
      </button>
    </nav>
  );
}
