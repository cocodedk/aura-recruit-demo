<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue'
import Card from '@/components/ui/Card.vue'
import Section from '@/components/ui/Section.vue'
import Accordion from '@/components/ui/Accordion.vue'
import PageTitle from '@/components/ui/PageTitle.vue'
import HeroVisual from '@/components/ui/HeroVisual.vue'

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
      <div class="md:grid md:grid-cols-2 md:gap-12 lg:gap-16 items-center">
        <!-- Left Column: Text + CTAs -->
        <div class="mb-8 md:mb-0">
          <PageTitle>
            Elite Tech Recruitment<br />
            Across Europe & the US
          </PageTitle>

          <p class="text-white/80 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
            Boutique search for senior engineers, architects, and technology leaders.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <BaseButton as="router-link" to="/contact" class="sm:flex-1">
              Hire Talent
            </BaseButton>

            <BaseButton variant="ghost" as="router-link" to="/cv-drop" class="sm:flex-1">
              Submit CV
            </BaseButton>
          </div>
        </div>

        <!-- Right Column: Visual (Desktop Only) -->
        <div class="hidden md:block">
          <HeroVisual />
        </div>
      </div>
    </Section>

    <!-- CREDIBILITY -->
    <Section reveal>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        <Card interactive>
          <p class="font-semibold text-lg md:text-xl">Founded 2016</p>
        </Card>

        <Card interactive>
          <p class="font-semibold text-lg md:text-xl">Boutique Tech Specialists</p>
        </Card>

        <Card interactive>
          <p class="font-semibold text-lg md:text-xl">Europe + United States</p>
        </Card>
      </div>
    </Section>

    <!-- SERVICES -->
    <Section reveal>
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6 md:mb-8 text-center">
        What We Recruit For
      </h2>

      <div class="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:gap-8">
        <Accordion
          v-for="service in services"
          :key="service.title"
          :title="service.title"
        >
          <ul class="space-y-2 text-base md:text-lg">
            <li v-for="item in service.items" :key="item" class="text-slate-700">
              • {{ item }}
            </li>
          </ul>
        </Accordion>
      </div>
    </Section>

    <!-- PROCESS -->
    <Section dark reveal>
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6 md:mb-10 text-center">
        How We Work
      </h2>

      <ol class="space-y-8 md:grid md:grid-cols-3 md:gap-8 lg:gap-12 md:space-y-0">
        <li>
          <p class="font-semibold text-xl md:text-2xl mb-3 text-white">1. Deep technical screening</p>
          <p class="text-white/80 text-base md:text-lg leading-relaxed">
            We assess real capability, not just CV keywords.
          </p>
        </li>

        <li>
          <p class="font-semibold text-xl md:text-2xl mb-3 text-white">2. Hand-picked shortlists</p>
          <p class="text-white/80 text-base md:text-lg leading-relaxed">
            Fewer candidates, higher quality matches.
          </p>
        </li>

        <li>
          <p class="font-semibold text-xl md:text-2xl mb-3 text-white">3. Long-term placements</p>
          <p class="text-white/80 text-base md:text-lg leading-relaxed">
            Focused on retention and mutual success.
          </p>
        </li>
      </ol>
    </Section>

    <!-- TESTIMONIAL & GEOGRAPHY -->
    <Section reveal>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <!-- Left Column: Testimonial -->
        <div>
          <Card dark>
            <p class="text-xl md:text-2xl font-medium leading-relaxed text-white mb-6">
              "Aura understood exactly what we needed and delivered exceptional candidates quickly."
            </p>

            <p class="text-base md:text-lg text-white/70">
              — People Director, FinTech Company (Denmark)
            </p>
          </Card>
        </div>

        <!-- Right Column: Geography -->
        <div>
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6 md:mb-8">
            Where We Operate
          </h2>

          <ul class="space-y-3">
            <li class="font-semibold text-lg md:text-xl text-slate-800">United Kingdom</li>
            <li class="font-semibold text-lg md:text-xl text-slate-800">Nordics</li>
            <li class="font-semibold text-lg md:text-xl text-slate-800">Europe</li>
            <li class="font-semibold text-lg md:text-xl text-slate-800">United States</li>
          </ul>
        </div>
      </div>
    </Section>

    <!-- FINAL CTA -->
    <Section dark center reveal>
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-6 md:mb-8">
        Ready to get started?
      </h2>

      <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <BaseButton as="router-link" to="/contact" class="sm:flex-1" size="lg">
          Hire Talent
        </BaseButton>

        <BaseButton variant="ghost" as="router-link" to="/cv-drop" class="sm:flex-1 opacity-60 hover:opacity-100">
          Submit CV
        </BaseButton>
      </div>
    </Section>
  </main>
</template>
