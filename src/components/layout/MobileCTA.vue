<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
</script>

<template>
  <div
    class="
      fixed bottom-0 inset-x-0 z-50
      bg-aura-navy border-t border-white/10
      px-4 py-3 md:hidden
    "
    style="padding-bottom: env(safe-area-inset-bottom);"
  >
    <div class="flex gap-3">
      <BaseButton as="router-link" to="/contact" full>
        Hire Talent
      </BaseButton>

      <BaseButton variant="ghost" as="router-link" to="/cv-drop" full class="opacity-60 hover:opacity-100">
        Submit CV
      </BaseButton>
    </div>
  </div>
</template>
