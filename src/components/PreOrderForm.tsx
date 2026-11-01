import React, { useState } from 'react';

export const PreOrderForm: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState('Azul Eléctrico BBG');
  const [childAge, setChildAge] = useState('1.5 a 3 años');
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    city: 'Bogotá D.C.',
    customEngraving: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const colors = [
    { name: 'Azul Eléctrico BBG', hex: '#182BBF', border: 'border-primary' },
    { name: 'Lima Cyber Volt', hex: '#C8F322', border: 'border-secondary-fixed' },
    { name: 'Grafito Espacial Mate', hex: '#313030', border: 'border-charcoal' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="preorden" className="w-full bg-primary-container text-surface py-16 border-t-[3px] border-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Commercial Offer & Scarcity */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block bg-secondary-fixed text-on-surface font-mono text-xs font-black px-3.5 py-1.5 neo-border neo-shadow-sm uppercase">
              VENTA OFICIAL LOTE 01 // CUPOS LIMITADOS
            </div>

            <h2 className="font-space-grotesk font-black text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
              Reserva la Confianza de tu Hijo Hoy
            </h2>

            <p className="font-hanken-grotesk text-lg text-primary-fixed font-medium leading-relaxed">
              Las primeras 50 unidades de la serie COL-01 son ensambladas y calibradas individualmente en Colombia.
              Asegura tu cupo en preventa con <strong>$170.000 COP de ahorro</strong> y beneficios exclusivos.
            </p>

            {/* Price Box */}
            <div className="bg-surface text-on-surface p-6 neo-border-3 neo-shadow space-y-4">
              <div className="flex items-center justify-between pb-3 border-b-2 border-charcoal font-mono text-xs">
                <span className="font-bold text-on-surface-variant">PRECIO PREVENTA EXCLUSIVA:</span>
                <span className="bg-[#CE1126] text-white px-2 py-0.5 font-bold uppercase">-20% OFF</span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-space-grotesk font-black text-4xl sm:text-5xl text-primary">
                  $690.000
                </span>
                <span className="font-mono text-sm text-on-surface-variant line-through">
                  $860.000 COP
                </span>
              </div>

              <div className="p-3 bg-secondary-fixed/40 neo-border font-mono text-xs space-y-1">
                <div className="font-bold text-on-surface">
                  ● Separa hoy tu cupo con solo <strong>$100.000 COP</strong>
                </div>
                <div className="text-[11px] text-on-surface-variant">
                  El saldo restante se cancela contraentrega o previo al despacho garantizado.
                </div>
              </div>

              {/* Bonus list */}
              <ul className="space-y-2 font-mono text-xs text-on-surface pt-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>1 Año de conectividad 4G LTE-M</strong> incluido gratis.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Grabado láser personalizado</strong> con el nombre del niñ@.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Envío nacional asegurado gratis</strong> a toda Colombia.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <span><strong>Garantía de 5 años</strong> directa con la fábrica.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Reservation Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface text-on-surface p-6 sm:p-8 neo-border-3 neo-shadow-lg">
              <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-charcoal font-mono text-xs">
                <span className="font-bold text-primary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">edit_document</span>
                  FORMULARIO DE PRE-ORDEN OFICIAL
                </span>
                <span className="text-on-surface-variant font-bold">CUPOS RESTANTES: 18 / 50</span>
              </div>

              {submitted ? (
                <div className="p-8 bg-green-50 neo-border text-center space-y-4 font-mono">
                  <div className="w-16 h-16 bg-secondary-fixed text-on-surface mx-auto flex items-center justify-center rounded-full neo-border neo-shadow">
                    <span className="material-symbols-outlined text-4xl font-bold">check_circle</span>
                  </div>
                  <h3 className="font-space-grotesk font-black text-2xl uppercase text-on-surface">
                    ¡Pre-reserva Recibida con Éxito!
                  </h3>
                  <p className="font-hanken-grotesk text-base text-on-surface-variant">
                    Gracias por unirte al Lote 01 de BBG, <strong>{formData.parentName}</strong>. Uno de nuestros
                    asesores de ingeniería te contactará por WhatsApp al <strong>{formData.phone}</strong> para
                    confirmar los detalles de despacho a <strong>{formData.city}</strong>.
                  </p>
                  <div className="p-3 bg-surface-container-high neo-border text-xs text-on-surface font-bold">
                    CÓDIGO DE RESERVA: BBG-COL-{Math.floor(1000 + Math.random() * 9000)}
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 bg-primary text-white px-6 py-2.5 neo-border neo-shadow-sm font-space-grotesk font-bold uppercase text-xs neo-btn-press"
                  >
                    Hacer otra reserva
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Color Selector */}
                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-on-surface mb-2">
                      1. Elige el Color del Chasis de Magnesio:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {colors.map((c) => (
                        <button
                          key={c.name}
                          type="button"
                          onClick={() => setSelectedColor(c.name)}
                          className={`p-3 neo-border text-left font-mono text-xs transition-all flex items-center gap-2.5 ${
                            selectedColor === c.name
                              ? 'bg-primary-fixed neo-shadow font-bold border-primary'
                              : 'bg-surface hover:bg-surface-container-high'
                          }`}
                        >
                          <span
                            className="w-5 h-5 rounded-full border border-charcoal shrink-0"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span className="truncate">{c.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Child Age */}
                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-on-surface mb-2">
                      2. Rango de Edad del Niño / Niña:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['1.5 a 3 años (Iniciación)', '3 a 5 años (Avanzado)'].map((age) => (
                        <button
                          key={age}
                          type="button"
                          onClick={() => setChildAge(age)}
                          className={`p-2.5 neo-border font-mono text-xs text-center transition-all ${
                            childAge === age
                              ? 'bg-secondary-fixed neo-shadow font-bold text-on-surface'
                              : 'bg-surface hover:bg-surface-container-high'
                          }`}
                        >
                          {age}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Personal details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase text-on-surface mb-1">
                        Nombre del Acudiente: *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        placeholder="Ej: Andrés Restrepo"
                        className="w-full p-3 neo-border font-mono text-sm bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-bold uppercase text-on-surface mb-1">
                        WhatsApp de Contacto: *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+57 300 123 4567"
                        className="w-full p-3 neo-border font-mono text-sm bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs font-bold uppercase text-on-surface mb-1">
                        Correo Electrónico: *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tucorreo@ejemplo.com"
                        className="w-full p-3 neo-border font-mono text-sm bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs font-bold uppercase text-on-surface mb-1">
                        Ciudad / Municipio de Envío: *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Ej: Bogotá, Medellín, Cali..."
                        className="w-full p-3 neo-border font-mono text-sm bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Custom Engraving */}
                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-on-surface mb-1">
                      Grabado Láser en Cuadro (Opcional - Gratis):
                    </label>
                    <input
                      type="text"
                      maxLength={20}
                      value={formData.customEngraving}
                      onChange={(e) => setFormData({ ...formData, customEngraving: e.target.value })}
                      placeholder="Ej: MATEO // 2025"
                      className="w-full p-3 neo-border font-mono text-sm bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <span className="font-mono text-[10px] text-on-surface-variant">
                      Máximo 20 caracteres en mayúsculas tipo estampa aeronáutica.
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-secondary-fixed text-on-surface font-space-grotesk font-black text-lg uppercase py-4 neo-border neo-shadow neo-btn-press flex items-center justify-center gap-3 tracking-wider"
                  >
                    <span>Confirmar Pre-orden — $690.000 COP</span>
                    <span className="material-symbols-outlined text-2xl font-bold">arrow_forward</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 font-mono text-[11px] text-on-surface-variant text-center">
                    <span className="material-symbols-outlined text-sm text-green-600">lock</span>
                    <span>Transacción y datos protegidos bajo Ley 1581 (Habeas Data Colombia).</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
