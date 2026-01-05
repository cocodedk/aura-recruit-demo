Good. This is the **right architectural move**.
Below are **clean, reusable, mobile-first UI components** that formalize the design system and **remove Tailwind noise from pages**.

These components are:

* Vue 3 idiomatic
* `<script setup>`
* Strictly presentational
* Designed to scale without refactors

---

# 1. `BaseButton.vue`

**Single source of truth for buttons**

### `src/components/ui/BaseButton.vue`

```vue
<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'secondary' | 'ghost'

const props = defineProps<{
  variant?: Variant
  full?: boolean
}>()

const classes = computed(() => {
  const base =
    'inline-flex items-center justify-center font-medium rounded-xl px-6 py-3 transition active:scale-[0.98]'

  const variants: Record<Variant, string> = {
    primary: 'bg-aura-accent text-white hover:opacity-90',
    secondary: 'bg-white text-aura-navy border border-slate-200',
    ghost: 'border border-white/30 text-white hover:bg-white/10'
  }

  return [
    base,
    variants[props.variant ?? 'primary'],
    props.full ? 'w-full' : ''
  ].join(' ')
})
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>
```

### Usage

```vue
<BaseButton full>Hire Talent</BaseButton>
<BaseButton variant="ghost" full>Submit CV</BaseButton>
```

---

# 2. `Card.vue`

**Universal container for credibility, services, testimonials**

### `src/components/ui/Card.vue`

```vue
<script setup lang="ts">
defineProps<{
  dark?: boolean
  interactive?: boolean
}>()
</script>

<template>
  <div
    :class="[
      'rounded-2xl p-6 border',
      dark
        ? 'bg-aura-navy text-white border-white/10'
        : 'bg-white text-slate-800 border-slate-200',
      interactive ? 'hover:shadow-md transition' : ''
    ]"
  >
    <slot />
  </div>
</template>
```

### Usage

```vue
<Card>
  <p class="font-medium">Founded 2016</p>
</Card>

<Card dark>
  Testimonial content
</Card>
```

---

# 3. `Section.vue`

**Consistent vertical rhythm everywhere**

### `src/components/ui/Section.vue`

```vue
<script setup lang="ts">
defineProps<{
  dark?: boolean
  center?: boolean
}>()
</script>

<template>
  <section
    :class="[
      'py-16',
      dark ? 'bg-aura-navy text-white' : 'bg-aura-light',
    ]"
  >
    <div
      :class="[
        'max-w-xl mx-auto px-6',
        center ? 'text-center' : ''
      ]"
    >
      <slot />
    </div>
  </section>
</template>
```

### Usage

```vue
<Section>
  <h2 class="text-2xl font-semibold">What We Recruit For</h2>
</Section>

<Section dark center>
  <h2>Ready to get started?</h2>
</Section>
```

---

# 4. `Accordion.vue`

**Used for “What We Recruit For”**

### `src/components/ui/Accordion.vue`

```vue
<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <details class="rounded-2xl border border-slate-200 bg-white p-6">
    <summary class="font-medium cursor-pointer">
      {{ title }}
    </summary>

    <div class="mt-4 text-slate-600">
      <slot />
    </div>
  </details>
</template>
```

### Usage

```vue
<Accordion title="Software Engineering">
  <ul class="space-y-2">
    <li>Backend</li>
    <li>Frontend</li>
    <li>Full-stack</li>
  </ul>
</Accordion>
```

---

# 5. `PageTitle.vue`

**Standardizes page headings**

### `src/components/ui/PageTitle.vue`

```vue
<template>
  <h1 class="text-3xl font-semibold tracking-tight mb-4">
    <slot />
  </h1>
</template>
```

---

# 6. `InputField.vue`

**Consistent form inputs**

### `src/components/ui/InputField.vue`

```vue
<script setup lang="ts">
defineProps<{
  label: string
  type?: string
}>()
</script>

<template>
  <label class="block space-y-1">
    <span class="text-sm font-medium text-slate-700">
      {{ label }}
    </span>

    <input
      :type="type ?? 'text'"
      class="w-full rounded-xl border border-slate-300 px-4 py-3 text-base
             focus:outline-none focus:ring-2 focus:ring-aura-accent"
    />
  </label>
</template>
```

---

# 7. Refactored `Home.vue` (example excerpt)

```vue
<Section dark>
  <PageTitle>
    Elite Tech Recruitment<br />
    Across Europe & the US
  </PageTitle>

  <p class="text-white/80">
    Boutique search for senior engineers, architects, and leaders.
  </p>

  <div class="mt-8 space-y-3">
    <BaseButton full>Hire Talent</BaseButton>
    <BaseButton variant="ghost" full>Submit CV</BaseButton>
  </div>
</Section>
```

This is now:

* readable
* expressive
* maintainable

---

# 8. Why this component layer matters

You’ve now:

* eliminated Tailwind duplication
* enforced visual consistency
* reduced cognitive load
* made redesign iterations trivial

This is **senior-level frontend architecture**, not template hacking.

