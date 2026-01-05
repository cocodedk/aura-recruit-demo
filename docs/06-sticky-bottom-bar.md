Good choice. This component is **high-leverage**: it directly impacts conversions and instantly modernizes the mobile UX.

Below is a **clean, production-ready `MobileCTA.vue`**, designed to:

* Be **mobile-only**
* Stay **sticky at the bottom**
* Respect safe areas (iOS)
* Integrate cleanly with Vue Router
* Use the shared `BaseButton`

No fluff. No hacks.

---

# `MobileCTA.vue` — Sticky Bottom Bar

### Purpose

* Always visible on mobile
* Two clear actions
* Zero distraction
* Desktop never sees it

---

## `src/components/layout/MobileCTA.vue`

```vue
<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <div
    class="
      fixed bottom-0 inset-x-0 z-50
      bg-aura-navy
      border-t border-white/10
      px-4 py-3
      md:hidden
    "
    style="padding-bottom: env(safe-area-inset-bottom);"
  >
    <div class="flex gap-3">
      <BaseButton full>
        Hire Talent
      </BaseButton>

      <BaseButton variant="ghost" full>
        Submit CV
      </BaseButton>
    </div>
  </div>
</template>
```

---

## Why this is done this way (important)

### `md:hidden`

* Prevents desktop clutter
* Desktop CTAs live in content, not chrome

### `env(safe-area-inset-bottom)`

* Prevents iOS home-indicator overlap
* Many sites forget this → amateur mistake

### Two buttons only

* No icons
* No text overload
* Thumb-friendly

---

## Router integration (recommended)

If you’re using Vue Router, upgrade buttons:

```vue
<BaseButton as="router-link" to="/contact" full>
  Hire Talent
</BaseButton>

<BaseButton
  as="router-link"
  to="/cv-drop"
  variant="ghost"
  full
>
  Submit CV
</BaseButton>
```

To support this, update `BaseButton.vue` slightly:

```vue
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  full?: boolean
  as?: string
}>()

const tag = computed(() => props.as ?? 'button')
</script>

<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>
```

This keeps the system clean and flexible.

---

## Where to mount it

### Best place: `AppLayout.vue`

```vue
<template>
  <AppHeader />
  <router-view />
  <MobileCTA />
</template>
```

Do **not** mount it per page.

---

## UX behavior (recommended rules)

* Visible on:

  * Home
  * CV Drop
  * Team
* Optional hide on:

  * Contact page (form already visible)

You can control this via route meta later.

---

## Why this is alpha-omega better than current site

Current site:

* CTAs buried
* Scroll fatigue
* No persistent action

With this:

* 📱 Conversion always 1 tap away
* 👆 Thumb-optimized
* 💼 Feels like a modern SaaS site
* ⚡ Immediate perceived upgrade

This single component does **more** than most full redesigns.
