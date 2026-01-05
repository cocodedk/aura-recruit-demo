<script setup lang="ts">
import { ref } from 'vue'

const showAddress = ref(false)
</script>

<template>
  <footer class="bg-aura-navy text-white py-16">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <!-- Company Info -->
        <div class="space-y-6">
          <h3 class="text-xl font-semibold">Aura Recruit</h3>
          <p class="text-white/80 leading-relaxed">
            Boutique technology search business based in the UK, operating across Europe and the USA.
          </p>
          <div class="flex space-x-4">
            <a
              href="https://linkedin.com/company/aura-recruit"
              target="_blank"
              class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/aurarecruit"
              target="_blank"
              class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="space-y-6">
          <h3 class="text-xl font-semibold">Contact</h3>
          <div class="space-y-3 text-white/80">
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

        <!-- Address -->
        <div class="space-y-6">
          <h3 class="text-xl font-semibold">Address</h3>
          <div class="text-white/80 space-y-2">
            <p>Aura Recruit Ltd</p>
            <p>Office 2, Broomfield Place</p>
            <p>189 Main Road</p>
            <p>Chelmsford, Essex</p>
            <p>CM1 7DJ</p>
            <p>United Kingdom</p>
          </div>
        </div>
      </div>

      <!-- Attribution -->
      <div class="mt-12 pt-8 border-t border-white/10">
        <div class="bg-gradient-to-r from-aura-accent via-[#2B8FE8] to-[#1F6FC4] rounded-xl p-8 md:p-10 text-center">
          <p class="text-white/90 text-sm md:text-base mb-3 font-medium">
            This is a demo page made by
          </p>
          <h4 class="text-white text-xl md:text-2xl font-semibold mb-6 tracking-tight">
            Babak Bandpey
          </h4>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://cocode.dk"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-medium text-sm md:text-base group"
            >
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span class="group-hover:underline">cocode.dk</span>
            </a>
            <span class="hidden sm:inline-block text-white/40">•</span>
            <a
              href="https://linkedin.com/in/babakbandpey"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors font-medium text-sm md:text-base group"
            >
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span class="group-hover:underline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
        <p>© 2026 AURA RECRUIT | Designed by Webwax</p>
      </div>
    </div>
  </footer>
</template>
