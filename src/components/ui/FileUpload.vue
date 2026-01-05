<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  accept?: string
  maxSize?: number // in MB
}>()

const emit = defineEmits<{
  fileSelected: [file: File]
}>()

const isDragOver = ref(false)
const isUploading = ref(false)
const uploadProgress = ref(0)
const selectedFile = ref<File | null>(null)
const uploadStatus = ref<'idle' | 'uploading' | 'success' | 'error'>('idle')

const fileInput = ref<HTMLInputElement>()

const displayText = computed(() => {
  if (uploadStatus.value === 'success') {
    return `✓ ${selectedFile.value?.name} uploaded successfully`
  }
  if (uploadStatus.value === 'uploading') {
    return 'Uploading your CV...'
  }
  return 'Drop your CV here or click to browse'
})

const handleDragOver = (e: DragEvent) => {
  e.preventDefault()
  isDragOver.value = true
}

const handleDragLeave = (e: DragEvent) => {
  e.preventDefault()
  isDragOver.value = false
}

const handleDrop = (e: DragEvent) => {
  e.preventDefault()
  isDragOver.value = false

  const files = e.dataTransfer?.files
  if (files && files.length > 0 && files[0]) {
    handleFile(files[0])
  }
}

const handleFileSelect = (e: Event) => {
  const files = (e.target as HTMLInputElement).files
  if (files && files.length > 0 && files[0]) {
    handleFile(files[0])
  }
}

const handleFile = (file: File) => {
  // Check file size
  const maxSizeBytes = (props.maxSize || 10) * 1024 * 1024
  if (file.size > maxSizeBytes) {
    uploadStatus.value = 'error'
    return
  }

  selectedFile.value = file
  uploadStatus.value = 'uploading'
  uploadProgress.value = 0

  // Simulate upload progress
  const interval = setInterval(() => {
    uploadProgress.value += 20
    if (uploadProgress.value >= 100) {
      uploadProgress.value = 100
      clearInterval(interval)
      setTimeout(() => {
        uploadStatus.value = 'success'
        emit('fileSelected', file)
      }, 500)
    }
  }, 100)
}

const triggerFileSelect = () => {
  fileInput.value?.click()
}
</script>

<template>
  <div
    @dragover="handleDragOver"
    @dragleave="handleDragLeave"
    @drop="handleDrop"
    @click="triggerFileSelect"
    :class="[
      'relative border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300',
      isDragOver ? 'border-aura-accent bg-aura-accent/5' : 'border-slate-300 hover:border-slate-400',
      uploadStatus === 'success' ? 'border-green-500 bg-green-50' : '',
      uploadStatus === 'error' ? 'border-red-500 bg-red-50' : '',
      uploadStatus === 'uploading' ? 'border-aura-accent bg-aura-accent/5' : ''
    ]"
  >
    <input
      ref="fileInput"
      type="file"
      :accept="accept"
      @change="handleFileSelect"
      class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
    />

    <div v-if="uploadStatus === 'uploading'" class="space-y-4">
      <div class="w-full bg-slate-200 rounded-full h-2">
        <div
          class="bg-aura-accent h-2 rounded-full transition-all duration-300"
          :style="{ width: `${uploadProgress}%` }"
        ></div>
      </div>
      <p class="text-slate-600">{{ displayText }}</p>
    </div>

    <div v-else class="space-y-4">
      <div :class="[
        'mx-auto w-12 h-12 rounded-full flex items-center justify-center transition-colors',
        uploadStatus === 'success' ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'
      ]">
        <svg v-if="uploadStatus === 'success'" class="w-6 h-6 animate-in zoom-in-50 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      </div>

      <p :class="[
        'text-base',
        uploadStatus === 'success' ? 'text-green-700 font-medium' : 'text-slate-600'
      ]">
        {{ displayText }}
      </p>

      <p v-if="uploadStatus === 'idle'" class="text-sm text-slate-500">
        PDF, DOC, DOCX up to {{ maxSize || 10 }}MB
      </p>
    </div>
  </div>
</template>
