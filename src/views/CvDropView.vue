<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import InputField from '@/components/ui/InputField.vue'
import FileUpload from '@/components/ui/FileUpload.vue'
import Section from '@/components/ui/Section.vue'
import PageTitle from '@/components/ui/PageTitle.vue'

const name = ref('')
const email = ref('')
const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleFileSelected = (file: File) => {
  console.log('File selected:', file.name)
}

const handleSubmit = async () => {
  if (!name.value || !email.value) return

  isSubmitting.value = true

  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))

  isSubmitting.value = false
  isSubmitted.value = true
}
</script>

<template>
  <main class="bg-aura-light text-slate-800 min-h-screen">
    <div v-if="!isSubmitted" class="pb-20 md:pb-0">
      <!-- HERO -->
      <Section dark>
        <PageTitle>Submit Your CV</PageTitle>
        <p class="text-white/80 mt-4">
          Join our network of elite tech professionals.
        </p>
      </Section>

      <!-- FORM -->
      <Section>
        <div class="max-w-md mx-auto space-y-6">
          <FileUpload @file-selected="handleFileSelected" />

          <InputField
            label="Your Name"
            placeholder="Enter your full name"
            v-model="name"
            required
          />

          <InputField
            label="Email Address"
            type="email"
            placeholder="your.email@example.com"
            v-model="email"
            required
          />

          <BaseButton
            full
            :loading="isSubmitting"
            :disabled="!name || !email"
            @click="handleSubmit"
          >
            Submit CV
          </BaseButton>

          <p class="text-sm text-slate-500 text-center mt-4">
            By submitting, you agree to our privacy policy.
            We collect personal data only for recruitment purposes.
          </p>
        </div>
      </Section>
    </div>

    <!-- SUCCESS STATE -->
    <div v-else class="min-h-screen flex items-center justify-center px-6">
      <div class="text-center space-y-6 max-w-md animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto animate-in zoom-in-50 duration-300 delay-200">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div>
          <h1 class="text-3xl font-semibold tracking-tight text-slate-800 mb-2">
            CV Submitted Successfully!
          </h1>
          <p class="text-slate-600">
            Thank you for your interest. We'll review your CV and get back to you within 2-3 business days.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <BaseButton as="router-link" to="/" full>
            Return Home
          </BaseButton>
          <BaseButton variant="ghost" as="router-link" to="/team" full>
            Meet Our Team
          </BaseButton>
        </div>
      </div>
    </div>
  </main>
</template>
