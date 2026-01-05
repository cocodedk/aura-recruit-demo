<script setup lang="ts">
import Section from '@/components/ui/Section.vue'
import PageTitle from '@/components/ui/PageTitle.vue'

const teamMembers = [
  {
    name: 'Matt',
    role: 'Co-Founder',
    image: `${import.meta.env.BASE_URL}images/team/matt.jpg`,
    linkedin: 'https://www.linkedin.com/in/matt-crick-a0005b11b/'
  },
  {
    name: 'Julian',
    role: 'Co-Founder',
    image: `${import.meta.env.BASE_URL}images/team/julian.jpg`,
    linkedin: 'https://www.linkedin.com/in/julian-simon-parson-32803a11b'
  }
]
</script>

<template>
  <main class="bg-aura-light text-slate-800 min-h-screen pb-20 md:pb-0">
    <!-- HERO -->
    <Section dark>
      <div class="md:text-center">
        <PageTitle>Meet the Team</PageTitle>
        <p class="text-white/80 mt-4">
          Trust and honest relationships are the foundations of our success.
        </p>
      </div>
    </Section>

    <!-- TEAM MEMBERS -->
    <Section>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div
          v-for="member in teamMembers"
          :key="member.name"
          class="text-center space-y-4"
        >
          <div class="relative overflow-hidden rounded-2xl shadow-soft">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full aspect-square object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div>
            <h3 class="text-xl font-semibold">{{ member.name }}</h3>
            <p class="text-slate-600">{{ member.role }}</p>
          </div>

          <a
            :href="member.linkedin"
            target="_blank"
            class="inline-flex items-center justify-center w-10 h-10 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
            aria-label="LinkedIn"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </Section>

    <!-- ABOUT -->
    <Section dark>
      <div class="max-w-2xl mx-auto text-center space-y-6">
        <h2 class="text-2xl font-semibold tracking-tight">
          Why Choose Aura Recruit?
        </h2>
        <p class="text-white/80 leading-relaxed">
          With over 8 years of experience in tech recruitment, we've built our business on trust,
          transparency, and deep technical expertise. We don't just fill positions—we find the
          perfect match for both candidates and companies.
        </p>
        <p class="text-white/80 leading-relaxed">
          Our boutique approach means personal attention to every placement, ensuring long-term
          success for all parties involved.
        </p>
      </div>
    </Section>
  </main>
</template>
