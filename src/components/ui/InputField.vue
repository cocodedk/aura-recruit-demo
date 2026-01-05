<script setup lang="ts">
import { computed } from 'vue'

defineProps<{
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  modelValue?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputId = computed(() => `input-${Math.random().toString(36).substr(2, 9)}`)
</script>

<template>
  <label :for="inputId" class="block space-y-2">
    <span class="text-sm font-medium text-slate-700">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </span>

    <input
      :id="inputId"
      :type="type ?? 'text'"
      :placeholder="placeholder"
      :value="modelValue"
      :required="required"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      class="w-full rounded-xl border border-slate-300 px-4 py-3 text-base
             focus:outline-none focus:ring-2 focus:ring-aura-accent focus:border-transparent
             transition-all duration-200"
    />
  </label>
</template>
