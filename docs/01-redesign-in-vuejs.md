Below is a **practical, opinionated redesign + Vue.js porting strategy**, optimized for **mobile-first impact**. I’ll be very direct and focused on making the new site *clearly superior* to the current one—especially on mobile.

---

## 1. High-level redesign goals (what must change)

### Current site problems (especially on mobile)

* Feels **2016–2018 era** (hero image + centered text, heavy sliders)
* Too much **text before value**
* Testimonials dominate screen real estate but don’t convert
* Maps and long sections break mobile flow
* Visual hierarchy is weak (everything feels similar in weight)
* No strong **primary CTA** above the fold on mobile

### Redesign goals

* **Immediate credibility in 3 seconds**
* **Clear value proposition**, not generic recruitment language
* **Mobile-first interaction**, desktop is an enhancement
* Fewer pages, more **conversion-oriented sections**
* Strong **brand presence** with modern motion & spacing

---

## 2. Mobile-first layout strategy (critical)

### Golden rule

> **Design for 375px width first. Desktop comes later.**

### Mobile layout principles

* One-column flow
* No sliders unless *absolutely necessary*
* Every section answers **one question only**
* CTAs visible within the **first viewport**
* Vertical rhythm > visual decoration

---

## 3. Proposed new page structure (Homepage)

### 1. Hero section (Mobile-first)

**Replace image-heavy hero with a message-first hero**

**Mobile layout**

```
[ Logo ]
--------------------------------
Headline (2 lines max)
Sub-head (1 line)
Primary CTA
Secondary CTA (ghost)
--------------------------------
```

**Example copy**

* Headline:
  **Elite Tech Recruitment Across Europe & the US**
* Sub-head:
  Boutique search for senior engineers, architects & leaders.
* CTA:

  * Primary: **Hire Talent**
  * Secondary: **Submit CV**

**Design notes**

* Solid background (gradient or deep navy)
* No large photo on mobile
* Subtle animated accent (line / dot / gradient shift)

---

### 2. Credibility strip (immediately after hero)

Replace “about us” paragraphs with **proof**

**Mobile cards**

```
[ 2016 Founded ]
[ Europe + USA ]
[ Senior Tech Only ]
```

Short, scannable, bold.

---

### 3. What you recruit for (redesign completely)

❌ Current: icon grid with text
✅ New: **Expandable cards**

**Mobile**

* Stacked cards
* Tap to expand

Example:

```
▸ Software Engineering
▸ Cloud & DevOps
▸ Data & ML
▸ Product & Design
```

Each expands to 2–3 bullet points only.

---

### 4. How you work (new section – very important)

This is missing today.

**3-step vertical flow**

```
1. Deep technical screening
2. Handpicked shortlists
3. Long-term placement focus
```

Use icons + short copy.
This builds trust faster than testimonials.

---

### 5. Testimonials (cut volume, increase impact)

❌ Current: long carousel, heavy text
✅ New: **1–2 powerful quotes only**

**Mobile**

* One quote per screen
* No auto-slide
* Company + role visible

If you want more, link to a separate “Testimonials” page.

---

### 6. Geography (simplify aggressively)

❌ Current: maps with pins
✅ New: **Text-first geography**

```
We operate across:
• UK
• Nordics
• Europe
• United States
```

Optional map only on desktop.

---

### 7. Final CTA

End every page with a **strong action**

```
Ready to hire or looking for your next role?
[ Hire Talent ]
[ Submit CV ]
```

Sticky bottom CTA on mobile = **huge win**

---

## 4. CV Drop & Contact – modern UX changes

### CV Drop (mobile-first)

* Reduce fields to **minimum**
* CV upload first, details second
* Allow **LinkedIn URL instead of CV**
* Large, thumb-friendly inputs

**Flow**

```
Upload CV / LinkedIn
Name
Email
Submit
```

---

### Contact page

* No hero image on mobile
* Address collapsible
* Form first, details after

---

## 5. Vue.js architecture (clean & scalable)

### Recommended stack

* **Vue 3**
* **Vite**
* **Composition API**
* **Pinia** (only if needed)
* **Tailwind CSS** (strongly recommended)

Why Tailwind?

* Perfect for mobile-first
* Faster iteration
* Cleaner Vue components
* Easy design consistency

---

### Suggested folder structure

```
src/
 ├─ components/
 │   ├─ layout/
 │   │   ├─ AppHeader.vue
 │   │   ├─ AppFooter.vue
 │   │   └─ MobileCTA.vue
 │   ├─ sections/
 │   │   ├─ Hero.vue
 │   │   ├─ Credibility.vue
 │   │   ├─ Services.vue
 │   │   ├─ Process.vue
 │   │   ├─ Testimonials.vue
 │   │   └─ FinalCTA.vue
 │   └─ ui/
 │       ├─ Button.vue
 │       ├─ Card.vue
 │       └─ Input.vue
 ├─ pages/
 │   ├─ Home.vue
 │   ├─ CvDrop.vue
 │   ├─ Contact.vue
 │   └─ Team.vue
```

---

## 6. Vue + Mobile UX enhancements (high impact)

### Must-have

* Sticky bottom CTA on mobile
* Scroll-based section reveal (subtle)
* Tap-friendly buttons (min 48px height)
* System font stack or modern sans-serif (Inter, Manrope)

### Optional but impressive

* Page transitions (fade / slide)
* Micro-interactions on buttons
* Animated counters for credibility stats

---

## 7. Visual style recommendations

### Color

* Keep Aura blue as primary
* Add:

  * Off-white background
  * Dark charcoal text
  * Accent color (teal or electric blue)

### Typography

* Headings: **Inter / Manrope / Satoshi**
* Body: same family, lighter weight
* Strong contrast between H1 / H2 / body

---

## 8. What to remove entirely

Be ruthless:

* ❌ Large hero images on mobile
* ❌ Auto-sliding carousels
* ❌ Long paragraphs
* ❌ Maps as primary content
* ❌ Repeating testimonials everywhere

---
