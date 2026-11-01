import React from 'react';

export const Segments: React.FC = () => {
  const segments = [
    {
      num: '01',
      tag: 'FAMILIAS // SMART-PARENTING',
      title: 'Padres Primerizos Tech',
      icon: 'family_restroom',
      color: 'bg-primary text-white',
      accent: 'border-primary',
      description:
        'Tranquilidad absoluta en cada salida a la ciclovía o parque. Recibe alertas instantáneas en tu smartphone ante impactos, caídas o salidas del perímetro seguro configurado.',
      bullets: [
        'Geocerca satelital con alarma sonora preventiva.',
        'Notificaciones de impacto G-Force en tiempo real.',
        'Aplicación móvil gratuita para iOS y Android.',
      ],
    },
    {
      num: '02',
      tag: 'CLÍNICO // ESTIMULACIÓN TEMPRANA',
      title: 'Desarrollo & Fisioterapia',
      icon: 'accessibility_new',
      color: 'bg-secondary-fixed text-on-surface',
      accent: 'border-charcoal',
      description:
        'Aceleración del desarrollo psicomotriz. Diseñada en colaboración con fisioterapeutas para fortalecer el equilibrio vestibular, coordinación bilateral y postura axial erguida.',
      bullets: [
        'Ergonomía de sillín bajo para soporte plantar completo.',
        'Transición natural hacia bicicleta de pedales sin rueditas.',
        'Inhibe malas posturas y fatiga lumbar infantil.',
      ],
    },
    {
      num: '03',
      tag: 'DEPORTE // CICLISMO INFANTIL',
      title: 'Familias Ciclistas y Atletas',
      icon: 'directions_bike',
      color: 'bg-surface-container-high text-on-surface',
      accent: 'border-charcoal',
      description:
        'Para familias que respiran la cultura del ciclismo colombiano. El chasis ultraligero de 2.9 kg permite rodar largas distancias en ciclorrutas, gravilla y terrenos irregulares.',
      bullets: [
        'Neumáticos EVA de polímero denso antipinchazos.',
        'Geometría deportiva de baja resistencia al avance.',
        'Fácil transporte en cajuela o mochila de ciclismo.',
      ],
    },
    {
      num: '04',
      tag: 'B2B // FLOTAS INSTITUCIONALES',
      title: 'Jardines y Colegios',
      icon: 'school',
      color: 'bg-primary text-white',
      accent: 'border-primary',
      description:
        'La solución más duradera y segura para instituciones educativas y áreas de juego. Cero mantenimiento de cadenas aceitadas, piezas sin holguras y material de grado hospitalario.',
      bullets: [
        'Superficie de magnesio fácil de desinfectar y limpiar.',
        'Cero grasa, piñones o piezas mecánicas peligrosas.',
        'Panel administrativo de monitoreo de flota en aula.',
      ],
    },
  ];

  return (
    <section id="segmentos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-12 pb-4 border-b-2 border-charcoal">
        <div className="inline-block bg-primary text-white font-mono text-xs font-bold px-3 py-1 neo-border neo-shadow-sm uppercase mb-2">
          [SYS.02 // PROPÓSITOS DE USO]
        </div>
        <h2 className="font-space-grotesk font-black text-3xl sm:text-4xl text-on-surface uppercase tracking-tight">
          Diseñada para Cada Propósito Familiar
        </h2>
        <p className="font-hanken-grotesk text-base text-on-surface-variant font-medium mt-1">
          Una misma plataforma de ingeniería pensada para acompañar distintas etapas de crecimiento y estilos de vida.
        </p>
      </div>

      {/* Grid of 4 Segments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {segments.map((seg) => (
          <div
            key={seg.num}
            className="bg-surface-container-lowest p-6 neo-border-3 neo-shadow flex flex-col justify-between group hover:-translate-y-1 transition-transform"
          >
            <div>
              {/* Card Ribbon */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-charcoal font-mono text-xs font-bold">
                <span className="text-on-surface-variant">[{seg.num} // SEGMENTO]</span>
                <span className="bg-surface px-2.5 py-0.5 border border-charcoal uppercase tracking-wider text-[11px]">
                  {seg.tag}
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 flex items-center justify-center neo-border neo-shadow-sm ${seg.color}`}>
                  <span className="material-symbols-outlined text-2xl font-bold">{seg.icon}</span>
                </div>
                <h3 className="font-space-grotesk font-black text-2xl text-on-surface uppercase tracking-tight">
                  {seg.title}
                </h3>
              </div>

              {/* Description */}
              <p className="font-hanken-grotesk text-on-surface text-base mb-6 font-medium leading-relaxed">
                {seg.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2.5 font-mono text-xs text-on-surface pb-6 border-b border-charcoal">
                {seg.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary font-bold">▶</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Card Action */}
            <div className="pt-4 flex items-center justify-between font-mono text-xs">
              <span className="text-on-surface-variant font-bold">CERTIFICACIÓN MOTRIZ</span>
              <a
                href="#preorden"
                className="text-primary font-black uppercase flex items-center gap-1 hover:underline"
              >
                <span>Configurar para este perfil</span>
                <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
