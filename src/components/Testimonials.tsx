import React from 'react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      author: 'Familia Morales Gómez',
      city: 'Bogotá D.C. (Ciclovía Séptima)',
      role: 'Padres de Mateo (2 años y medio)',
      quote:
        'Mateo aprendió a equilibrarse en solo dos fines de semana. En la ciclovía de la Séptima, poder ver la geocerca en el celular y saber que el sensor nos avisaría si llega a caerse nos da una paz mental impagable.',
      metric: 'Equilibrio logrado en 14 días',
      stars: 5,
    },
    {
      author: 'Dra. Marcela Restrepo',
      city: 'Medellín (Clínica de Rehabilitación Motriz)',
      role: 'Fisioterapeuta Pediátrica Infantil',
      quote:
        'El peso de 2.9 kg es un diferencial biomecánico absoluto. Un niño de dos años no debería cargar con un armazón de acero de 5 kg. La ergonomía del sillín bajo estimula la propiocepción y la coordinación sin forzar la espalda.',
      metric: 'Recomendada por especialistas',
      stars: 5,
    },
    {
      author: 'Carlos & Sofía Andrade',
      city: 'Manizales (Caldas)',
      role: 'Ciclistas de Montaña & Padres',
      quote:
        'Aquí en Manizales con las lomas, las bicicletas tradicionales eran un dolor de cabeza porque la niña no podía moverlas. La BBG la levanta con una sola mano y los neumáticos EVA soportan cualquier adoquín o gravilla.',
      metric: '100% resistente a topografía andina',
      stars: 5,
    },
  ];

  return (
    <section id="testimonios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12 pb-4 border-b-2 border-charcoal">
        <div className="inline-block bg-primary text-white font-mono text-xs font-bold px-3 py-1 neo-border neo-shadow-sm uppercase mb-2">
          [SYS.04 // CASOS DE ÉXITO EN COLOMBIA]
        </div>
        <h2 className="font-space-grotesk font-black text-3xl sm:text-4xl text-on-surface uppercase tracking-tight">
          Testimonios Sobre Dos Ruedas
        </h2>
        <p className="font-hanken-grotesk text-base text-on-surface-variant font-medium mt-1">
          Historias reales de padres, atletas y especialistas que ya ruedan con confianza.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="bg-surface-container-lowest p-6 neo-border-3 neo-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-charcoal font-mono text-xs">
                <span className="font-bold text-primary">{rev.city}</span>
                <span className="bg-secondary-fixed text-on-surface font-extrabold px-2 py-0.5 border border-charcoal">
                  5.0 ★
                </span>
              </div>

              <p className="font-hanken-grotesk text-on-surface text-base italic leading-relaxed mb-6">
                "{rev.quote}"
              </p>
            </div>

            <div className="pt-4 border-t-2 border-charcoal font-mono">
              <div className="font-space-grotesk font-black text-lg text-on-surface uppercase">
                {rev.author}
              </div>
              <div className="text-xs text-on-surface-variant font-medium">{rev.role}</div>
              <div className="mt-2 text-[11px] font-bold text-primary flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">award_star</span>
                <span>{rev.metric}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
