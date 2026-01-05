<script setup lang="ts">
import TechCard from '@/components/ui/TechCard.vue'
import MetricDisplay from '@/components/ui/MetricDisplay.vue'

type Metric = {
  label: string
  value: number
  suffix: string
  icon: string
  showProgress?: boolean
  color: 'purple' | 'cyan' | 'pink' | 'green'
}

const techStack = {
  frontend: [
    { title: 'Vue 3', version: 'v3.5.26', description: 'Progressive JavaScript framework with Composition API for reactive, component-based development' },
    { title: 'TypeScript', version: 'v5.9.3', description: 'Strict type safety ensuring code quality and preventing runtime errors' },
    { title: 'Vue Router', version: 'v4.6.4', description: 'Official routing library for seamless SPA navigation' },
    { title: 'VueUse', version: 'v14.1.0', description: 'Collection of essential Vue composition utilities' }
  ],
  styling: [
    { title: 'Tailwind CSS', version: 'v4.1.18', description: 'Utility-first CSS framework with custom design system' },
    { title: '@tailwindcss/forms', version: 'v0.5.11', description: 'Beautiful form styling out of the box' },
    { title: 'Custom Design System', version: '', description: 'Branded color palette, typography scale, and reusable components' }
  ],
  testing: [
    { title: 'Vitest', version: 'v4.0.16', description: 'Blazing fast unit test framework powered by Vite' },
    { title: 'Vue Test Utils', version: 'v2.4.6', description: 'Official testing utilities for Vue components' },
    { title: 'Happy DOM', version: 'v20.0.11', description: 'Fast DOM implementation for testing' },
    { title: 'Coverage', version: 'v8', description: 'Code coverage reporting with @vitest/coverage-v8' }
  ],
  quality: [
    { title: 'ESLint', version: 'v9.39.2', description: 'Static code analysis for consistent code quality' },
    { title: 'TypeScript Strict', version: '', description: 'Strict mode enabled for maximum type safety' },
    { title: 'Husky', version: 'v9.1.7', description: 'Pre-commit hooks preventing low-quality code' },
    { title: 'Vue ESLint Plugin', version: 'v10.6.2', description: 'Vue-specific linting rules' }
  ],
  build: [
    { title: 'Vite', version: 'v7.3.0', description: 'Next-generation frontend build tool with lightning-fast HMR' },
    { title: 'PostCSS', version: 'v8.5.6', description: 'CSS transformations and autoprefixer' },
    { title: 'Vue DevTools', version: 'v8.0.5', description: 'Vite plugin for enhanced development experience' }
  ],
  deployment: [
    { title: 'GitHub Pages', version: '', description: 'Static site hosting with continuous deployment' },
    { title: 'GitHub Actions', version: '', description: 'CI/CD pipeline for automated builds and tests' }
  ]
}

const metrics: Metric[] = [
  { label: 'Test Suite', value: 146, suffix: 'tests', icon: '🧪', color: 'purple' },
  { label: 'Pass Rate', value: 86, suffix: '%', icon: '✅', showProgress: true, color: 'green' },
  { label: 'Components', value: 18, suffix: 'files', icon: '🧩', color: 'cyan' },
  { label: 'Type Safety', value: 100, suffix: '%', icon: '🛡️', showProgress: true, color: 'pink' }
]

