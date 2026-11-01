# BBG — Bicicleta de Balance con Telemetría & GPS
## DESIGN.md & Plan de Implementación (Stitch Project `13535189969443513693`)

---

## 1. Resumen Ejecutivo y Concepto de Marca

* **Nombre del Producto:** BBG — Bicicleta de Balance Brutalista ("Confianza sobre dos ruedas").
* **Público Objetivo:** Padres primerizos tecnológicos, atletas y familias ciclistas, especialistas en motricidad/fisioterapia infantil, e instituciones educativas (jardines y colegios) en Colombia y Latinoamérica.
* **Lenguaje Visual:** **Neo-Brutalismo Industrial de Alta Precisión**.
  * Rechaza las plantillas corporativas genéricas y estériles en favor de una estética física, asertiva y táctil.
  * Bordes sólidos de 2.5px a 3px en negro puro (`#0D0D0D`).
  * Sombras ortogonales sin difuminar (hard-edge drop shadows: `4px 4px 0px #0D0D0D`).
  * Chips y estampas tipo placa metálica de telemetría y manufactura ("HECHO EN COLOMBIA").
  * Patrones de advertencia industrial (*hazard stripes*) en amarillo/lima neón y negro.
  * Legibilidad extrema bajo luz solar directa ecuatorial.

---

## 2. Sistema Visual y Tokens de Diseño

### 2.1. Paleta de Colores

| Token | Hex | Rol en la Interfaz |
|---|---|---|
| `primary` | `#182BBF` | Azul Eléctrico Profundo: Identidad primaria BBG y estados clave. |
| `primary-container` | `#3849D6` | Azul Royal Vibrante: Fondos de tarjetas principales, canvas hero y llamadas a la acción secundarias. |
| `on-primary` | `#FFFFFF` | Blanco puro: Texto de alto contraste sobre fondos azules. |
| `secondary` | `#526600` | Verde oliva técnico complementario. |
| `secondary-fixed` / `secondary-container` | `#C8F322` | **Neon Cyber Chartreuse / Electric Lime**: Botones CTA principales, badges de alerta y telemetría activa. |
| `on-secondary-fixed` | `#171E00` | Negro verdoso para texto sobre amarillo neón. |
| `tertiary` | `#8D0013` | Rojo carmesí de advertencia / impacto. |
| `tertiary-container` | `#B61321` | Contenedores de alerta crítica (sensor de caídas/impacto). |
| `surface` / `background` | `#FCF9F8` | Blanco cálido industrial de fondo base. |
| `surface-container-lowest` | `#FFFFFF` | Blanco puro para tarjetas elevadas. |
| `surface-container` | `#F0EDEC` | Gris tenue para divisores modulares. |
| `surface-container-high` | `#EBE7E7` | Superficies estructuradas para especificaciones. |
| `on-surface` / `on-background` | `#1C1B1B` / `#0D0D0D` | Negro sólido para tipografía, bordes de 3px y sombras duras. |
| `gps-accent` | `#00E5FF` | Cian neón para telemetría satelital y conectividad Bluetooth. |

### 2.2. Tipografía

| Rol | Familia Tipográfica | Uso Principal |
|---|---|---|
| **Headlines / Display** | `Space Grotesk` (700, 800, 900) | Títulos asertivos, héroes de impacto, llamadas de atención en mayúsculas y badges de marca. |
| **Cuerpo de Texto** | `Hanken Grotesk` (400, 500, 600) | Lectura cómoda, explicaciones técnicas, fichas de producto y testimonios. |
| **Telemetría & Badges** | `Space Mono` (400, 700) | Coordenadas GPS, acelerómetros G-force, voltajes de batería, IDs de lote y código técnico. |
| **Iconografía** | `Material Symbols Outlined` | Iconos vectoriales con peso óptico de 600 (pedal_bike, sensors, shield, speed, etc.). |

### 2.3. Elevación, Sombras y Bordes

* **Bordes Estructurales:** `border-[2.5px]` o `border-[3px]` con color `#0D0D0D` / `#1C1B1B`.
* **Sombras Duras (Neo-Shadows):**
  * Micro (Chips y Badges): `box-shadow: 2px 2px 0px #0D0D0D` (`neo-shadow-sm`).
  * Estándar (Tarjetas y Botones): `box-shadow: 4px 4px 0px #0D0D0D` (`neo-shadow`).
  * Grande (Hero Card & Módulo Telemetría): `box-shadow: 6px 6px 0px #0D0D0D` (`neo-shadow-lg`).
  * Superior (Bottom Navigation móvil): `box-shadow: 0px -4px 0px #0D0D0D` (`neo-shadow-top`).
* **Interacción Kinetic Press:** Al hacer clic o hover activo:
  * `transform: translate(2px, 2px)`
  * La sombra se comprime a `2px 2px 0px #0D0D0D` o `0px 0px 0px` para simular un interruptor mecánico industrial.
* **Patrón Hazard Stripe:** Rayado diagonal industrial en `#C8F322` y `#0D0D0D` a 45 grados.

---

## 3. Inventario de Pantallas y Componentes

El proyecto Stitch cuenta con dos implementaciones complementarias que unificaremos en una experiencia web responsiva fluida:

