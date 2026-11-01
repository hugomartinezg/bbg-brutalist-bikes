---
name: BBG Mobile Neo-Brutalism
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#454655'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#757686'
  outline-variant: '#c5c5d7'
  surface-tint: '#3c4dd9'
  primary: '#182bbf'
  on-primary: '#ffffff'
  primary-container: '#3849d6'
  on-primary-container: '#cdd0ff'
  inverse-primary: '#bdc2ff'
  secondary: '#526600'
  on-secondary: '#ffffff'
  secondary-container: '#c8f322'
  on-secondary-container: '#576c00'
  tertiary: '#8d0013'
  on-tertiary: '#ffffff'
  tertiary-container: '#b61321'
  on-tertiary-container: '#ffc6c2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dfe0ff'
  primary-fixed-dim: '#bdc2ff'
  on-primary-fixed: '#000a64'
  on-primary-fixed-variant: '#1d30c2'
  secondary-fixed: '#c8f322'
  secondary-fixed-dim: '#aed500'
  on-secondary-fixed: '#171e00'
  on-secondary-fixed-variant: '#3d4d00'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ae'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930014'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-hero:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0em
  label-telemetry:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-badge:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.06em
  label-code:
    fontFamily: Space Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: 12px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  space-xxs: 0.25rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.25rem
  space-xl: 1.5rem
  space-2xl: 2rem
  space-3xl: 3rem
  screen-edge-mobile: 1rem
  card-padding: 1rem
  telemetry-gap: 0.5rem
---

## Brand & Style

This design system establishes a high-voltage, Neo-Brutalist mobile web interface engineered specifically for BBG ("Confianza sobre dos ruedas"). Built for parents, commuter athletes, and tech-forward urban cyclists across Colombia and Latin America, the visual language merges heavy-duty manufacturing grit with high-precision cycling telemetry.

The emotional core is unwavering trust ("Confianza"), electric momentum, and pride in Colombian engineering. The aesthetic rejects passive, muted corporate tech templates in favor of assertive Neo-Brutalism: solid 2.5px to 3px pure black structural frames, hard unblurred drop shadows (`4px 4px 0px #000`), aggressive uppercase data chips, monospaced GPS telemetry indicators, and vivid pop-contrast backgrounds. It feels tactile, hyper-legible under direct equatorial sunlight, and structurally impenetrable.

## Colors

The palette is derived directly from the BBG brand identity and pushed into high-contrast mechanical territory:

- **Primary (`#3849D6`)**: Deep Electric Royal Blue. Provides high-saturation athletic power, brand anchors, primary actions, and hero canvas fills.
- **Secondary (`#D4FF32`)**: Neon Cyber Chartreuse / Electric Lime. High-visibility warning-grade contrast for focal points, telemetry alert badges, live statuses, and conversion triggers.
- **Tertiary (`#FF4D4D`)**: High-Vis Safety Crimson. Dedicated strictly to fall-detection warnings, live SOS status, brake telemetry, and low-battery thresholds.
- **Neutral Core (`#0D0D0D` & `#FFFFFF`)**: Pitch Black for 3px architectural borders, heavy text, and un-diffused geometric shadows; Crisp White and Tinted Off-White (`#F4F5FB`) as clean contrast planes.
- **Supporting Accent (`#00E5FF`)**: High-accuracy GPS telemetry and Bluetooth link indicators.

In light mode, the primary surface remains an energetic crisp white or light slate, allowing the royal blue and vibrant chartreuse to punch forward through solid black line work.

## Typography

Typography pairs mechanical tension with extreme data legibility:

- **Headlines (Space Grotesk)**: A technical, bold sans-serif with idiosyncratic geometric cuts that deliver authoritative confidence. Headings are set tight, frequently all-caps or title-cased with condensed tracking.
- **Body & Structural Copy (Hanken Grotesk)**: Highly legible, contemporary grotesk with neutral proportions that remain comfortable on vibrating mobile mounts and small screens.
- **Telemetry & Technical Badges (Space Mono)**: Monospaced numeric and metric font used for GPS coordinates, speed counters, fall-impact sensors (G-force), battery voltages, and batch IDs.

All headers maintain a hard vertical cadence without loose float.

## Layout & Spacing

This mobile-first design operates on a rigid 4px/8px modular baseline grid designed for dense viewport economy without clutter:

