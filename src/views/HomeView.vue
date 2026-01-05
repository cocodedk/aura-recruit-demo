<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BaseButton from '@/components/ui/BaseButton.vue'
import Card from '@/components/ui/Card.vue'
import Section from '@/components/ui/Section.vue'
import Accordion from '@/components/ui/Accordion.vue'
import PageTitle from '@/components/ui/PageTitle.vue'

const services = [
  {
    title: 'Software Engineering',
    items: ['Backend Development', 'Frontend Development', 'Full-stack Development']
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS / Azure Platforms', 'Platform Engineering', 'Site Reliability Engineering']
  },
  {
    title: 'Data & Machine Learning',
    items: ['Data Science', 'ML Engineering', 'Analytics Platforms']
  },
  {
    title: 'Product & Design',
    items: ['Product Management', 'UX/UI Design', 'Product Strategy']
  }
]
</script>

<template>
  <main class="bg-aura-light text-slate-800">
    <!-- HERO -->
    <Section dark>
      <PageTitle>
        Elite Tech Recruitment<br />
        Across Europe & the US
      </PageTitle>

      <p class="text-white/80 text-base leading-relaxed mb-8">
        Boutique search for senior engineers, architects, and technology leaders.
      </p>

      <div class="flex flex-col gap-3">
        <BaseButton as="router-link" to="/contact" full>
          Hire Talent
        </BaseButton>

        <BaseButton variant="ghost" as="router-link" to="/cv-drop" full>
          Submit CV
        </BaseButton>
      </div>
    </Section>

    <!-- CREDIBILITY -->
    <Section reveal>
      <div class="grid gap-4">
        <Card>
          <p class="font-medium">Founded 2016</p>
        </Card>

        <Card>
          <p class="font-medium">Boutique Tech Specialists</p>
        </Card>

        <Card>
          <p class="font-medium">Europe + United States</p>
        </Card>
      </div>
    </Section>

    <!-- SERVICES -->
    <Section reveal>
      <h2 class="text-2xl font-semibold tracking-tight mb-6">
        What We Recruit For
      </h2>

      <div class="space-y-4">
        <Accordion
          v-for="service in services"
          :key="service.title"
          :title="service.title"
        >
          <ul class="space-y-2">
            <li v-for="item in service.items" :key="item">
              • {{ item }}
            </li>
          </ul>
        </Accordion>
      </div>
    </Section>

    <!-- PROCESS -->
    <Section dark reveal>
      <h2 class="text-2xl font-semibold tracking-tight mb-8">
        How We Work
      </h2>

      <ol class="space-y-6">
        <li>
          <p class="font-medium">1. Deep technical screening</p>
          <p class="text-white/80 mt-1">
            We assess real capability, not just CV keywords.
          </p>
        </li>

        <li>
          <p class="font-medium">2. Hand-picked shortlists</p>
          <p class="text-white/80 mt-1">
            Fewer candidates, higher quality matches.
          </p>
        </li>

        <li>
          <p class="font-medium">3. Long-term placements</p>
          <p class="text-white/80 mt-1">
            Focused on retention and mutual success.
          </p>
        </li>
      </ol>
    </Section>

    <!-- TESTIMONIAL -->
    <Section reveal>
      <Card dark>
        <p class="text-lg leading-relaxed">
          "Aura understood exactly what we needed and delivered exceptional candidates quickly."
        </p>

        <p class="mt-4 text-sm text-white/70">
          — People Director, FinTech Company (Denmark)
        </p>
      </Card>
    </Section>

    <!-- GEOGRAPHY -->
    <Section reveal>
      <h2 class="text-2xl font-semibold tracking-tight mb-6">
        Where We Operate
      </h2>

      <ul class="space-y-2 text-slate-700">
        <li>United Kingdom</li>
        <li>Nordics</li>
        <li>Europe</li>
        <li>United States</li>
      </ul>
    </Section>

    <!-- FINAL CTA -->
    <Section dark center reveal>
      <h2 class="text-2xl font-semibold tracking-tight mb-8">
        Ready to get started?
      </h2>

      <div class="flex flex-col gap-3">
        <BaseButton as="router-link" to="/contact" full>
          Hire Talent
        </BaseButton>

        <BaseButton variant="ghost" as="router-link" to="/cv-drop" full>
          Submit CV
        </BaseButton>
      </div>
    </Section>
  </main>
</template>
