<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  label: string
  value: number
  suffix?: string
  icon?: string
  showProgress?: boolean
  maxValue?: number
  color?: 'purple' | 'cyan' | 'pink' | 'green'
}

const props = withDefaults(defineProps<Props>(), {
  suffix: '',
  icon: '📊',
  showProgress: false,
  maxValue: 100,
  color: 'purple'
})

const displayValue = ref(0)
const progressWidth = ref(0)

const colorClasses = {
  purple: 'text-tech-purple',
  cyan: 'text-tech-cyan',
  pink: 'text-tech-pink',
  green: 'text-green-400'
}

const gradientClasses = {
  purple: 'from-tech-purple to-purple-600',
  cyan: 'from-tech-cyan to-cyan-600',
  pink: 'from-tech-pink to-pink-600',
  green: 'from-green-400 to-green-600'
}

onMounted(() => {
  // Animate counter
  const duration = 2000
  const steps = 60
  const increment = props.value / steps
  const stepDuration = duration / steps

  let currentStep = 0
  const timer = setInterval(() => {
    currentStep++
    displayValue.value = Math.min(Math.round(increment * currentStep), props.value)

    if (props.showProgress) {
      progressWidth.value = (displayValue.value / props.maxValue) * 100
    }

    if (currentStep >= steps) {
      clearInterval(timer)
      displayValue.value = props.value
      if (props.showProgress) {
        progressWidth.value = (props.value / props.maxValue) * 100
      }
    }
  }, stepDuration)
})
</script>

<template>
  <div class="relative p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
    <div class="flex items-center gap-3 mb-3">
      <span class="text-3xl">{{ icon }}</span>
      <h3 class="text-lg font-semibold text-white/80">{{ label }}</h3>
    </div>

    <div class="flex items-baseline gap-2 mb-4">
      <span
        class="text-5xl font-bold transition-all duration-300"
        :class="colorClasses[color]"
      >
        {{ displayValue }}
      </span>
      <span class="text-2xl font-medium text-white/60">{{ suffix }}</span>
    </div>

    <!-- Progress Bar -->
    <div v-if="showProgress" class="relative h-2 bg-white/10 rounded-full overflow-hidden">
      <div
        class="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r transition-all duration-500 ease-out"
        :class="gradientClasses[color]"
        :style="{ width: `${progressWidth}%` }"
      ></div>
    </div>
  </div>
</template>
