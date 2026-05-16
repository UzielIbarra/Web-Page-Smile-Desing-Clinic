export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana G.",
      role: "Diseño de sonrisa",
      text: '"El Dr. Mejía transformó mi sonrisa completamente. El resultado superó todas mis expectativas."',
    },
    {
      name: "Ricardo M.",
      role: "Implantes + carillas",
      text: '"Profesionalismo y atención al detalle únicos. Llevo 3 años siendo paciente y no cambiaría nada."',
    },
    {
      name: "Sofía L.",
      role: "Ortodoncia invisible",
      text: '"La clínica más elegante y el mejor resultado estético que he visto. Vale cada peso invertido."',
    },
  ];

  return (
    <section id="testimonios" className="bg-[#070707] px-10 py-16 scroll-mt-[72px]">
      <div className="font-system-pro text-[10px] font-semibold tracking-[0.28em] text-sdc-gold/90 uppercase mb-3">
        Testimonios
      </div>
      <h2 className="font-system-pro text-3xl md:text-[2rem] font-semibold tracking-tight text-sdc-cream mb-12 max-w-xl">
        Lo que dicen nuestros pacientes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testi, index) => (
          <div
            key={index}
            className="bg-[#0f0d08] border border-[rgba(250,248,244,0.06)] rounded-xl p-7"
          >
            <div className="font-system-pro text-sdc-gold-soft/85 text-[11px] tracking-[0.35em] mb-4">
              ★★★★★
            </div>
            <p className="font-system-pro text-[14px] md:text-[15px] text-sdc-body leading-relaxed mb-6 tracking-wide italic">
              {testi.text}
            </p>
            <div className="font-system-pro text-[11px] text-sdc-gold-soft tracking-[0.14em] uppercase font-semibold">
              {testi.name}
            </div>
            <div className="font-system-pro text-[11px] text-sdc-subtle mt-2 tracking-wide">
              {testi.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
