<script setup lang="ts">
import { MapPin, Star, Clock, ExternalLink } from 'lucide-vue-next'

interface Branch {
  id: number
  name: string
  city: string
  address: string
  hours: string
  rating: number
  image: string
  mapsUrl: string
}

defineProps<{
  branch: Branch
}>()
</script>

<template>
  <div class="card-hover bg-surface rounded-2xl overflow-hidden border border-white/5">
    <!-- Image -->
    <div class="relative h-48 overflow-hidden">
      <img
        :src="branch.image"
        :alt="branch.name"
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
      <div class="absolute top-4 left-4">
        <span class="px-3 py-1 bg-primary/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
          {{ branch.city }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-5">
      <h3 class="font-heading text-lg font-bold text-text-light mb-2">{{ branch.name }}</h3>
      
      <div class="flex items-start gap-2 mb-3">
        <MapPin class="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
        <p class="text-text-muted text-sm leading-relaxed">{{ branch.address }}</p>
      </div>

      <div class="flex items-center gap-2 mb-3">
        <Clock class="w-4 h-4 text-primary" />
        <p class="text-text-muted text-sm">{{ branch.hours }}</p>
      </div>

      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-1">
          <Star class="w-4 h-4 text-secondary fill-secondary" />
          <span class="text-text-light font-medium text-sm">{{ branch.rating }}</span>
        </div>
      </div>

      <a
        :href="branch.mapsUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center justify-center gap-2 w-full py-2.5 border border-primary/30 text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium"
      >
        <ExternalLink class="w-4 h-4" />
        Lihat Lokasi
      </a>
    </div>
  </div>
</template>