- **Screen Edges**: Strict 16px (`1rem`) outer margins on phone viewports (360px - 428px width), expanding to 24px on tablet screens.
- **Structural Rhythm**: Content sections are organized as physical modular plates with 12px or 16px vertical gap separators.
- **Micro-Gaps**: Metric telemetry blocks (GPS indicators, status chips, child safety lock toggles) use compact 8px spacing units for immediate scan-and-tap accuracy while on the move.
- **Touch Targets**: All interactive elements maintain a minimum target of 48px height to accommodate gloved or single-hand operation during transit.

## Elevation & Depth

This system intentionally rejects ambient gaussian blur, diffuse shadows, and soft skeuomorphic lighting. Depth is tactile, physical, and strictly Neo-Brutalist:

1. **The Structural Shadow Rule**:
   All elevated surfaces (cards, floating telemetry bars, actionable buttons) feature hard-edge, zero-blur offsets:
   - **Resting Elevation**: `box-shadow: 4px 4px 0px #0D0D0D`
   - **Prominent / Active Card Elevation**: `box-shadow: 6px 6px 0px #0D0D0D`
   - **Micro-Badges & Chips**: `box-shadow: 2px 2px 0px #0D0D0D`

2. **The Kinetic Press Interaction**:
   When pressed or tapped, buttons and interactives translate `transform: translate(2px, 2px)` with shadow compressing to `2px 2px 0px #0D0D0D` (or flat `0px 0px 0px #0D0D0D` on active state). This delivers instant mechanical feedback resembling a physical automotive switch.

3. **Layer Separation**:
   Layers do not blend; they sit atop one another separated by dense 2.5px solid black framing outlines. Overlapping stickers and telemetry stamps use slight negative rotational offsets (`-1deg` to `1.5deg`) to mimic industrial safety labels affixed to bicycle frames.

## Shapes

The shape system is set to **Level 1 (Soft)** with an industrial bias:

- **Base Radius**: 4px (`0.25rem`) applied to cards, primary action buttons, and input modules. This softens raw brutalist edge abrasion just enough to preserve modern app polish while avoiding soft consumer aesthetics.
- **Tags and Metric Pills**: 2px to 4px corners; zero pill-rounds except for specific hardware-status live indicators.
- **Corner Notches & Stamp Badges**: Certain technical stamps (such as the "HECHO EN COLOMBIA" pride certification badge) utilize angled chamfered corners or clipped bracket borders to echo laser-cut metal bike plates.

## Components

### Buttons
- **Primary CTAs**: Electric Lime (`#D4FF32`) background, 2.5px solid `#0D0D0D` border, 4px 4px hard black shadow, black bold Space Grotesk text in uppercase.
- **Secondary CTAs**: Electric Royal Blue (`#3849D6`) fill, pure white text, 2.5px `#0D0D0D` border, 4px hard shadow.
- **Telemetry Buttons**: Stark White fill with monospaced label and colored live indicator circle.
- **States**: Active/Pressed drops the shadow to `0px` with `transform: translate(4px, 4px)`.

### Telemetry Badges & Status Chips
- **GPS Live Beacon**: Space Mono uppercase chip (`GPS: FIX 99.4%`), 2px black border, `#00E5FF` or `#D4FF32` accent dot.
- **Fall Sensor Status**: Two-tone layout with solid black left header (`IMPACT SENSOR`) and bright green/red status field (`ARMED // 0.0G`).
- **Child Safety Metric**: High-vis warning container with diagonal hazard micro-striping along top edge and bold toggle switch.

### Colombian Manufacturing Badge ("Orgullo Nacional")
- A dedicated stamp component: 2px black border, angled or dashed inner border, text "BBG // HECHO EN COLOMBIA // CALIDAD CERTIFICADA", incorporating a micro tricolor pip (Yellow, Blue, Red) executed in high-contrast neo-brutalist blocks.

### Cards & Panels
- **Structure**: High-contrast white or muted silver-blue (`#EDEFFB`) background wrapped in 2.5px solid black borders with `4px 4px 0px #0D0D0D` hard drop shadows.
- **Header Plate**: High-contrast blue or chartreuse card-header ribbon containing bold section title and monospaced category tracker (e.g., `[SYS.01]`).

### Inputs & Form Fields
- 3px solid black border, crisp white background, 48px minimum height. On focus: background shifts to faint electric lime tint (`#F8FFE0`) with an immediate `3px 3px 0px #0D0D0D` shadow pop. Labels are rendered uppercase in Space Grotesk at 12px above the field.

### Selection Controls
- **Checkboxes & Radios**: Squared 20x20px boxes, 2.5px black border, zero blur. Checked state fills with `#D4FF32` containing a heavy geometric black checkmark.