import { WHATSAPP_BOOKING_URL } from "../lib/contact";

export default function Contact() {
  return (
    <section
      id="doctor"
      className="bg-[#0a0a0a] border-y border-[rgba(250,248,244,0.06)] px-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center scroll-mt-[72px]"
    >
      <div className="space-y-4">
        <h2 className="font-system-pro text-3xl md:text-[2rem] font-semibold tracking-tight text-sdc-cream">
          ¿Listo para tu nueva sonrisa?
        </h2>
        <p className="font-system-pro text-[14px] md:text-[15px] leading-relaxed text-sdc-muted tracking-wide max-w-md">
          Agenda directamente por WhatsApp. El Dr. Chrystian Mejía o su equipo te atenderán a la brevedad.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <a
          href={WHATSAPP_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-system-pro flex items-center gap-4 rounded-xl border border-[rgba(155,171,156,0.28)] bg-[#0a100e]/85 px-5 py-4 transition-colors hover:border-[rgba(155,171,156,0.45)] hover:bg-[#0c1412]/95 backdrop-blur-sm"
        >
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#25d366]/92 text-[#06280f] text-xs font-bold">
            ✓
          </div>
          <div>
            <strong className="block text-[14px] md:text-[15px] text-sdc-cream font-semibold tracking-wide">
              Agendar cita por WhatsApp
            </strong>
            <span className="text-[12px] md:text-[13px] text-sdc-muted tracking-wide">
              Respuesta en menos de 24 hrs
            </span>
          </div>
        </a>

        <div className="flex gap-3">
          <div className="flex-1 rounded-xl border border-[rgba(250,248,244,0.06)] bg-[#0f0d08] px-3 py-4 text-center">
            <span className="font-system-pro block text-[13px] md:text-[14px] text-sdc-gold-soft font-semibold tracking-wide mb-1">
              Guadalajara
            </span>
            <span className="font-system-pro text-[11px] text-sdc-subtle tracking-wide uppercase">
              Ubicación
            </span>
          </div>
          <div className="flex-1 rounded-xl border border-[rgba(250,248,244,0.06)] bg-[#0f0d08] px-3 py-4 text-center">
            <span className="font-system-pro block text-[13px] md:text-[14px] text-sdc-gold-soft font-semibold tracking-wide mb-1">
              Lun–Sáb
            </span>
            <span className="font-system-pro text-[11px] text-sdc-subtle tracking-wide uppercase">
              Atención
            </span>
          </div>
          <div className="flex-1 rounded-xl border border-[rgba(250,248,244,0.06)] bg-[#0f0d08] px-3 py-4 text-center">
            <span className="font-system-pro block text-[13px] md:text-[14px] text-sdc-gold-soft font-semibold tracking-wide mb-1">
              Privada
            </span>
            <span className="font-system-pro text-[11px] text-sdc-subtle tracking-wide uppercase">
              Consulta
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
