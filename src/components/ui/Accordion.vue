<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <details class="rounded-2xl border border-slate-200 bg-white p-6 group transition-all duration-300 hover:border-aura-accent/30 hover:shadow-soft">
    <summary class="font-semibold text-lg cursor-pointer flex items-center justify-between transition-all duration-200 hover:text-aura-accent active:scale-[0.98]">
      {{ title }}
      <svg
        class="w-5 h-5 transition-transform duration-300 ease-out group-open:rotate-180 flex-shrink-0 ml-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </summary>

    <div class="mt-4 text-slate-600 transition-all duration-300 ease-out">
      <slot />
    </div>
  </details>
</template>
