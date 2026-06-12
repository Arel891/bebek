<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang', path: '/tentang' },
  { name: 'Cabang', path: '/cabang' },
  { name: 'Kontak', path: '/kontak' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-3 group">
          <div class="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 24 24" class="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="currentColor">
              <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 2.5 1.5 3.5L8 14H6v2h2v2H6v2h12v-2h-2v-2h2v-2h-2l.5-3.5C17.5 9.5 18 8.5 18 7c0-2.5-2.5-5-6-5zm-2 16h4v-2h-4v2zm2-14c1.5 0 3 1 3.5 2.5L15.5 12h-7l-.5-5.5C8.5 5 10 4 12 4z"/>
            </svg>
          </div>
          <div class="hidden sm:block">
            <span class="font-accent text-xl lg:text-2xl text-secondary leading-none">Bebek Kaleyo</span>
            <span class="block text-[10px] lg:text-xs text-text-light/70 tracking-widest uppercase">Jabodetabek</span>
          </div>
        </RouterLink>

        <!-- Desktop Nav Links -->
        <div class="hidden lg:flex items-center gap-8">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="nav-link text-sm font-medium text-text-light/90 hover:text-secondary transition-colors"
            :class="{ 'text-secondary': route.path === link.path }"
          >
            {{ link.name }}
          </RouterLink>
        </div>

        <!-- CTA Button -->
        <div class="hidden lg:block">
          <a href="/kontak" class="px-5 py-2.5 bg-gradient-to-r from-secondary to-primary text-bg-dark font-semibold text-sm rounded-full hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 hover:scale-105">
            Pesan Online
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2 text-text-light hover:text-secondary transition-colors"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden glass border-t border-white/10"
      >
        <div class="px-4 py-6 space-y-4">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="closeMobileMenu"
            class="block text-lg font-medium text-text-light/90 hover:text-secondary transition-colors py-2"
            :class="{ 'text-secondary': route.path === link.path }"
          >
            {{ link.name }}
          </RouterLink>
          <button class="w-full mt-4 px-5 py-3 bg-gradient-to-r from-secondary to-primary text-bg-dark font-semibold rounded-full">
            Pesan Online
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>
