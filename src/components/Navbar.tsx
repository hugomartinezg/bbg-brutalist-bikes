import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface border-b-[3px] border-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-primary text-white flex items-center justify-center neo-border neo-shadow-sm group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
            <span className="material-symbols-outlined text-2xl font-bold">pedal_bike</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-space-grotesk font-black text-xl tracking-tight text-on-surface">
                BBG <span className="text-primary">//</span> CONFIANZA
              </span>
              <div className="flex h-3 w-5 border border-charcoal overflow-hidden rounded-[1px]" title="Hecho en Colombia">
                <div className="w-1/2 bg-[#FCD116]" />
                <div className="w-1/4 bg-[#003893]" />
                <div className="w-1/4 bg-[#CE1126]" />
              </div>
            </div>
            <p className="font-space-mono text-[11px] text-on-surface-variant tracking-wider uppercase">
              Confianza sobre dos ruedas
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          <a
            href="#telemetria"
            className="font-space-mono text-xs font-bold uppercase tracking-wider text-on-surface hover:text-primary transition-colors py-1 border-b-2 border-transparent hover:border-primary"
          >
            [SYS.01] Telemetría
          </a>
          <a
            href="#segmentos"
            className="font-space-mono text-xs font-bold uppercase tracking-wider text-on-surface hover:text-primary transition-colors py-1 border-b-2 border-transparent hover:border-primary"
          >
            [SYS.02] Segmentos
          </a>
          <a
            href="#especificaciones"
            className="font-space-mono text-xs font-bold uppercase tracking-wider text-on-surface hover:text-primary transition-colors py-1 border-b-2 border-transparent hover:border-primary"
          >
            [SYS.03] Especificaciones
          </a>
          <a
            href="#testimonios"
            className="font-space-mono text-xs font-bold uppercase tracking-wider text-on-surface hover:text-primary transition-colors py-1 border-b-2 border-transparent hover:border-primary"
          >
            [SYS.04] Testimonios
          </a>
        </nav>

        {/* Right Action & GPS Telemetry Chip */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-surface-container-high px-3 py-1.5 neo-border neo-shadow-sm text-xs font-mono font-bold">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gps-cyan opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="text-on-surface">GPS: FIX 99.4%</span>
            <span className="text-[10px] text-on-surface-variant">[14 SAT]</span>
          </div>

          <a
            href="#preorden"
            className="bg-secondary-fixed text-on-surface font-space-grotesk font-extrabold text-sm uppercase px-5 py-2.5 neo-border neo-shadow neo-btn-press flex items-center gap-2 tracking-wide"
          >
            <span>Pre-ordenar</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 bg-surface-container-high neo-border neo-shadow-sm text-on-surface"
            aria-label="Abrir menú"
          >
            <span className="material-symbols-outlined text-2xl font-bold">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-t-2 border-charcoal p-4 space-y-3 font-mono text-sm">
          <a
            href="#telemetria"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 bg-surface neo-border font-bold uppercase"
          >
            SYS.01 // Telemetría IoT en Vivo
          </a>
          <a
            href="#segmentos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 bg-surface neo-border font-bold uppercase"
          >
            SYS.02 // 4 Segmentos de Propósito
          </a>
          <a
            href="#especificaciones"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 bg-surface neo-border font-bold uppercase"
          >
            SYS.03 // Ficha Técnica & Magnesio
          </a>
          <a
            href="#testimonios"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 bg-surface neo-border font-bold uppercase"
          >
            SYS.04 // Testimonios en Colombia
          </a>
          <div className="pt-2 flex items-center justify-between text-xs text-on-surface-variant font-mono">
            <span>BBG // GPS v2.4 TELEMETRY</span>
            <span className="text-primary font-bold">EN LÍNEA</span>
          </div>
        </div>
      )}
    </header>
  );
};
