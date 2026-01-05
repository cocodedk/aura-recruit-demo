<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <details class="rounded-2xl border border-slate-200 bg-white p-6 group">
    <summary class="font-medium cursor-pointer flex items-center justify-between transition-colors hover:text-aura-accent">
      {{ title }}
      <svg
        class="w-5 h-5 transition-transform duration-300 group-open:rotate-180"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <div class="mt-4 text-slate-600 transition-all duration-300">
      <slot />
    </div>
  </details>
</template>
