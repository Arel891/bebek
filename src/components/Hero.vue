<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ChevronDown, Utensils, MapPin } from 'lucide-vue-next'

const videoRef = ref<HTMLVideoElement | null>(null)

onMounted(() => {
  if (videoRef.value) {
    videoRef.value.play().catch(() => {
      // Autoplay blocked, show poster
    })
  }
})
</script>

<template>
  <section class="relative h-screen w-full overflow-hidden">
    <!-- Video Background -->
    <video
      ref="videoRef"
      autoplay
      muted
      loop
      playsinline
      poster="/bebek-kaleyo-hero.jpg"
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/hero-video.mp4" type="video/mp4" />
    </video>

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/50 to-transparent"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-bg-dark/80 via-transparent to-transparent"></div>

    <!-- Content -->
    <div class="relative h-full flex flex-col justify-end pb-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="max-w-3xl">
        <!-- Accent Line -->
        <div class="flex items-center gap-4 mb-6">
          <div class="w-16 h-[2px] bg-secondary"></div>
          <span class="text-secondary font-medium tracking-widest uppercase text-sm">Sejak 1976</span>
        </div>

        <!-- Headline -->
        <h1 class="mb-4">
          <span class="block font-accent text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-secondary leading-none">Bebek Kaleyo</span>
          <span class="block font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-light font-bold mt-2">Jabodetabek</span>
        </h1>

        <!-- Subtext -->
        <p class="text-text-light/80 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
          Nikmati Kelezatan Bebek Favorit Indonesia — Empuk, Gurih, dengan Sambal Dahsyat!
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4">
          <a
            href="#menu"
            class="group flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-secondary to-primary text-bg-dark font-semibold rounded-full hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 hover:scale-105"
          >
            <Utensils class="w-5 h-5" />
            Lihat Menu
          </a>
          <RouterLink
            to="/cabang"
            class="group flex items-center gap-2 px-6 py-3.5 border-2 border-secondary/50 text-secondary font-semibold rounded-full hover:bg-secondary/10 hover:border-secondary transition-all duration-300"
          >
            <MapPin class="w-5 h-5" />
            Cari Cabang
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Scroll Cue -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span class="text-text-light/50 text-xs tracking-widest uppercase">Scroll</span>
      <ChevronDown class="w-6 h-6 text-secondary animate-bounce-slow" />
    </div>
  </section>
</template>
