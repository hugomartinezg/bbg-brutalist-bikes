import React, { useState, useEffect } from 'react';

export const TelemetryModule: React.FC = () => {
  const [impactAlert, setImpactAlert] = useState(false);
  const [gForce, setGForce] = useState(0.1);
  const [geofenceActive, setGeofenceActive] = useState(true);
  const [speed, setSpeed] = useState(4.2);
  const [batteryLevel] = useState(94);
  const [sosSent, setSosSent] = useState(false);

  // Slight jitter to simulate real live telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      if (!impactAlert) {
        setGForce(+(0.05 + Math.random() * 0.15).toFixed(2));
        setSpeed((prev) => +(Math.max(1.5, Math.min(8.5, prev + (Math.random() - 0.48) * 0.6))).toFixed(1));
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [impactAlert]);

  const triggerImpactSimulation = () => {
    setImpactAlert(true);
    setGForce(3.8);
    setSosSent(true);
  };

  const resetSensor = () => {
    setImpactAlert(false);
    setGForce(0.1);
    setSosSent(false);
  };

  return (
    <section id="telemetria" className="w-full bg-surface-container-lowest py-16 border-y-[3px] border-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b-2 border-charcoal">
          <div>
            <div className="inline-block bg-primary text-white font-mono text-xs font-bold px-3 py-1 neo-border neo-shadow-sm uppercase mb-2">
              [SYS.01 // IOT INTEGRADO]
            </div>
            <h2 className="font-space-grotesk font-black text-3xl sm:text-4xl text-on-surface uppercase tracking-tight">
              Módulo de Telemetría BBG en Vivo
            </h2>
            <p className="font-hanken-grotesk text-base text-on-surface-variant font-medium mt-1">
              Supervisión continua en tiempo real: posicionamiento GPS submétrico, detección de impactos y geocercas.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs font-bold bg-surface p-2.5 neo-border">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
            <span>DATOS TELEMÉTRICOS EN STREAMING</span>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: GPS Position & Precision */}
          <div className="bg-surface p-5 neo-border neo-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b-2 border-charcoal font-mono text-xs font-bold mb-4">
                <span className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-lg">satellite_alt</span>
                  POSICIÓN SATELITAL
                </span>
                <span className="bg-primary-fixed text-primary px-2 py-0.5 border border-charcoal uppercase">
                  4G LTE-M / NB-IOT
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between p-2 bg-surface-container-lowest neo-border">
                  <span className="text-on-surface-variant">LATITUD:</span>
                  <span className="font-bold text-on-surface">4.609710° N</span>
                </div>
                <div className="flex justify-between p-2 bg-surface-container-lowest neo-border">
                  <span className="text-on-surface-variant">LONGITUD:</span>
                  <span className="font-bold text-on-surface">74.081750° W</span>
                </div>
                <div className="flex justify-between p-2 bg-surface-container-lowest neo-border">
                  <span className="text-on-surface-variant">ALTITUD (BOGOTÁ):</span>
                  <span className="font-bold text-on-surface">2.640 m s.n.m.</span>
                </div>
                <div className="flex justify-between p-2 bg-surface-container-lowest neo-border">
                  <span className="text-on-surface-variant">PRECISIÓN ESTIMADA:</span>
                  <span className="font-bold text-primary">± 0.8 METROS</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-charcoal flex items-center justify-between font-mono text-[11px] text-on-surface-variant">
              <span>SATÉLITES: 14 ACTIVOS</span>
              <span className="text-green-600 font-bold">CALIDAD SEÑAL: EXCELENTE</span>
            </div>
          </div>

          {/* Card 2: Fall & Impact Sensor (Interactive) */}
          <div
            className={`p-5 neo-border neo-shadow flex flex-col justify-between transition-colors duration-200 ${
              impactAlert ? 'bg-red-50 border-red-600' : 'bg-surface'
            }`}
          >
            <div>
              <div className="flex items-center justify-between pb-3 border-b-2 border-charcoal font-mono text-xs font-bold mb-4">
                <span className={`flex items-center gap-1.5 ${impactAlert ? 'text-red-600' : 'text-primary'}`}>
                  <span className="material-symbols-outlined text-lg">
                    {impactAlert ? 'warning' : 'security'}
                  </span>
                  SENSOR DE CAÍDAS &amp; G-FORCE
                </span>
                <span
                  className={`px-2 py-0.5 border border-charcoal uppercase ${
                    impactAlert ? 'bg-red-600 text-white animate-pulse' : 'bg-secondary-fixed text-on-surface'
                  }`}
                >
                  {impactAlert ? '¡IMPACTO!' : 'ARMADO // ACTIVO'}
                </span>
              </div>

              {/* Status Graphic */}
              <div className="p-4 bg-surface-container-lowest neo-border text-center space-y-2 mb-3">
                <div className="font-mono text-xs text-on-surface-variant font-bold">
                  ACELERÓMETRO TRIAXIAL
                </div>
                <div
                  className={`font-space-grotesk font-black text-4xl ${
                    impactAlert ? 'text-red-600' : 'text-on-surface'
                  }`}
                >
                  {gForce} G
                </div>
                <div className="font-mono text-xs">
                  {impactAlert ? (
                    <span className="font-bold text-red-600 uppercase">
                      ⚠️ ¡Posible caída detectada!
                    </span>
                  ) : (
                    <span className="text-green-600 font-bold uppercase">
                      ✓ Rodamiento seguro sin impactos
                    </span>
                  )}
                </div>
              </div>

              {sosSent && (
                <div className="p-2.5 bg-red-100 border border-red-600 text-red-800 font-mono text-xs font-bold flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-base">emergency_share</span>
                  <span>Alerta SOS enviada vía SMS/WhatsApp a padres.</span>
                </div>
              )}
            </div>

            {/* Interactive Simulation Controls */}
            <div className="pt-2">
              {!impactAlert ? (
                <button
                  onClick={triggerImpactSimulation}
                  className="w-full bg-tertiary text-white font-space-grotesk font-bold text-xs uppercase py-2.5 neo-border neo-shadow-sm neo-btn-press flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-base">sensors_off</span>
                  <span>Simular Prueba de Impacto (G-Force)</span>
                </button>
              ) : (
                <button
                  onClick={resetSensor}
                  className="w-full bg-secondary-fixed text-on-surface font-space-grotesk font-bold text-xs uppercase py-2.5 neo-border neo-shadow-sm neo-btn-press flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-base">restart_alt</span>
                  <span>Restablecer Sensor a Cero</span>
                </button>
              )}
            </div>
          </div>

          {/* Card 3: Geocerca & Batería */}
          <div className="bg-surface p-5 neo-border neo-shadow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b-2 border-charcoal font-mono text-xs font-bold mb-4">
                <span className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-lg">radar</span>
                  GEOCERCA &amp; HARDWARE
                </span>
                <span className="bg-surface-container-high px-2 py-0.5 border border-charcoal uppercase">
                  RADIO 50M
                </span>
              </div>

              {/* Radar Simulation */}
              <div className="p-3 bg-surface-container-lowest neo-border mb-3 font-mono text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-on-surface-variant font-bold">ZONA SEGURA:</span>
                  <button
                    onClick={() => setGeofenceActive(!geofenceActive)}
                    className={`px-2 py-0.5 text-[11px] font-bold border border-charcoal ${
                      geofenceActive ? 'bg-secondary-fixed text-on-surface' : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {geofenceActive ? 'ACTIVA (ON)' : 'DESACTIVADA (OFF)'}
                  </button>
                </div>
                <div className="text-[11px] text-on-surface">
                  {geofenceActive ? (
                    <span className="text-green-700 font-bold">
                      ● Niñ@ dentro del perímetro permitido (Parque El Virrey).
                    </span>
                  ) : (
                    <span className="text-gray-500">Geocerca desactivada temporalmente.</span>
                  )}
                </div>
              </div>

              {/* Velocidad y Odómetro */}
              <div className="grid grid-cols-2 gap-2 mb-3 font-mono text-xs">
                <div className="p-2.5 bg-surface-container-lowest neo-border">
                  <div className="text-on-surface-variant text-[10px] uppercase">Velocidad Actual</div>
                  <div className="font-space-grotesk font-black text-xl text-primary">{speed} km/h</div>
                </div>
                <div className="p-2.5 bg-surface-container-lowest neo-border">
                  <div className="text-on-surface-variant text-[10px] uppercase">Distancia Hoy</div>
                  <div className="font-space-grotesk font-black text-xl text-on-surface">1.84 km</div>
                </div>
              </div>

              {/* Batería */}
              <div className="p-2.5 bg-surface-container-lowest neo-border font-mono text-xs">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-bold text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-base text-primary">battery_full</span>
                    BATERÍA LiFePO4:
                  </span>
                  <span className="font-bold text-primary">{batteryLevel}%</span>
                </div>
                <div className="w-full h-3 bg-surface neo-border overflow-hidden p-0.5">
                  <div
                    className="h-full bg-secondary-fixed transition-all duration-300"
                    style={{ width: `${batteryLevel}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] text-on-surface-variant mt-1.5">
                  <span>AUTONOMÍA: 14 DÍAS RESTANTES</span>
                  <span>CARGA MAGNÉTICA: 45M</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-charcoal flex items-center justify-between font-mono text-[11px] text-on-surface-variant">
              <span>ENCRIPCIÓN: AES-256</span>
              <span className="text-primary font-bold">BLE 5.2 ENLAZADO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
