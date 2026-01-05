<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Hire Talent', path: '/contact' },
  { name: 'Submit CV', path: '/cv-drop' },
  { name: 'Team', path: '/team' }
]
</script>

<template>
  <header class="sticky top-0 bg-aura-navy text-white z-50 border-b border-white/10">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <RouterLink to="/" class="text-xl font-bold tracking-tight">
          AURA RECRUIT
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <RouterLink
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="transition-colors hover:text-aura-accent"
            :class="{ 'text-aura-accent': $route.path === item.path }"
          >
            {{ item.name }}
          </RouterLink>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            class="w-6 h-6 transition-transform duration-200"
            :class="{ 'rotate-90': isMenuOpen }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="isMenuOpen"
      class="md:hidden fixed inset-0 top-16 bg-aura-navy z-40 transition-all duration-300"
      @click="closeMenu"
    >
      <nav class="px-6 py-8 space-y-6 animate-in slide-in-from-top-2 duration-300">
        <RouterLink
          v-for="(item, index) in navItems"
          :key="item.path"
          :to="item.path"
          @click="closeMenu"
          class="block text-lg py-2 transition-all duration-200 hover:text-aura-accent hover:translate-x-2"
          :class="{ 'text-aura-accent': $route.path === item.path }"
          :style="{ animationDelay: `${index * 50}ms` }"
        >
          {{ item.name }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>
