<script setup lang="ts">
defineProps<{
  dark?: boolean
  interactive?: boolean
  padding?: 'sm' | 'md' | 'lg'
}>()
</script>

<template>
  <div
    :class="[
      'rounded-2xl border transition-all duration-300',
      dark
        ? 'bg-aura-navy text-white border-white/10'
        : 'bg-white text-slate-800 border-slate-200',
      interactive ? 'hover:shadow-medium hover:scale-[1.01] hover:border-aura-accent/20 active:scale-[0.99]' : '',
      padding === 'sm' ? 'p-4' : padding === 'lg' ? 'p-8' : 'p-6'
    ]"
  >
    <slot />
  </div>
</template>
