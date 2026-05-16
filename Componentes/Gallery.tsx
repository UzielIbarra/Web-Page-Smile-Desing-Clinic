import Image from "next/image";

export default function Gallery() {
  const galleryItems = [
    {
      id: 1,
      name: "Caso #1",
      treatment: "Carillas",
      beforeImg: "/gallery-1-antes.png",
      afterImg: "/gallery-1-despues.png",
    },
    {
      id: 2,
      name: "Caso #2",
      treatment: "Implantes",
      beforeImg: "/gallery-2-antes.png",
      afterImg: "/gallery-2-despues.png",
    },
    {
      id: 3,
      name: "Caso #3",
      treatment: "Diseño de Sonrisa",
      beforeImg: "/gallery-3-antes.png",
      afterImg: "/gallery-3-despues.png",
    },
  ];

  return (
    <section
      id="resultados"
      className="bg-[#0d0b07] px-10 py-16 border-y border-[rgba(250,248,244,0.05)] scroll-mt-[72px]"
    >
      <div className="font-system-pro text-[10px] font-semibold tracking-[0.28em] text-sdc-gold/90 uppercase mb-3">
        Resultados
      </div>
      <h2 className="font-system-pro text-3xl md:text-[2rem] font-semibold tracking-tight text-sdc-cream mb-4">
        Antes & Después
      </h2>
      <p className="font-system-pro text-[14px] md:text-[15px] leading-relaxed text-sdc-muted max-w-[520px] mb-12 tracking-wide">
        Casos reales de nuestros pacientes. Cada sonrisa es única y cada resultado habla por sí solo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="bg-[#0f0d08] border border-[rgba(250,248,244,0.06)] rounded-xl overflow-hidden transition-colors duration-300 hover:border-[rgba(201,168,76,0.35)] group"
          >
            <div className="relative h-56 bg-[#16130c] flex">
              <div className="flex-1 relative border-r border-[rgba(250,248,244,0.06)]">
                <Image
                  src={item.beforeImg}
                  alt={`${item.treatment} - Antes`}
                  fill
                  className="object-cover"
                  quality={100}
                />
                <span className="font-system-pro absolute top-2 left-2 inline-block text-[9px] tracking-[0.18em] uppercase px-3 py-1 rounded-md bg-[#120f0a]/92 text-sdc-gold-soft border border-[rgba(201,168,76,0.18)]">
                  Antes
                </span>
              </div>

              <div className="flex-1 relative">
                <Image
                  src={item.afterImg}
                  alt={`${item.treatment} - Después`}
                  fill
                  className="object-cover"
                  quality={100}
                />
                <span className="font-system-pro absolute top-2 right-2 inline-block text-[9px] tracking-[0.18em] uppercase px-3 py-1 rounded-md bg-[#0a100e]/92 text-sdc-success border border-[rgba(155,171,156,0.25)]">
                  Después
                </span>
              </div>
            </div>

            <div className="p-5 text-center space-y-1">
              <div className="font-system-pro text-[11px] text-sdc-gold-soft tracking-[0.14em] uppercase font-semibold">
                {item.name}
              </div>
              <div className="font-system-pro text-[11px] text-sdc-muted tracking-[0.12em] uppercase">
                {item.treatment}
              </div>
            </div>
          </div>
        ))}

        <div className="bg-[#0c0a07] border border-[rgba(201,168,76,0.2)] rounded-xl p-6 flex flex-col justify-center items-center min-h-[300px] transition-colors duration-300 hover:bg-[#100e08] hover:border-[rgba(201,168,76,0.45)] cursor-pointer group">
          <div className="text-3xl mb-3 opacity-90 group-hover:scale-105 transition-transform" aria-hidden>
            📸
          </div>
          <div className="font-system-pro text-[13px] text-sdc-gold-soft mb-2 tracking-[0.12em] uppercase font-semibold">
            +20 casos disponibles
          </div>
          <div className="font-system-pro text-[12px] text-sdc-muted text-center tracking-wide leading-relaxed max-w-[200px]">
            Ver galería completa en la clínica
          </div>
        </div>
      </div>
    </section>
  );
}
