<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const props = defineProps<{
  variant?: Variant
  size?: Size
  full?: boolean
  loading?: boolean
  disabled?: boolean
  as?: string
}>()

const classes = computed(() => {
  const base =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 active:scale-[0.98]'

  const variants: Record<Variant, string> = {
    primary: 'bg-aura-accent text-white hover:opacity-90 shadow-soft',
    secondary: 'bg-white text-aura-navy border border-slate-200 hover:shadow-soft',
    ghost: 'border border-white/30 text-white hover:bg-white/10'
  }

  const sizes: Record<Size, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const disabledClasses = props.disabled ? 'opacity-50 cursor-not-allowed' : ''
  const loadingClasses = props.loading ? 'cursor-wait' : ''

  return [
    base,
    variants[props.variant ?? 'primary'],
    sizes[props.size ?? 'md'],
    props.full ? 'w-full' : '',
    disabledClasses,
    loadingClasses
  ].filter(Boolean).join(' ')
})

const tag = computed(() => props.as ?? 'button')
</script>

<template>
  <component
    :is="tag"
    :class="classes"
    :disabled="tag === 'button' && (disabled || loading)"
  >
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-2 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <slot />
  </component>
</template>
