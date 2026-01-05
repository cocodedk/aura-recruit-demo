<script setup lang="ts">
// Hero visual component with bold, vibrant CSS animations
// Desktop only - GPU-accelerated and performant

import { ref, onMounted, onUnmounted } from 'vue'

// Enhanced color palette with higher saturation
const blobColors = [
  { base: 'rgba(61, 169, 252, 0.35)', variant: 'rgba(59, 130, 246, 0.4)' },   // Blue
  { base: 'rgba(0, 217, 255, 0.3)', variant: 'rgba(14, 165, 233, 0.35)' },    // Cyan
  { base: 'rgba(139, 92, 246, 0.3)', variant: 'rgba(168, 85, 247, 0.35)' },   // Purple
  { base: 'rgba(20, 184, 166, 0.3)', variant: 'rgba(5, 150, 105, 0.35)' },    // Teal
  { base: 'rgba(236, 72, 153, 0.4)', variant: 'rgba(219, 39, 119, 0.45)' },  // Hot pink/magenta
  { base: 'rgba(251, 146, 60, 0.35)', variant: 'rgba(249, 115, 22, 0.4)' },  // Bright orange
  { base: 'rgba(132, 204, 22, 0.3)', variant: 'rgba(101, 163, 13, 0.35)' },  // Lime green
]

// Enhanced particle colors with higher opacity
const particleColors = [
  'rgba(61, 169, 252, 0.7)',   // Blue
  'rgba(0, 217, 255, 0.75)',    // Cyan
  'rgba(139, 92, 246, 0.7)',    // Purple
  'rgba(20, 184, 166, 0.75)',   // Teal
  'rgba(236, 72, 153, 0.8)',    // Hot pink
  'rgba(251, 146, 60, 0.75)',   // Orange
  'rgba(59, 130, 246, 0.7)',    // Indigo
  'rgba(99, 102, 241, 0.75)',   // Violet
  'rgba(132, 204, 22, 0.7)',    // Lime green
]

// Particle configurations
const smallParticles = Array.from({ length: 6 }, (_, i) => ({
  id: `small-${i}`,
  size: 2,
  color: particleColors[i % particleColors.length],
  left: 15 + (i * 12) % 70,
  top: 20 + (i * 15) % 60,
  animation: `orbitSmall ${3 + (i % 3)}s ease-in-out infinite`,
  delay: i * 0.4,
}))

const mediumParticles = Array.from({ length: 6 }, (_, i) => ({
  id: `medium-${i}`,
  size: 4,
  color: particleColors[(i + 3) % particleColors.length],
  left: 10 + (i * 18) % 80,
  top: 15 + (i * 20) % 65,
  animation: `zigzag ${4 + (i % 2)}s ease-in-out infinite`,
  delay: i * 0.5,
}))

const largeParticles = Array.from({ length: 3 }, (_, i) => ({
  id: `large-${i}`,
  size: 6,
  color: particleColors[(i * 2) % particleColors.length],
  left: 25 + i * 25,
  top: 30 + i * 20,
  animation: `spiral ${6 + i}s ease-in-out infinite`,
  delay: i * 0.8,
}))

// Mouse position for interactive effects
const mouseX = ref(0)
const mouseY = ref(0)
const isHovered = ref(false)

const handleMouseMove = (e: MouseEvent) => {
  const rect = (e.currentTarget as HTMLElement)?.getBoundingClientRect()
  if (rect) {
    mouseX.value = ((e.clientX - rect.left) / rect.width) * 100
    mouseY.value = ((e.clientY - rect.top) / rect.height) * 100
  }
}

const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
}

onMounted(() => {
  // Mouse tracking could be added here if needed
})

onUnmounted(() => {
  // Cleanup if needed
})
</script>

