import React, { useState } from 'react';

export const Hero: React.FC = () => {
  const [activePin, setActivePin] = useState<string | null>(null);

  const pins = [
    {
      id: 'gps',
      title: 'Módulo IoT & GPS',
      desc: 'GPS + GLONASS con 15 días de autonomía y sensor de caídas.',
      pos: 'top-[22%] left-[45%]',
      color: 'bg-primary text-white',
    },
    {
      id: 'saddle',
      title: 'Sillín Quick-Lock',
      desc: 'Ajustable de 28cm a 46cm para niños de 1.5 a 5 años sin herramientas.',
      pos: 'top-[30%] right-[32%]',
      color: 'bg-secondary-fixed text-on-surface',
    },
    {
      id: 'chassis',
      title: 'Magnesio Monocasco 2.9 kg',
      desc: 'Inyección en una sola pieza. Sin soldaduras débiles ni tornillos expuestos.',
      pos: 'bottom-[42%] left-[48%]',
      color: 'bg-surface-container-high text-on-surface',
    },
    {
      id: 'tires',
      title: 'Neumáticos EVA Pro-Grip',
      desc: 'Espuma de alta densidad antipinchazos. Cero inflado y tracción óptima.',
      pos: 'bottom-[25%] left-[24%]',
      color: 'bg-secondary-fixed text-on-surface',
    },
  ];

  return (
    <section id="hero" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
      {/* Top Banner Stamp & Edition */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="inline-flex items-center gap-2 bg-surface-container-lowest px-3 py-1.5 neo-border neo-shadow-sm font-mono text-xs font-bold">
          <span className="w-2.5 h-2.5 bg-[#CE1126] rounded-full animate-pulse" />
          <span className="tracking-wider uppercase">LOTE 01 // 50 UNIDADES NUMERADAS DISPONIBLES</span>
        </div>

        {/* Colombian pride stamp */}
        <div className="inline-flex items-center gap-2 bg-surface-container-lowest px-3.5 py-1.5 neo-border neo-shadow-sm font-mono text-xs font-black uppercase tracking-wider">
          <div className="flex h-3 w-4 border border-charcoal overflow-hidden">
            <div className="w-1/2 bg-[#FCD116]" />
            <div className="w-1/4 bg-[#003893]" />
            <div className="w-1/4 bg-[#CE1126]" />
          </div>
          <span>BBG // HECHO EN COLOMBIA // CALIDAD CERTIFICADA</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Headings & Value Proposition */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-block bg-primary text-white font-mono text-xs font-bold px-3 py-1 neo-border neo-shadow-sm uppercase">
            REVOLUCIÓN EN MOVILIDAD INFANTIL
          </div>

          <h1 className="font-space-grotesk font-black text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-on-surface leading-[1.05]">
            LA PRIMERA BICICLETA DE BALANCE CON{' '}
            <span className="bg-primary text-white px-2 py-0.5 inline-block -rotate-1 border-[2.5px] border-charcoal neo-shadow-sm">
              TELEMETRÍA &amp; GPS
            </span>{' '}
            EN COLOMBIA
          </h1>

          <p className="font-hanken-grotesk text-lg text-on-surface-variant font-medium leading-relaxed">
            Diseñada para brindar <strong>libertad motriz a los niños</strong> y <strong>total tranquilidad a los padres</strong>.
            Chasis ultraligero de magnesio aeroespacial (2.9 kg), sensor de caídas inteligente y geocerca satelital en tiempo real.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="#preorden"
              className="bg-secondary-fixed text-on-surface font-space-grotesk font-black text-base uppercase px-8 py-4 neo-border neo-shadow neo-btn-press flex items-center justify-center gap-3 tracking-wide"
            >
              <span>Reservar Preventa (-20%)</span>
              <span className="material-symbols-outlined text-xl">shopping_cart_checkout</span>
            </a>

            <a
              href="#telemetria"
              className="bg-surface-container-lowest text-on-surface font-space-grotesk font-bold text-base uppercase px-6 py-4 neo-border neo-shadow-sm neo-btn-press flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-primary text-xl">sensors</span>
              <span>Ver Telemetría en Vivo</span>
            </a>
          </div>

          {/* Micro Guarantee Tags */}
          <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-on-surface font-semibold">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-base font-bold">verified</span>
              Garantía de 5 años en marco
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-base font-bold">local_shipping</span>
              Envío asegurado a toda Colombia
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-primary text-base font-bold">lock</span>
              Reserva sin compromiso
            </span>
          </div>
        </div>

        {/* Right Column: Visual Product Showcase */}
        <div className="lg:col-span-6">
          <div className="relative bg-surface-container-lowest neo-border-3 neo-shadow-lg p-4 sm:p-6">
            {/* Header Plate Ribbon */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-charcoal font-mono text-xs font-bold">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-primary inline-block" />
                <span className="uppercase tracking-wider">[SYS.HW // CHASIS SERIE 01]</span>
              </div>
              <span className="bg-secondary-fixed px-2 py-0.5 border border-charcoal uppercase">
                MAGNESIO 2.9 KG
              </span>
            </div>

            {/* Product Image Stage */}
            <div className="relative aspect-[4/3] bg-surface-container-low neo-border flex items-center justify-center overflow-hidden group">
              {/* Subtle grid background */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#0D0D0D 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              />

              <img
                src="/assets/bike-desktop.png"
                alt="Bicicleta de Balance BBG Magnesio con Telemetría"
                className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback in case local asset fails
                  (e.target as HTMLImageElement).src =
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuBYGet1RcwuTbaBO3zADvPdSl7xj3j4X348bonG7JbeUYUWnCzd8w3maMGbO1vrrgTT1hQy-ilURlSHPPugeirOnJikvtbdfmCUY0AIXCKzZN5yFwHnAQJJm71oCjvzCuKDKBNJPVInV-sfheahV4xrm1t8aGjxe5byVmAIY3YiQI3Yw7t-w-IvDHwsg_fr55tvnMk0F-vT-j9x-Cpq6QYWTokSHZMuV5XwCzjUqUZO';
                }}
              />

              {/* Interactive Hotspot Pins */}
              {pins.map((pin) => (
                <button
                  key={pin.id}
                  onClick={() => setActivePin(activePin === pin.id ? null : pin.id)}
                  className={`absolute ${pin.pos} -translate-x-1/2 -translate-y-1/2 p-1.5 rounded-full neo-border neo-shadow-sm ${pin.color} hover:scale-110 transition-transform focus:outline-none`}
                  title={pin.title}
                  aria-label={pin.title}
                >
                  <span className="material-symbols-outlined text-sm font-black block">adjust</span>
                </button>
              ))}

              {/* Pin tooltip display */}
              {activePin && (
                <div className="absolute bottom-3 left-3 right-3 bg-surface-container-lowest p-3 neo-border neo-shadow z-20 animate-fade-in font-mono text-xs">
                  <div className="flex items-center justify-between font-bold text-primary mb-1">
                    <span>{pins.find((p) => p.id === activePin)?.title}</span>
                    <button onClick={() => setActivePin(null)} className="text-on-surface hover:text-red-600">
                      ✕
                    </button>
                  </div>
                  <p className="text-on-surface-variant font-hanken-grotesk text-sm">
                    {pins.find((p) => p.id === activePin)?.desc}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Status bar */}
            <div className="mt-4 pt-3 border-t-2 border-charcoal flex items-center justify-between font-mono text-xs">
              <span className="text-on-surface-variant font-bold">MODELO: BBG-PRO-MAG</span>
              <span className="text-primary font-bold">100% INGENIERÍA COLOMBIANA</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Metric Plates */}
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-surface-container-lowest p-5 neo-border neo-shadow">
          <div className="font-mono text-xs text-on-surface-variant font-bold uppercase mb-1">
            [01 // PESO ULTRALIGERO]
          </div>
          <div className="font-space-grotesk font-black text-3xl sm:text-4xl text-primary">2.9 KG</div>
          <p className="font-hanken-grotesk text-sm text-on-surface mt-1 font-medium">
            Fácil de manipular por niños desde los 18 meses de edad.
          </p>
        </div>

        <div className="bg-surface-container-lowest p-5 neo-border neo-shadow">
          <div className="font-mono text-xs text-on-surface-variant font-bold uppercase mb-1">
            [02 // AUTONOMÍA IOT]
          </div>
          <div className="font-space-grotesk font-black text-3xl sm:text-4xl text-secondary-fixed-dim">
            15 DÍAS
          </div>
          <p className="font-hanken-grotesk text-sm text-on-surface mt-1 font-medium">
            Batería LiFePO4 de carga magnética ultrarrápida en 45 min.
          </p>
        </div>

        <div className="bg-surface-container-lowest p-5 neo-border neo-shadow">
          <div className="font-mono text-xs text-on-surface-variant font-bold uppercase mb-1">
            [03 // SEGURIDAD PASIVA]
          </div>
          <div className="font-space-grotesk font-black text-3xl sm:text-4xl text-on-surface">0 TORNILLOS</div>
          <p className="font-hanken-grotesk text-sm text-on-surface mt-1 font-medium">
            Diseño encapsulado sin aristas cortantes ni filos expuestos.
          </p>
        </div>

        <div className="bg-surface-container-lowest p-5 neo-border neo-shadow">
          <div className="font-mono text-xs text-on-surface-variant font-bold uppercase mb-1">
            [04 // SOSTENIBILIDAD]
          </div>
          <div className="font-space-grotesk font-black text-3xl sm:text-4xl text-primary">100% RECICLABLE</div>
          <p className="font-hanken-grotesk text-sm text-on-surface mt-1 font-medium">
            Monocasco de magnesio ecológico de alta absorción de vibración.
          </p>
        </div>
      </div>
    </section>
  );
};