const architecture = [
  {
    title: 'Component Architecture',
    points: [
      'Modular, reusable components with clear responsibilities',
      'Composition API for better code organization',
      'Props validation with TypeScript interfaces',
      'Single File Components (SFC) with scoped styles'
    ]
  },
  {
    title: 'Design System',
    points: [
      'Custom Tailwind theme with branded colors',
      'Consistent spacing using 8-point grid system',
      'Typography scale for responsive layouts',
      'Reusable UI components (buttons, cards, forms)'
    ]
  },
  {
    title: 'Testing Strategy',
    points: [
      'Comprehensive unit tests for all components',
      'Integration tests for user workflows',
      'Accessibility testing for inclusive design',
      'Pre-commit hooks preventing untested code'
    ]
  },
  {
    title: 'Mobile-First Approach',
    points: [
      'Responsive breakpoints (sm, md, lg, xl)',
      'Touch-friendly interactive elements',
      'Optimized for performance on mobile devices',
      'Progressive enhancement for desktop'
    ]
  }
]
</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-800 text-white overflow-hidden">

    <!-- Animated Background Pattern -->
    <div class="fixed inset-0 opacity-20 pointer-events-none">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-tech-purple rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tech-cyan rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
    </div>

    <!-- Hero Section -->
    <section class="relative px-6 py-20 md:py-32">
      <div class="max-w-6xl mx-auto text-center">
        <div class="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-tech-purple to-tech-cyan text-sm font-semibold">
          Portfolio Showcase
        </div>

        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-tech-purple via-tech-cyan to-tech-pink bg-clip-text text-transparent leading-tight">
          Built with Passion,<br />Crafted with Precision
        </h1>

        <div class="text-center text-xl md:text-2xl text-white/80 mb-8 leading-relaxed px-20 md:px-40">
          A comprehensive Vue.js demo showcasing modern frontend development,
          rigorous testing practices, and dedication to code quality.
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://github.com/cocodedk"
            target="_blank"
            rel="noopener noreferrer"
            class="group px-8 py-4 rounded-xl bg-gradient-to-r from-tech-purple to-tech-cyan font-semibold text-lg hover:shadow-2xl hover:shadow-tech-purple/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>View My GitHub</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <a
            href="https://cocodedk.github.io/aura-recruit-demo/"
            target="_blank"
            rel="noopener noreferrer"
            class="px-8 py-4 rounded-xl border-2 border-white/20 backdrop-blur-sm hover:border-white/40 font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            View Live Demo
          </a>
        </div>

        <div class="text-center">
          <p class="text-white/60 mb-2">Crafted by</p>
          <p class="text-2xl font-bold bg-gradient-to-r from-tech-cyan to-tech-purple bg-clip-text text-transparent">
            Babak Bandpey
          </p>
          <p class="text-white/60 mt-1">Full-Stack Developer & Software Craftsman</p>
        </div>
      </div>
    </section>

    <!-- Metrics Section -->
    <section class="relative px-6 py-16">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          The Numbers
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricDisplay
            v-for="metric in metrics"
            :key="metric.label"
            v-bind="metric"
          />
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="relative px-6 py-16">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
          Technology Stack
        </h2>
        <p class="text-center text-white/70 text-lg mb-12 max-w-2xl mx-auto">
          Every technology choice was deliberate, prioritizing developer experience,
          code quality, and long-term maintainability.
        </p>

        <!-- Frontend -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold mb-6 flex items-center gap-3">
            <span class="text-3xl">⚡</span>
            Frontend Framework
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <TechCard
              v-for="tech in techStack.frontend"
              :key="tech.title"
              :title="tech.title"
              :version="tech.version"
              :description="tech.description"
              category="frontend"
            />
          </div>
        </div>

        <!-- Styling -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold mb-6 flex items-center gap-3">
            <span class="text-3xl">🎨</span>
            Styling & Design
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TechCard
              v-for="tech in techStack.styling"
              :key="tech.title"
              :title="tech.title"
              :version="tech.version"
              :description="tech.description"
              category="styling"
            />
          </div>
        </div>

        <!-- Testing -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold mb-6 flex items-center gap-3">
            <span class="text-3xl">🧪</span>
            Testing & Quality Assurance
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <TechCard
              v-for="tech in techStack.testing"
              :key="tech.title"
              :title="tech.title"
              :version="tech.version"
              :description="tech.description"
              category="testing"
            />
          </div>
        </div>

        <!-- Code Quality -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold mb-6 flex items-center gap-3">
            <span class="text-3xl">🛡️</span>
            Code Quality & Standards
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <TechCard
              v-for="tech in techStack.quality"
              :key="tech.title"
              :title="tech.title"
              :version="tech.version"
              :description="tech.description"
              category="quality"
            />
          </div>
        </div>

        <!-- Build Tools -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold mb-6 flex items-center gap-3">
            <span class="text-3xl">🔧</span>
            Build Tools & Development
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TechCard
              v-for="tech in techStack.build"
              :key="tech.title"
              :title="tech.title"
              :version="tech.version"
              :description="tech.description"
              category="build"
            />
          </div>
        </div>

        <!-- Deployment -->
        <div class="mb-12">
          <h3 class="text-2xl font-semibold mb-6 flex items-center gap-3">
            <span class="text-3xl">🚀</span>
            Deployment & CI/CD
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TechCard
              v-for="tech in techStack.deployment"
              :key="tech.title"
              :title="tech.title"
              :version="tech.version"
              :description="tech.description"
              category="deployment"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture Section -->
    <section class="relative px-6 py-16">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
          Architecture Highlights
        </h2>
        <p class="text-center text-white/70 text-lg mb-12 max-w-2xl mx-auto">
          Thoughtful architectural decisions that prioritize scalability,
          maintainability, and developer productivity.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="item in architecture"
            :key="item.title"
            class="p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            <h3 class="text-2xl font-bold mb-4 text-tech-cyan">{{ item.title }}</h3>
            <ul class="space-y-3">
              <li
                v-for="point in item.points"
                :key="point"
                class="flex items-start gap-3 text-white/80"
              >
                <span class="text-tech-purple mt-1">▸</span>
                <span>{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Developer's Notes Section -->
    <section class="relative px-6 py-16">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          Developer's Notes
        </h2>

        <div class="space-y-8">
          <!-- Why This Stack -->
          <div class="p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-tech-purple/20 to-transparent border border-tech-purple/30">
            <h3 class="text-2xl font-bold mb-4 flex items-center gap-3">
              <span>💭</span>
              Why This Stack?
            </h3>
            <p class="text-white/80 text-lg leading-relaxed">
              I chose Vue 3 for its elegant Composition API and excellent TypeScript support.
              Tailwind CSS enables rapid iteration while maintaining consistency. The comprehensive
              testing suite with Vitest ensures confidence in every change. Every tool serves a purpose:
              developer happiness, code quality, and production reliability.
            </p>
          </div>

          <!-- Challenges & Solutions -->
          <div class="p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-tech-cyan/20 to-transparent border border-tech-cyan/30">
            <h3 class="text-2xl font-bold mb-4 flex items-center gap-3">
              <span>🎯</span>
              Challenges Overcome
            </h3>
            <p class="text-white/80 text-lg leading-relaxed">
              Building a robust testing infrastructure from scratch required deep diving into Vitest
              configuration and Vue Test Utils. Implementing mobile-first responsive design while
              maintaining pixel-perfect layouts taught me the importance of systematic breakpoint
              planning. Setting up pre-commit hooks that are fast yet thorough required careful
              balance between speed and quality assurance.
            </p>
          </div>

          <!-- What I Learned -->
          <div class="p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-tech-pink/20 to-transparent border border-tech-pink/30">
            <h3 class="text-2xl font-bold mb-4 flex items-center gap-3">
              <span>📚</span>
              What I Learned
            </h3>
            <p class="text-white/80 text-lg leading-relaxed">
              This project deepened my understanding of Vue 3's reactivity system and composition
              patterns. I learned how to architect components for maximum reusability without
              over-engineering. Testing taught me to think about edge cases upfront. Most importantly,
              I learned that great code isn't just about working features—it's about creating a
              codebase that's a joy to work with.
            </p>
          </div>

          <!-- Passion for the Craft -->
          <div class="p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-yellow-500/20 to-transparent border border-yellow-500/30">
            <h3 class="text-2xl font-bold mb-4 flex items-center gap-3">
              <span>❤️</span>
              Passion for the Craft
            </h3>
            <p class="text-white/80 text-lg leading-relaxed mb-4">
              Software development is more than a profession—it's a craft I'm deeply passionate about.
              Every component, every test, every line of code is an opportunity to create something
              elegant and maintainable. I believe in:
            </p>
            <ul class="space-y-2 text-white/80 text-lg">
              <li class="flex items-start gap-3">
                <span class="text-yellow-400 mt-1">✦</span>
                <span><strong>Code as communication</strong> – writing for humans, not just machines</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-yellow-400 mt-1">✦</span>
                <span><strong>Continuous improvement</strong> – always learning, always evolving</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-yellow-400 mt-1">✦</span>
                <span><strong>Quality over speed</strong> – doing it right beats doing it fast</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-yellow-400 mt-1">✦</span>
                <span><strong>Tests as documentation</strong> – proving code works, enabling refactoring</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="relative px-6 py-20 md:py-32">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-5xl font-bold mb-6">
          Let's Build Something Amazing
        </h2>
        <p class="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          Interested in working together? Check out my GitHub profile or explore the live demo.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://github.com/cocodedk/aura-recruit-demo"
            target="_blank"
            rel="noopener noreferrer"
            class="group px-8 py-4 rounded-xl bg-gradient-to-r from-tech-purple to-tech-cyan font-semibold text-lg hover:shadow-2xl hover:shadow-tech-purple/50 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <span>View Source Code</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>

          <a
            href="/"
            class="px-8 py-4 rounded-xl border-2 border-white/20 backdrop-blur-sm hover:border-white/40 font-semibold text-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Back to Main Site
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@keyframes pulse {
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.1);
  }
}

.animate-pulse {
  animation: pulse 4s ease-in-out infinite;
}
</style>
