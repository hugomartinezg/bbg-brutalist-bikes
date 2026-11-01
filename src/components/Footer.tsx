import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-highest border-t-[3px] border-charcoal py-12 pb-24 lg:pb-12 text-on-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8 pb-8 border-b-2 border-charcoal">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary text-white flex items-center justify-center neo-border neo-shadow-sm font-bold">
                <span className="material-symbols-outlined text-2xl">pedal_bike</span>
              </div>
              <div>
                <span className="font-space-grotesk font-black text-xl tracking-tight">
                  BBG <span className="text-primary">//</span> CONFIANZA
                </span>
                <p className="font-mono text-xs text-on-surface-variant">
                  Confianza sobre dos ruedas
                </p>
              </div>
            </div>

            <p className="font-hanken-grotesk text-sm text-on-surface-variant font-medium leading-relaxed max-w-sm">
              Ingeniería biomecánica y telemetría satelital desarrollada en Colombia para formar niños seguros,
              independientes y felices sobre dos ruedas.
            </p>

            <div className="inline-flex items-center gap-2 bg-surface px-3 py-1 neo-border font-mono text-xs font-bold">
              <div className="flex h-3 w-4 border border-charcoal overflow-hidden">
                <div className="w-1/2 bg-[#FCD116]" />
                <div className="w-1/4 bg-[#003893]" />
                <div className="w-1/4 bg-[#CE1126]" />
              </div>
              <span>PATENTE MODELO DE UTILIDAD SIC CO-2025-00912</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2 font-mono text-xs">
            <div className="font-bold uppercase text-primary tracking-wider mb-2">
              [SISTEMA &amp; TELEMETRÍA]
            </div>
            <div><a href="#telemetria" className="hover:underline">Módulo IoT en Vivo</a></div>
            <div><a href="#especificaciones" className="hover:underline">Ficha Técnica Magnesio</a></div>
            <div><a href="#segmentos" className="hover:underline">Guía por Edades (1.5 - 5 años)</a></div>
            <div><a href="#testimonios" className="hover:underline">Casos Clínicos &amp; Testimonios</a></div>
          </div>

          {/* Legal & Support */}
          <div className="md:col-span-4 space-y-2 font-mono text-xs">
            <div className="font-bold uppercase text-primary tracking-wider mb-2">
              [GARANTÍA &amp; SERVICIO]
            </div>
            <div><span>Garantía de 5 años en marco de magnesio</span></div>
            <div><span>Línea WhatsApp de Soporte: +57 (300) 123-4567</span></div>
            <div><span>Bogotá D.C. — Envíos asegurados a nivel nacional</span></div>
            <div><span>Protección de Datos Personales (Ley 1581 Habeas Data)</span></div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-on-surface-variant">
          <div>
            © 2025-2026 BBG BIKES COLOMBIA. TODOS LOS DERECHOS RESERVADOS.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary font-bold">BOGOTÁ // MEDELLÍN // CALI</span>
            <span>DISEÑADO CON NEO-BRUTALISMO TÁCTIL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