### 3.1. Pantalla 1: Desktop Landing Page (`ad224188967c4acfae1f8f437de57de4`)
* **Resolución base de diseño:** 1280px / 2560px.
* **Secciones:**
  1. **Header / Navbar:** Sticky, logo BBG con sello "Confianza sobre dos ruedas", links de navegación anclados (`#telemetria`, `#biomecanica`, `#segmentos`, `#especificaciones`), badge de telemetría activa en tiempo real (`GPS: FIX 99.4%`) y botón CTA "PRE-ORDENAR".
  2. **Ticker Superior:** Cinta continua animada con mensajes de tecnología, ingeniería colombiana y cupos limitados.
  3. **Hero Section (`#hero`):**
     * Placa de certificación "HECHO EN COLOMBIA // CALIDAD CERTIFICADA" con tricolor nacional.
     * Título display de alto impacto en `Space Grotesk`.
     * Card principal con imagen de la bicicleta de magnesio y marcadores interactivos (Sensor IoT, Sillín Quick-Lock, Neumáticos EVA, Chasis 2.9kg).
     * Panel de métricas rápidas (2.9 kg peso total, 15 días autonomía, 0 tornillos expuestos, 100% biodegradable/reciclable).
  4. **Módulo de Telemetría en Vivo (`#telemetria`):**
     * Indicador de señal satelital en vivo (Latitud, Longitud, Altitud Bogotá 2.600m).
     * Radar de proximidad / Geocerca virtual de seguridad perimetral.
     * Sensor de caída con detección de impacto G-Force en tiempo real.
     * Nivel de batería LiFePO4 de bajo consumo con autonomía de 15 días.
  5. **Segmentos de Mercado (`#segmentos`):**
     * 4 cuadrantes interactivos:
       1. Padres Primerizos Tech (Control, tranquilidad y trazabilidad).
       2. Desarrollo & Fisioterapia (Biomecánica y motricidad gruesa).
       3. Familias Ciclistas y Atletas (Resistencia y aerodinámica infantil).
       4. Jardines y Colegios B2B (Durabilidad industrial y gestión de flota).
  6. **Especificaciones de Grado Industrial (`#especificaciones`):**
     * Tabla técnica comparativa contra bicicletas tradicionales de acero/plástico.
     * Detalle de aleación de magnesio espacial sin soldaduras visibles.
     * Mecanismo de sillín de crecimiento escalonado (edades 1.5 a 5 años).
  7. **Testimonios Reales (`#testimonios`):**
     * Tarjetas de familias y fisioterapeutas en Bogotá, Medellín y Manizales con métricas de aprendizaje.
  8. **Conversión y Pre-Orden Lote 01 (`#preorden`):**
     * Formulario interactivo con selección de color de chasis (Azul Royal, Amarillo Neón, Grafito Industrial).
     * Selector de método de pago anticipado y reserva con descuento del 20%.
     * Garantía de 5 años en el marco.
  9. **Footer:**
     * Enlaces técnicos, patentes colombianas registradas, soporte y ficha de reciclabilidad.

### 3.2. Pantalla 2: Mobile App Web View (`d6c5e7fbbdc14c24843ccfacf8d95c1a`)
* **Resolución base de diseño:** 390px / 780px.
* **Componentes clave específicos para móvil:**
  * Header móvil ultracompacto con estado de conexión GPS.
  * Tarjetas condensadas de telemetría optimizadas para interacción táctil (tap targets mínimos de 48px).
  * Menú inferior flotante (*Bottom App Bar*) con anclajes rápidos a Telemetría, Seguridad y Reserva.

---

## 4. Plan de Implementación Técnica

### 4.1. Stack Tecnológico
* **Build Tool:** Vite + React 18 + TypeScript.
* **Estilizado:** Tailwind CSS + PostCSS + Autoprefixer.
* **Iconos:** Google Material Symbols Outlined (CDN / Font).
* **Fuentes:** Google Fonts (`Space Grotesk`, `Hanken Grotesk`, `Space Mono`).

### 4.2. Estructura del Proyecto
```
MCPSTICHWEB/
├── raw_stitch/                      # Archivos originales descargados de Stitch
│   ├── desktop_landing.html
│   ├── mobile_screen.html
│   ├── screenshot_desktop.png
│   ├── screenshot_mobile.png
│   └── design_md_from_project.md
├── DESIGN.md                        # Este documento
├── index.html                       # HTML principal con fuentes y meta tags
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js               # Tokens exactos de Stitch (colores, sombras, tipografía)
├── src/
│   ├── main.tsx
│   ├── App.tsx                      # Orquestador responsivo unificado
│   ├── index.css                    # Clases neo-brutalistas, sombras y animaciones
│   ├── components/
│   │   ├── Ticker.tsx               # Barra superior continua animada
│   │   ├── Navbar.tsx               # Header desktop + móvil integrado
│   │   ├── BottomNav.tsx            # Navegación fija inferior para smartphones
│   │   ├── Hero.tsx                 # Sección de presentación y bicicleta
│   │   ├── TelemetryModule.tsx      # Módulo interactivo de sensores y GPS
│   │   ├── Segments.tsx             # 4 segmentos de mercado
│   │   ├── Specs.tsx                # Tabla y fichas de especificaciones
│   │   ├── Testimonials.tsx         # Reseñas y validación clínica/familiar
│   │   ├── PreOrderForm.tsx         # Formulario de reserva interactivo
│   │   └── Footer.tsx               # Pie de página técnico e institucional
│   └── data/
│       └── bbgData.ts               # Contenido estructurado y reactivo
```

### 4.3. Pasos de Ejecución
1. **Paso 1 (Completado):** Conexión a Stitch vía MCP, recuperación de pantallas, código HTML, screenshots y sistema de diseño.
2. **Paso 2 (Actual):** Generación de `DESIGN.md`, inventario de componentes y plan de implementación para revisión.
3. **Paso 3:** Inicialización del proyecto React + TypeScript + Tailwind CSS con Vite, configurando los tokens exactos del diseño original.
4. **Paso 4:** Implementación modular de componentes respetando pixel-perfect el diseño de Stitch tanto en Desktop como en Mobile.
5. **Paso 5:** Pruebas y validación visual local en navegador (Chrome / DevTools) comparando contra los screenshots de Stitch.
