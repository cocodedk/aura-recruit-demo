Excellent — this is the **right moment** to lock the design system, because Tailwind will *define* how modern and premium the site feels.

Below is a **mobile-first Tailwind design system** tailored specifically for **Aura Recruit**.
It is opinionated, restrained, and built to **outclass the current site instantly**, especially on mobile.

---

# Aura Recruit – Tailwind Design System

**Mobile-first · Vue-ready · Premium tech feel**

---

## 1. Design principles (non-negotiable)

These principles drive every Tailwind decision:

1. **Whitespace over decoration**
2. **Typography over imagery**
3. **Contrast over color quantity**
4. **Motion only when meaningful**
5. **Mobile is the source of truth**

If something doesn’t help clarity or conversion → it’s removed.

---

## 2. Color system

### Core palette (minimal, confident)

```ts
// tailwind.config.js
colors: {
  aura: {
    navy: '#0B1C2D',     // primary background
    blue: '#1F3A5F',     // secondary background
    accent: '#3DA9FC',   // CTA / focus
    slate: '#6B7280',    // secondary text
    light: '#F8FAFC',    // page background
    white: '#FFFFFF',
  }
}
```

### Usage rules

* **Navy** → hero, footer, CTA backgrounds
* **Accent** → buttons, links, highlights only
* **Slate** → body text, never headings
* **White / Light** → content sections

🚫 No gradients everywhere
🚫 No more than **1 accent color**

---

## 3. Typography system (critical for “impressive” feel)

### Font choice

**Primary:** `Inter` or `Manrope`
(Modern, neutral, excellent on mobile)

```css
font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont;
```

---

### Type scale (mobile-first)

```txt
H1:  text-3xl  (30px)  font-semibold
H2:  text-2xl  (24px)  font-semibold
H3:  text-xl   (20px)  font-medium
Body: text-base (16px) font-normal
Small: text-sm (14px)
```

Desktop enhancements:

* `md:text-4xl` for H1
* `md:text-3xl` for H2

---

### Typography rules

* Headings: **tracking-tight**
* Body: **leading-relaxed**
* Never center long paragraphs
* Headings always **left-aligned on mobile**

---

## 4. Spacing system (this makes it feel premium)

Use **8-point system only**

```txt
4   → xs
8   → sm
16  → base
24  → md
32  → lg
48  → xl
64  → 2xl
```

### Section spacing

```html
<section class="py-16 md:py-24">
```

### Card spacing

```html
<div class="p-6 md:p-8">
```

Whitespace is your strongest visual asset.

---

## 5. Buttons (conversion-focused)

### Primary button

```html
<button class="
  bg-aura-accent text-white
  px-6 py-3
  rounded-xl
  font-medium
  text-base
  hover:opacity-90
  active:scale-[0.98]
  transition
">
```

### Secondary (ghost)

```html
<button class="
  border border-white/30
  text-white
  px-6 py-3
  rounded-xl
  font-medium
  hover:bg-white/10
  transition
">
```

### Rules

* Minimum height: **48px**
* Rounded: **xl**
* Never small buttons on mobile

---

## 6. Card system (used everywhere)

```html
<div class="
  bg-white
  rounded-2xl
  shadow-sm
  border border-slate-200
  p-6
">
```

Variants:

* Dark card → `bg-aura-navy text-white`
* Interactive → `hover:shadow-md transition`

Cards replace:

* Icon grids
* Carousels
* Maps
* Dense text blocks

---

## 7. Section patterns (reusable)

### Standard section wrapper

```html
<section class="bg-aura-light py-16">
  <div class="max-w-xl mx-auto px-6">
    <!-- content -->
  </div>
</section>
```

### Dark section

```html
<section class="bg-aura-navy text-white py-20">
```

---

## 8. Mobile navigation (clean & modern)

### Header

```html
<header class="sticky top-0 bg-aura-navy text-white z-50">
```

### Mobile menu

* Full-screen
* Slide-in from right
* Large tap targets

Menu links:

```txt
Home
Hire Talent
Submit CV
Contact
```

No clutter. No social icons here.

---

## 9. Sticky Mobile CTA (huge conversion win)

```html
<div class="
  fixed bottom-0 inset-x-0
  bg-aura-navy
  border-t border-white/10
  p-4
  flex gap-3
">
```

Buttons:

* Hire Talent (primary)
* Submit CV (secondary)

This alone modernizes the experience.

---

## 10. Forms (CV Drop & Contact)

### Inputs

```html
<input class="
  w-full
  rounded-xl
  border border-slate-300
  px-4 py-3
  text-base
  focus:outline-none
  focus:ring-2 focus:ring-aura-accent
">
```

### Rules

* No placeholder-only labels
* Clear labels
* Big hit areas
* Minimal fields

---

## 11. Motion & micro-interactions

Allowed:

* Fade + slide up on section enter
* Button press scale
* Accordion expand/collapse

Not allowed:

* Auto carousels
* Parallax on mobile
* Excessive animations

Motion should feel **expensive**, not flashy.

---

## 12. Tailwind config additions (summary)

```ts
theme: {
  extend: {
    borderRadius: {
      xl: '0.75rem',
      '2xl': '1rem',
    },
    boxShadow: {
      soft: '0 10px 25px rgba(0,0,0,0.06)',
    }
  }
}
```

---

## 13. Why this design system will win

Compared to the current site:

* ✅ Instantly modern on mobile
* ✅ Clear hierarchy
* ✅ Strong brand presence
* ✅ Vue-friendly components
* ✅ Easy to maintain & scale

This is **alpha-omega better** because it’s:

* restrained
* intentional
* conversion-driven
* technically clean
