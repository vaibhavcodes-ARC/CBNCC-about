---
name: Obsidian Cipher
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#cbc6bd'
  on-secondary: '#32302a'
  secondary-container: '#494740'
  on-secondary-container: '#b9b5ac'
  tertiary: '#ffffff'
  on-tertiary: '#2f3034'
  tertiary-container: '#e3e2e6'
  on-tertiary-container: '#646468'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e7e2d9'
  secondary-fixed-dim: '#cbc6bd'
  on-secondary-fixed: '#1d1c16'
  on-secondary-fixed-variant: '#494740'
  tertiary-fixed: '#e3e2e6'
  tertiary-fixed-dim: '#c7c6ca'
  on-tertiary-fixed: '#1a1b1f'
  on-tertiary-fixed-variant: '#46474a'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  charcoal-surface: '#141414'
  border-subtle: '#222222'
  glow-cyan: rgba(0, 255, 242, 0.15)
  glass-fill: rgba(255, 255, 255, 0.03)
typography:
  display-xl:
    fontFamily: EB Garamond
    fontSize: 120px
    fontWeight: '500'
    lineHeight: 110px
    letterSpacing: -0.04em
  display-lg:
    fontFamily: EB Garamond
    fontSize: 80px
    fontWeight: '500'
    lineHeight: 84px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
  headline-xl-mobile:
    fontFamily: EB Garamond
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 38px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
  meta-tag:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-margin: 64px
  gutter: 24px
  section-gap: 160px
  element-gap: 32px
  unit: 8px
---

## Brand & Style

The design system is engineered for **CBNCC (Code Busters & Coding Club)**, targeting a high-tier developer audience that values technical mastery and aesthetic prestige. The brand personality is **mysterious, authoritative, and avant-garde**, blending the precision of a high-end IDE with the editorial elegance of a luxury fashion house.

The visual direction follows a **Brutal Minimalist** movement infused with **Futuristic Tech** elements. Key characteristics include:
- **Cinematic Scale:** Intentional use of oversized typography and expansive negative space to create a sense of digital grandeur.
- **Atmospheric Depth:** A "void-first" approach where UI elements emerge from deep blacks using light, texture, and subtle glassmorphism rather than heavy fills.
- **Tactile Technicality:** Inclusion of ASCII-inspired patterns, hairline grids, and monospaced metadata that nod to raw terminal environments within a polished interface.

## Colors

The palette is strictly monochrome to maintain a premium, cinematic feel. 

- **The Void (#0A0A0A):** The primary background color, providing infinite depth.
- **The Light (#FFFFFF):** Reserved for high-impact typography and primary CTAs to create extreme contrast.
- **Muted Accents:** Charcoal and slate tones are used for secondary surfaces and structural lines.
- **Subtle Luminescence:** Occasional "glow" states use low-opacity gradients to simulate light refracting through glass or a terminal screen.

Avoid using pure blacks (#000000) for surfaces; use the specified charcoal tones to ensure depth is perceptible on high-end displays.

## Typography

This design system utilizes a high-contrast typographic pairing:

1.  **EB Garamond (Serif):** Used for large-scale editorial headlines. It provides a "literary" and "elite" feel that contradicts the digital nature of the club, creating a unique aesthetic tension.
2.  **Hanken Grotesk (Sans-Serif):** A clean, modern sans-serif for body text, ensuring high legibility and a contemporary tech feel.
3.  **JetBrains Mono (Monospace):** Used exclusively for metadata, technical specifications, and small labels to reinforce the "Code Busters" identity.

**Scale:** Headlines should be aggressively large on desktop. On mobile, headlines must scale down significantly to maintain readability, while body text remains consistent.

## Layout & Spacing

The layout follows a **Fixed 12-Column Grid** for desktop and a **4-Column Grid** for mobile. 

- **Apple-Style Whitespace:** Use generous margins (64px+) and section gaps (160px+) to allow the content to breathe. Every element should feel like an intentional artifact on a canvas.
- **The Hairline Grid:** A subtle 1px border grid (#222222) can be used as a background overlay to ground the elements and provide a "blueprint" feel.
- **Editorial Reflow:** On desktop, shift content off-center or use asymmetrical column spans (e.g., text spanning columns 3-9) to evoke the feel of a high-end magazine.

## Elevation & Depth

This design system rejects traditional drop shadows in favor of **Tonal Layering** and **Glassmorphism**.

1.  **Level 0 (Base):** Background (#0A0A0A) with a very faint ASCII or grid texture.
2.  **Level 1 (Panels):** Slightly lighter charcoal (#141414) with thin 1px borders (#222222).
3.  **Level 2 (Glass):** Semi-transparent surfaces (3% White) with a high backdrop blur (20px-40px). This is used for navigation bars and floating cards.
4.  **Interactions:** Depth is communicated through "Reveal States." When hovering over a card, a subtle inner glow or a hairline border highlight appears, rather than the card "lifting" off the page.

## Shapes

The shape language is primarily **Geometric and Sharp**, reflecting precision.

- **Primary Radius:** Use a soft 0.25rem (4px) radius for most panels and input fields to maintain a technical edge.
- **Pill Tags:** The only exception is status tags and small badges, which use a full pill-shape (999px radius) to differentiate them from functional containers.
- **Borders:** Always use 1px "Hairline" borders. Never use heavy strokes unless for specific brutalist emphasis in large display areas.

## Components

### Buttons
- **Primary:** Solid white background, black text (Hanken Grotesk Bold). No border. High contrast.
- **Secondary:** Ghost style. 1px white border, transparent background, white text.
- **Interaction:** On hover, primary buttons invert colors or exhibit a subtle "glitch" shift in text position.

### Glassmorphism Panels
- Use `glass-fill` with a 32px backdrop-filter blur. 
- Apply a 1px top-left highlight border to simulate light hitting the edge of a glass pane.

### Interactive Grid Overlays
- Backgrounds should feature a subtle repeating 1px grid. On mouse-move, a faint radial gradient (glow-cyan) follows the cursor behind the grid lines, creating a "scanning" effect.

### Pill Tags
- Small, mono-spaced text inside a fully rounded container.
- Background: `#222222`. Text: `#8A8A8E`.

### Cards
- No shadows. Use 1px borders (#222222). 
- Headers inside cards should use a smaller serif (EB Garamond) to maintain the editorial theme.
- Reveal state: On hover, the border color transitions to pure white and any background texture becomes 10% more visible.

### Inputs
- Bottom-border only for a minimal, technical look. 
- Focus state: The bottom border glows slightly using a cyan-tinted white.