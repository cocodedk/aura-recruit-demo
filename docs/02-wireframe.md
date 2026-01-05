Perfect choice 👍
Below is a **clear, mobile-first wireframe** for Aura Recruit that is designed to **look dramatically better than the current site on a phone** and translate cleanly into Vue components.

This is **not visual fluff** — it’s a structure that converts, feels modern, and scales.

---

# Mobile-First Wireframe

**Target viewport:** 375 × 812 (iPhone baseline)

---

## 1. Global mobile layout rules (foundation)

Before the wireframe, these rules are **non-negotiable**:

* **Single column only**
* **No carousels above the fold**
* **Max text width ~32–36 characters**
* **Primary CTA always reachable**
* **Sticky mobile CTA bar**
* Spacing > decoration

---

## 2. App Shell (appears on every page)

### Header (Mobile)

```
┌────────────────────────────┐
│ AURA ▸                     │
│                    ☰ MENU  │
└────────────────────────────┘
```

**Behavior**

* Sticky
* Menu opens full-screen
* No phone number in header (too noisy)

---

### Sticky Bottom CTA (critical)

```
┌────────────────────────────┐
│ [ Hire Talent ] [ Submit CV ] │
└────────────────────────────┘
```

* Visible on **all pages**
* This alone will massively outperform current site

---

## 3. Homepage – Mobile Wireframe

---

### SECTION 1 — Hero (Message First)

```
┌────────────────────────────┐
│                            │
│ Elite Tech Recruitment     │
│ Across Europe & the US     │
│                            │
│ Senior engineers,          │
│ architects & leaders.      │
│                            │
│ [ Hire Talent ]            │
│ [ Submit CV ]              │
│                            │
└────────────────────────────┘
```

**Notes**

* Solid background (gradient / dark)
* No photo
* Logo watermark or subtle animated accent
* This must load instantly

---

### SECTION 2 — Credibility Snapshot

```
┌────────────────────────────┐
│ Founded 2016               │
│ Boutique Tech Specialists  │
│ Europe + USA               │
└────────────────────────────┘
```

or cards:

```
┌───────┐ ┌───────┐ ┌───────┐
│ 2016  │ │ Europe│ │ Senior│
│Founded│ │ + USA │ │ Talent│
└───────┘ └───────┘ └───────┘
```

---

### SECTION 3 — What You Recruit For (Expandable)

```
┌────────────────────────────┐
│ What We Recruit For        │
│                            │
│ ▸ Software Engineering     │
│ ▸ Cloud & DevOps           │
│ ▸ Data & Machine Learning  │
│ ▸ Product & Design         │
└────────────────────────────┘
```

**Tap expands**

```
▾ Software Engineering
  • Backend
  • Frontend
  • Full-stack
```

No icons required. Clean. Modern.

---

### SECTION 4 — How Aura Works (Trust Builder)

```
┌────────────────────────────┐
│ How We Work                │
│                            │
│ 1. Deep technical screening│
│                            │
│ 2. Hand-picked shortlists  │
│                            │
│ 3. Long-term placements    │
└────────────────────────────┘
```

Optional subtle icon or line animation.

---

### SECTION 5 — Testimonial (One Only)

```
┌────────────────────────────┐
│ “Aura understood exactly   │
│ what we needed and         │
│ delivered fast.”           │
│                            │
│ — People Director          │
│   FinTech, Denmark         │
└────────────────────────────┘
```

* No carousel
* No arrows
* Quality over quantity

---

### SECTION 6 — Where You Operate

```
┌────────────────────────────┐
│ We Operate Across          │
│                            │
│ United Kingdom             │
│ Nordics                    │
│ Europe                     │
│ United States              │
└────────────────────────────┘
```

Maps belong on desktop only.

---

### SECTION 7 — Final CTA (Strong Close)

```
┌────────────────────────────┐
│ Ready to get started?      │
│                            │
│ [ Hire Talent ]            │
│ [ Submit CV ]              │
└────────────────────────────┘
```

---

## 4. CV Drop Page – Mobile Wireframe

### Goal: frictionless submission

```
┌────────────────────────────┐
│ Submit Your CV             │
│                            │
│ [ Upload CV ]              │
│ or LinkedIn URL            │
│                            │
│ Name                       │
│ Email                      │
│                            │
│ [ Submit ]                 │
└────────────────────────────┘
```

**Design rules**

* CV upload first
* LinkedIn accepted
* No long disclaimers (link to privacy)

---

## 5. Contact Page – Mobile Wireframe

```
┌────────────────────────────┐
│ Contact Aura Recruit       │
│                            │
│ Name                       │
│ Email                      │
│ Message                    │
│                            │
│ [ Send Message ]           │
│                            │
│ Address ▸                  │
│ Social ▸                   │
└────────────────────────────┘
```

Address collapses by default.

---

## 6. Team Page – Mobile Wireframe

```
┌────────────────────────────┐
│ Meet the Team              │
│                            │
│ [ Photo ]                  │
│ Matt – Co-Founder          │
│                            │
│ [ Photo ]                  │
│ Julian – Co-Founder        │
└────────────────────────────┘
```

* Minimal bio
* LinkedIn button only

---

## 7. Vue Component Mapping (Preview)

This wireframe maps cleanly to:

* `Hero.vue`
* `Credibility.vue`
* `ServicesAccordion.vue`
* `Process.vue`
* `Testimonial.vue`
* `GeoList.vue`
* `FinalCTA.vue`
* `MobileCTA.vue`

---

## 8. Why this will feel **alpha-omega better**

Compared to current site:

* ⚡ Faster perceived load
* 📱 Designed *for* thumbs
* 🎯 Clear CTAs everywhere
* 🧠 Cognitive load reduced by 50%+
* 🧩 Vue-ready, componentized

---

## Next step options (pick one)

1. **Visual wireframe (Figma-style layout in text)**
2. **Tailwind spacing & typography scale**
3. **Vue `Home.vue` scaffold**
4. **Mobile animation & motion rules**

Tell me which one you want next.
