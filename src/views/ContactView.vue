<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import InputField from '@/components/ui/InputField.vue'
import Section from '@/components/ui/Section.vue'
import PageTitle from '@/components/ui/PageTitle.vue'

const name = ref('')
const email = ref('')
const message = ref('')
const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  if (!name.value || !email.value || !message.value) return

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
        <div class="md:text-center">
          <PageTitle>Contact Aura Recruit</PageTitle>
          <p class="text-white/80 mt-4">
            Get in touch to discuss your hiring needs or career opportunities.
          </p>
        </div>
      </Section>

      <!-- FORM -->
      <Section>
        <div class="max-w-md md:max-w-lg lg:max-w-xl mx-auto space-y-6">
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

          <div class="space-y-2">
            <label for="message" class="block text-sm font-medium text-slate-700">
              Message <span class="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              v-model="message"
              placeholder="Tell us about your hiring needs or career goals..."
              required
              rows="4"
              class="w-full rounded-xl border border-slate-300 px-4 py-3 text-base
                     focus:outline-none focus:ring-2 focus:ring-aura-accent focus:border-transparent
                     transition-all duration-200 resize-none"
            ></textarea>
          </div>

          <BaseButton
            full
            :loading="isSubmitting"
            :disabled="!name || !email || !message"
            @click="handleSubmit"
          >
            Send Message
          </BaseButton>
        </div>
      </Section>

      <!-- CONTACT INFO -->
      <Section dark>
        <div class="text-center space-y-6">
          <div>
            <h3 class="text-xl font-semibold mb-2">Get in Touch</h3>
            <div class="space-y-2 text-white/80">
              <p>
                <span class="block font-medium">Phone</span>
                +44 208 004 0066
              </p>
              <p>
                <span class="block font-medium">Email</span>
                info@aurarecruit.com
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-xl font-semibold mb-2">Address</h3>
            <div class="text-white/80 text-sm leading-relaxed">
              <p>Aura Recruit Ltd</p>
              <p>Office 2, Broomfield Place</p>
              <p>189 Main Road</p>
              <p>Chelmsford, Essex CM1 7DJ</p>
              <p>United Kingdom</p>
            </div>
          </div>

          <div class="flex justify-center space-x-4">
            <a
              href="https://linkedin.com/company/aura-recruit"
              target="_blank"
              class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/aurarecruit"
              target="_blank"
              class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
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
            Message Sent!
          </h1>
          <p class="text-slate-600">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          <BaseButton as="router-link" to="/" full>
            Return Home
          </BaseButton>
          <BaseButton variant="ghost" as="router-link" to="/cv-drop" full>
            Submit CV Instead
          </BaseButton>
        </div>
      </div>
    </div>
  </main>
</template>
