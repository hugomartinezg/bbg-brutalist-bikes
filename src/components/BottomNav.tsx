import React from 'react';

export const BottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 lg:hidden bg-surface-container-lowest border-t-[3px] border-charcoal neo-shadow-top flex items-center justify-around py-2 px-2">
      <a
        href="#telemetria"
        className="flex flex-col items-center justify-center py-1 px-3 text-on-surface hover:text-primary transition-colors"
      >
        <span className="material-symbols-outlined text-xl">sensors</span>
        <span className="font-mono text-[10px] font-bold uppercase tracking-tight mt-0.5">Telemetría</span>
      </a>

      <a
        href="#segmentos"
        className="flex flex-col items-center justify-center py-1 px-3 text-on-surface hover:text-primary transition-colors"
      >
        <span className="material-symbols-outlined text-xl">category</span>
        <span className="font-mono text-[10px] font-bold uppercase tracking-tight mt-0.5">Segmentos</span>
      </a>

      <a
        href="#especificaciones"
        className="flex flex-col items-center justify-center py-1 px-3 text-on-surface hover:text-primary transition-colors"
      >
        <span className="material-symbols-outlined text-xl">precision_manufacturing</span>
        <span className="font-mono text-[10px] font-bold uppercase tracking-tight mt-0.5">Specs</span>
      </a>

      <a
        href="#preorden"
        className="flex items-center gap-1 bg-secondary-fixed text-on-surface font-space-grotesk font-black text-xs uppercase px-4 py-2 neo-border neo-shadow-sm neo-btn-press"
      >
        <span className="material-symbols-outlined text-lg">shopping_cart</span>
        <span>Reservar</span>
      </a>
    </nav>
  );
};
