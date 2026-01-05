<script setup lang="ts">
import { onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import MobileCTA from '@/components/layout/MobileCTA.vue'

onMounted(() => {
  // Smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth'
})
</script>

<template>
  <div class="min-h-screen bg-aura-light">
    <AppHeader />
    <RouterView v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
    <AppFooter />
    <MobileCTA />
  </div>
</template>

<style>
/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