<template>
  <div
    class="hero-visual-container relative w-full h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] overflow-hidden rounded-2xl"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    :class="{ 'is-hovered': isHovered }"
  >
    <!-- Animated gradient background with color shifts -->
    <div class="animated-gradient absolute inset-0"></div>

    <!-- Animated shapes layer -->
    <div class="absolute inset-0">
      <!-- Enhanced morphing blobs with dynamic movement -->
      <div
        class="blob blob-1"
        style="top: 20%; left: 20%; width: 280px; height: 280px;"
      ></div>

      <div
        class="blob blob-2"
        style="bottom: 25%; right: 25%; width: 320px; height: 320px;"
      ></div>

      <div
        class="blob blob-3"
        style="top: 50%; right: 30%; width: 300px; height: 300px;"
      ></div>

      <div
        class="blob blob-4"
        style="bottom: 30%; left: 50%; width: 240px; height: 240px;"
      ></div>

      <div
        class="blob blob-5"
        style="top: 10%; right: 10%; width: 200px; height: 200px;"
      ></div>

      <!-- Large glowing orbs -->
      <div
        class="orb orb-1"
        style="top: 15%; left: 60%; width: 50px; height: 50px;"
      ></div>

      <div
        class="orb orb-2"
        style="bottom: 20%; right: 15%; width: 60px; height: 60px;"
      ></div>

      <div
        class="orb orb-3"
        style="top: 60%; left: 15%; width: 45px; height: 45px;"
      ></div>

      <!-- Animated waves -->
      <div class="wave-layer absolute inset-0 overflow-hidden">
        <svg class="wave wave-1 absolute w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
          <path
            d="M0,150 Q100,100 200,150 T400,150 L400,300 L0,300 Z"
            fill="rgba(61, 169, 252, 0.2)"
          />
        </svg>
        <svg class="wave wave-2 absolute w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
          <path
            d="M0,180 Q150,120 300,180 T400,180 L400,300 L0,300 Z"
            fill="rgba(139, 92, 246, 0.15)"
          />
        </svg>
        <svg class="wave wave-3 absolute w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
          <path
            d="M0,120 Q200,80 400,120 L400,300 L0,300 Z"
            fill="rgba(236, 72, 153, 0.12)"
          />
        </svg>
      </div>

      <!-- Geometric shapes -->
      <div class="geometric-shapes">
        <div class="triangle triangle-1" style="top: 25%; right: 20%;"></div>
        <div class="triangle triangle-2" style="bottom: 35%; left: 25%;"></div>
        <div class="hexagon hexagon-1" style="top: 45%; left: 70%;"></div>
        <div class="hexagon hexagon-2" style="bottom: 25%; right: 40%;"></div>
      </div>

      <!-- Enhanced particle system -->
      <div class="particles-layer">
        <!-- Small fast particles -->
        <div
          v-for="particle in smallParticles"
          :key="particle.id"
          class="particle particle-small"
          :style="{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            animation: particle.animation,
            animationDelay: `${particle.delay}s`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }"
        ></div>

        <!-- Medium particles -->
        <div
          v-for="particle in mediumParticles"
          :key="particle.id"
          class="particle particle-medium"
          :style="{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            animation: particle.animation,
            animationDelay: `${particle.delay}s`,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
          }"
        ></div>

        <!-- Large glowing particles -->
        <div
          v-for="particle in largeParticles"
          :key="particle.id"
          class="particle particle-large"
          :style="{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            animation: particle.animation,
            animationDelay: `${particle.delay}s`,
            boxShadow: `0 0 ${particle.size * 4}px ${particle.color}, 0 0 ${particle.size * 8}px ${particle.color}`,
          }"
        ></div>
      </div>

      <!-- Enhanced animated grid pattern -->
      <div class="grid-pattern absolute inset-0"></div>
    </div>
  </div>
</template>

<style scoped>
/* Container with hover state */
.hero-visual-container {
  will-change: transform;
  transform: translateZ(0);
}

.hero-visual-container.is-hovered .blob,
.hero-visual-container.is-hovered .orb,
.hero-visual-container.is-hovered .particle {
  animation-duration: calc(var(--base-duration, 1s) * 0.7);
}

/* Animated gradient background with color shifts */
.animated-gradient {
  background: linear-gradient(
    135deg,
    rgba(61, 169, 252, 0.3) 0%,
    rgba(139, 92, 246, 0.25) 25%,
    rgba(236, 72, 153, 0.2) 50%,
    rgba(251, 146, 60, 0.25) 75%,
    rgba(20, 184, 166, 0.3) 100%
  );
  background-size: 200% 200%;
  animation: gradientShift 15s ease infinite;
  will-change: background-position;
  transform: translateZ(0);
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Enhanced morphing blobs with complex animations */
.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  will-change: transform, opacity, background-color;
  transform: translateZ(0);
}

.blob-1 {
  background: rgba(61, 169, 252, 0.35);
  animation: morphBlob1 6s ease-in-out infinite;
  --base-duration: 6s;
}

.blob-2 {
  background: rgba(0, 217, 255, 0.3);
  animation: morphBlob2 7s ease-in-out infinite;
  animation-delay: 1s;
  --base-duration: 7s;
}

.blob-3 {
  background: rgba(139, 92, 246, 0.3);
  animation: morphBlob3 8s ease-in-out infinite;
  animation-delay: 2s;
  --base-duration: 8s;
}

.blob-4 {
  background: rgba(20, 184, 166, 0.3);
  animation: morphBlob4 5s ease-in-out infinite;
  animation-delay: 0.5s;
  --base-duration: 5s;
}

.blob-5 {
  background: rgba(236, 72, 153, 0.4);
  animation: morphBlob5 6.5s ease-in-out infinite;
  animation-delay: 1.5s;
  --base-duration: 6.5s;
}

