import Image from "next/image";
import { WHATSAPP_BOOKING_URL } from "../lib/contact";

const portraitMax =
  "w-full max-w-[340px] sm:max-w-[380px] md:max-w-[440px]";

/** Cámbialo cuando guardes un nuevo `public/retrato.png` (rompe caché del navegador y de Next/Image). */
const RETRATO_VER = "2";

export default function Hero() {
  return (
    <section className="relative bg-[#0a0a0a] px-6 md:px-20 py-14 md:py-20 border-b border-[#1a1710] overflow-hidden min-h-[min(920px,92svh)]">

      {/* Textura full-bleed */}
      <div className="absolute inset-0">
        <Image
          src="/marmol.png"
          alt=""
          fill
          className="object-cover object-center"
          quality={100}
          priority
          sizes="100vw"
          placeholder="empty"
        />
      </div>

      {/* Lectura: oscurece mármol detrás del texto */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-r from-[#070504]/92 via-[#070504]/72 md:via-[#070504]/55 to-transparent md:to-[55%]"
        aria-hidden
      />
      <div
        className="absolute inset-y-0 left-0 z-[1] pointer-events-none w-full md:w-[58%] bg-gradient-to-br from-black/55 via-transparent to-transparent"
        aria-hidden
      />

      <div className="absolute top-0 right-0 z-[1] w-[min(520px,55vw)] h-full bg-[radial-gradient(ellipse_at_right,rgba(201,168,76,0.06)_0%,transparent_72%)] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-12 lg:gap-16 md:min-h-[min(760px,78svh)] md:items-stretch pt-2 pb-10 md:py-4">

        {/* ── Columna Izquierda ── */}
        <div className="flex flex-col justify-center md:justify-start md:self-start -translate-y-3 md:-translate-y-5 lg:-translate-y-9 xl:-translate-y-10 md:pt-2 lg:pt-0">
          <div className="rounded-xl bg-[#070605]/78 backdrop-blur-xl px-7 py-9 md:px-9 md:py-10 shadow-[0_24px_60px_rgba(0,0,0,0.45)] ring-1 ring-[#faf8f4]/[0.06] border border-[rgba(201,168,76,0.11)] max-w-xl">
            <div
              className="font-system-pro text-[11px] md:text-[12px] font-semibold tracking-[0.26em] text-sdc-gold/90 uppercase mb-5 animate-fade-up drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]"
              style={{ animationDelay: "0ms" }}
            >
              Dr. Chrystian Mejía · Guadalajara
            </div>

            <h1
              className="font-system-pro text-4xl md:text-5xl font-semibold tracking-tight text-sdc-cream leading-[1.15] mb-5 animate-fade-up drop-shadow-[0_2px_14px_rgba(0,0,0,0.78)]"
              style={{ animationDelay: "100ms" }}
            >
              Tu sonrisa es<br />
              <span className="text-sdc-gold-soft font-medium">nuestra obra</span>
            </h1>

            <p
              className="font-system-pro text-[15px] md:text-[16px] text-sdc-body/95 leading-[1.6] mb-6 max-w-[400px] animate-fade-up tracking-wide"
              style={{ animationDelay: "200ms" }}
            >
              Odontología estética de alto nivel. Transformaciones reales de nuestros pacientes.
            </p>

            <div
              className="flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href={WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 sm:gap-5 md:gap-6"
              >
                <span className="font-system-pro inline-flex items-center justify-center bg-sdc-gold text-[#0a0a0a] text-[13px] sm:text-[14px] tracking-[0.14em] uppercase py-4 px-8 sm:py-[17px] sm:px-10 rounded-lg font-semibold shadow-[0_6px_22px_rgba(0,0,0,0.38)] transition-colors group-hover:bg-[#dcc174]">
                  Agendar por WhatsApp
                </span>
                <span className="relative flex size-[52px] shrink-0 items-center justify-center sm:size-[58px] md:size-[68px] transition-transform duration-300 group-hover:scale-[1.06]">
                  <Image
                    src="/LOGOWHATSAPP.png"
                    alt=""
                    width={72}
                    height={72}
                    className="size-full object-contain drop-shadow-[0_6px_18px_rgba(0,0,0,0.55)]"
                  />
                </span>
              </a>
              <button
                type="button"
                className="font-system-pro bg-[#0e0c09]/75 text-sdc-body border border-sdc-gold/35 text-[14px] md:text-[15px] tracking-[0.14em] uppercase py-3 px-6 rounded-lg transition-colors hover:bg-sdc-gold hover:text-[#0a0a0a] hover:border-sdc-gold backdrop-blur-sm"
              >
                Ver tratamientos
              </button>
            </div>
          </div>
        </div>

        {/* ── Columna derecha: retrato abajo + crédito ── */}
        <div className="flex flex-col justify-end items-center md:items-end md:-translate-x-3 lg:-translate-x-7 xl:-translate-x-9 gap-6 md:pb-4 lg:pb-6">
          <div className={`flex flex-col gap-5 ${portraitMax}`}>
            <div
              className={`relative ${portraitMax} aspect-[3/4] rounded-xl overflow-hidden border-2 border-[#ddb865] bg-black shadow-[0_0_36px_rgba(222,188,110,0.45),0_0_72px_rgba(201,168,76,0.28),0_0_120px_rgba(201,168,76,0.14)] md:translate-y-1`}
            >
              <Image
                src={`/retrato.png?v=${RETRATO_VER}`}
                alt="Karely Ruiz, paciente de Smile Design Clinic"
                fill
                className="object-cover object-center"
                quality={100}
                priority
                sizes="(max-width: 640px) min(340px, 90vw), (max-width: 768px) 380px, 440px"
                placeholder="empty"
              />
            </div>

            <div className="font-system-pro rounded-2xl bg-[#070605]/76 backdrop-blur-xl px-6 py-5 shadow-[0_20px_48px_rgba(0,0,0,0.4)] ring-1 ring-[#faf8f4]/[0.07] border border-[rgba(201,168,76,0.11)] text-left space-y-2.5">
              <p className="text-[1.3125rem] sm:text-[1.375rem] md:text-[1.4375rem] font-semibold tracking-[0.04em] text-sdc-cream leading-[1.2] antialiased [text-shadow:0_1px_0_rgba(201,168,76,0.14),0_2px_18px_rgba(0,0,0,0.48)]">
                Karely Ruiz
              </p>
              <p className="text-[13px] md:text-[14px] leading-[1.55] font-normal tracking-[0.06em] text-sdc-muted antialiased [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]">
                Figura pública · Paciente en Smile Design Clinic
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
