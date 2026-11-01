# BBG — Brutalist Balance Bikes (Stitch Project 13535189969443513693)

Plataforma web oficial para **BBG ("Confianza sobre dos ruedas")**, la primera bicicleta infantil de balance con telemetría satelital GPS, chasis de magnesio de 2.9 kg y diseño Neo-Brutalista táctil desarrollada en Colombia.

---

## 🚀 Tecnologías

* **Framework:** React 18 + TypeScript + Vite
* **Estilos:** Tailwind CSS v3 (con tokens oficiales de Google Stitch)
* **Iconos:** Google Material Symbols Outlined
* **Tipografías:** Space Grotesk, Hanken Grotesk y Space Mono
* **Diseño:** Extraído y sincronizado desde Google Stitch MCP (`projects/13535189969443513693`)

---

## 🛠️ Desarrollo Local

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación se abrirá en `http://localhost:5173/`.

3. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## 🌐 Despliegue en Vercel

### Opción 1: Conexión Automática con GitHub (Recomendada)
1. Sube este repositorio a tu cuenta de GitHub.
2. Ingresa a [vercel.com/new](https://vercel.com/new).
3. Importa el repositorio `bbg-brutalist-bikes`.
4. El framework preset detectará automáticamente `Vite`.
5. Haz clic en **Deploy**. Cada commit en `main` desplegará automáticamente.

### Opción 2: Despliegue directo vía CLI
```bash
npx vercel
```

---

## 📁 Estructura del Código

```
├── raw_stitch/               # Copia local de archivos y capturas originales de Stitch
├── public/                   # Recursos estáticos y fotos de producto
├── src/
│   ├── components/
│   │   ├── Ticker.tsx        # Cinta superior continua
│   │   ├── Navbar.tsx        # Header responsive
│   │   ├── BottomNav.tsx     # Barra inferior móvil
│   │   ├── Hero.tsx          # Vitrina interactiva de la bicicleta
│   │   ├── TelemetryModule.tsx # Simulador de telemetría IoT y sensor de impacto
│   │   ├── Segments.tsx      # 4 propósitos de uso
│   │   ├── Specs.tsx         # Ficha técnica y comparativa
│   │   ├── Testimonials.tsx  # Reseñas reales en Colombia
│   │   ├── PreOrderForm.tsx  # Formulario interactivo de reserva
│   │   └── Footer.tsx        # Pie de página institucional y legal
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── DESIGN.md                 # Documentación completa del sistema de diseño
└── tailwind.config.js        # Tokens de diseño oficiales
```