/* Complex blob morphing animations */
@keyframes morphBlob1 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    background-color: rgba(61, 169, 252, 0.35);
  }
  25% {
    transform: translate(40px, -30px) rotate(90deg) scale(1.15);
    background-color: rgba(59, 130, 246, 0.4);
  }
  50% {
    transform: translate(-20px, 50px) rotate(180deg) scale(0.9);
    background-color: rgba(61, 169, 252, 0.3);
  }
  75% {
    transform: translate(30px, -20px) rotate(270deg) scale(1.1);
    background-color: rgba(59, 130, 246, 0.35);
  }
}

@keyframes morphBlob2 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    background-color: rgba(0, 217, 255, 0.3);
  }
  33% {
    transform: translate(-50px, 40px) rotate(120deg) scale(1.2);
    background-color: rgba(14, 165, 233, 0.35);
  }
  66% {
    transform: translate(50px, -40px) rotate(240deg) scale(0.85);
    background-color: rgba(0, 217, 255, 0.25);
  }
}

@keyframes morphBlob3 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    background-color: rgba(139, 92, 246, 0.3);
  }
  25% {
    transform: translate(60px, 30px) rotate(90deg) scale(1.1);
    background-color: rgba(168, 85, 247, 0.35);
  }
  50% {
    transform: translate(-40px, -50px) rotate(180deg) scale(0.95);
    background-color: rgba(139, 92, 246, 0.25);
  }
  75% {
    transform: translate(30px, 40px) rotate(270deg) scale(1.05);
    background-color: rgba(168, 85, 247, 0.3);
  }
}

@keyframes morphBlob4 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    background-color: rgba(20, 184, 166, 0.3);
  }
  33% {
    transform: translate(35px, -45px) rotate(120deg) scale(1.15);
    background-color: rgba(5, 150, 105, 0.35);
  }
  66% {
    transform: translate(-35px, 45px) rotate(240deg) scale(0.9);
    background-color: rgba(20, 184, 166, 0.25);
  }
}

@keyframes morphBlob5 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    background-color: rgba(236, 72, 153, 0.4);
  }
  25% {
    transform: translate(-30px, 50px) rotate(90deg) scale(1.2);
    background-color: rgba(219, 39, 119, 0.45);
  }
  50% {
    transform: translate(50px, -30px) rotate(180deg) scale(0.85);
    background-color: rgba(236, 72, 153, 0.35);
  }
  75% {
    transform: translate(-20px, -40px) rotate(270deg) scale(1.1);
    background-color: rgba(219, 39, 119, 0.4);
  }
}

/* Glowing orbs */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(20px);
  will-change: transform, opacity, background-color;
  transform: translateZ(0);
}

.orb-1 {
  background: rgba(251, 146, 60, 0.6);
  animation: pulseGlow1 4s ease-in-out infinite;
}

.orb-2 {
  background: rgba(132, 204, 22, 0.6);
  animation: pulseGlow2 5s ease-in-out infinite;
  animation-delay: 1s;
}

.orb-3 {
  background: rgba(99, 102, 241, 0.6);
  animation: pulseGlow3 4.5s ease-in-out infinite;
  animation-delay: 2s;
}

@keyframes pulseGlow1 {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
    background-color: rgba(251, 146, 60, 0.6);
  }
  50% {
    transform: scale(1.3);
    opacity: 0.9;
    background-color: rgba(249, 115, 22, 0.7);
  }
}

@keyframes pulseGlow2 {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
    background-color: rgba(132, 204, 22, 0.6);
  }
  50% {
    transform: scale(1.4);
    opacity: 0.85;
    background-color: rgba(101, 163, 13, 0.7);
  }
}

@keyframes pulseGlow3 {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
    background-color: rgba(99, 102, 241, 0.6);
  }
  50% {
    transform: scale(1.25);
    opacity: 0.9;
    background-color: rgba(79, 70, 229, 0.7);
  }
}

/* Animated waves */
.wave-layer {
  opacity: 0.85;
  will-change: transform;
  transform: translateZ(0);
}

.wave {
  will-change: transform, opacity;
  transform: translateZ(0);
}

.wave-1 {
  animation: waveFlow1 8s ease-in-out infinite;
  opacity: 0.8;
}

.wave-2 {
  animation: waveFlow2 10s ease-in-out infinite;
  animation-delay: 2s;
  opacity: 0.75;
}

.wave-3 {
  animation: waveFlow3 12s ease-in-out infinite;
  animation-delay: 4s;
  opacity: 0.7;
}

@keyframes waveFlow1 {
  0%, 100% {
    transform: translateX(0) translateY(0) scaleY(1);
    opacity: 0.8;
  }
  50% {
    transform: translateX(-20px) translateY(30px) scaleY(1.1);
    opacity: 0.9;
  }
}

