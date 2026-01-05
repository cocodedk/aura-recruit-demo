<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  dark?: boolean
  center?: boolean
  reveal?: boolean
}>()

const sectionRef = ref<HTMLElement>()
const isVisible = ref(false)

onMounted(() => {
  if (!props.reveal) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry && entry.isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.1 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section
    ref="sectionRef"
    :class="[
      'py-16 transition-all duration-700',
      dark ? 'bg-aura-navy text-white' : 'bg-aura-light',
      reveal ? (isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8') : ''
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
