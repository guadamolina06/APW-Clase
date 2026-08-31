---
name: Paws & Polish
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#414751'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#717783'
  outline-variant: '#c1c7d3'
  surface-tint: '#0060ac'
  primary: '#005da7'
  on-primary: '#ffffff'
  primary-container: '#2976c7'
  on-primary-container: '#fdfcff'
  inverse-primary: '#a4c9ff'
  secondary: '#006a62'
  on-secondary: '#ffffff'
  secondary-container: '#5ef6e6'
  on-secondary-container: '#006f66'
  tertiary: '#755700'
  on-tertiary: '#ffffff'
  tertiary-container: '#936f03'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d4e3ff'
  primary-fixed-dim: '#a4c9ff'
  on-primary-fixed: '#001c39'
  on-primary-fixed-variant: '#004883'
  secondary-fixed: '#61f9e9'
  secondary-fixed-dim: '#3adccc'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#ffdf9b'
  tertiary-fixed-dim: '#edc157'
  on-tertiary-fixed: '#251a00'
  on-tertiary-fixed-variant: '#5b4300'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  section-gap: 80px
---

## Brand & Style

The brand identity centers on a modern, professional, and deeply friendly experience for pet owners. The design style is **Corporate Modern** with a soft, approachable edge—prioritizing cleanliness to reflect a hygienic grooming environment while using playful geometry to signal warmth. 

The emotional response should be one of "calm reliability." By utilizing generous whitespace and a "Soft" design language, the interface reduces the anxiety often associated with pet care services. The aesthetic avoids clutter, ensuring that the focus remains on the quality of the grooming work and the ease of booking.

## Colors

The palette is built on a foundation of serenity and cleanliness:
- **Primary (Soft Blue):** Used for primary branding, headers, and essential navigational elements. It establishes professional trust.
- **Secondary (Turquoise):** Used for decorative elements, success states, and secondary highlights to provide a fresh, "water-like" feel.
- **Tertiary (Warm Yellow):** Reserved exclusively for high-priority calls to action (CTAs) like "Book Appointment." This high-contrast accent ensures visibility against the cooler tones.
- **Neutral:** A very light off-white/grey is used for backgrounds to prevent screen glare and maintain a soft, premium feel. Text should use a deep slate grey rather than pure black to maintain the friendly tone.

## Typography

The typography system uses **Plus Jakarta Sans** for headings to leverage its soft, modern curves and high legibility. This is paired with **Be Vietnam Pro** for body text, providing a contemporary and warm reading experience.

- **Headlines:** Use tight letter-spacing for large displays to give a cohesive, "branded" look.
- **Body:** Generous line-height is mandatory to maintain the "airy" and "clean" feel of the brand.
- **Labels:** Used for small metadata or overlines, always in semi-bold to ensure they remain legible against light backgrounds.

## Layout & Spacing

The layout follows a **Fluid Grid** model with significant emphasis on breathing room. 
- **Desktop:** A 12-column grid with wide margins (48px) to frame content centrally. 
- **Mobile:** A 4-column grid with 16px margins. 
- **Rhythm:** Use an 8px base unit. Section vertical spacing should be aggressive (80px+) to distinguish between different service offerings and maintain a premium, uncluttered aesthetic. 
- **Alignment:** Content should generally be left-aligned for readability, but "Hero" sections may use centered layouts to emphasize friendly pet photography.

## Elevation & Depth

To maintain a "modern and clean" look, this design system eschews heavy, dark shadows. Instead, it uses:
- **Tonal Layers:** Using slight variations of the neutral background (white vs. `#F8FAFC`) to define sections.
- **Soft Ambient Shadows:** For interactive cards and floating menus, use very diffused shadows (20-30px blur) with a low opacity (5-8%) and a subtle blue tint (`rgba(74, 144, 226, 0.1)`) to avoid a "dirty" look.
- **Thin Outlines:** Use 1px borders in a slightly darker neutral shade to define inputs and containers without adding visual weight.

## Shapes

The shape language is consistently **Rounded**. 
- **Standard Elements:** Buttons and input fields use a `0.5rem` radius to feel approachable.
- **Containers:** Large cards and image containers should use `rounded-xl` (1.5rem) to reinforce the friendly, "organic" nature of the brand.
- **Interactive States:** Avoid sharp corners entirely; even focus states should follow the rounded geometry of the parent element.

## Components

- **Buttons:** Primary buttons use the Primary Blue with white text. The "Action" button (e.g., *Agendar Cita*) uses the Warm Yellow with a dark slate text for maximum pop. All buttons have a subtle lift effect on hover.
- **Cards:** White backgrounds with a `1px` soft blue border or a very light ambient shadow. Used for "Service Packages" or "Staff Profiles."
- **Input Fields:** Large, 16px font size with generous internal padding (12px 16px). Borders change to Primary Blue on focus.
- **Chips/Badges:** Used for pet sizes (Small, Medium, Large) or status (Available). These use the Secondary Turquoise at 10% opacity with a saturated turquoise text.
- **List Items:** Separated by whitespace or very thin horizontal lines; each item should feel like a distinct "row" with ample vertical padding.
- **Special Component - "Pet Profile Card":** A specialized card format featuring a circular avatar for the pet and a progress bar for grooming status.