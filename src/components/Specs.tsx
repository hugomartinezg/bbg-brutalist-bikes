import React from 'react';

export const Specs: React.FC = () => {
  const comparisons = [
    {
      feature: 'Material del Chasis',
      bbg: 'Aleación de Magnesio inyectado monocasco (cero soldaduras)',
      traditional: 'Acero tubular soldado con costuras visibles',
      highlight: true,
    },
    {
      feature: 'Peso Total',
      bbg: '2.9 kg (manejable desde 18 meses)',
      traditional: '4.8 kg a 5.6 kg (pesada para el niño)',
      highlight: true,
    },
    {
      feature: 'Módulo IoT & GPS',
      bbg: 'Integrado en el cuadro con 4G LTE-M y acelerómetro SOS',
      traditional: 'Inexistente / No disponible',
      highlight: true,
    },
    {
      feature: 'Neumáticos',
      bbg: 'Polímero EVA sellado Pro-Grip (cero pinchazos, cero inflado)',
      traditional: 'Caucho con cámara de aire (pinchazos constantes)',
      highlight: false,
    },
    {
      feature: 'Tornillería Expuesta',
      bbg: '0 tornillos o filos cortantes al alcance del niño',
      traditional: 'Tuercas expuestas en ejes y manubrio',
      highlight: false,
    },
    {
      feature: 'Ajuste de Sillín',
      bbg: 'Palanca Quick-Lock sin herramientas (rango 28 - 46 cm)',
      traditional: 'Requiere llave inglesa o llave fija para mover tuerca',
      highlight: false,
    },
    {
      feature: 'Garantía Estructural',
      bbg: '5 años de garantía oficial en Colombia',
      traditional: '6 meses a 1 año estándar de fábrica',
      highlight: false,
    },
  ];

  return (
    <section id="especificaciones" className="w-full bg-surface-container-lowest py-16 border-y-[3px] border-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 pb-4 border-b-2 border-charcoal">
          <div className="inline-block bg-primary text-white font-mono text-xs font-bold px-3 py-1 neo-border neo-shadow-sm uppercase mb-2">
            [SYS.03 // HARDWARE &amp; MATERIALES]
          </div>
          <h2 className="font-space-grotesk font-black text-3xl sm:text-4xl text-on-surface uppercase tracking-tight">
            Especificaciones de Grado Industrial
          </h2>
          <p className="font-hanken-grotesk text-base text-on-surface-variant font-medium mt-1">
            Diseñada bajo tolerancias mecánicas aeronáuticas para garantizar seguridad activa y pasiva en todo momento.
          </p>
        </div>

        {/* 4 Feature highlight blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-surface p-5 neo-border neo-shadow">
            <div className="w-10 h-10 bg-primary text-white flex items-center justify-center neo-border neo-shadow-sm mb-3">
              <span className="material-symbols-outlined text-xl">precision_manufacturing</span>
            </div>
            <h4 className="font-space-grotesk font-black text-lg uppercase text-on-surface mb-1">
              Magnesio Aeroespacial
            </h4>
            <p className="font-hanken-grotesk text-sm text-on-surface-variant font-medium">
              33% más ligero que el aluminio y con un 40% mayor absorción natural de impactos y vibración en pavimento.
            </p>
          </div>

          <div className="bg-surface p-5 neo-border neo-shadow">
            <div className="w-10 h-10 bg-secondary-fixed text-on-surface flex items-center justify-center neo-border neo-shadow-sm mb-3">
              <span className="material-symbols-outlined text-xl">battery_charging_full</span>
            </div>
            <h4 className="font-space-grotesk font-black text-lg uppercase text-on-surface mb-1">
              15 Días de Batería
            </h4>
            <p className="font-hanken-grotesk text-sm text-on-surface-variant font-medium">
              Celda química LiFePO4 de alta estabilidad térmica. Puerto de recarga magnética impermeable blindado IP67.
            </p>
          </div>

          <div className="bg-surface p-5 neo-border neo-shadow">
            <div className="w-10 h-10 bg-surface-container-high text-on-surface flex items-center justify-center neo-border neo-shadow-sm mb-3">
              <span className="material-symbols-outlined text-xl">tune</span>
            </div>
            <h4 className="font-space-grotesk font-black text-lg uppercase text-on-surface mb-1">
              Sillín Quick-Lock
            </h4>
            <p className="font-hanken-grotesk text-sm text-on-surface-variant font-medium">
              Ajuste milimétrico de altura que crece con el niño desde los 18 meses hasta los 5 años (28 a 46 cm).
            </p>
          </div>

          <div className="bg-surface p-5 neo-border neo-shadow">
            <div className="w-10 h-10 bg-primary text-white flex items-center justify-center neo-border neo-shadow-sm mb-3">
              <span className="material-symbols-outlined text-xl">tire_repair</span>
            </div>
            <h4 className="font-space-grotesk font-black text-lg uppercase text-on-surface mb-1">
              Neumáticos EVA Pro-Grip
            </h4>
            <p className="font-hanken-grotesk text-sm text-on-surface-variant font-medium">
              Espuma de polímero microcelular que nunca se desinfla ni se pincha con vidrios o tachuelas urbanas.
            </p>
          </div>
        </div>

        {/* Technical Comparison Table */}
        <div className="overflow-x-auto neo-border-3 neo-shadow bg-surface">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-charcoal text-white font-mono text-xs uppercase tracking-wider">
                <th className="p-4 border-r border-gray-700 w-1/3">Parámetro Técnico</th>
                <th className="p-4 border-r border-gray-700 w-1/3 bg-primary text-white">
                  BBG Brutalist Magnesio
                </th>
                <th className="p-4 w-1/3 text-gray-300">Bicicletas Tradicionales</th>
              </tr>
            </thead>
            <tbody className="font-mono text-xs divide-y divide-charcoal">
              {comparisons.map((row, index) => (
                <tr
                  key={index}
                  className={`hover:bg-surface-container-high transition-colors ${
                    row.highlight ? 'bg-primary-fixed/20' : ''
                  }`}
                >
                  <td className="p-4 font-bold border-r border-charcoal text-on-surface">
                    {row.feature}
                  </td>
                  <td className="p-4 font-bold border-r border-charcoal text-primary flex items-center gap-2">
                    <span className="text-secondary-fixed bg-charcoal rounded-full p-0.5 material-symbols-outlined text-sm font-black">
                      check
                    </span>
                    <span>{row.bbg}</span>
                  </td>
                  <td className="p-4 text-on-surface-variant">
                    {row.traditional}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
