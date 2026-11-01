import React from 'react';

export const Ticker: React.FC = () => {
  const items = [
    "EDICIÓN COLOMBIA 2025",
    "LOTE 01 // CUPOS LIMITADOS",
    "INGENIERÍA Y BIOMECÁNICA HECHA EN COLOMBIA",
    "CHASIS DE MAGNESIO 2.9 KG",
    "TELEMETRÍA IOT & GPS ACTIVO EN TIEMPO REAL",
    "PATENTE MODELO UTILIDAD SIC CO-2025-00912",
    "GARANTÍA ESTRUCTURAL DE 5 AÑOS",
  ];

  return (
    <div className="w-full bg-secondary-fixed text-on-surface overflow-hidden border-b-[2.5px] border-charcoal py-1.5 select-none font-mono text-xs font-bold tracking-wider">
      <div className="flex whitespace-nowrap ticker-track">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center mx-6">
            <span className="inline-block w-2.5 h-2.5 bg-primary mr-2.5 rounded-sm border border-charcoal shadow-[1px_1px_0px_#000]" />
            <span className="uppercase">{text}</span>
            <span className="mx-4 text-primary font-black">///</span>
          </div>
        ))}
      </div>
    </div>
  );
};
