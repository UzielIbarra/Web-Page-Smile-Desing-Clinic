import Image from "next/image";

export default function Services() {
  const services = [
    {
      id: "diseño-sonrisa",
      name: "Diseño de Sonrisa",
      desc: "Transformación completa con carillas y coronas para una sonrisa perfecta y natural.",
      beforeImg: "/diseñodesonrisa-antes.png",
      afterImg: "/diseñodesonrisa-despues.png",
    },
    {
      id: "implantes",
      name: "Implantes Dentales",
      desc: "Reemplazo permanente de piezas con titanio de alta calidad. Resultados definitivos.",
      beforeImg: "/implantes-antes.png",
      afterImg: "/implantes-despues.png",
    },
    {
      id: "ortodoncia",
      name: "Ortodoncia",
      desc: "Brackets estéticos e Invisalign para alinear tu sonrisa sin comprometer tu imagen.",
      beforeImg: "/ortodoncia-antes.png",
      afterImg: "/ortodoncia-despues.png",
    },
    {
      id: "blanqueamiento",
      name: "Blanqueamiento",
      desc: "Técnica profesional de blanqueamiento láser con resultados visibles desde la primera sesión.",
      beforeImg: "/blanqueamiento-antes.png",
      afterImg: "/blanqueamiento-despues.png",
    },
    {
      id: "carillas",
      name: "Carillas",
      desc: "Laminados de porcelana ultrafinos. La solución de los famosos para una sonrisa impecable.",
      beforeImg: "/carillas-antes.png",
      afterImg: "/carillas-despues.png",
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación oral",
      desc: "Planes integrales para restaurar la función y estética de tu boca de forma completa.",
      beforeImg: "/rehabilitacion-antes.png",
      afterImg: "/rehabilitacion-despues.png",
    },
  ];

  return (
    <section id="servicios" className="bg-[#070707] px-10 py-16 scroll-mt-[72px]">
      <div className="font-system-pro text-[10px] font-semibold tracking-[0.28em] text-sdc-gold/90 uppercase mb-3">
        Tratamientos
      </div>
      <h2 className="font-system-pro text-3xl md:text-[2rem] font-semibold tracking-tight text-sdc-cream mb-4">
        Servicios especializados
      </h2>
      <p className="font-system-pro text-[14px] md:text-[15px] leading-relaxed text-sdc-muted max-w-[520px] mb-12 tracking-wide">
        Cada tratamiento es diseñado a medida, con tecnología de vanguardia y el más alto nivel de atención.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#0f0d08] border border-[rgba(250,248,244,0.06)] rounded-xl overflow-hidden transition-colors duration-300 hover:border-[rgba(201,168,76,0.35)] group"
          >
            <div className="relative h-48 bg-[#16130c] flex">
              <div className="flex-1 relative border-r border-[rgba(250,248,244,0.06)]">
                <Image
                  src={service.beforeImg}
                  alt={`${service.name} - Antes`}
                  fill
                  className="object-cover"
                  quality={100}
                />
                <div className="font-system-pro absolute top-2 left-2 text-[9px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-md bg-[#120f0a]/92 text-sdc-gold-soft border border-[rgba(201,168,76,0.18)]">
                  Antes
                </div>
              </div>

              <div className="flex-1 relative">
                <Image
                  src={service.afterImg}
                  alt={`${service.name} - Después`}
                  fill
                  className="object-cover"
                  quality={100}
                />
                <div className="font-system-pro absolute top-2 right-2 text-[9px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-md bg-[#0a100e]/92 text-sdc-success border border-[rgba(155,171,156,0.25)]">
                  Después
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="font-system-pro text-[14px] font-semibold tracking-wide text-sdc-cream mb-2 transition-colors duration-300 group-hover:text-sdc-gold-soft">
                {service.name}
              </div>
              <div className="font-system-pro text-[13px] text-sdc-muted leading-relaxed tracking-wide">
                {service.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
