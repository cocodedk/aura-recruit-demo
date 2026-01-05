<script setup lang="ts">
interface Props {
  title: string
  version?: string
  description: string
  category: 'frontend' | 'styling' | 'testing' | 'quality' | 'build' | 'deployment'
}

defineProps<Props>()

const categoryColors = {
  frontend: 'border-tech-purple shadow-tech-purple/20',
  styling: 'border-tech-cyan shadow-tech-cyan/20',
  testing: 'border-tech-pink shadow-tech-pink/20',
  quality: 'border-yellow-400 shadow-yellow-400/20',
  build: 'border-green-400 shadow-green-400/20',
  deployment: 'border-blue-400 shadow-blue-400/20'
}
</script>

<template>
  <div
    class="group relative p-6 rounded-2xl backdrop-blur-md bg-white/5 border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    :class="categoryColors[category]"
  >
    <!-- Glassmorphism overlay -->
    <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <!-- Content -->
    <div class="relative z-10">
      <div class="flex items-baseline justify-between mb-3">
        <h3 class="text-xl font-bold text-white">{{ title }}</h3>
        <span v-if="version" class="text-sm text-white/60 font-mono">{{ version }}</span>
      </div>
      <p class="text-white/80 leading-relaxed">{{ description }}</p>
    </div>

    <!-- Glow effect on hover -->
    <div
      class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
      :class="categoryColors[category]"
    ></div>
  </div>
</template>