@keyframes waveFlow2 {
  0%, 100% {
    transform: translateX(0) translateY(0) scaleY(1);
    opacity: 0.75;
  }
  50% {
    transform: translateX(15px) translateY(-25px) scaleY(0.95);
    opacity: 0.85;
  }
}

@keyframes waveFlow3 {
  0%, 100% {
    transform: translateX(0) translateY(0) scaleY(1);
    opacity: 0.7;
  }
  50% {
    transform: translateX(-10px) translateY(20px) scaleY(1.05);
    opacity: 0.8;
  }
}

/* Geometric shapes */
.geometric-shapes {
  position: absolute;
  inset: 0;
}

.triangle {
  position: absolute;
  width: 0;
  height: 0;
  will-change: transform, opacity;
  transform: translateZ(0);
}

.triangle-1 {
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 25px solid rgba(61, 169, 252, 0.5);
  animation: rotateTriangle 6s linear infinite;
}

.triangle-2 {
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 20px solid rgba(139, 92, 246, 0.5);
  animation: rotateTriangle 8s linear infinite reverse;
}

.hexagon {
  position: absolute;
  width: 30px;
  height: 30px;
  background: rgba(236, 72, 153, 0.4);
  clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
  will-change: transform, opacity, background-color;
  transform: translateZ(0);
}

.hexagon-1 {
  animation: rotateHexagon 7s linear infinite, colorShiftHex1 4s ease-in-out infinite;
}

.hexagon-2 {
  animation: rotateHexagon 9s linear infinite reverse, colorShiftHex2 5s ease-in-out infinite;
  animation-delay: 1s;
}

@keyframes rotateTriangle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes rotateHexagon {
  from {
    transform: rotate(0deg) scale(1);
  }
  to {
    transform: rotate(360deg) scale(1.1);
  }
}

@keyframes colorShiftHex1 {
  0%, 100% {
    background-color: rgba(236, 72, 153, 0.4);
  }
  50% {
    background-color: rgba(251, 146, 60, 0.5);
  }
}

@keyframes colorShiftHex2 {
  0%, 100% {
    background-color: rgba(132, 204, 22, 0.4);
  }
  50% {
    background-color: rgba(20, 184, 166, 0.5);
  }
}

/* Enhanced particle system */
.particles-layer {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  border-radius: 50%;
  will-change: transform, opacity;
  transform: translateZ(0);
}

/* Particle movement animations */
@keyframes orbitSmall {
  0% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.7;
  }
  25% {
    transform: translate(30px, -40px) rotate(90deg);
    opacity: 0.9;
  }
  50% {
    transform: translate(0, -60px) rotate(180deg);
    opacity: 0.6;
  }
  75% {
    transform: translate(-30px, -40px) rotate(270deg);
    opacity: 0.8;
  }
  100% {
    transform: translate(0, 0) rotate(360deg);
    opacity: 0.7;
  }
}

@keyframes zigzag {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0.75;
  }
  25% {
    transform: translate(40px, -50px);
    opacity: 0.9;
  }
  50% {
    transform: translate(-30px, -80px);
    opacity: 0.65;
  }
  75% {
    transform: translate(50px, -60px);
    opacity: 0.85;
  }
}

@keyframes spiral {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    opacity: 0.8;
  }
  25% {
    transform: translate(50px, -30px) rotate(90deg) scale(1.2);
    opacity: 0.9;
  }
  50% {
    transform: translate(30px, -80px) rotate(180deg) scale(0.9);
    opacity: 0.7;
  }
  75% {
    transform: translate(-40px, -60px) rotate(270deg) scale(1.1);
    opacity: 0.85;
  }
  100% {
    transform: translate(0, 0) rotate(360deg) scale(1);
    opacity: 0.8;
  }
}

/* Enhanced grid pattern */
.grid-pattern {
  opacity: 0.08;
  background-image:
    linear-gradient(rgba(61, 169, 252, 0.15) 1px, transparent 1px),
    linear-gradient(90deg, rgba(139, 92, 246, 0.12) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: gridDrift 20s ease-in-out infinite;
  will-change: background-position;
  transform: translateZ(0);
}

@keyframes gridDrift {
  0%, 100% {
    background-position: 0 0;
  }
  50% {
    background-position: 40px 40px;
  }
}

/* Performance optimizations */
@media (prefers-reduced-motion: reduce) {
  .blob,
  .orb,
  .particle,
  .wave,
  .triangle,
  .hexagon,
  .animated-gradient,
  .grid-pattern {
    animation: none !important;
  }
}

/* Mobile optimization - reduce complexity */
@media (max-width: 768px) {
  .blob {
    filter: blur(40px);
  }

  .orb {
    display: none;
  }

  .wave-layer {
    opacity: 0.5;
  }

  .geometric-shapes {
    opacity: 0.6;
  }
}
</style>
