Important reality check first (straight talk):
I **cannot literally create a Figma file or share a live Figma link**. What I *can* do—and what teams actually use—is give you a **precise Figma blueprint** that a designer (or you) can recreate **1:1 in under an hour**, with zero interpretation gaps.

Below is a **Figma-ready specification**: frames, components, spacing, text styles, colors, auto-layout rules.
This is exactly how senior product teams hand off designs.

---

# Aura Recruit — Figma Blueprint (Mobile-First)

**Design target:** iPhone 14 / 375px
**Design mode:** Mobile → Desktop later
**Layout philosophy:** Content-first, no visual noise

---

## 1. Figma File Structure

```
Aura Recruit – Website
├─ 🟦 Foundations
│  ├─ Colors
│  ├─ Typography
│  ├─ Spacing
│  └─ Shadows
├─ 🧩 Components
│  ├─ Buttons
│  ├─ Cards
│  ├─ Accordion
│  ├─ Inputs
│  ├─ Mobile CTA
│  └─ Header
├─ 📱 Pages – Mobile
│  ├─ Home
│  ├─ CV Drop
│  ├─ Contact
│  └─ Team
└─ 🖥 Pages – Desktop (later)
```

---

## 2. Foundations (must be created first)

### 🎨 Colors (Styles)

| Name          | Hex       | Usage                   |
| ------------- | --------- | ----------------------- |
| Aura / Navy   | `#0B1C2D` | Hero, footer, CTA bar   |
| Aura / Blue   | `#1F3A5F` | Secondary dark surfaces |
| Aura / Accent | `#3DA9FC` | Primary CTA             |
| Aura / Slate  | `#6B7280` | Body text               |
| Aura / Light  | `#F8FAFC` | Page background         |
| White         | `#FFFFFF` | Cards                   |

Create as **Color Styles** in Figma.

---

### 🔤 Typography (Text Styles)

Font: **Inter**

| Style | Size | Weight   | Line |
| ----- | ---- | -------- | ---- |
| H1    | 30   | Semibold | 1.2  |
| H2    | 24   | Semibold | 1.25 |
| H3    | 20   | Medium   | 1.3  |
| Body  | 16   | Regular  | 1.6  |
| Small | 14   | Regular  | 1.4  |

All text left-aligned by default.

---

### 📐 Spacing Scale (Reference)

```
4, 8, 16, 24, 32, 48, 64
```

Use **Auto Layout spacing only**. No manual nudging.

---

## 3. Core Components (Figma Components)

### 🔘 Button

**Frame**

* Height: 48px
* Padding: 24px horizontal
* Radius: 12px
* Auto-layout: horizontal + center

Variants:

* Primary (Accent bg, white text)
* Ghost (Transparent, white border)

---

### 🧱 Card

* Radius: 16px
* Padding: 24px
* Fill: White
* Border: `#E5E7EB`
* Shadow: subtle (y=4, blur=12, 6%)

---

### 📂 Accordion Item

* Card container
* Title row
* Chevron icon
* Expanded content hidden by default

---

### 📥 Input Field

* Height: 48px
* Radius: 12px
* Border: Slate 300
* Label above (14px)

---

### 📌 Mobile CTA Bar (Component)

* Position: fixed (note in description)
* Height: 72px
* Background: Aura Navy
* Two buttons, full width split
* Bottom safe-area padding noted

---

## 4. Home Page — Mobile Frame (375px)

### Frame

* Width: 375
* Height: Auto
* Background: Aura Light

---

### SECTION 1 — Hero

```
Padding: 32 top / 24 sides / 48 bottom
Background: Aura Navy
```

Content:

* H1 (2 lines max)
* Body text (1–2 lines)
* Button stack (vertical, 12px gap)

No images. No icons.

---

### SECTION 2 — Credibility

Auto-layout column, gap 16:

```
[ Card: Founded 2016 ]
[ Card: Boutique Tech Specialists ]
[ Card: Europe + US ]
```

---

### SECTION 3 — Services

Title + Accordion list

```
▸ Software Engineering
▸ Cloud & DevOps
▸ Data & ML
▸ Product & Design
```

---

### SECTION 4 — How We Work

Simple numbered list (not cards)

```
1. Deep technical screening
2. Hand-picked shortlists
3. Long-term placements
```

---

### SECTION 5 — Testimonial

Dark card:

* Quote text (18px)
* Attribution (14px, muted)

Only one testimonial.

---

### SECTION 6 — Geography

Text list only:

* UK
* Nordics
* Europe
* USA

---

### SECTION 7 — Final CTA

Same style as hero, centered text.

---

## 5. CV Drop Page (Mobile)

Order:

1. Page title
2. Upload CV button
3. LinkedIn URL input
4. Name
5. Email
6. Submit button

Zero distractions.

---

## 6. Contact Page (Mobile)

Order:

1. Form
2. Collapsible address
3. Social links

No hero image.

---

## 7. Team Page (Mobile)

* Title
* Vertical list of people
* Photo (1:1)
* Name + role
* LinkedIn icon only

---

## 8. Auto Layout Rules (critical)

Every section:

* Auto-layout: vertical
* Width: fill container
* No absolute positioning
* No manual spacing

This ensures:

* Easy iteration
* Clean Vue translation
* Responsive scaling

---

## 9. Why this Figma will outperform the current site

* Mobile-first from frame zero
* Zero legacy patterns (no sliders, no maps)
* Clear hierarchy
* CTA always visible
* Direct mapping to Vue + Tailwind

This is **product-grade**, not “agency website” design.
